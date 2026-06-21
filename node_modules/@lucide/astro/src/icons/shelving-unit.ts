
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name ShelvingUnit
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMTJWOWExIDEgMCAwIDAtMS0xSDlhMSAxIDAgMCAwLTEgMXYzIiAvPgogIDxwYXRoIGQ9Ik0xNiAyMHYtM2ExIDEgMCAwIDAtMS0xaC0yYTEgMSAwIDAgMC0xIDF2MyIgLz4KICA8cGF0aCBkPSJNMjAgMjJWMiIgLz4KICA8cGF0aCBkPSJNNCAxMmgxNiIgLz4KICA8cGF0aCBkPSJNNCAyMGgxNiIgLz4KICA8cGF0aCBkPSJNNCAydjIwIiAvPgogIDxwYXRoIGQ9Ik00IDRoMTYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/shelving-unit
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const ShelvingUnit = createLucideIcon('shelving-unit', [["path",{"d":"M12 12V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"}],["path",{"d":"M16 20v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"}],["path",{"d":"M20 22V2"}],["path",{"d":"M4 12h16"}],["path",{"d":"M4 20h16"}],["path",{"d":"M4 2v20"}],["path",{"d":"M4 4h16"}]]) as AstroComponent;

export default ShelvingUnit;
