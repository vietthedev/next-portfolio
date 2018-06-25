import RepositoryBase from "./base/RepositoryBase";

import ProjectSchema from "../data-access/schemas/ProjectSchema";
import IProjectModel from "../model/interfaces/IProjectModel";

export default class ProjectRepository extends RepositoryBase<IProjectModel> {
  constructor() {
    super(ProjectSchema);
  }
}
