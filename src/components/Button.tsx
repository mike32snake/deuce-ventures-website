import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  onClick
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-sans font-semibold transition-all duration-300 ease-out transform hover:scale-105 active:scale-95';

  const variants = {
    primary: 'bg-deuce-purple text-white hover:bg-opacity-90 shadow-lg hover:shadow-xl active:shadow-md',
    secondary: 'bg-white text-deuce-purple border-2 border-white hover:bg-white hover:bg-opacity-10 hover:text-white shadow-lg hover:shadow-xl active:shadow-md',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-deuce-purple shadow-lg hover:shadow-xl active:shadow-md'
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
