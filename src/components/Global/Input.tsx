interface InputPropsType {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  placeholder: string;
}

const Input: React.FC<InputPropsType> = (props) => {
  const { type, placeholder, value, onChange } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
