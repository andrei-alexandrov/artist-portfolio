import "./Button.scss";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="button-container">
      <button className="contact-button">{children}</button>;
    </div>
  );
};

export default Button;
