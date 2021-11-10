import { FC } from 'react';
import { ITextInput } from '../../types/textinput.types';
import clsx from 'clsx';
import './input.module.scss';


export const TextInput:FC<ITextInput> = ({name ="", placeholder ="", label="", onChange, autofocus=false, type="text", size='small', className=""}) => {


  return(
    <div>
      {label && (<label>{label}</label>)}
      <input className={clsx(size,className)} name={name} placeholder={placeholder} onChange={onChange}  type={type} autoFocus={autofocus} />
    </div>
  )
}