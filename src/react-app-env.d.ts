declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}