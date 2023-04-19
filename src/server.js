
const serverHost = process.env.SERVER_HOST
const serverPort = process.env.SERVER_PORT
const dbHost = process.env.DB_HOST
const dbPassword = process.env.DB_PASSWORD

console.log('Environment', {
    serverHost,
    serverPort,
    dbHost,
    dbPassword
})
