import "reflect-metadata";
import "./ioc/loader";

import { InversifyKoaServer } from "inversify-koa-utils";
import { buildProviderModule } from "inversify-binding-decorators";
import { Container } from "inversify";

const container = new Container();
container.load(buildProviderModule());

const server = new InversifyKoaServer(container);

let app = server.build();

app.listen(3000, () => {
  console.log("启动成功");
});
