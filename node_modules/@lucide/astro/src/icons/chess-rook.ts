
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name ChessRook
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAyMGEyIDIgMCAwIDEgMi0yaDEwYTIgMiAwIDAgMSAyIDJ2MWExIDEgMCAwIDEtMSAxSDZhMSAxIDAgMCAxLTEtMXoiIC8+CiAgPHBhdGggZD0iTTEwIDJ2MiIgLz4KICA8cGF0aCBkPSJNMTQgMnYyIiAvPgogIDxwYXRoIGQ9Im0xNyAxOC0xLTkiIC8+CiAgPHBhdGggZD0iTTYgMnY1YTIgMiAwIDAgMCAyIDJoOGEyIDIgMCAwIDAgMi0yVjIiIC8+CiAgPHBhdGggZD0iTTYgNGgxMiIgLz4KICA8cGF0aCBkPSJtNyAxOCAxLTkiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/chess-rook
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const ChessRook = createLucideIcon('chess-rook', [["path",{"d":"M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"}],["path",{"d":"M10 2v2"}],["path",{"d":"M14 2v2"}],["path",{"d":"m17 18-1-9"}],["path",{"d":"M6 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2"}],["path",{"d":"M6 4h12"}],["path",{"d":"m7 18 1-9"}]]) as AstroComponent;

export default ChessRook;
