import { prisma } from "../database/prismaDatabase";
import createShortId from "../utils/createShortId";
import { ICreateLink, ILink, ILinkRepository, ILinkWhereParams, IUpdateLink } from "./interfaces/ILinkRepository";

export class PrismaLinkRepository implements ILinkRepository {

    async getAll(linkAttributes?: ILinkWhereParams): Promise<ILink[] | null> {
        const shortLink: ILink[] | null = await prisma.shortedLinks.findMany(linkAttributes)

        return shortLink
    }
    async get(linkAttributes: ILinkWhereParams): Promise<ILink | null> {
        const shortLink: ILink | null = await prisma.shortedLinks.findFirst(linkAttributes)

        return shortLink
    }

    async create(linkAttributes: ICreateLink): Promise<ILink> {
        const shortLink: ILink = await prisma.shortedLinks.create({data: { short_link: createShortId(),... linkAttributes}})

        return shortLink
    }

    async update(short_link: string, linkAttributes: IUpdateLink): Promise<ILink | null> {
        const shortLink: ILink = await prisma.shortedLinks.update({where: {short_link}, data: linkAttributes})
    
        return shortLink
    }

    async delete(short_link: string): Promise<ILink | null> {
        const shortLink: ILink = await prisma.shortedLinks.delete({where: {short_link}}) 

        return shortLink
    }

    async click(short_link: string): Promise<ILink | null> {
        const link: ILink = await prisma.shortedLinks.update({where: {short_link}, data: {
            clicks_count: {increment: 1}
        }})

        return link
    }
}