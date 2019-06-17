import React, { Component } from "react";
import chroma from "chroma-js";
import { delay, flatten, range } from "lodash";
import randomSeed from "../../utils/randomSeed";

const columns = 20;

function getDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

export default class Backsplash extends Component {
  animating = false;
  canvas = null;
  ctx = null;
  frames = 0;
  x = null;
  y = null;
  prevWidth = null;
  prevHeight = null;

  componentDidMount() {
    window.addEventListener("mousemove", this.onMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.onMouseMove);
  }

  componentDidUpdate() {
    const { width, height } = this.props;

    if (width !== this.prevWidth || height !== this.prevHeight) {
      this.size = width / columns;
      const rows = Math.ceil(height / this.size);
      const xValues = range(columns).map(i => 0.5 * this.size + i * this.size);
      const grid = range(rows).map(i => {
        const y = 0.5 * this.size + i * this.size;
        return xValues.map(x => ({ x, y }));
      });
      this.grid = flatten(grid);
    }

    if (!this.animating && width && height && this.ctx) {
      this.animating = true;

      this.raf = requestAnimationFrame(this.draw);
    }

    this.prevWidth = width;
    this.prevHeight = height;
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

    if (this.grid && this.x && this.y) {
      this.drawGrid();
    }

    this.frames += 1;
    this.raf = delay(() => requestAnimationFrame(this.draw), 100);
  };

  drawGrid = () => {
    const { width, height } = this.props;
    const colorScale = chroma.scale(['#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#034e7b']);
    const maxDistance = getDistance(0, 0, 0.5 * width, 0.5 * height);
    const coloredGrid = this.grid.map(({ x, y }) => {
      const distance = getDistance(x, y, this.x, this.y);
      const color = colorScale(distance / maxDistance).darken(3).alpha(0.2).hex();
      return { x, y, color };
    });

    coloredGrid.forEach(({ x, y, color }) => {
      this.ctx.beginPath();
      this.ctx.fillStyle = color;
      this.ctx.rect(
        x - 0.5 * this.size,
        y - 0.5 * this.size,
        x + 0.5 * this.size,
        y + 0.5 * this.size
      );
      this.ctx.fill();
    });
  };

  render() {
    const { width, height } = this.props;
    return <canvas ref={this.registerCanvas} width={width} height={height} />;
  }
}
