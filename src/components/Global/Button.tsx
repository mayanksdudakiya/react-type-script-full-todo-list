interface ButtonPropsType {
  type?: "button" | "submit" | "reset";
  onClick: () => void;
  children: string;
}

const Button: React.FC<ButtonPropsType> = (props) => {
  const { type = "button", children, onClick } = props;

  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
