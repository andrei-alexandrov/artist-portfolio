import "./Button.scss";

const Button = ({ children }: { children: React.ReactNode }) => {
  return <button className="portfolio-button">{children}</button>;
};

export default Button;
