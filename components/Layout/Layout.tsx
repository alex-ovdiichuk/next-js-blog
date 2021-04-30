import React, { FC } from 'react';

import { MainNavigation } from './MainNavigation';

export const Layout: FC = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
};
