import * as React from 'react'
import * as d3 from 'd3'
import { profile } from "../data/data.source";

interface Tech {
    name: string;
    logo: string;
    expertise: number;

    x?: number;
    y?: number;
}

export class TechVisualization extends React.Component {

    within(value: number, min: number, max: number): number {
        return Math.max(min, Math.min(value, max)) || 0;
    }

    componentDidMount() {
        const data: Tech[] = profile.tech.map(t => Object.assign({}, t))
        const svg = d3.select('svg#tech-vis')
        const height = (svg.node() as HTMLElement).getBoundingClientRect().height
        const width = (svg.node() as HTMLElement).getBoundingClientRect().width

        const within = (v: number, r: number, min: number, max: number) =>
            Math.max(min + r, Math.min(v, max - r)) || 0;
        const withinWidth = (v: number, r: number) => within(v, r, 0, width);
        const withinHeight = (v: number, r: number) => within(v, r, 0, height);

        const node = svg.selectAll('.node')
            .data(data)
            .enter()
            .append('g')
            .attr('class', 'node')
 //           .attr('transform', d => `translate(${(d as any).x},${(d as any).y})`)

        const logoScale = d3.scaleLinear()
            .domain([0, 100])
            .range([50, 150])
    
/*          node.append('circle')
            .attr("id", d => d.name.toLocaleLowerCase())
            .attr('r', d => logoScale(d.expertise)/2)
            .style("fill", "#fafafa"); */
/*
        node.append('text')
            .text(d => d.name); */
        
         node.append('image')   
            .attr('width', d => logoScale(d.expertise)+"px")
            .attr('height', d => logoScale(d.expertise) + "px")
             .attr('xlink:href', d => profile.techLogoRoot + d.logo)
            .attr('transform', d => `translate(${-logoScale(d.expertise) / 2},${-logoScale(d.expertise) / 2})`)

        const simulation = d3
            .forceSimulation<Tech>(data)
            .velocityDecay(0.2)
            .alphaDecay(0.001)
            .force("x", d3.forceX().strength(0.01))
            .force("y", d3.forceY())
            .force("charge", d3.forceManyBody().strength(-40).distanceMax(200))
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force("collide", d3.forceCollide<Tech>(d => logoScale(d.expertise)).strength(0.05).iterations(10))
            .on("tick", () => node.attr('transform', d => {
                const x = withinWidth(d.x || width/2, logoScale(d.expertise))
                const y = withinHeight(d.y || height/2, logoScale(d.expertise))
                return `translate(${x},${y})`
            }))
    }

    render() {
        return (
            <div className="strip">
                <svg id="tech-vis"></svg>
            </div>
        );
    }
}
