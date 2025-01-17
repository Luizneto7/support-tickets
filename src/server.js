import http from "node:http";

import { jsonBodyHandler } from "./middlewares/jsonBodyHandler.js";
import { routeHandler } from "./middlewares/routesHandler.js";

async function listener(req, res) {
  await jsonBodyHandler(req, res);

  routeHandler(req, res);
}

http.createServer(listener).listen(3333);
