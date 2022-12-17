const width = 900;
const height = 600;

let nodes = [{ name: "Adam" }, { name: "Bob" }, { name: "John" }];

let edges = [
  {
    source: 0,
    target: 1,
  },
  {
    source: 0,
    target: 1,
  },
];

const force = d3.forceSimulation(nodes).force(
    "center",
    d3
        .forceCenter()
        .x(width / 2)
        .y(height / 2)
);

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);


let nodeCircles = svg.selectAll("circle")
  .data(nodes)
  .enter()
  .append("circle")
  .attr("r", 5)
  .style("fill", "black");

force.on("tick", function () {
  nodeCircles
    .attr("cx", function (d) {
      return d.x;
    })
    .attr("cy", function (d) {
      return d.y;
    });
});
