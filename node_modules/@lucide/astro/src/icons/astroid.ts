
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name Astroid
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIuOTgzIDIxLjE4NmExIDEgMCAwIDEtMS45NjYgMCAxMCAxMCAwIDAgMC04LjIwMy04LjIwMyAxIDEgMCAwIDEgMC0xLjk2NiAxMCAxMCAwIDAgMCA4LjIwMy04LjIwMyAxIDEgMCAwIDEgMS45NjYgMCAxMCAxMCAwIDAgMCA4LjIwMyA4LjIwMyAxIDEgMCAwIDEgMCAxLjk2NiAxMCAxMCAwIDAgMC04LjIwMyA4LjIwMyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/astroid
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const Astroid = createLucideIcon('astroid', [["path",{"d":"M12.983 21.186a1 1 0 0 1-1.966 0 10 10 0 0 0-8.203-8.203 1 1 0 0 1 0-1.966 10 10 0 0 0 8.203-8.203 1 1 0 0 1 1.966 0 10 10 0 0 0 8.203 8.203 1 1 0 0 1 0 1.966 10 10 0 0 0-8.203 8.203"}]]) as AstroComponent;

export default Astroid;
