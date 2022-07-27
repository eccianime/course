import { Router } from 'express'

const routes = Router();

routes.get('/', (request, response) => {
    response.json({'mensaje': 'Hola Dev'})
})
routes.get('/1', (request, response) => {
    response.json({'mensaje': 'Hola Dev 1'})
})
routes.get('/2', (request, response) => {
    response.json({'mensaje': 'Hola Dev 2'})
})

export default routes;