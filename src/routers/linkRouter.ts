import { Router } from "express"
import { linkController } from "../conteiner"


const linkRouter = Router()
linkRouter.get('/:short_link', linkController.access)
linkRouter.get('/:short_link/info', linkController.getLink)
linkRouter.get('/', linkController.geAllLinks)
linkRouter.post('/', linkController.create)
linkRouter.put('/:short_link', linkController.update)
linkRouter.delete('/:short_link', linkController.delete)

export { linkRouter }