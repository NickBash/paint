const express = require('express')
const app = express()

const cors = require('cors')
const WSServer = require('express-ws')(app)
const aWss = WSServer.getWss()
const fs = require('fs')
const path= require('path')

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.ws('/', (ws, res) => {
	console.log('ПОДКЛЮЧЕНИЕ')
	ws.send(JSON.stringify('Ты подключился'))
	ws.on('message', (msg) => {
		msg = JSON.parse(msg)
		switch (msg.method) {
			case "connection":
				connectionHandler(ws, msg)
				break
			case "draw":
				broadcastConnection(ws, msg)
				break
			default:
				break
		}
		console.log(msg)
	})
})

app.listen(PORT, () => console.log(`Server, port: ${PORT}`))

const connectionHandler = (ws, msg) => {
	ws.id = msg.id
	broadcastConnection(ws, msg)
}

const broadcastConnection = (ws, msg) => {
	aWss.clients.forEach(client => {
		if (client.id === msg.id) {
			client.send(JSON.stringify(msg))
		}
	})
}
