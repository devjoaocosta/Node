import { createServer } from 'node:http'

const server = createServer((request, response) => {
    response.write('ola')
    return response.end()
} )

server.listen(3333)

