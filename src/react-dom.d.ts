import { Root } from 'react-dom';

declare module 'react-dom' {
  interface ReactDOM {
    createRoot(container: Element | DocumentFragment | null | undefined, options?: RootOptions): Root;
  }
}
