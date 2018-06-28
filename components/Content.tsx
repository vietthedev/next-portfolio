import { ReactNode } from "react";

interface IContentProps {
  children: ReactNode;
}

export default (props: IContentProps) => <main>{props.children}</main>;
