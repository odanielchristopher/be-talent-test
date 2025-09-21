import React, { useEffect, useRef } from 'react';

import useAnimatedUnmount from '@app/hooks/useAnimatedUnmount';

import Button from '../Button';
import ReactPortal from '../ReactPortal';

import { Styled } from './styles';

interface IModalProps extends React.ComponentProps<'div'> {
  visible: boolean;
  title: string;
  children: React.ReactNode;
  cancelLabel: string;
  confirmLabel: string;
  onCancel?(): void;
  onConfirm?(): void;
}

export default function Modal({
  visible,
  title,
  children,
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
  ...props
}: IModalProps) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(visible);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible && shouldRender && containerRef.current) {
      containerRef.current.focus();
    }
  }, [visible, shouldRender]);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="modal-root">
      <Styled.Overlay $isLeaving={!visible} ref={animatedElementRef}>
        <Styled.Container
          $isLeaving={!visible}
          ref={containerRef}
          tabIndex={-1}
          aria-labelledby="modal-title"
          {...props}
        >
          <h1 id="modal-title">{title}</h1>

          <div className="modal-body">{children}</div>

          <Styled.Footer>
            <button type="button" className="cancel-button" onClick={onCancel}>
              {cancelLabel}
            </button>

            <Button type="button" onClick={onConfirm}>
              {confirmLabel}
            </Button>
          </Styled.Footer>
        </Styled.Container>
      </Styled.Overlay>
    </ReactPortal>
  );
}
