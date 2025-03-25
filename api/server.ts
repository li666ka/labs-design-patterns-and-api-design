import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './swagger'
import productsRouter from './routes/products'
import ordersRouter from './routes/orders'
import integrationRouter from './routes/integration'
import morgan from 'morgan';
import cors from 'cors';


const app = express()
app.use(express.json())
app.use(morgan('dev'));
app.use(cors({
    origin: ['http://localhost:3001'],
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-requested-with']
}));
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use('/products', productsRouter)
app.use('/orders', ordersRouter)
app.use('/integration', integrationRouter)

export default app;