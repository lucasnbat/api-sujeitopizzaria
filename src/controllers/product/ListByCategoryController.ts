import { Request, Response } from 'express';

import { ListByCategoryService } from '../../services/product/ListByCategoryService';


class ListByCategoryController {
    async handle(req: Request, res: Response) {
        // forçar a tipagem indicando que será uma string o que ele receberá
        // enviado via query
        const category_id = req.query.category_id as string;

        const listByCategory = new ListByCategoryService();

        const productsFiltered = await listByCategory.execute({
            category_id
        });

        return res.json(productsFiltered);
    }
}

export { ListByCategoryController }