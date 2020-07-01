const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', __dirname + '/views')
  .set('view engine', 'pub')
  .get('/', (req, res) => res.render('form'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
