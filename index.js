const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const server = express()
server.use(express.json())

const PORT = process.env.PORT || 6000

// const db = require('./data/db-config')

// test data - configure db 
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
]


// Root route
server.get('/', (req, res) => {
    res.send('Express is Working!!')
})

// GET /users route to return a list of users
server.get('/users', (req, res) => {
  res.status(200).json(users)
})

// POST request handler for root
server.post('/', (req, res) => {
    res.send('Got a POST request')
  })

  // PUT request handler for /user
server.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
  })

  // DELETE request handler for /user
server.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
  })

server.listen(PORT, () => 
    console.log(`Serving is running on port ${PORT}`)
)