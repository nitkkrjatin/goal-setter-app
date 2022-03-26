const asyncHandler=require('express-async-handler')
// @desc get goals
// @route GET/api/goals
//  @access PRIVATE
const getGoals= asyncHandler(async(req,res) => {
    res.status(200).json({message : "Get goals"})
})
// @desc set goal
// @route POST/api/goals
//  @access PRIVATE
const setGoal= asyncHandler(async(req,res) => {
    if(!req.body.text){
        res.status(400)//.json({message: 'Please add a text field'})
        throw new Error('Please add a text field');
        
    }

    res.status(200).json({message : "Create goal"})
})
// @desc update goal
// @route PUT/api/goal/:id
//  @access PRIVATE
const updateGoal= asyncHandler(async(req,res) => {
    res.status(200).json({message : `Update goal ${req.params.id}`})
})
// @desc delete goal
// @route DELETE/api/goals/:id
//  @access PRIVATE
const deleteGoal= asyncHandler(async(req,res) => {
    res.status(200).json({message : `Delete goal ${req.params.id}`})
})

module.exports={
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}