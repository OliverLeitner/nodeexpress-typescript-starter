import express, { Request, Response } from 'express';
import { Http2SecureServer, Http2Server } from 'http2';

export default class ServerRunner {
    app = express()
    server: Http2Server = require("http").Server(this.app)
    sserver: Http2SecureServer = require("https").Server(this.app)

    constructor(port: number = 3333, host: string = "0.0.0.0") {

        // loading in all the url resolvers etc
        this.resolvePaths()

        // starting the server with the given parms
        this.startServer(port, host)
    }

    /**
     * add all your resolving paths here
     */
    protected resolvePaths(): void {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({ data: 'hello world' });
        });
    }

    /**
     * starting up the local express server
     * @param port server port to listen on
     * @param host server host to listen on
     */
    protected startServer(port: number = 3333, host: string = "0.0.0.0") {
        this.server.listen(port, host, () => console.log(`Example app listening on port ${port}!`));
    }
}
new ServerRunner()