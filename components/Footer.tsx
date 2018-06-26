interface IFooterProps {
  className: string;
}

export default (props: IFooterProps) => (
  <footer className={props.className}>
    Created by the person you see in the picture (&#x30FB;&#x3C9;&#x30FB;)
  </footer>
);
