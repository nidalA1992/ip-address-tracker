import React, { useState } from "react";

import "./styles/index.scss";

import { AppLayout } from "shared";

import { AppHeader } from "features/app-header";
import { AppMap } from "features/app-map";
import { Display } from "features/display";
import { SearchForm } from "features/search-form";

export const App = () => {
  const [geolocation, setGeolocation] = useState<IpGeolacationResponse>(
    {} as IpGeolacationResponse
  );

  return (
    <AppLayout
      header={
        <AppHeader
          input={<SearchForm setData={setGeolocation} />}
          display={<Display {...geolocation} />}
        />
      }
      map={
        <AppMap
          lat={Number(geolocation?.location?.lat) || undefined}
          lng={Number(geolocation?.location?.lng) || undefined}
        />
      }
    />
  );
};
