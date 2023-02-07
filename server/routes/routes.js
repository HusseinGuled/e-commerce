import exppress from 'express'
import { getAllProducts, saveProduct } from '../controllers/products.js'

const router= exppress.Router()

router.get("/", (req, res)=>{
    res.send("maxaa rabtaa")
})
router.post('/save-product', saveProduct),
router.get('/get-all-products', getAllProducts)
export default router;