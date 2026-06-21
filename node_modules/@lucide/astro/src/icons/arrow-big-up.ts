
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name ArrowBigUp
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNOSAxOWExIDEgMCAwIDAgMSAxaDRhMSAxIDAgMCAwIDEtMXYtNmExIDEgMCAwIDEgMS0xaDMuMjkzYS43MDcuNzA3IDAgMCAwIC41LTEuMjA3bC03LjA4Ni03LjA4NmExIDEgMCAwIDAtMS40MTQgMGwtNy4wODYgNy4wODZhLjcwNy43MDcgMCAwIDAgLjUgMS4yMDdIOGExIDEgMCAwIDEgMSAxeiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/arrow-big-up
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const ArrowBigUp = createLucideIcon('arrow-big-up', [["path",{"d":"M9 19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a1 1 0 0 1 1-1h3.293a.707.707 0 0 0 .5-1.207l-7.086-7.086a1 1 0 0 0-1.414 0l-7.086 7.086a.707.707 0 0 0 .5 1.207H8a1 1 0 0 1 1 1z"}]]) as AstroComponent;

export default ArrowBigUp;
