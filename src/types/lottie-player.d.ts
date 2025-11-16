

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lottie-player': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        background?: string;
        speed?: string | number;
        loop?: boolean | '';
        autoplay?: boolean | '';
        mode?: string;
        renderer?: string;
        controls?: boolean | '';
        style?: React.CSSProperties;
        'aria-label'?: string;
      };
    }
  }
}

export {};