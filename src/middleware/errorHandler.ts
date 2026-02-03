import { ErrorRequestHandler } from "express";
import { HttpError } from "../errors/HttpError";
import { ZodError } from "zod";
import { Prisma } from "@prisma/client";

export const errorHandler: ErrorRequestHandler = async (err, req, res, next)=> {
    if (err instanceof ZodError) {
        const fields: Record<string, string> = {}

        err.errors.forEach(error => {
        const field = error.path.join('.') || 'body'
            fields[field] = error.message
        })

        return res.status(400).json({
        message: 'Dados inválidos',
            fields
        })
    } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2025') {
            return res.status(404).json({
                message: 'Registro não encontrado'
            })
        }
    } else if (err instanceof HttpError) {
        res.status(err.status).json({message: err.message})

    } else if (err instanceof Error)  {
        res.status(400).json({message: err.message})
    }else {
        res.status(500).json({message: err.message})
    }
}