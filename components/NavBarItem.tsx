import Link from "next/link";
import { withRouter, WithRouterProps } from "next/router";
import { ReactNode } from "react";

import { resolveScopedStyles } from "../common/helpers";

interface INavBarItemProps {
  theme: string;
  href: string;
  children: ReactNode;
}

const scoped = resolveScopedStyles(
  <div>
    <style jsx>{`
      li {
        display: inline;

        list-style: none;

        margin: 0 0.2rem;
      }

      a {
        text-decoration: none;

        padding: 0.5rem;

        border-radius: 50% 50% 0 0;

        transition: all 0.2s ease-in-out;
      }

      a:hover {
        background-color: #2aa4cf;
      }

      a.active {
        background-color: #2aa4cf;
      }

      .light {
        background-color: #eeeeee;
        color: #474747;
      }

      .dark {
        background-color: #474747;
        color: #dfdfdf;
      }
    `}</style>
  </div>
);

const NavBarItem = (props: INavBarItemProps & WithRouterProps) => (
  <>
    <li className={scoped.className}>
      <Link href={props.href} prefetch>
        <a
          className={`${scoped.className} ${props.theme} ${
            props.router.pathname === props.href ? "active" : ""
          }`}
        >
          {props.children}
        </a>
      </Link>
    </li>
    {scoped.styles}
  </>
);

export default withRouter(NavBarItem);
