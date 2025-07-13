import { playerX, playerY } from '../core/state';

export function HUD() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, padding: '8px', color: 'white' }}>
      <p>Position: ({playerX.value}, {playerY.value})</p>
    </div>
  );
}
