const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const server = express()
server.use(express.json())

const PORT = process.env.PORT || 6000

const db = require('./data/db-config')

// test data - configure db 
// const users = [
//   { id: 1, name: 'John Doe', email: 'john@example.com' },
//   { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
// ]

// Root route
server.get('/', (req, res) => {
    res.send('Express is Working!!')
})

// GET /users route to return a list of users
server.get('/users', async (req, res) => {
  try {
    const users = await db('users')
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error })
  }
})

  // POST request handler for /users
server.post('/users', async (req, res) => {
  const { name, email } = req.body

  if(!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' })
  }

  try {
    const [ id ] =  await db('users').insert(req.body)
    const newUser = await db('users').where({ id }).first()
    res.status(201).json(newUser) 
    } catch (error) {
      res.status(500).json({ message: 'Error creating user', error })
    }
  })

  // DELETE request handler for /users
server.delete('/users', (req, res) => {
    res.send('Got a DELETE request at /user')
  })

server.listen(PORT, () => 
    console.log(`Serving is running on port ${PORT}`)
)

