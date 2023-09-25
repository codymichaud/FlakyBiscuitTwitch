// mongodb.js

import { MongoClient } from 'mongodb'

const uri = process.env.NEXT_PUBLIC_MONGODB_URI
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client
let clientPromise

if (!process.env.NEXT_PUBLIC_MONGODB_URI) {
  throw new Error('Add Mongo URI to .env.local')
}
console.log('checking node_env', process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
    // Replacement
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise

export async function getStaticProps() {
  const client = await clientPromise;

  const db = client.db('Cluster0')
  const data = await db.collection('users')
  console.log('oh boy, lets see what happens', data)
}
