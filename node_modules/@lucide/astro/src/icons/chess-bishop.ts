
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name ChessBishop
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAyMGEyIDIgMCAwIDEgMi0yaDEwYTIgMiAwIDAgMSAyIDJ2MWExIDEgMCAwIDEtMSAxSDZhMSAxIDAgMCAxLTEtMXoiIC8+CiAgPHBhdGggZD0iTTE1IDE4YzEuNS0uNjE1IDMtMi40NjEgMy00LjkyM0MxOCA4Ljc2OSAxNC41IDQuNDYyIDEyIDIgOS41IDQuNDYyIDYgOC43NyA2IDEzLjA3NyA2IDE1LjUzOSA3LjUgMTcuMzg1IDkgMTgiIC8+CiAgPHBhdGggZD0ibTE2IDctMi41IDIuNSIgLz4KICA8cGF0aCBkPSJNOSAyaDYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/chess-bishop
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const ChessBishop = createLucideIcon('chess-bishop', [["path",{"d":"M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"}],["path",{"d":"M15 18c1.5-.615 3-2.461 3-4.923C18 8.769 14.5 4.462 12 2 9.5 4.462 6 8.77 6 13.077 6 15.539 7.5 17.385 9 18"}],["path",{"d":"m16 7-2.5 2.5"}],["path",{"d":"M9 2h6"}]]) as AstroComponent;

export default ChessBishop;
