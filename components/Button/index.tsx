import {FC} from 'react';
import {IButton} from '../../types/button.types';
import clsx from 'clsx';
import styles from './button.module.scss';
export const Button:FC<IButton> =({label = "btn", size='small', type='button', className='', onClick=()=>{}, color='primary' }) => {
  return (
    <button type={type} className={clsx(styles.btn, className)} onClick={onClick}>
        {label}
    </button>
  )
}