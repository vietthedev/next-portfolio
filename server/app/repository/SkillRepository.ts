import RepositoryBase from "./base/RepositoryBase";

import SkillSchema from "../data-access/schemas/SkillSchema";
import ISkillModel from "../model/interfaces/ISkillModel";

export default class SkillRepository extends RepositoryBase<ISkillModel> {
  constructor() {
    super(SkillSchema);
  }
}
