
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name ArrowBigRightDash
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEgOWExIDEgMCAwIDAgMS0xVjQuNzA3YS43MDcuNzA3IDAgMCAxIDEuMjA3LS41bDYuOTQgNi45NGExLjIwNyAxLjIwNyAwIDAgMSAwIDEuNzA3bC02Ljk0IDYuOTRhLjcwNy43MDcgMCAwIDEtMS4yMDctLjVWMTZhMSAxIDAgMCAwLTEtMUg5YTEgMSAwIDAgMS0xLTF2LTRhMSAxIDAgMCAxIDEtMXoiIC8+CiAgPHBhdGggZD0iTTQgOXY2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/arrow-big-right-dash
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const ArrowBigRightDash = createLucideIcon('arrow-big-right-dash', [["path",{"d":"M11 9a1 1 0 0 0 1-1V4.707a.707.707 0 0 1 1.207-.5l6.94 6.94a1.207 1.207 0 0 1 0 1.707l-6.94 6.94a.707.707 0 0 1-1.207-.5V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"}],["path",{"d":"M4 9v6"}]]) as AstroComponent;

export default ArrowBigRightDash;
