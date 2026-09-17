// Prefixo de assets para builds estáticos (GitHub Pages usa /gessonardo).
// No build normal (sandbox/preview) o valor é vazio.
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${BASE}${path}`;
