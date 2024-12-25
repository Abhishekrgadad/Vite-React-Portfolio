export interface Point {
  x: number;
  y: number;
  life: number;
}

export interface CursorTrailOptions {
  ref: React.RefObject<HTMLCanvasElement>;
  color?: string;
  fadeSpeed?: number;
  tailLength?: number;
  size?: number;
}