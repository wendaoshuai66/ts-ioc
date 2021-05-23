import { interfaces, httpGet, controller, TYPE } from "inversify-koa-utils";
import { inject } from "inversify";
import { IIndex } from "../interface/IIndex";
import { IRouterContext } from "koa-router";
import TAGS from "../constant/tags";
import { provideThrowable } from "../ioc";
@provideThrowable(TYPE.Controller, "IndexController")
@controller("/")
export default class IndexController implements interfaces.Controller {
  private indexService: IIndex;
  constructor(@inject(TAGS.IndexService) indexService: IIndex) {
    this.indexService = indexService;
  }
  @httpGet("/")
  private async index(ctx: IRouterContext, next: Promise<unknown>): Promise<any> {
    const data = this.indexService.getUser(0);
    ctx.body = {
      data,
    };
  }
}
