import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  type Control,
  type Resolver,
  type SubmitHandler,
  type UseFormHandleSubmit,
  useForm,
} from 'react-hook-form';
import { eventFormSchema } from '../eventFormSchema';
import type { EventFormValues } from '../types';

interface UseEventFormParams {
  initialValues: EventFormValues;
  isOpen: boolean;
  isProcessing: boolean;
  mode: 'create' | 'edit';
  eventId?: string;
  onApply: (values: EventFormValues) => Promise<void>;
  onSave: (eventId: string, values: EventFormValues) => Promise<void>;
}

interface UseEventFormReturn {
  control: Control<EventFormValues>;
  handleSubmit: UseFormHandleSubmit<EventFormValues>;
  isSubmitDisabled: boolean;
  submitButtonText: string;
  modalTitle: string;
  handleFormSubmit: SubmitHandler<EventFormValues>;
}

export const useEventForm = ({
  initialValues,
  isOpen,
  isProcessing,
  mode,
  eventId,
  onApply,
  onSave,
}: UseEventFormParams): UseEventFormReturn => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = useForm<EventFormValues>({
    resolver: zodResolver(eventFormSchema) as Resolver<EventFormValues>,
    mode: 'onChange',
    defaultValues: initialValues,
  });

  useEffect(() => {
    if (isOpen) {
      reset(initialValues);
    }
  }, [initialValues, isOpen, reset]);

  const isSubmitDisabled =
    !isValid || isProcessing || (mode === 'edit' && !isDirty);
  const submitButtonText = mode === 'create' ? 'Apply' : 'Save';
  const modalTitle = mode === 'create' ? 'Create event' : 'Edit event';

  const handleFormSubmit: SubmitHandler<EventFormValues> = async (
    values,
  ): Promise<void> => {
    if (mode === 'create') {
      await onApply(values);
      return;
    }

    if (eventId) {
      await onSave(eventId, values);
    }
  };

  return {
    control,
    handleSubmit,
    isSubmitDisabled,
    submitButtonText,
    modalTitle,
    handleFormSubmit,
  };
};
