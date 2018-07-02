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
  return (HOST || window.location.origin) + pathname;
};

export const getDataFromApi = async (pathname: string) => {
  const apiUrl =
    typeof window === "undefined"
      ? process.env.HOST + process.env.API_PATH + pathname
      : API_PATH + pathname;
  let data = {};

  try {
    const res = await fetch(apiUrl);
    data = await res.json();
  } catch (err) {
    console.error(err);
  }

  return data;
};
