import { HttpError } from "../errors/HttpError"
import { ICreateLink, ILink, IUpdateLink } from "../repositories/interfaces/ILinkRepository"
import { PrismaLinkRepository } from "../repositories/PrismaLinkRepository"

export class LinkService {
    constructor(private readonly linkRepository: PrismaLinkRepository) {}

    private async addClick(short_link: string) {
        const link = await this.linkRepository.click(short_link)
        return link
    }

    async access (short_link: string): Promise<string> {
        const link = await this.linkRepository.get({where: {short_link}})
        const today = new Date()
        if(!link || link.expiration_date && today > link.expiration_date) throw new HttpError('This link is not valid or is expired.')

        await this.addClick(short_link)

        return link.original_link
    }

    async getLinkInfo (short_link: string): Promise<ILink | null> {
        const link = await this.linkRepository.get({where: {short_link}})

        return link
    }

    async getUserLinks (user_id: string): Promise<ILink[] | null> {
        const links = await this.linkRepository.getAll({where: {user_id}})

        return links
    }

    async getAllLinks(): Promise<ILink[] | null> {
        const links = await this.linkRepository.getAll()

        return links
    }

    async createShortLink (linkAttributes: ICreateLink): Promise<ILink> {
        const shortLink = await this.linkRepository.create(linkAttributes)

        return shortLink
    }

    async updateLink (short_link: string,linkAttributes: IUpdateLink): Promise<ILink | null> {
        const shortLink = await this.linkRepository.update(short_link, linkAttributes)

        if(!shortLink) throw new HttpError('This link is not valid or is expired.')

        return shortLink
    }

    async deleteLink (short_link: string): Promise<ILink | null> {
        const link = await this.linkRepository.delete(short_link)

        if(!link) throw new HttpError('This link was not found.')

        return link
    }
}