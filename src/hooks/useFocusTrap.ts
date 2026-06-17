import { RefObject, useEffect } from 'react';

type FocusTrapOptions = {
  containerRef: RefObject<HTMLElement | null>;
  isActive: boolean;
  onEscape?: () => void;
  returnFocusRef?: RefObject<HTMLElement | null>;
};

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])'
].join(',');

/**
 * Returns all focusable elements within a given container.
 * @param container - The container element to search within.
 * @returns An array of focusable elements.
 */
function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
    (el) => !el.hasAttribute('disabled') && el.tabIndex !== -1
  );
}

/**
 * Focuses the first focusable element within a given container.
 * @param container - The container element to search within.
 */
function focusFirstElement(container: HTMLElement) {
  const [first] = getFocusableElements(container);
  first?.focus();
}

/**
 * Traps the focus within a given container when navigating with the Tab key.
 * @param event - The keyboard event.
 * @param container - The container element to trap focus within.
 */
function trapTabNavigation(event: KeyboardEvent, container: HTMLElement) {
  if (event.key !== 'Tab') return;

  const items = getFocusableElements(container);
  if (items.length === 0) return;

  const first = items[0];
  const last = items[items.length - 1];
  const active = document.activeElement as HTMLElement | null;

  if (event.shiftKey && active === first) {
    event.preventDefault();
    last.focus();
  }

  if (!event.shiftKey && active === last) {
    event.preventDefault();
    first.focus();
  }
}

/**
 * Hook that traps focus within a specified element.
 * 
 * @param options - The options for the focus trap.
 * @param options.containerRef - The ref of the container element to trap focus within.
 * @param options.isActive - Whether the focus trap is active.
 * @param options.onEscape - Optional callback for when the Escape key is pressed.
 * @param options.returnFocusRef - Optional ref to return focus to when the trap is deactivated.
 */
export function useFocusTrap({
  containerRef,
  isActive,
  onEscape,
  returnFocusRef
}: FocusTrapOptions) {
  useEffect(() => {
    // Only activate when the trap is enabled and the container exists in DOM
    const container = containerRef.current;
    if (!isActive || !container) return;

    focusFirstElement(container);

    const handleKeyDown = (event: KeyboardEvent) => {
      // Escape is handled centrally so the parent decides how to close the UI
      if (event.key === 'Escape') {
        event.preventDefault();
        onEscape?.();
        return;
      }

      trapTabNavigation(event, container);
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      // Clean up event listener and return focus to the trigger
      document.removeEventListener('keydown', handleKeyDown);
      returnFocusRef?.current?.focus();
    };
  }, [containerRef, isActive, onEscape, returnFocusRef]);
}