import { SkillType } from "../../config/constants/constants";

export default class SkillModel {
  get name(): string {
    return this.name;
  }

  get rating(): number {
    return this.rating;
  }

  get type(): SkillType {
    return this.type;
  }
}
