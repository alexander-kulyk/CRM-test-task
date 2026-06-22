//core
import type React from 'react';
//other
import * as S from '../styled';

interface IGetFooterParams {
  isDeletable: boolean;
  isProcessing: boolean;
  isSubmitDisabled: boolean;
  submitButtonText: string;
  onDeleteClick: () => void;
}

export const getFooter = ({
  isDeletable,
  isProcessing,
  isSubmitDisabled,
  submitButtonText,
  onDeleteClick,
}: IGetFooterParams): React.ReactNode => {
  const submitText = isProcessing ? 'Saving' : submitButtonText;

  return (
    <S.Footer>
      {isDeletable && (
        <S.DeleteButton
          type='button'
          onClick={onDeleteClick}
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
        {submitText}
      </S.SubmitButton>
    </S.Footer>
  );
};
