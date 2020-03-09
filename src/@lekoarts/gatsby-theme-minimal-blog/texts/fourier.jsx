/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import React from "react";
import { Flex, Box } from "@theme-ui/components";
import { Complex, fft, author } from "fourier-svg";


function withHook(Component) {
  return function WrappedComponent(props) {
    const [colorMode] = useColorMode();
    return <Component {...props} isDark={colorMode === "dark"}/>;
  }
}

class Fourier extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.myRef = React.createRef();
  }

  componentWillMount() {
    if (typeof window !== "undefined") {
      this.updateWindowDimensions();
      window.addEventListener("resize", this.updateWindowDimensions);
    }
  }

  componentDidMount() {
    const p5 = require("p5");
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    this.myp5 = new p5(this.Sketch, this.myRef.current);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  color = 123;
  Sketch = p5 => {
    let time = 0;
    let fourier = [];
    let path = [];
    let maxRadius = 0;

    let samples = [];
    let part1 = author.points;
    let bdbox = author.bdbox;

    function epicycles(p5, x, y, rotation, fourier, offset, scale) {
      for (let k = 0; k < fourier.length; k++) {
        let prevx = x;
        let prevy = y;

        // k is the kth frequency bin
        const amp = fourier[k].amp;
        const freq = fourier[k].freq;
        const phase = fourier[k].phase;
        x += amp * Math.cos(freq * time + phase + rotation) + offset;
        y += amp * Math.sin(freq * time + phase + rotation) + offset;

        p5.stroke("rgba(137, 196, 244, 0.5)");
        p5.strokeWeight(2);
        p5.noFill();

        p5.ellipse(prevx, prevy, amp * 2 * scale);
        // p5.stroke("rgba(137, 196, 244, 0.5)");
        p5.line(prevx, prevy, x, y);
      }

      return p5.createVector(x, y);
    }

    p5.setup = () => {
      // setup will be called on every resize/switch mode
      // so we need to clear all path and sample points and reset time
      time = 0;
      path = [];
      samples = [];

      p5.createCanvas(this.state.width * 0.8, this.state.height / 2.5);

      // scale the image to fit the canvas
      // if the scale is less than 1, it means the canvas is large enough
      // so just take 1, do nothing
      const scale = Math.max(
        1,
        (bdbox.width / p5.width) * 1.5,
        (bdbox.height / p5.height) * 1.5
      );
      part1 = author.points.map(element => ({
        x: element.x / scale,
        y: element.y / scale
      }));

      const skip = 5;
      for (let i = 0; i < part1.length; i += skip) {
        samples.push(new Complex(part1[i].x, part1[i].y));
      }

      const firstPoint = samples[0];
      while (Math.log2(samples.length) % 1 !== 0) {
        samples.push(new Complex(firstPoint.re, firstPoint.im)); //pad
      }

      fourier = fft(samples);
      fourier.sort((a, b) => b.amp - a.amp);
      maxRadius = fourier.reduce((acc, circle) =>
        Math.max(acc, circle.amp)
      , 0);
      console.log(maxRadius)

    };

    // Draw function

    p5.draw = () => {
      p5.background( this.props.isDark ? `#1A202C`: 'white');
      const o1 = p5.createVector(
        p5.width /2,
        // p5.height * (1/2 + 1 / 8)
        p5.height - maxRadius
      );

      const v = epicycles(p5, o1.x, o1.y, p5.PI, fourier, 0.15, 0.8);

      path.unshift(v);

      p5.beginShape();
      p5.noFill();
      p5.stroke("orange");
      for (let i = 0; i < path.length; i++) {
        p5.vertex(path[i].x, path[i].y);
      }
      p5.endShape();

      let dt = p5.TWO_PI / fourier.length;
      if (time >= p5.PI) {
        path.pop();
      }

      time += dt; // shorter one
    };

    p5.windowResized = () => {
      p5.resizeCanvas(this.state.width * 0.8, this.state.height, false);
      p5.setup();
      p5.draw();
    };
  };

  render() {
    return (
        <Flex sx={{ alignItems: "center" }}>
          <Box mx="auto">
            <div ref={this.myRef} />
          </Box>
        </Flex>
    );
  }
}

export default withHook(Fourier);
