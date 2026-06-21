
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name TowelRack
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjIgN2gtMiIgLz4KICA8cGF0aCBkPSJNNi41IDNoMTFBMi41IDIuNSAwIDAgMSAyMCA1LjVWMjBhMSAxIDAgMCAxLTEgMWgtOWExIDEgMCAwIDEtMS0xVjUuNWExIDEgMCAwIDAtNSAwVjE3YTEgMSAwIDAgMCAxIDFoNCIgLz4KICA8cGF0aCBkPSJNOSA3SDIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/towel-rack
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const TowelRack = createLucideIcon('towel-rack', [["path",{"d":"M22 7h-2"}],["path",{"d":"M6.5 3h11A2.5 2.5 0 0 1 20 5.5V20a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V5.5a1 1 0 0 0-5 0V17a1 1 0 0 0 1 1h4"}],["path",{"d":"M9 7H2"}]]) as AstroComponent;

export default TowelRack;
