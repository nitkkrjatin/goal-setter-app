const express=require("express")
const router=express.Router()
const {getGoals, setGoal, updateGoal, deleteGoal} =require("../controllers/goalController")

const {protect}=require('../middleware/authMiddleware')

router.route('/').get(protect,getGoals).post(protect,setGoal)
//BOTH THINGS ARE SAME
//router.get("/",getGoals)
//router.post("/",setGoal)

router.put("/:id",protect,updateGoal)
router.delete("/:id",protect,deleteGoal)
module.exports=router