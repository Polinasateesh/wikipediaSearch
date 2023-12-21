const express = require('express');
const wikipediaController = require('../controllers/wikipediaController');
const authenticateJWT=require('../middleware/auth')
const router = express.Router();

router.get('/api/wikipedia/search/:searchTerm', wikipediaController.searchWikipedia);
router.get('/api/wikipedia/read/:slug', wikipediaController.readWikipedia);
router.get('/api/wikipedia/dashboard', wikipediaController.dashboard)

module.exports = router;
