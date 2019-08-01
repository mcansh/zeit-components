import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    text-size-adjust: 100%;
  }

  *,
  *:before,
  *:after {
    margin: 0;
    box-sizing: inherit;
  }

  html,
  body {
    background-color: var(--geist-background);
    color: var(--geist-foreground);
  }

  :root {
    color-scheme: light dark;
    --geist-gap: 16pt;
    --geist-gap-negative: -16pt;
    --geist-gap-half: 8pt;
    --geist-gap-half-negative: -8pt;
    --geist-gap-quarter: 4pt;
    --geist-gap-quarter-negative: -4pt;
    --geist-gap-double: 32pt;
    --geist-gap-double-negative: -32pt;
    --geist-page-margin: 16pt;
    --geist-page-width: 750pt;
    --geist-page-width-with-margin: 782pt;
    --geist-breakpoint-mobile: 600px;
    --geist-breakpoint-tablet: 960px;
    --geist-radius: 5px;
    --geist-cyan: #79FFE1;
    --geist-purple: #F81CE5;
    --geist-alert: #FF0080;
    --geist-marketing-gray: #FAFBFC;
    --font-sans: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    --font-mono: Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;
    --geist-foreground: #000;
    --geist-background: #fff;
    --geist-selection: var(--geist-cyan);
    --accents-1: #fafafa;
    --accents-2: #eaeaea;
    --accents-3: #999999;
    --accents-4: #888888;
    --accents-5: #666666;
    --accents-6: #444444;
    --accents-7: #333333;
    --accents-8: #111111;
    --geist-link-color: var(--geist-success);
    --geist-success-light: #3291FF;
    --geist-success: #0076FF;
    --geist-success-dark: #0366D6;
    --geist-error-light: #FF3333;
    --geist-error: #FF0000;
    --geist-error-dark: #E60000;
    --geist-warning-light: #F7B955;
    --geist-warning: #F5A623;
    --geist-warning-dark: #F49B0B;
    --geist-secondary-light: var(--accents-3);
    --geist-secondary: var(--accents-5);
    --geist-secondary-dark: var(--accents-7);
    --geist-code: var(--geist-purple);
    --dropdown-box-shadow: 0 4px 4px 0 rgba(0,0,0,0.02);
    --dropdown-triangle-stroke: #fff;
    --scroller-start: var(--geist-background);
    --scroller-end: rgba(255,255,255,0);
    --shadow-small: 0 5px 10px rgba(0,0,0,0.12);
    --shadow-medium: 0 8px 30px rgba(0,0,0,0.12);
    --shadow-large: 0 30px 60px rgba(0,0,0,0.12);
    --portal-opacity: 0.25;

    @media (prefers-color-scheme: dark) {
      --geist-foreground: #fff;
      --geist-background: #000;
      --geist-selection: var(--geist-purple);
      --accents-8: #fafafa;
      --accents-7: #eaeaea;
      --accents-6: #999999;
      --accents-5: #888888;
      --accents-4: #666666;
      --accents-3: #444444;
      --accents-2: #333333;
      --accents-1: #111111;
      --geist-success: #0076FF;
      --geist-error: #FF0000;
      --geist-warning: #F5A623;
      --geist-secondary: var(--accents-5);
      --geist-code: var(--geist-cyan);
      --dropdown-box-shadow: 0 0 0 1px var(--accents-2);
      --dropdown-triangle-stroke: #333;
      --scroller-start: rgba(0,0,0,0.3);
      --scroller-end: rgba(255,255,255,0);
      --geist-link-color: var(--geist-foreground);
      --shadow-small: 0 0 0 1px var(--accents-2);
      --shadow-medium: 0 0 0 1px var(--accents-2);
      --shadow-large: 0 0 0 1px var(--accents-2);
      --portal-opacity: 0.75;
    }
  }

  ::selection {
    background-color: var(--geist-selection);
    color: var(--geist-foreground);
  }

  body {
    position: relative;
    min-height: 100%;
    font-family: var(--font-sans);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input,
  textarea,
  keygen,
  select,
  button {
    font-size: inherit;
  }

  .container {
    max-width: 840px;
    width: 100%;
    margin: auto;
  }
`;

export { GlobalStyle };
