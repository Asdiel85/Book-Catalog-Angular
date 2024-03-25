const router = require('express').Router();
const { routeGuard } = require("../middlewares/authMiddleware");
const bookManager = require('../managers/bookManager')

router.get('/', async (req, res) => {
    try {
        const data = await bookManager.getBooks();
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

module.exports = router;