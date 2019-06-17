import React, { Component } from "react";
import chroma from "chroma-js";
import { delay } from "lodash";
import randomSeed from "../../utils/randomSeed";

const radius = 20;
const hairs = 55;
const hairLength = 30;
const wobbleSegments = 4;
const getWobble = () => Math.round(Date.now() / 100) % 40;

function getSegmentEndpoint(x0, y0, x, y, length) {
  /* Returns the x and y coordinates of the segment beginning at (x, y) with the defined length.
     The segment is on the line that moves from (x0, y0) to (x, y) */

  const slope = (y - y0) / (x - x0);
  const multiplier = 1;
  const dX = (multiplier * length) / Math.sqrt(1 + slope * slope);
  return [x + dX, y + slope * dX];
}

function drawHair(ctx, x1, y1, x2, y2) {
  const wobble = getWobble();

  ctx.strokeStyle = chroma
    .random()
    .brighten()
    .alpha(0.3);
  ctx.strokeStyle = "blue";
  ctx.strokeWidth = 0.5;
  ctx.beginPath();
  let currentX = x1;
  let currentY = y1;
  for (let i = 1; i < wobbleSegments; i += 1) {
    ctx.moveTo(currentX, currentY);
    const segmentLength = hairLength / wobbleSegments;
    const [xEnd, yEnd] = getSegmentEndpoint(x1, y1, x2, y2, segmentLength);

    const xMid = 0.5 * (currentX + xEnd);
    const yMid = 0.5 * (currentY + yEnd);

    const slope = (yMid - currentY) / (xMid - currentX);
    const xControlPoint = xMid + wobble / Math.sqrt(1 + slope * slope);
    const yControlPoint = -slope * xControlPoint + yMid + xMid * slope;

    ctx.quadraticCurveTo(xMid, yMid, xEnd, yEnd);

    currentX = xEnd;
    currentY = yEnd;
  }
  ctx.stroke();
}

export default class Backsplash extends Component {
  animating = false;
  canvas = null;
  ctx = null;
  frames = 0;
  anchors = [];
  x = null;
  y = null;

  componentDidMount() {
    window.addEventListener("mousemove", this.onMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.onMouseMove);
  }

  componentDidUpdate() {
    const { width, height } = this.props;
    if (!this.animating && width && height && this.ctx) {
      this.animating = true;

      this.raf = requestAnimationFrame(this.draw);
    }
  }

  onMouseMove = e => {
    this.x = e.clientX;
    this.y = e.clientY;
  };

  registerCanvas = canvas => {
    if (canvas && canvas.getContext) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d");
    }
  };

  draw = () => {
    const { width, height } = this.props;
    this.ctx.clearRect(0, 0, width, height);

    const angleDifference = (2 * Math.PI) / hairs;
    for (let i = 0; i < hairs; i += 1) {
      const theta = i * angleDifference;
      // const theta = 2 * Math.PI * Math.random();

      const x1 = radius * Math.sin(theta) + this.x;
      const x2 = (radius + hairLength) * Math.sin(theta) + this.x;
      const y1 = radius * Math.cos(theta) + this.y;
      const y2 = (radius + hairLength) * Math.cos(theta) + this.y;
      drawHair(this.ctx, x1, y1, x2, y2);
    }

    this.frames += 1;
    this.raf = delay(() => requestAnimationFrame(this.draw), 100);
  };

  render() {
    const { width, height } = this.props;
    return <canvas ref={this.registerCanvas} width={width} height={height} />;
  }
}
