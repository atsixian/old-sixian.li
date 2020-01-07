/** @jsx jsx */
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import { jsx } from "theme-ui";

export default (props) => {
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
      <Typed
        strings={props.strings}
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
