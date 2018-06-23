import IBusinessBase from "../../../app/business/interfaces/base/IBusinessBase";
import IReadController from "../common/IReadController";

// tslint:disable-next-line:no-empty-interface
export default interface IControllerBase<T extends IBusinessBase<object>>
  extends IReadController {}
