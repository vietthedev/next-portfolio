export function resolveScopedStyles(scope: {
  props: { className: string; children: JSX.Element };
}) {
  return {
    className: scope.props.className,
    styles: scope.props.children
  };
}
