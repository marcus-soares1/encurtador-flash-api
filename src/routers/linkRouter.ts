import express from "express"
import { linkController } from "../conteiner"

const linkRouter = express.Router()

// GET
linkRouter.get('/:short_link/info', linkController.getLink)
linkRouter.get('/:short_link', linkController.access)
linkRouter.get('/', linkController.getAllLinks)

// POST
linkRouter.post('/', linkController.create)

// PUT
linkRouter.put('/:short_link', linkController.update)

// DELETE
linkRouter.delete('/:short_link', linkController.delete)

export { linkRouter }