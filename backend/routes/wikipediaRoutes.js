const express = require('express');
const authenticateJWT=require('../middlewar/auth')
const wikipediaController = require('../controllers/wikipediaController');
const router = express.Router();
router.post('/login',wikipediaController.userLogin)
router.get('/api/wikipedia/search/:searchTerm', wikipediaController.searchWikipedia);
router.get('/api/wikipedia/read/:slug', wikipediaController.readWikipedia);
router.get('/api/wikipedia/dashboard',authenticateJWT, wikipediaController.dashboard)



module.exports = router;
