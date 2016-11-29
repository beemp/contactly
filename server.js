const express = require('express')
const app = express()


app.set('port', (process.env.PORT || 3000))
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.send('Hi')
})

app.listen(app.get('port'))
console.log(`running 0.0.0.0:${app.get('port')}`)
