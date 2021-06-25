const express = require('express')
const router = express.Router()
//getting all
router.get("/", (req, res) => {
	res.send('Hello world')
})

//getting one
router.get("/:id", (req, res) => {
	
})

//creating one
router.post("/", (req, res) => {
	
})

//updating one
router.patch("/", (req, res) => {
	
})

//deleting one
router.delete("/:id", (req, res) => {
	
})

module.exports = router
