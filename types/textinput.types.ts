export interface ITextInput{
  name?: string,
  placeholder?: string,
  label?: string,
  onChange?: () => void,
  autofocus?: boolean,
  type:InputType,
  size?: InputSize,
  className?: string,
};


type InputType = "text" | "password" | "email";
type InputSize = "small" | "middle" | "large";