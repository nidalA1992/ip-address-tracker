import React from "react";
import type { ReactNode } from "react";

import s from "./styles.module.scss";
import { SearchForm } from "./search-form";

// interface IAppHeaderProps {
//   children?: ReactNode;
// }

export const AppHeader = () => {
  return (
    <header className={s.header}>
      <h1 className={s.title}>IP Address Tracker</h1>
      <SearchForm />
    </header>
  );
};
