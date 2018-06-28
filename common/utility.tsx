import { IncomingMessage } from "http";

export const resolveScopedStyles = (scope: {
  props: { className: string; children: JSX.Element };
}) => {
  return {
    className: scope.props.className,
    styles: scope.props.children
  };
};

export const getHost = ({
  req,
  pathname
}: {
  req?: IncomingMessage;
  pathname: string;
}) => {
  return `https://${req.headers.host + pathname}`;
};
