const mongoose = require('mongoose')
const {
  dbMongo: { host, port, name }
} = require('../configs/config.app')
const connectionString = `mongodb://${host}:${port}/${name}`

class MongoDB {
  constructor() {
    this.connect()
  }

  connect(type = 'mongodb') {
    if (1 === 1) {
      mongoose.set('debug', true)
      mongoose.set('debug', { color: true })
    }

    mongoose
      .connect(connectionString)
      .then((_) => console.log('Connect to db success'))
      .catch((error) => console.log('Unable connect to db'))
  }

  static getInstance() {
    if (!MongoDB.instance) {
      MongoDB.instance = new MongoDB()
    }

    return MongoDB.instance
  }
}

const instanceMongoDb = MongoDB.getInstance()

module.exports = instanceMongoDb
