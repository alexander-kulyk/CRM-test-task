import type React from 'react';
import { Controller } from 'react-hook-form';
import {
  ColorPicker,
  DatePicker,
  Input,
  Modal,
  TimePicker,
} from '../../../../shared/components';
import { useEventForm } from './hooks';
import { getFooter } from './utils';
import * as S from './styled';
import type { EventModalProps } from './types';

export const EventModal: React.FC<EventModalProps> = ({
  isOpen,
  mode,
  initialValues,
  eventId,
  isProcessing,
  onClose,
  onApply,
  onSave,
}) => {
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

  const footer = getFooter({
    onClose,
    isSubmitDisabled,
    isProcessing,
    submitButtonText,
  });

  return (
    <Modal isOpen={isOpen} title={modalTitle} onClose={onClose} footer={footer}>
      <S.Form id='event-modal-form' onSubmit={handleSubmit(handleFormSubmit)}>
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
    </Modal>
  );
};
