require('dotenv').config()

const dev = {
  app: {
    port: process.env.DEV_APP_PORT || 8888
  },
  dbMongo: {
    host: process.env.DEV_DB_HOST || 'localhost',
    port: process.env.DEV_DB_PORT || 27017,
    name: process.env.DEV_DB_NAME || 'redisDev'
  }
}

const pro = {
  app: {
    port: process.env.APP_PORT || 8888
  },
  dbMongo: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 27017,
    name: process.env.DB_NAME || 'redisShop'
  }
}

const config = { dev, pro }

const env = process.env.NODE_ENV

module.exports = config[env]
