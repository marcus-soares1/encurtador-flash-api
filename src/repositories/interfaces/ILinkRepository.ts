export interface ILink {
    short_link: String
    original_link: String
    user_id?: String
    expiration_date?: Date
    clicks_count: number
    updated_at: Date
    created_at: Date
}

export interface ICreateLink {
    original_link: String
    user_id?: String
    expiration_date?: Date
}

export interface IUpdateLink {
    user_id: String
}

export interface ILinkRepository {
    getById(linkId: string): Promise<String | null>
    create(linkAttributes: ICreateLink): Promise<ILink>
    update(linkId: string, user_id: IUpdateLink): Promise<ILink | null>
    delete(linkId: string): Promise<ILink | null>
}