import { CreateCategoryService } from "../../services/category/CreateCategoryService";
import { Request, Response } from 'express'
class CreateCategoryController {
    async handle(req: Request, res: Response) {
        const createCategoryService = new CreateCategoryService();

        const category = await createCategoryService.execute();

        return res.json(category);

    }
}

export { CreateCategoryController }