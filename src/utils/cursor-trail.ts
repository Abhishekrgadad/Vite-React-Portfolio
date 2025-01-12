import { Point, CursorTrailOptions } from '../types/cursor';

export function cursorTrail({
  ref,
  color = "#ffffff",
  fadeSpeed = 0.95,
  tailLength = 20,
  size = 3,
}: CursorTrailOptions) {
  let points: Point[] = [];
  let mouse = { x: 0, y: 0 };
  let animationFrameId: number;

  const onMouseMove = (e: MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
  };

  const renderTrailCursor = () => {
    const canvas = ref.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    points.push({
      x: mouse.x,
      y: mouse.y,
      life: tailLength,
    });

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    points.forEach((point, i) => {
      point.life--;
      if (point.life <= 0) {
        points.splice(i, 1);
        return;
      }

      const lifePercent = point.life / tailLength;
      ctx.beginPath();
      ctx.arc(point.x, point.y, size * lifePercent, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.globalAlpha = lifePercent;
      ctx.fill();
      ctx.closePath();
    });

    points = points.map(point => ({
      ...point,
      life: point.life * fadeSpeed,
    }));

    animationFrameId = requestAnimationFrame(renderTrailCursor);
  };

  const cleanUp = () => {
    window.removeEventListener("mousemove", onMouseMove);
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  };

  window.addEventListener("mousemove", onMouseMove);

  return { cleanUp, renderTrailCursor };
}