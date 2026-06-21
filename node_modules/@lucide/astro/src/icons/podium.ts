
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name Podium
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgNlYyaC0xIiAvPgogIDxwYXRoIGQ9Ik05IDE1YTEgMSAwIDAgMC0xLTFINGExIDEgMCAwIDAtMSAxdjVhMSAxIDAgMCAwIDEgMWgxNmExIDEgMCAwIDAgMS0xdi0zYTEgMSAwIDAgMC0xLTFoLTRhMSAxIDAgMCAwLTEgMSIgLz4KICA8cGF0aCBkPSJNOSAyMVYxMWExIDEgMCAwIDEgMS0xaDRhMSAxIDAgMCAxIDEgMXYxMCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/podium
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const Podium = createLucideIcon('podium', [["path",{"d":"M12 6V2h-1"}],["path",{"d":"M9 15a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1"}],["path",{"d":"M9 21V11a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10"}]]) as AstroComponent;

export default Podium;
