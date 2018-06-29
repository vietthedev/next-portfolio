import { NextContext, NextStatelessComponent } from "next";
import App, { AppComponentProps, Container } from "next/app";
import Head from "next/head";
import React from "react";

import { SITE_TITLE } from "../common/constants";
import { DEFAULT_THEME, THEMES } from "../common/constants";

import { IncomingMessage } from "http";
import Context from "../common/context";
import Layout from "../components/Layout";
import ThemeTogglerButton from "../components/ThemeTogglerButton";

interface ICustomAppProps {
  theme: string;
}

interface ICustomAppState {
  theme: string;
  toggleTheme: () => void;
}

interface ICustomIncomingMessage extends IncomingMessage {
  cookies: {
    [key: string]: string;
  };
}

export default class CustomApp extends App {
  public static async getInitialProps({
    Component,
    ctx
  }: {
    Component: React.ComponentType<any> & NextStatelessComponent;
    ctx: NextContext;
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps,
      theme: (ctx.req as ICustomIncomingMessage).cookies.theme
    };
  }

  public props: AppComponentProps & ICustomAppProps;
  public state: ICustomAppState;

  constructor(props: AppComponentProps & ICustomAppProps) {
    super(props);

    this.state = {
      theme: this.props.theme || DEFAULT_THEME,
      toggleTheme: this.toggleTheme.bind(this)
    };
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>{SITE_TITLE}</title>
        </Head>
        <Context.Provider value={this.state}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ThemeTogglerButton />
        </Context.Provider>
      </Container>
    );
  }

  private toggleTheme() {
    this.setState((state: ICustomAppState) => ({
      theme: state.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
    }));
  }
}
