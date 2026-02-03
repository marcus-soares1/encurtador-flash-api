import { LinkController } from "./controllers/LinkController";
import { PrismaLinkRepository } from "./repositories/PrismaLinkRepository";
import { LinkService } from "./services/LinkSerivce";

// Repositories
export const linkRepository = new PrismaLinkRepository()


// Services
export const linkService = new LinkService(linkRepository)


// Controllers
export const linkController = new LinkController(linkService)