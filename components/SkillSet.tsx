import { PureComponent } from "react";

import { resolveScopedStyles } from "../common/helpers";

interface ISkillSetProps {
  skillType: string;
  skills: JSX.Element[];
}

const scoped = resolveScopedStyles(
  <div>
    <style jsx>{`
      div {
        min-width: 50%;

        flex: 1 0 auto;
      }
    `}</style>
  </div>
);

export default class SkillSet extends PureComponent {
  public props: ISkillSetProps;

  constructor(props: ISkillSetProps) {
    super(props);
  }

  public render() {
    return (
      <>
        <div className={scoped.className}>
          <h5>{this.props.skillType}</h5>
          <ul>{this.props.skills}</ul>
        </div>
        {scoped.styles}
      </>
    );
  }
}
