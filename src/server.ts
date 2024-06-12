import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { router } from './routes'
import path from 'path';

const app = express();

app.use(express.json());

app.use(cors())

app.use(router);

app.use(
    '/files', //vou passar isso para acessar
    express.static(path.resolve(__dirname, '..', 'tmp')) //e é daqui que vai buscar as imagens
    // ex: localhost:3333/files/nomedafoto.jpg
)

//middleware para passar e tratar erros de forma amigável
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })
})

app.listen(3333, () => console.log('server online at port 3333 tchain'))