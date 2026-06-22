//core
import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  type Control,
  type Resolver,
  type SubmitHandler,
  type UseFormHandleSubmit,
  useForm,
} from 'react-hook-form';
//other
import { eventFormSchema, type IEventFormValues } from '../../../model';

interface IUseEventFormParams {
  initialValues: IEventFormValues;
  isOpen: boolean;
  isProcessing: boolean;
  mode: 'create' | 'edit';
  eventId?: string;
  onApply: (values: IEventFormValues) => Promise<void>;
  onSave: (eventId: string, values: IEventFormValues) => Promise<void>;
}

interface IUseEventFormReturn {
  control: Control<IEventFormValues>;
  handleSubmit: UseFormHandleSubmit<IEventFormValues>;
  isSubmitDisabled: boolean;
  submitButtonText: string;
  modalTitle: string;
  handleFormSubmit: SubmitHandler<IEventFormValues>;
}

export const useEventForm = ({
  initialValues,
  isOpen,
  isProcessing,
  mode,
  eventId,
  onApply,
  onSave,
}: IUseEventFormParams): IUseEventFormReturn => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = useForm<IEventFormValues>({
    resolver: zodResolver(eventFormSchema) as Resolver<IEventFormValues>,
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

  const handleFormSubmit: SubmitHandler<IEventFormValues> = async (
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
