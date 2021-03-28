import * as express from "express"
import { UserController } from "./api/controllers/UserController"
import * as bodyParser from 'body-parser'
import { UserModel } from "./api/models/user"

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use('/users', (new UserController(new UserModel())).router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`TypeScript MVC app listening at http://localhost:${port}`)
})