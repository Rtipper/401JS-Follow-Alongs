'use strict';

// similar thing as a "node"
class Vertex {
  constructor(value) {
    this.value = value;
  }
}

// line between vertexes
class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph{
  constructor() {
    this.adjacencyList = new Map(); // to be used to keep track of edges (key = some vertex // value = some edge)
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []); // used to store the edges
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    let adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    return [...this.adjacencyList.get(vertex)]
  }
}

const graph = new Graph();

const a = new Vertex('a');
const b = new Vertex('b');
const c = new Vertex('c');
const d = new Vertex('d');
const e = new Vertex('e');
const f = new Vertex('f');

graph.addVertex(a);
graph.addVertex(b);
graph.addVertex(c);
graph.addVertex(d);
graph.addVertex(e);
graph.addVertex(f);