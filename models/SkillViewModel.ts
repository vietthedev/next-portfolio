import ISkillViewModel from "./interfaces/ISkillViewModel";

export default class SkillViewModel implements ISkillViewModel {
  private localName: string;

  get name() {
    return this.localName;
  }

  set name(name) {
    this.localName = name;
  }

  private localType: number;

  get type() {
    return this.localType;
  }

  set type(type) {
    this.localType = type;
  }
}
