import IProjectViewModel from "./interfaces/IProjectViewModel";

export default class ProjectViewModel implements IProjectViewModel {
  private localId: string;

  get _id() {
    return this.localId;
  }

  set _id(_id) {
    this.localId = _id;
  }

  private localImageName: string;

  get imageName() {
    return this.localImageName;
  }

  set imageName(imageName) {
    this.localImageName = imageName;
  }

  private localName: string;

  get name() {
    return this.localName;
  }

  set name(name) {
    this.localName = name;
  }

  private localRepository: string;

  get repository() {
    return this.localRepository;
  }

  set repository(repository) {
    this.localRepository = repository;
  }

  private localSkills: string[];

  get skills() {
    return this.localSkills;
  }

  set skills(skills) {
    this.localSkills = skills;
  }

  private localWebsite: string;

  get website() {
    return this.localWebsite;
  }

  set website(website) {
    this.localWebsite = website;
  }
}
