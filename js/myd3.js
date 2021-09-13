import * as d3 from 'd3'

/*
NOTE: .enter() can only be used after a .data() method call. .
enter() is used to indicate that new elements will be added to the current selection.
An .append() or .insert() follows an .enter() call. 
*/


export const myfunc = () => {
  var mysvg = d3.select("#a0")
  .append("g")
  .attr("fill", "black")
  .attr("stroke", "black")
  .attr("stroke-width", 0)

  var mycircle = mysvg.append("circle")
  .attr("cx", 10)
  .attr("cy", 10)
  .attr("r", 10)
}