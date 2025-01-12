export interface Spring {
  position: number;
  velocity: number;
  target: number;
}

export function updateSpring(
  spring: Spring,
  stiffness: number = 0.1,
  damping: number = 0.8
): void {
  const force = (spring.target - spring.position) * stiffness;
  spring.velocity = spring.velocity * damping + force;
  spring.position += spring.velocity;
}