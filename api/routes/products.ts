import { Router } from 'express'
import { getRandomResponse } from '../response-randomizer';

const router = Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "123"
 *         name:
 *           type: string
 *           example: "Smartphone X"
 *         price:
 *           type: number
 *           example: 999.99
 *         description:
 *           type: string
 *           example: "Top-notch smartphone"
 *
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Отримати список усіх продуктів
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Успішне повернення списку продуктів
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get('/', (req, res) => {
    const randomResponse = getRandomResponse('GET')
    setTimeout(() => {
        res.status(randomResponse.status).json({ message: randomResponse.message })
    }, randomResponse.delay)
});

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Створити новий продукт
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Продукт створено успішно
 *       400:
 *         description: Невірні дані запиту
 */
router.post('/', (req, res) => {
    const randomResponse = getRandomResponse('POST')
    setTimeout(() => {
        res.status(randomResponse.status).json({ message: randomResponse.message })
    }, randomResponse.delay)
});

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Отримати продукт за ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Ідентифікатор продукту
 *     responses:
 *       200:
 *         description: Продукт знайдено
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Продукт не знайдено
 */
router.get('/:id', (req, res) => {
    const randomResponse = getRandomResponse('GET')
    setTimeout(() => {
        res.status(randomResponse.status).json({ message: randomResponse.message })
    }, randomResponse.delay)
});

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Повністю оновити продукт за ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Ідентифікатор продукту
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Продукт оновлено успішно
 *       400:
 *         description: Невірні дані запиту
 *       404:
 *         description: Продукт не знайдено
 */
router.put('/:id', (req, res) => {
    const randomResponse = getRandomResponse('PUT')
    setTimeout(() => {
        res.status(randomResponse.status).json({ message: randomResponse.message })
    }, randomResponse.delay)
});

/**
 * @swagger
 * /products/{id}:
 *   patch:
 *     summary: Часткове оновлення продукту за ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Ідентифікатор продукту
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Продукт частково оновлено
 *       404:
 *         description: Продукт не знайдено
 */
router.patch('/:id', (req, res) => {
    const randomResponse = getRandomResponse('PATCH')
    setTimeout(() => {
        res.status(randomResponse.status).json({ message: randomResponse.message })
    }, randomResponse.delay)
});

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Видалити продукт за ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Ідентифікатор продукту
 *     responses:
 *       204:
 *         description: Продукт видалено
 *       404:
 *         description: Продукт не знайдено
 */
router.delete('/:id', (req, res) => {
    const randomResponse = getRandomResponse('DELETE')
    setTimeout(() => {
        res.status(randomResponse.status).json({ message: randomResponse.message })
    }, randomResponse.delay)
});

export default router;