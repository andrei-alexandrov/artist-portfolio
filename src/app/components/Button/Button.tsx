import "./Button.scss";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
};

// One CTA implementation: renders a link when `href` is given, a button otherwise.
const Button = ({ children, onClick, href }: ButtonProps) => {
  if (href) {
    return (
      <a
        className="contact-button"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button className="contact-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
