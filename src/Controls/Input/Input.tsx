import {
  HtmlInput,
  HtmlInputContainer,
  InputContainer,
  InputIcon,
} from "./InputStyles";

interface InputProps {
  icon: string;
  placeholder: string;
  name: string;
  type?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onFocus: React.FocusEventHandler<HTMLInputElement> | undefined;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement> | undefined;
}

const Input: React.FC<InputProps> = (
  { icon, placeholder, name, type, value, onChange, onFocus, onKeyDown },
  props
) => {
  return (
    <InputContainer>
      <HtmlInputContainer>
        <HtmlInput
          icon={icon}
          placeholder={placeholder}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          {...props}
        ></HtmlInput>
        <InputIcon src={icon} />
      </HtmlInputContainer>
    </InputContainer>
  );
};

export default Input;
