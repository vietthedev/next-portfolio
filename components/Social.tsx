import { resolveScopedStyles } from "../common/helpers";
import SocialIcon from "./SocialIcon";

const scoped = resolveScopedStyles(
  <div>
    <style jsx>{`
      ul {
        list-style: none;
      }
    `}</style>
  </div>
);

export default () => (
  <div>
    <ul className={scoped.className}>
      <SocialIcon
        link="https://www.facebook.com/huynh.lam.quoc.viet"
        icon="/static/icons/facebook.svg"
      />
      <SocialIcon
        link="https://www.linkedin.com/in/viet-huynh"
        icon="/static/icons/linkedin.svg"
      />
      <SocialIcon
        link="https://github.com/S-a-l-a-d"
        icon="/static/icons/github.svg"
      />
      <SocialIcon
        link="https://steamcommunity.com/id/s_a_l_a_d/"
        icon="/static/icons/steam.svg"
      />
    </ul>
    {scoped.styles}
  </div>
);
