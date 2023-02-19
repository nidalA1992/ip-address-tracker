import React from "react";

import "./styles/index.scss";

import { AppLayout } from "shared";

import { AppHeader } from "features/app-header";
import { AppMap } from "features/app-map";

export const App = () => {
  return <AppLayout header={<AppHeader />} map={<AppMap />} />;
};
