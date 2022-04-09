import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
        @font-face {
          font-family: 'Kodchasan';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url('./fonts/Kodchasan-Light.ttf')
        }

        @font-face {
          font-family: 'M PLUS Rounded 1c';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url('./fonts/MPLUSRounded1c-Light.ttf')
        }
      }
      `}
  />
);

export default Fonts;
