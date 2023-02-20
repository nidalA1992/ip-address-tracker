import React from "react";

import s from "./styles.module.scss";

export const Display = (props: IpGeolacationResponse) => {
  const { ip, location, isp } = props;

  const labels = {
    "IP ADDRESS": ip,
    LOCATION:
      ip && `${location?.country}, ${location?.city} ${location?.postalCode}`,
    TIMEZONE: ip && `UTC ${location?.timezone}`,
    ISP: isp,
  };

  return (
    <div className={s.display}>
      {Object.entries(labels).map(([label, value]) => (
        <div className={s.row} key={label}>
          <p className={s.label}>{label}</p>
          <p className={s.value}>{value}</p>
          <></>
        </div>
      ))}
    </div>
  );
};
