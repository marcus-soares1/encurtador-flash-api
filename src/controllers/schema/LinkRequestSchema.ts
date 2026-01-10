import z from "zod";

export const LinkRequestSchema = z.object({
    short_link: z.string({ required_error: 'link is required' })
})

export const LinkCreateSchema = z.object({
    name: z.string(),
    original_link: z.string(),
    expiration_date: z.date().optional()
})

export const LinkUpdateSchema = z.object({
    name: z.string().optional(),
    user_id: z.string().optional(),
    expirantion_date: z.date().optional()
})