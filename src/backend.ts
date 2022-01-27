import express from 'express'

const app = express()
const port = 3000

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", '*')
	res.setHeader("Access-Control-Allow-Headers", 'authorization')
	if (req.method === "OPTIONS") {
		res.status(200).send()
	} else {
		next()
	}
})

app.get('/users', (req, res) => {
	try {
		const auth = req.headers.authorization?.split(' ')[1]
		if (!auth || auth !== 'tok_123abc') {
			res.status(401).send()
		} else {
			res.json([{id: 1, name: 'Stacy', score: 132}, {id: 2, name: 'Doug', score: 56}, {id: 3, name: 'Paul', score: 42}, {id: 4, name: 'Janet', score: 301}, {id: 5, name: 'Cory', score: 298}, {id: 6, name: 'Aaron', score: 132}])
		}
	} catch (e) {
		res.status(500).send()
	}
})

app.listen(port, () => {
	console.log(`App listening on port: ${port}`)
})
