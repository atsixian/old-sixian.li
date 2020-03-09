import React from 'react'
import Fourier from "./fourier.jsx"
import Loadable from "react-loadable";

const LoadableFourier = Loadable({
  loader: () => import("./fourier.jsx"),
  loading: Fourier
});

export default LoadableFourier