import { playerX, playerY } from '../core/state';
import { handleQuit } from '../utils/platform';
import { GameButton } from './gameButton';

export function HUD() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, padding: '8px', color: 'white' }}>
      <p>Position: ({playerX.value}, {playerY.value})</p>
      <GameButton onClick={handleQuit}>Quit</GameButton>
    </div>
  );
}
