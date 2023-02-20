import React from "react";
import type { ReactNode } from "react";

import s from "./styles.module.scss";

interface IAppHeader {
  input: ReactNode;
  display: ReactNode;
}

export const AppHeader = ({ input, display }: Partial<IAppHeader>) => {
  return (
    <header
      className={s.header}
      style={{ backgroundImage: 'url("pattern-bg.png")' }}
    >
      <h1 className={s.title}>IP Address Tracker</h1>
      <div className={s.input}>{input}</div>
      <div className={s.display}>{display}</div>
    </header>
  );
};
