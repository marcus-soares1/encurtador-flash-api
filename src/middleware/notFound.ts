import { Request, Response, NextFunction } from 'express'

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404).json({
    message: 'Route not found',
    method: req.method,
    path: req.originalUrl
  })
}
