require("dotenv").config()
const os = require("os")
const process = require("process")
const express = require("express")
const cors = require("cors")

// Registering app
const app = express()
app.use(express.json())

app.get("/", (req, res) => {
	var start = new Date()
	var cronJob = 1000

	setTimeout((arg) => {
		var end = new Date() - start
		histogram.observe(end / 1000)
	}, cronJob)

	counter.inc()

	res.send("Hello World!\n")
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

app.listen(23333, () => {
	console.log("Server running successfully! Running on: 23333")
})
