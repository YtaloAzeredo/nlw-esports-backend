import { Router } from 'express'

const router = Router()

router.get('/ads', (req, res) => {
  return res.json([
    { }
  ])
})

export default router
