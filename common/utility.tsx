import { ReactNode } from "react";

export function resolveScopedStyles(scope: {
  props: { className: string; children: ReactNode };
}) {
  return {
    className: scope.props.className,
    styles: scope.props.children
  };
}
