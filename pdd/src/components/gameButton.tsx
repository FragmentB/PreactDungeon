type GameButtonProps = {
  onClick?: () => void;
  children: preact.ComponentChildren;
  className?: string;
  disabled?: boolean;
};

export function GameButton({ onClick, children, className = '', disabled = false }: GameButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`game-button ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
