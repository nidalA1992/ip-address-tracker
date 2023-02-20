import React, { useState } from "react";

import s from "./styles.module.scss";
import { Display } from "./display";
import { SearchForm } from "features/search-form";

export const AppHeader = () => {
  const [positionData, setPositionData] = useState<IpGeolacationResponse>(
    {} as IpGeolacationResponse
  );
  return (
    <header
      className={s.header}
      style={{ backgroundImage: 'url("pattern-bg.png")' }}
    >
      <h1 className={s.title}>IP Address Tracker</h1>
      <SearchForm setData={setPositionData} />
      <Display {...positionData} />
    </header>
  );
};
