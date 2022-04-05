import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');      
        @import url('https://fonts.googleapis.com/css2?family=Kodchasan:wght@300&display=swap');
      }
      `}
  />
);

export default Fonts;
