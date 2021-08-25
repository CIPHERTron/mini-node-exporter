require("dotenv").config()
const os = require("os")
const process = require("process")
const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
	res.send("Hello World!")
})

app.get("/info/hostname", (req, res) => {
	res.send(req.hostname)
})

app.get("/info/uptime", (req, res, err) => {
	const upTime = process.uptime()
	res.json({ uptime: upTime })
})

app.listen(23333, () => {
	console.log("Server running successfully! Running on: 23333")
})
