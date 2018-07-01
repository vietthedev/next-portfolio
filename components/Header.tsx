import Link from "next/link";
import { PureComponent } from "react";

import { resolveScopedStyles } from "../common/helpers";

interface IHeaderProps {
  theme: string;
}

const scoped = resolveScopedStyles(
  <div>
    <style jsx>{`
      header {
        display: flex;

        flex-shrink: 0;
        align-items: center;
        justify-content: center;

        padding-top: 0.25rem;
      }

      img {
        cursor: pointer;

        height: 12rem;
        width: 12rem;

        border: 6px double;
        border-radius: 50%;
        background-clip: padding-box;

        transition: border-color 0.2s ease-in-out;
      }

      img .light {
        border-color: #666666;
      }

      img .dark {
        border-color: #aaaaaa;
      }

      .light {
        color: #1d2129;
      }

      .dark {
        color: #dfdfdf;
      }
    `}</style>
  </div>
);

export default class Header extends PureComponent {
  public props: IHeaderProps;

  public render() {
    return (
      <>
        <header className={`${scoped.className} ${this.props.theme}`}>
          <Link href="/">
            <img
              className={scoped.className}
              src="/static/img/avatar.png"
              alt="Việt Huỳnh"
            />
          </Link>
        </header>
        {scoped.styles}
      </>
    );
  }
}
