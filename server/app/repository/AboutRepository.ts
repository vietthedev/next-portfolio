import RepositoryBase from "./base/RepositoryBase";

import AboutSchema from "../data-access/schemas/AboutSchema";
import IAboutModel from "../model/interfaces/IAboutModel";

export default class AboutRepository extends RepositoryBase<IAboutModel> {
  constructor() {
    super(AboutSchema);
  }
}
