import { Router } from 'express'
import { getRandomResponse } from '../response-randomizer';

const router = Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "order_001"
 *         productId:
 *           type: string
 *           example: "123"
 *         quantity:
 *           type: integer
 *           example: 2
 *         status:
 *           type: string
 *           example: "pending"
 *
 */


/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Отримати список замовлень
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Список замовлень
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
router.get('/', (req, res) => {
    const randomResponse = getRandomResponse()
    res.status(randomResponse.status).json({ message: randomResponse.message })
});

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Створити нове замовлення
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       201:
 *         description: Замовлення створено
 *       400:
 *         description: Невірні дані запиту
 */
router.post('/', (req, res) => {
    const randomResponse = getRandomResponse()
    res.status(randomResponse.status).json({ message: randomResponse.message })
});

/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Отримати замовлення за ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Ідентифікатор замовлення
 *     responses:
 *       200:
 *         description: Замовлення знайдено
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Замовлення не знайдено
 */
router.get('/:id', (req, res) => {
    const randomResponse = getRandomResponse()
    res.status(randomResponse.status).json({ message: randomResponse.message })
});

/**
 * @swagger
 * /orders/{id}:
 *   patch:
 *     summary: Оновити статус або кількість товарів у замовленні (частково)
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Ідентифікатор замовлення
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       description: Поля для часткового оновлення
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               quantity:
 *                 type: integer
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Замовлення оновлено
 *       400:
 *         description: Невірні дані запиту
 *       404:
 *         description: Замовлення не знайдено
 */
router.patch('/:id', (req, res) => {
    const randomResponse = getRandomResponse()
    res.status(randomResponse.status).json({ message: randomResponse.message })
});

export default router