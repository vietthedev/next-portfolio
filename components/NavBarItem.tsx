import Link from "next/link";
import { ReactNode } from "react";

import { resolveScopedStyles } from "../common/helpers";
import ThemedComponent from "../common/themed-component";

interface INavBarItemProps {
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

      .light {
        background: linear-gradient(
          rgba(29, 33, 41, 1),
          rgba(50, 50, 50, 1),
          rgba(255, 255, 255, 0)
        );
        color: #dfdfdf;
      }

      .dark {
        background: linear-gradient(
          rgba(223, 223, 223, 1),
          rgba(150, 150, 150, 1),
          rgba(55, 55, 55, 0.8)
        );
        color: #373737;
      }
    `}</style>
  </div>
);

export default (props: INavBarItemProps) => (
  <ThemedComponent>
    {themeName => (
      <>
        <li className={scoped.className}>
          <Link href={props.href} prefetch>
            <a className={`${scoped.className} ${themeName}`}>
              {props.children}
            </a>
          </Link>
        </li>
        {scoped.styles}
      </>
    )}
  </ThemedComponent>
);
