import IAboutModel from "../model/interfaces/IAboutModel";
import AboutRepository from "../repository/AboutRepository";
import IAboutBusiness from "./interfaces/IAboutBusiness";

export default class AboutBusiness implements IAboutBusiness {
  private aboutRepository: AboutRepository;

  constructor() {
    this.aboutRepository = new AboutRepository();
  }

  public async find(conditions?: any): Promise<IAboutModel[]> {
    return await this.aboutRepository.find(conditions);
  }
}
