const express = require('express')
const router = express.Router()
const Food = require('../models/food')

//getting all
router.get("/", async (req, res) => {
	try{
		const foods= await Food.find()
		res.send(foods)
	} catch (err) {
		res.status(500).json({ message: err.message})
	}
})

//getting one
router.get("/:id", (req, res) => {
	res.send(req.params.id)
})

//creating one
router.post("/", async (req, res) => {
	const food = new Food({
		name:res.body.name,
		orderChannel: req.body.orderChannel
	})
	try{
		const newFood = await food.save() 
		res.status(201).json(newFood)
	} catch (err) {
		res.status(400).json({message: err.message})
	}
})

//updating one
router.patch("/", (req, res) => {
	
})

//deleting one
router.delete("/:id", (req, res) => {
	
})

module.exports = router
