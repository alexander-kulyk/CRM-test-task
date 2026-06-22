//core
import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
//other
import * as S from './styled'

interface IConfirmationProps {
  isOpen: boolean
  title: string
  description: string
  onConfirm: () => void
  onCancel: () => void
  confirmLabel?: string
  cancelLabel?: string
  isProcessing?: boolean
}

export const Confirmation: React.FC<IConfirmationProps> = ({
  isOpen,
  title,
  description,
  onConfirm,
  onCancel,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  isProcessing = false,
}) => {
  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        onCancel()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onCancel])

  if (!isOpen) {
    return null
  }

  const handleDialogClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    event.stopPropagation()
  }

  return createPortal(
    <S.Overlay role='presentation' onClick={onCancel}>
      <S.Dialog
        role='alertdialog'
        aria-modal='true'
        aria-label={title}
        onClick={handleDialogClick}
      >
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>

        <S.Actions>
          <S.CancelButton type='button' onClick={onCancel} disabled={isProcessing}>
            {cancelLabel}
          </S.CancelButton>

          <S.ConfirmButton type='button' onClick={onConfirm} disabled={isProcessing}>
            {confirmLabel}
          </S.ConfirmButton>
        </S.Actions>
      </S.Dialog>
    </S.Overlay>,
    document.body,
  )
}
