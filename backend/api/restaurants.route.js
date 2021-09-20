import express from 'express'
const router = express.Router()
router.route('/').get((req, res) => res.send('<h1>hello world</h1>'))
export default router
