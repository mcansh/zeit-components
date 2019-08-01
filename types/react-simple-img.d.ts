declare module 'react-simple-img' {
  import * as React from 'react';

  interface Props
    extends React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    > {
    // The large image source
    src: string;
    // eg: large.jpg 2x, small.jpg
    srcSet?: string;
    // eg: (max-width: 320px) 280px, (max-width: 480px) 440px
    sizes?: string;
    // Priority Hints with "low" or "auto": set to "auto" will load image after load event, otherwise "low" will load images after load event and lazy load with intersection observer
    importance?: string;
    // Placeholder image source (svg, jpg, png...) or css color value (white, linear-gradient(blue, pink)), set to false will remove placeholder.
    placeholder?: string;
    // Image will scale automatically with aspect ratio. Note: width and height will need to be supplied
    applyAspectRatio?: boolean;
    // animation duration in seconds
    animationDuration?: number;
    // styles to go on the img element itself
    imgStyle?: React.CSSProperties;
    // The loading attribute allows a browser to defer loading offscreen images and iframes until users scroll near them
    loading?: 'lazy' | 'eager' | 'auto';
  }

  function SimpleImg(props: Props): JSX.Element;
}
