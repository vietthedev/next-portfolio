import { PureComponent, ReactNode } from "react";

import { resolveScopedStyles } from "../common/helpers";

interface ISkillSetProps {
  children: ReactNode;
}

const scoped = resolveScopedStyles(
  <div>
    <style jsx>{`
      div {
        min-width: 33.33%;

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
        <div className={scoped.className}>{this.props.children}</div>
        {scoped.styles}
      </>
    );
  }
}
