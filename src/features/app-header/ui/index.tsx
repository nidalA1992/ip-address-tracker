import React, { useState } from "react";

import s from "./styles.module.scss";
import { SearchForm } from "./search-form";
import { Display } from "./display";

export const AppHeader = () => {
  const [positionData, setPositionData] = useState<IpGeolacationResponse>(
    {} as IpGeolacationResponse
  );
  return (
    <header className={s.header}>
      <h1 className={s.title}>IP Address Tracker</h1>
      <SearchForm setData={setPositionData} />
      <Display {...positionData} />
    </header>
  );
};
