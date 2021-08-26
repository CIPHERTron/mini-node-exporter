// Importing Modules
require("dotenv").config()
const os = require("os")
const process = require("process")
const express = require("express")
const cors = require("cors")

// Prometheus Client
const client = require("prom-client")

// Registering app
const app = express()
app.use(express.json())
app.use(cors())

// Create prom-client registry
const register = new client.Registry()
const collectDefaultMetrics = client.collectDefaultMetrics

collectDefaultMetrics({
	app: "mini-node-exporter",
	timeout: 10000,
	gcDurationBuckets: [1, 2, 5, 7, 9],
	register,
})

register.registerMetric(
	new client.Gauge({
		name: "node_uptime",
		help: "Server Uptime Metric",
		async collect() {
			const uptime = await process.uptime()
			this.set(uptime)
		},
	})
)

register.registerMetric(
	new client.Gauge({
		name: "node_load_duration_1m",
		help: "Average Load during 1m",
		async collect() {
			const load = await os.loadavg()[0]
			this.set(load)
		},
	})
)

register.registerMetric(
	new client.Gauge({
		name: "node_load_duration_5m",
		help: "Average Load during 5m",
		async collect() {
			const load = await os.loadavg()[1]
			this.set(load)
		},
	})
)

register.registerMetric(
	new client.Gauge({
		name: "node_load_duration_15m",
		help: "Average Load during 15m",
		async collect() {
			const load = await os.loadavg()[2]
			this.set(load)
		},
	})
)

// Home route
app.get("/", (req, res) => {
	res.send("Hello world")
})

// Display hostname endpoint
app.get("/info/hostname", (req, res) => {
	res.send(req.hostname)
})

// Display Uptime Endpoint
app.get("/info/uptime", (req, res, err) => {
	const upTime = process.uptime()
	res.json({ uptime: upTime })
})

// Display Average Load Endpoint
app.get("/info/load", (req, res, err) => {
	const avgLoad = os.loadavg()
	res.json({ "1m": avgLoad[0], "5m": avgLoad[1], "15m": avgLoad[2] })
})

// Metrics Endpoint
app.get("/metrics", async (req, res) => {
	res.set("Content-Type", register.contentType)
	res.send(await register.metrics())
})

// App Listen
app.listen(23333, () => {
	console.log("Server running successfully! Running on: 23333")
})
