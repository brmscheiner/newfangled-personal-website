import React, { Component } from "react";
import chroma from "chroma-js";
import { delay, last } from "lodash";
import randomSeed from "../../utils/randomSeed";

const radius = 50;
const hairs = 500;
const hairLength = 10;
const wobbleSegments = 4;
const getWobble = () => Date.now() % 4;

function drawHair(ctx, x1, y1, x2, y2) {
  const wobble = getWobble();

  ctx.strokeStyle = chroma.random().brighten().alpha(0.3);
  ctx.strokeWidth = 0.5;
  ctx.beginPath();
  let currentX = x1;
  let currentY = y1;
  for (let i = 1; i < wobbleSegments; i += 1) {
    ctx.moveTo(currentX, currentY);
    const segmentLength = hairLength / wobbleSegments;
    const r = i * segmentLength;
    const xEnd = r * x1 + (1 - r) * x2;
    const yEnd = r * y1 + (1 - r) * y2;
    const xCP = 0.5 * (currentX + xEnd) + wobble;
    const yCP = 0.5 * (currentX + xEnd) + wobble;

    ctx.quadraticCurveTo(xCP, yCP, xEnd, yEnd);

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
      this.anchors.push(0);

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
      const x1 = radius * Math.sin(i * angleDifference) + this.x;
      const x2 = (radius + hairLength) * Math.sin(i * angleDifference) + this.x;
      const y1 = radius * Math.cos(i * angleDifference) + this.y;
      const y2 = (radius + hairLength) * Math.cos(i * angleDifference) + this.y;
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
