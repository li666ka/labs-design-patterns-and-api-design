import swaggerJsdoc from 'swagger-jsdoc'

const swaggerDefinition = {
    openapi: '3.0.4',
    info: {
        title: 'E-Commerce API',
        version: '1.0.0',
        description: 'RESTful API для інтернет-магазину',
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Local server',
        },
    ],
}

const options = {
    swaggerDefinition,
    apis: ['./routes/orders.ts', './routes/products.ts'],
}

const swaggerSpec = swaggerJsdoc(options)

export default swaggerSpec