const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 4000

console.log(__dirname);

express()
  .use(express.static('./public'))
  .set('views', './views')
  .set('view engine', 'pug')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
