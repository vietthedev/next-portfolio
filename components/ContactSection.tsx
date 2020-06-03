import { resolveScopedStyles } from "../common/helpers";

const scoped = resolveScopedStyles(
  <div>
    <style jsx>{`
      a {
        color: #40ccff;
        text-decoration: none;

        word-break: break-all;
      }

      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </div>
);

export default () => (
  <>
    <p>
      You can contact me via{" "}
      <a className={scoped.className} href="skype:live:.cid.f8f652039c38996a?chat">
        Skype
      </a>{" "}
      or{" "}
      <a
        className={scoped.className}
        href="mailto:viet.huynhlamquoc@outlook.com"
      >
        email
      </a>.
    </p>
    {scoped.styles}
  </>
);
