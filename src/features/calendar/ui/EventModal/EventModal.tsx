//core
import { FloatingArrow, FloatingPortal } from '@floating-ui/react';
import type React from 'react';
import { Controller } from 'react-hook-form';
import { useTheme } from 'styled-components';
//components
import {
  ColorPicker,
  DatePicker,
  Input,
  TimePicker,
} from '../../../../shared/components';
//other
import { ARROW_HEIGHT, useEventForm, usePopoverFloating } from './hooks';
import * as S from './styled';
import type { IEventPopupProps } from './types';

export const EventPopup: React.FC<IEventPopupProps> = ({
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

  const {
    setFloatingRef,
    floatingStyles,
    transitionStyles,
    context,
    setArrowEl,
    isMounted,
    getFloatingProps,
  } = usePopoverFloating({
    isOpen,
    referenceEl,
    onClose,
  });

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
