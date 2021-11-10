import {FC} from 'react';
import { IHeader } from '../../types/header.types';
import clsx from 'clsx';




export const Header:FC<IHeader> =({data={}, color='primary',className='',logoImage='',children}) => {
  return(
    <div>
      {children}
    </div>
  )
}