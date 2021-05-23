import { fluentProvide } from "inversify-binding-decorators";

export const provideThrowable = (identifier, name) => {
  return fluentProvide(identifier).whenTargetNamed(name).done();
};
