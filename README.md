<p align="center">
  <a href="https://chaos-mesh.org/">
    <img src="https://chaos-mesh.org/img/logos/logo-mini.svg" alt="Chaos Mesh Logo" width="131" height="54">
  </a>

  <h3 align="center">Mini Node Exporter</h3>

  <p align="center">
    <a href="https://github.com/STRRL/mini-node-exporter">Assignment</a> for LFX Mentorship Program, <a href="https://chaos-mesh.org/">Chaos Mesh</a> given by <a href="https://github.com/STRRL">@STRRL</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
      </ul>
        <li><a href="#built-with">Built With</a></li>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#running-the-project">Running the project</a></li>
      </ul>
    </li>
    <li><a href="#screenshots">Relevant Screenshots</a></li>
  </ol>
</details>

## About The Project

Mini Node Exporter is the simplest form of the famous <a href="https://github.com/prometheus/node-exporter">prometheus/node-exporter</a>. It is basically a type of monitoring stack and an exporter for hardware and OS metrics that is exposed by the <a href="https://github.com/siimon/prom-client">prom-client. The express, prometheus & grafana servers are containerized using Docker & the whole monitoring stack is orchestrated using Docker Compose.</a>.

### Built With

Following technologies and libraries are used for the development of this
project.

- [Express.js](https://expressjs.com/)
- [Prometheus](https://prometheus.io/)
- [Grafana](https://grafana.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- Shell/CLI

<!-- GETTING STARTED -->

## Getting Started

To setup the project locally follow the steps below

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Running the project.

To set this up in the local repository:

1. **Fork** and **clone** the project to your local system
2. Copy the commands below:

```
docker-compose up -d --build mini-node-exporter
docker-compose up -d --build prometheus
docker-compose up -d --build grafana
```

3. Now, there will be three processes running on your system i.e. `mini-node-exporter`, `prometheus`, `grafana`. `mini-node-exporter` will be running at `0.0.0.0:23333` whereas `prometheus` will be running at `0.0.0.0:9090` and `grafana` at `0.0.0.0:3000`.

4. The `mini-node-exporter` application will be having the endpoints as follows:

- `/info/uptime` - Displays the Uptime of the server
- `/info/load` - Displays the average load of the system in 1m, 5m and 15m in the form of a JSON.
- `/metrics` is the endpoint which exposes two gauge metrics i.e `node_load` & `node_uptime`

5. To fetch the `metrics`, open your terminal & run `curl -GET localhost:23333/metrics`. This will return all the default as well as custom metrics.

### Relevant Screenshots:

1. _Prometheus up & running_
   <img src="images/prom.png" alt="Prometheus Config" />

2. _Adding Metrics In Grafana_
   <img src="images/grafana-edit.png" alt="Adding Metrics In Grafana" />

3. _Graph of node_uptime in Grafana dashboard_
   <img src="images/grafana-1.png" alt="Grafana Dashboard" />

4. _Graph of average load at 1s_
   <img src="images/grafana-2.png" alt="Grafana Dashboard" />

5. _Graph of average load at 5s_
   <img src="images/grafana-3.png" alt="Grafana Dashboard" />

6. _Graph of average load at 15s_
   <img src="images/grafana-4.png" alt="Grafana Dashboard" />
