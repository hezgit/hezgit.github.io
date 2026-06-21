
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name ArrowBigRight
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTMuMjA3IDE5Ljc5M2EuNzA3LjcwNyAwIDAgMS0xLjIwNy0uNVYxNmExIDEgMCAwIDAtMS0xSDVhMSAxIDAgMCAxLTEtMXYtNGExIDEgMCAwIDEgMS0xaDZhMSAxIDAgMCAwIDEtMVY0LjcwN2EuNzA3LjcwNyAwIDAgMSAxLjIwNy0uNWw2Ljk0IDYuOTRhMS4yMDcgMS4yMDcgMCAwIDEgMCAxLjcwN3oiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/arrow-big-right
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const ArrowBigRight = createLucideIcon('arrow-big-right', [["path",{"d":"M13.207 19.793a.707.707 0 0 1-1.207-.5V16a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1V4.707a.707.707 0 0 1 1.207-.5l6.94 6.94a1.207 1.207 0 0 1 0 1.707z"}]]) as AstroComponent;

export default ArrowBigRight;
