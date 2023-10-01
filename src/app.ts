import express, { Application, Request, Response } from 'express'
import { DataSource } from 'typeorm'
const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "P@ssword1",
    database: "node_ecommerce",

})
const app: Application = express()

const port: number = 3001

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

app.get('/', (req: Request, res: Response) => {
    res.send('Hi mom!')
})

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})
