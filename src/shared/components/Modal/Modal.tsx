import type React from 'react'
import { createPortal } from 'react-dom'
import * as S from './styled'

export interface IModalProps {
  isOpen: boolean
  title: string
  children: React.ReactNode
  footer?: React.ReactNode
  onClose: () => void
}

export const Modal: React.FC<IModalProps> = ({
  isOpen,
  title,
  children,
  footer,
  onClose,
}) => {
  if (!isOpen) {
    return null
  }

  const handleDialogMouseDown = (
    event: React.MouseEvent<HTMLDivElement>,
  ): void => {
    event.stopPropagation()
  }

  return createPortal(
    <S.Backdrop onMouseDown={onClose}>
      <S.Dialog
        aria-modal="true"
        role="dialog"
        aria-labelledby="modal-title"
        onMouseDown={handleDialogMouseDown}
      >
        <S.Header>
          <S.Title id="modal-title">{title}</S.Title>
          <S.CloseButton type="button" aria-label="Close" onClick={onClose}>
            x
          </S.CloseButton>
        </S.Header>
        <S.Body>{children}</S.Body>
        {footer && <S.Footer>{footer}</S.Footer>}
      </S.Dialog>
    </S.Backdrop>,
    document.body,
  )
}
