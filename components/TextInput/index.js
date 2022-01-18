import clsx from 'clsx';
import styles from  './input.module.scss';

export function TextInput({
  name="",
  placeholder="",
  label="",
  onChange,
  autofocus=false,
  type="text",
  size='small',
  className="",
  required=true
}) {
  return (
    <div className={clsx(styles.group)}>
      <input
        className={clsx(styles.field,className)}
        name={name} 
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        autoFocus={autofocus}
        required={required}
      />
      <label className={clsx(styles.label)}>{label}</label>
    </div>
  )
};