import { CSSProperties, useEffect, useRef } from "react";
import { cursorTrail } from "../utils/cursor-trail";

export interface CursorTrailProps {
  color?: string;
  className?: string;
  style?: CSSProperties;
}

export function CursorTrail({ color = "#ffffff", className = "", style }: CursorTrailProps) {
  const refCanvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const { cleanUp, renderTrailCursor } = cursorTrail({
      ref: refCanvas,
      color,
    });
    renderTrailCursor();

    return cleanUp;
  }, [color]);

  return (
    <canvas
      ref={refCanvas}
      className={`fixed inset-0 pointer-events-none z-50 ${className}`}
      style={{ background: 'transparent', ...style }}
    />
  );
}