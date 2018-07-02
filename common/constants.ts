export const THEMES = {
  DARK: "dark",
  LIGHT: "light"
};
export const DEFAULT_THEME = THEMES.LIGHT;

export const API_PATH = "/api/v1";

/** See SkillType enum */
export const SKILL_TYPE_DISPLAY = [
  "Languages",
  "Libraries/Frameworks",
  "Database Management Systems",
  "Other"
];

/** meta tags */
export enum IMAGE_MIME_TYPE {
  JPEG = "image/jpeg",
  PNG = "image/png"
}
export const HOST = process.env.HOST;
export const SITE_TITLE = "Việt Huỳnh - Software Developer";
export const SITE_DESCRIPTION =
  "Hi! I am Viet, a software developer based in Ho Chi Minh City. My passion lies in web development. I'm always willing to try new stuff and apply them to my work.";
export const SITE_IMAGE = {
  ALT: "Việt Huỳnh",
  HEIGHT: "1200",
  TYPE: IMAGE_MIME_TYPE.PNG,
  URL: `${HOST}/static/img/profile_picture.png`,
  WIDTH: "1900"
};
export const SITE_NAME = "Việt Huỳnh's Portfolio";
export const SITE_TYPE = "profile";
export const SITE_LANGUAGE = "en_US";
export const SITE_PROFILE = {
  FIRST_NAME: "Việt",
  GENDER: "male",
  LAST_NAME: "Huỳnh",
  USERNAME: "Salad"
};
export const TWITTER_CARD = {
  TYPE: "summary_large_image",
  USERNAME: "@S_a_l_a_d"
};

/** End meta tags */
