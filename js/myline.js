import * as d3 from 'd3';
import { interpolatePath } from 'd3-interpolate-path';

//===========

var width = window.innerWidth;

var points_1 = [['M0,50'], [`L${width},50`]];

var points_2 = [
  ['M0,50'],
  [`${width / (5 / 3)},10`],
  [`L${width - width / 3},50`],
  [`L${width},50`]
];

var line_1 = points_1.join(' ');
var line_2 = points_2.join(' ');

var path = interpolatePath(line_1, line_2);

var height = 100;
var svg = d3
  .select('#svgcontainer')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .attr('stroke', 'white')
  .attr('fill', 'none')
  .attr('stroke-width', '3');

var mysvgpath = svg.append('path').attr('d', path(0));

const myfunc = () => {
  mysvgpath
    .transition()
    .duration(300)
    .attr('d', path(1));
};

const myfunc2 = () => {
  mysvgpath
    .transition()
    .duration(300)
    .attr('d', path(0));
};

const moveEnter = () => {
  mysvgpath
    .transition()
    .duration(0)
    .attr('d', path(1));
};

const moveLeave = () => {
  mysvgpath
    .transition()
    .duration(300)
    .attr('d', path(0));
};

export const myline = () => {
  document
    .getElementById('svgcontainer')
    .addEventListener('pointerenter', myfunc);
  document
    .getElementById('svgcontainer')
    .addEventListener('pointerleave', myfunc2);
  document.getElementById('topics').addEventListener('pointerenter', moveEnter);
  document.getElementById('topics').addEventListener('pointerleave', moveLeave);
  document
    .getElementById('settings')
    .addEventListener('pointerenter', moveEnter);
  document
    .getElementById('settings')
    .addEventListener('pointerleave', moveLeave);
};
