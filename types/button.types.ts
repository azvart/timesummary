export interface IButton{
  label: string,
  size?: IButtonSize,
  type?: IButtonType,
  className?: string,
  onClick?: () => void,
  color?: IButtonColor,
};




type IButtonSize = 'small' | 'middle' | 'large';
type IButtonType = 'submit' | 'button' | 'reset';
type IButtonColor = 'primary' | 'danger' | 'light' | 'dark';