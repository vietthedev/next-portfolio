import IAboutViewModel from "./interfaces/IAboutViewModel";

export default class AboutViewModel implements IAboutViewModel {
  private localId: string;

  get _id() {
    return this.localId;
  }

  set _id(_id) {
    this.localId = _id;
  }

  private localContent: string;

  get content() {
    return this.localContent;
  }

  set content(content) {
    this.localContent = content;
  }
}
