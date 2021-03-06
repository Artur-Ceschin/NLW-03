import { Router} from 'express'
import OrphanageController from './controllers/OrphanageController'

const routes = Router()

routes.post('/orphanages', OrphanageController.create)
routes.get('/orphanages', OrphanageController.index)
routes.get('/orphanages/:id', OrphanageController.show)

export default routes