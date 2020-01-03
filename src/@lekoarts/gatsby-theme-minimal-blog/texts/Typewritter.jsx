/** @jsx jsx */
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import { jsx } from "theme-ui";

export default () => {
  return (
    <div style={{ fontSize: "40px", fontFamily: "spectral, serif" }}>
      <Typed
        sx={{ fontSize: "30px", color: `secondary` }}
        strings={["Random facts"]}
        showCursor={false}
        typeSpeed={30}
      />
      <br />
      <Typed
        strings={[
          "Hate repeating",
          "Junior undergrad",
          "Love programming",
          "Writting is fun",
          "Writting is hard",
          "New Year's Resolutions suck",
          "Brussel Sprouts are the BEST",
          "Never a morning person"
        ]}
        startDelay={1500}
        typeSpeed={55}
        backSpeed={30}
        loop
        shuffle
        smartBackspace
        backDelay={2500}
      />
    </div>
  );
};
