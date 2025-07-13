import { useEffect, useRef } from 'preact/hooks'
import './app.css'
import { HUD } from './components/hud';

export function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(()=>{
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let running = true;

    function draw() {
      if (!ctx) return;
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Sample player rectangle
      ctx.fillStyle = 'blue';
      ctx.fillRect(50, 50, 32, 32);

      if (running) requestAnimationFrame(draw);
    };

    draw();

    return () => {
      running = false;
    };
  }, []);

  return (
    <>
      <div>
       <h1>Preact Dungeon Delve</h1>
       <HUD />
        <canvas ref={canvasRef} width="800" height="450"/>
      </div>
    </>
  )
}
