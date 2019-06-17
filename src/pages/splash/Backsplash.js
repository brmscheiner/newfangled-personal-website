import React, { Component } from "react";
import chroma from "chroma-js";
import { delay, flatten, range } from "lodash";
import randomSeed from "../../utils/randomSeed";

const columns = 50;

function getDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

function getDecimals(n) {
  const decimals = Math.abs(n - Math.floor(n));
  const strings = decimals
    .toString()
    .slice(2)
    .split("");
  return strings.map(s => parseInt(s));
}

function colorByDistance(grid, mouseX, mouseY, width, height) {
  const colorScale = chroma.scale([
    "#74a9cf",
    "#3690c0",
    "#0570b0",
    "#034e7b",
    "black"
  ]);

  const maxDistance = getDistance(0, 0, width, height);
  return grid.map(({ x, y }) => {
    const distance = getDistance(x, y, mouseX, mouseY);
    const color = colorScale(distance / maxDistance)
      .darken(2.5)
      .alpha(0.3)
      .hex();
    return { x, y, color };
  });
}

function colorByDistanceRemainder(grid, mouseX, mouseY) {
  return grid.map(({ x, y }) => {
    const distance = getDistance(x, y, mouseX, mouseY);
    const decimals = getDecimals(distance);
    const color = chroma.gl(
      decimals[0] / 10,
      decimals[1] / 10,
      decimals[2] / 10,
      0.05
    );
    return { x, y, color };
  });
}

function colorByAngle(grid, mouseX, mouseY) {
  const colorScale = chroma.scale([
    "#74a9cf",
    "#3690c0",
    "#0570b0",
    "#034e7b",
    "black"
  ]);
  
  return grid.map(({ x, y }) => {
    const angle = Math.tan(Math.abs(mouseX - x / mouseY - y));
    const color = colorScale(angle / Math.PI)
      .darken(2.5)
      .alpha(0.3)
      .hex();
    return { x, y, color };
  });
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

    const coloredGrid = colorByAngle(this.grid, this.x, this.y, width, height);

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
