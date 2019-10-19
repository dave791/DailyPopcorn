const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    title: 'Daily Popcorn',
    description: 'A forum for movie fanatics.',
  });
});


module.exports = router;
