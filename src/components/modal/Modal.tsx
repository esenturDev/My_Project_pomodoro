import { FC, ReactNode } from 'react';
import scss from './Modal.module.scss';

export const Modal: FC<{
  children: ReactNode;
}> = ({ children}) => {

  return (
    <div  className={scss.modal}>
      <div className={scss.modal2}>
        {children}
      </div>
    </div>
  )
}
