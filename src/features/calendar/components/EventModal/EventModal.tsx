import type React from 'react';
import { useCallback, useState } from 'react';
import {
  arrow,
  autoUpdate,
  flip,
  FloatingArrow,
  FloatingPortal,
  offset,
  shift,
  useDismiss,
  useFloating,
  useInteractions,
  useTransitionStyles,
} from '@floating-ui/react';
import { Controller } from 'react-hook-form';
import { useTheme } from 'styled-components';
import {
  ColorPicker,
  DatePicker,
  Input,
  TimePicker,
} from '../../../../shared/components';
import { useEventForm } from './hooks';
import * as S from './styled';
import type { EventPopupProps } from './types';

const ARROW_HEIGHT = 8;
const POPOVER_GAP = 8;

export const EventPopup: React.FC<EventPopupProps> = ({
  isOpen,
  mode,
  initialValues,
  eventId,
  isProcessing,
  referenceEl,
  onClose,
  onApply,
  onSave,
  onDelete,
}) => {
  const theme = useTheme();
  const [arrowEl, setArrowEl] = useState<SVGSVGElement | null>(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: (open) => {
      if (!open) {
        onClose();
      }
    },
    placement: 'bottom',
    transform: false,
    whileElementsMounted: autoUpdate,
    elements: { reference: referenceEl },
    middleware: [
      offset(ARROW_HEIGHT + POPOVER_GAP),
      flip({ fallbackPlacements: ['right', 'left'], padding: 8 }),
      shift({ padding: 8 }),
      arrow({ element: arrowEl }),
    ],
  });

  const dismiss = useDismiss(context);
  const { getFloatingProps } = useInteractions([dismiss]);

  const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
    duration: 180,
    initial: { opacity: 0, transform: 'scale(0.96)' },
  });

  const setFloatingRef = useCallback(
    (node: HTMLElement | null): void => {
      refs.setFloating(node);
    },
    [refs],
  );

  const {
    control,
    handleSubmit,
    isSubmitDisabled,
    submitButtonText,
    modalTitle,
    handleFormSubmit,
  } = useEventForm({
    initialValues,
    isOpen,
    isProcessing,
    mode,
    eventId,
    onApply,
    onSave,
  });

  const isDeletable = mode === 'edit' && Boolean(eventId);

  const handleDeleteClick = (): void => {
    if (eventId) {
      void onDelete(eventId);
    }
  };

  if (!isMounted || !referenceEl) {
    return null;
  }

  return (
    <FloatingPortal>
      <S.Popover
        ref={setFloatingRef}
        role='dialog'
        aria-label={modalTitle}
        style={{ ...floatingStyles, ...transitionStyles }}
        {...getFloatingProps()}
      >
        <FloatingArrow
          ref={setArrowEl}
          context={context}
          height={ARROW_HEIGHT}
          fill={theme.colors.surface}
          stroke={theme.colors.border}
          strokeWidth={1}
        />

        <S.Header>
          <S.Title>{modalTitle}</S.Title>
          <S.CloseButton type='button' aria-label='Close' onClick={onClose}>
            ×
          </S.CloseButton>
        </S.Header>

        <S.Form id='event-popup-form' onSubmit={handleSubmit(handleFormSubmit)}>
          <Controller
            name='title'
            control={control}
            render={({ field, fieldState }) => (
              <Input
                label='Event name'
                value={field.value}
                onChange={field.onChange}
                maxLength={30}
                error={fieldState.error?.message}
                autoFocus
              />
            )}
          />

          <Controller
            name='date'
            control={control}
            render={({ field, fieldState }) => (
              <DatePicker
                label='Date'
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error?.message}
              />
            )}
          />

          <Controller
            name='time'
            control={control}
            render={({ field, fieldState }) => (
              <TimePicker
                label='Time'
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error?.message}
              />
            )}
          />

          <Controller
            name='color'
            control={control}
            render={({ field }) => (
              <ColorPicker
                label='Color'
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </S.Form>

        <S.Footer>
          {isDeletable && (
            <S.DeleteButton
              type='button'
              onClick={handleDeleteClick}
              disabled={isProcessing}
            >
              Delete
            </S.DeleteButton>
          )}

          <S.SubmitButton
            type='submit'
            form='event-popup-form'
            disabled={isSubmitDisabled}
          >
            {isProcessing ? 'Saving' : submitButtonText}
          </S.SubmitButton>
        </S.Footer>
      </S.Popover>
    </FloatingPortal>
  );
};
