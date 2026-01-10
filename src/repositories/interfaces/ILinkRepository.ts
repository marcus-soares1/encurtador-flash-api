export interface ILink {
    short_link: string
    original_link: string
    user_id: string | null
    expiration_date: Date |null
    clicks_count: number
    user?: any
    updated_at: Date
    created_at: Date
}

export interface ICreateLink {
    name: string
    original_link: string
    user_id?: string | null
    expiration_date?: Date | null
}

export interface IUpdateLink {
    name?: string
    user_id?: string,
    expirantion_date?: Date
}

export interface ILinkWhereParams {
    where?: {
        short_link?: string
        original_link?: string
        user_id?: string
        expiration_date?: Date
        clicks_count?: number
    }
}


export interface ILinkRepository {
    getAll(linkAttributes?: ILinkWhereParams): Promise<ILink[] | null>
    get(linkAttributes: ILinkWhereParams): Promise<ILink | null>
    create(linkAttributes: ICreateLink): Promise<ILink>
    update(short_link: string, user_id?: IUpdateLink): Promise<ILink | null>
    delete(short_link: string): Promise<ILink | null>
    click(short_link: string): Promise<ILink | null>
}