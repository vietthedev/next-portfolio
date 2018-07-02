import { SkillType } from "../../config/constants/constants";

export default class SkillModel {
  get name(): string {
    return this.name;
  }

  get type(): SkillType {
    return this.type;
  }
}
