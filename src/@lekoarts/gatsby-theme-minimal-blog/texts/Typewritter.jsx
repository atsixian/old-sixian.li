/** @jsx jsx */
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import { jsx } from "theme-ui";

export default () => {
  return (
    <div sx={{ fontSize: [3, 4, 5], fontFamily: "spectral, serif" }}>
      {/* Title */}
      <Typed
        sx={{ fontSize: [2, 3, 4], color: `secondary` }}
        strings={["Random facts"]}
        showCursor={false}
        typeSpeed={30}
      />
      <br />
      {/* Strings to be typed */}
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
