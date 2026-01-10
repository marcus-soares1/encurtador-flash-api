import { Handler } from "express"
import { LinkCreateSchema, LinkRequestSchema, LinkUpdateSchema } from "./schema/LinkRequestSchema"
import { HttpError } from "../errors/HttpError"
import { LinkService } from "../services/LinkSerivce"

export class LinkController {
    constructor(private readonly linkService: LinkService) {}

    // GET /:short_link
    access: Handler = async (req, res, next) => {
        try {
            const { short_link } = LinkRequestSchema.parse(req.params)
            const fullLink = await this.linkService.access(short_link)

            res.redirect(fullLink)
        } catch (error) {
            next(error)
        }
    }

    // GET /:short_link/info
    getLink: Handler= async (req, res, next) => {
        try {
            const { short_link } = LinkRequestSchema.parse(req.params)
            const links = await this.linkService.getLinkInfo(short_link)
            
            res.json(links)
        } catch (error) {
            next(error)

        }
    }

    // GET /
    geAllLinks: Handler = async (req, res, next) => {
        try {
            const links = await this.linkService.getAllLinks()
            
            res.json(links)
        } catch (error) {
            next(error)

        }
    }

    // POST /
    create: Handler = async (req, res, next) => {
        try {
            const linkAttributes = LinkCreateSchema.parse(req.body)
            const link = await this.linkService.createShortLink(linkAttributes)

            res.status(201).json(link)
        } catch (error) {
            next(error)

        }
    }

    // PUT/:short_link
    update: Handler = async (req, res, next) => {
        try {
            const { short_link } = LinkRequestSchema.parse(req.params)
            const linkAttributes = LinkUpdateSchema.parse(req.body)

            if(!linkAttributes) throw new HttpError('Update link schema must be at leat one attribute: name, user_id, expirantion_date')
            
            const link = await this.linkService.updateLink(short_link, linkAttributes)

            res.json(link)
        } catch (error) {
            next(error)

        }
    }

    delete: Handler = async (req, res, next) => {
        const { short_link } = LinkRequestSchema.parse(req.params)

        const link = await this.linkService.deleteLink(short_link)

        res.json(link)
    }
}