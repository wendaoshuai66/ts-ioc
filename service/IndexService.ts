import { IIndex } from "../interface/IIndex";
import { Model } from "../models/User";
import { provide } from "inversify-binding-decorators";
import TAGS from "../constant/tags";
@provide(TAGS.IndexService)
export class IndexService implements IIndex {
  private userLocal: Model.User[] = [
    {
      email: "1111@163.com",
      name: "111",
    },
    {
      email: "222@163.com",
      name: "22222",
    },
  ];
  getUser(id: number) {
    let result: Model.User;
    result = this.userLocal[id];
    return result;
  }
}
