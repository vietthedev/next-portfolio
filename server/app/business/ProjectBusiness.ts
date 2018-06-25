import IProjectModel from "../model/interfaces/IProjectModel";
import ProjectRepository from "../repository/ProjectRepository";
import IProjectBusiness from "./interfaces/IProjectBusiness";

export default class ProjectBusiness implements IProjectBusiness {
  private ProjectRepository: ProjectRepository;

  constructor() {
    this.ProjectRepository = new ProjectRepository();
  }

  public async find(conditions?: any): Promise<IProjectModel[]> {
    return await this.ProjectRepository.find(conditions);
  }
}
