import { Request, Response } from 'express';
import { CreateProductService } from '../../services/product/CreateProductService';

class CreateProductController {
    async handle(req: Request, res: Response) {

        const { name, price, description, category_id } = req.body;

        let banner = '';

        const createProductService = new CreateProductService();

        // file é o campo da foto configurado para passar pelo middleware do multer 
        if (!req.file) {
            throw new Error('error upload file')
        } else {
            // renomeando de filename -> banner
            const { originalname, filename: banner } = req.file;

            console.log(banner);

            // se chegar até aqui, já faz o upload na pasta tmp (afinal, já passou pelo middleware multer)
            const product = await createProductService.execute({
                name,
                price,
                description,
                banner,
                category_id
            })

            return res.json(product);
        }
    }
}

export { CreateProductController }