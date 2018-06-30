import { HOST } from "./constants";

export const resolveScopedStyles = (scope: {
  props: { className: string; children: JSX.Element };
}) => {
  return {
    className: scope.props.className,
    styles: scope.props.children
  };
};

export const getCanonicalUrl = (pathname: string) => {
  return (HOST || window.location.origin) + pathname;
};
