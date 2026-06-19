import type React from 'react';
import * as S from '../styled';

interface GetFooterParams {
  onClose: () => void;
  isSubmitDisabled: boolean;
  isProcessing: boolean;
  submitButtonText: string;
}

export const getFooter = ({
  onClose,
  isSubmitDisabled,
  isProcessing,
  submitButtonText,
}: GetFooterParams): React.ReactNode => (
  <>
    <S.DiscardButton type='button' onClick={onClose}>
      Discard
    </S.DiscardButton>
    <S.SubmitButton
      type='submit'
      form='event-modal-form'
      disabled={isSubmitDisabled}
    >
      {isProcessing ? 'Saving' : submitButtonText}
    </S.SubmitButton>
  </>
);
