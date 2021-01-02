import { FC, useRef, useEffect } from 'react';
import Portal from '@reach/portal';
import { Cross } from '@components/icons';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock';
import s from './Modal.module.css';

interface Props {
  className?: string;
  children?: any;
  open?: boolean;
  onClose: () => void;
}

const Modal: FC<Props> = ({ children, open, onClose }) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (ref.current) {
      if (open) {
        disableBodyScroll(ref.current);
      } else {
        enableBodyScroll(ref.current);
      }
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [open]);

  return (
    <Portal>
      <div className={s.root} ref={ref}>
        <div className={s.modal}>
          <div className="h-7 flex items-center justify-end w-ful">
            <button
              onClick={() => onClose()}
              aria-label="Close Panel"
              className="hover:text-gray-500 transition ease-in-out duration-150 focus:outline-none"
            >
              <Cross className="h-6 w-6" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
