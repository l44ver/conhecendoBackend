import fastify from "fastify"
import { request } from "http"

const http = fastify()

http.get('/ping', async (request, reply) => {
    return "pong"
})

http.get("/gatos_fofos", async (request, reply) => {
    return 
})

http.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})