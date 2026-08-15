import "./Button.scss";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="contact-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
