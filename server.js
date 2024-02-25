import { DatabaseMemory } from './database-memory.js'
import { fastify } from 'fastify'

const server = fastify()

const database = new DatabaseMemory
// criar videos
server.post('/videos', (request, reply) => {
    const { title, description, duration} = request.body
    
    database.create({
        title: title,
        description: description,
        duration: duration
    })
    console.log(database.list())

    return reply.status(201).send()
})

server.get('/videos', (request, reply) => {
    const videos = database.list()

    return reply.send(videos)
})
// atualizar video
server.put('/videos/:id', (request, reply) => {
    const videoId = request.params.videoId
    const { title, description, duration} = request.body

    const video = database.update(videoId, {
        title: title,
        description: description,
        duration: duration
    })
})
// deletar video
server.delete('/videos/:id', () => {
    
})
server.listen({
    port: 3333,
})