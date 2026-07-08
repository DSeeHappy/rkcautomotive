import type { CSSProperties, ReactNode } from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          alt?: string;
          poster?: string;
          loading?: 'auto' | 'lazy' | 'eager';
          'camera-controls'?: boolean | '';
          'auto-rotate'?: boolean | '';
          'auto-rotate-delay'?: string;
          'rotation-per-second'?: string;
          'shadow-intensity'?: string;
          'environment-image'?: string;
          exposure?: string;
          'interaction-prompt'?: 'auto' | 'when-focused' | 'none';
          'touch-action'?: string;
          ar?: boolean | '';
          style?: CSSProperties;
          children?: ReactNode;
        },
        HTMLElement
      >;
    }
  }
}

export {};
