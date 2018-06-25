import ISkillModel from "../model/interfaces/ISkillModel";
import SkillRepository from "../repository/SkillRepository";
import ISkillBusiness from "./interfaces/ISkillBusiness";

export default class SkillBusiness implements ISkillBusiness {
  private SkillRepository: SkillRepository;

  constructor() {
    this.SkillRepository = new SkillRepository();
  }

  public async find(conditions?: any): Promise<ISkillModel[]> {
    return await this.SkillRepository.find(conditions);
  }
}
