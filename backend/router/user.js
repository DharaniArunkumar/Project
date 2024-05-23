const express=require('express')
const {signup,activate,signin}=require('../controllers/auth-controller')
const bodyparser=require('body-parser')

const router=express.Router()
router.use(bodyparser.json())

router.post('/signup',signup)
router.get('/activate/:activationCode',activate)
router.post('/signin',signin)

router.get("/", (req, res) => {
    res.send("auth Page")

})

module.exports=router