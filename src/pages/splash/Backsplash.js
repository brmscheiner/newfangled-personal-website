import React, { Component } from 'react'
import chroma from 'chroma-js'
import { delay, last } from 'lodash'
import randomSeed from '../../utils/randomSeed'

const getHairLength = (i) => 50 + 50 * randomSeed(i)
const getWobble = () => Date.now() % 4

function drawHair(ctx, color, wobble, startX, y) {
    const length = getHairLength()
        ctx.strokeStyle = color;
    ctx.strokeWidth = 0.5
    ctx.beginPath()
    ctx.moveTo(startX, y)
    ctx.quadraticCurveTo(startX + 0.25 * length, y - wobble, startX + 0.5 * length, y)
    ctx.quadraticCurveTo(startX + 0.75 * length, y + wobble, startX + length, y)
    ctx.stroke()
}

export default class Backsplash extends Component {
    animating = false;
    canvas = null;
    ctx = null;
    frames = 0;
    anchors = []

    registerCanvas = (canvas) => {
        if (canvas && canvas.getContext) {
            this.canvas = canvas
            this.ctx = canvas.getContext('2d')
        }
    }

    componentDidUpdate() {
        const { width, height }=  this.props
        if (!this.animating && width && height && this.ctx) {
            this.animating = true
            this.anchors.push(0)

            this.raf = requestAnimationFrame(this.draw)
        }
    }

    draw = () => {
        const { width, height }=  this.props
        const colorScale = chroma.scale(['#e9872f', '#8F5B2A'])
        this.ctx.clearRect(0,0 , width, height)

        this.anchors = this.anchors.map(anchor => anchor + 1)
        if (last(this.anchors) > 90) this.anchors.push(0)

        this.anchors.forEach(anchor => {
            let wobble = Math.random() * 8
            for (let i =0 ; i < height; i+=5) {
                wobble += 0.2 * (Math.random() - 0.5)
                const color = colorScale(5 * wobble + i / height).hex()
                drawHair(this.ctx, color, wobble, anchor - getHairLength(i), i)
            }
        })

        this.frames += 1
        this.raf = delay(() => requestAnimationFrame(this.draw), 100)
    }

    render() {
        const { width, height } = this.props
        return <canvas ref={this.registerCanvas} width={width} height={height} />
    }
}