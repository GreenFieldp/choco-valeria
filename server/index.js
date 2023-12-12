const express = require('express')
const app = express()
const PORT = 3000;
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes/index.js')
const { db } = require('./database/index.js')

app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`Express app listening on port http://localhost:${PORT}`);
});
