import { useCallback, useState } from 'react';
import type { CSSProperties } from 'react';
import {
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useInteractions,
  useTransitionStyles,
} from '@floating-ui/react';
import type { FloatingContext, ReferenceType } from '@floating-ui/react';

export const ARROW_HEIGHT = 8;
const POPOVER_GAP = 8;

interface UsePopoverFloatingParams {
  isOpen: boolean;
  referenceEl: HTMLElement | null;
  onClose: () => void;
}

interface UsePopoverFloatingReturn {
  setFloatingRef: (node: HTMLElement | null) => void;
  floatingStyles: CSSProperties;
  transitionStyles: CSSProperties;
  context: FloatingContext<ReferenceType>;
  setArrowEl: (el: SVGSVGElement | null) => void;
  isMounted: boolean;
  getFloatingProps: (
    userProps?: Record<string, unknown>,
  ) => Record<string, unknown>;
}

export const usePopoverFloating = ({
  isOpen,
  referenceEl,
  onClose,
}: UsePopoverFloatingParams): UsePopoverFloatingReturn => {
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

  return {
    setFloatingRef,
    floatingStyles: floatingStyles as CSSProperties,
    transitionStyles: transitionStyles as CSSProperties,
    context,
    setArrowEl,
    isMounted,
    getFloatingProps,
  };
};
