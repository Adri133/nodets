import express, { Request, Response } from 'express'

export default class Server {
  readonly port: number

  constructor (port: number) {
    this.port = port
  }

  start () {
    const app = express()
    app.get('/', function (req: Request, res: Response) {
      res.send('Salut les gens')
    })
    app.listen(this.port, function () {
      console.log('Serveur démaré')
    })
  }

}