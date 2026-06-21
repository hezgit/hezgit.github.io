
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name Form
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCAxNGg2IiAvPgogIDxwYXRoIGQ9Ik00IDJoMTAiIC8+CiAgPHJlY3QgeD0iNCIgeT0iMTgiIHdpZHRoPSIxNiIgaGVpZ2h0PSI0IiByeD0iMSIgLz4KICA8cmVjdCB4PSI0IiB5PSI2IiB3aWR0aD0iMTYiIGhlaWdodD0iNCIgcng9IjEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/form
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const Form = createLucideIcon('form', [["path",{"d":"M4 14h6"}],["path",{"d":"M4 2h10"}],["rect",{"x":"4","y":"18","width":"16","height":"4","rx":"1"}],["rect",{"x":"4","y":"6","width":"16","height":"4","rx":"1"}]]) as AstroComponent;

export default Form;
