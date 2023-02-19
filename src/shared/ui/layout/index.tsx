import React from "react";
import type { ReactNode } from "react";

interface IAppLayoutProps {
  header: ReactNode;
  map: ReactNode;
}

export const AppLayout = ({ header, map }: IAppLayoutProps) => {
  return (
    <div>
      {header}
      <main>{map}</main>
    </div>
  );
};
