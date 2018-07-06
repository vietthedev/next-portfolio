import "isomorphic-unfetch";

import { API_PATH, HOST } from "./constants";

export const resolveScopedStyles = (scope: {
  props: { className: string; children: JSX.Element };
}) => {
  return {
    className: scope.props.className,
    styles: scope.props.children
  };
};

export const getCanonicalUrl = (pathname: string) => {
  return HOST + pathname;
};

export const getDataFromApi = async <T extends any>(pathname: string) => {
  const apiUrl =
    typeof window === "undefined"
      ? HOST + API_PATH + pathname
      : API_PATH + pathname;
  let data: T[] = [];

  try {
    const res = await fetch(apiUrl);
    data = (await res.json()) as T[];
  } catch (err) {
    console.error(err);
  }

  return data;
};
