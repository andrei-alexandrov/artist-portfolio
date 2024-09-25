import "./Button.scss";

const Button = ({ children }: { children: React.ReactNode }) => {
  return <button className="contact-button">{children}</button>
};

export default Button;
