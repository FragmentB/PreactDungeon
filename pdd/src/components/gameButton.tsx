type GameButtonProps = {
  onClick?: () => void;
  onHover?: () => void;
  onLeave?: () => void;
  children: preact.ComponentChildren;
  className?: string;
  disabled?: boolean;
};

export function GameButton({ onClick, onHover,onLeave, children, className = '', disabled = false }: GameButtonProps) {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`game-button ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
