import React from 'react';

type Props = {
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
};
export const Desktop = ({ children }: Props) => {
  return (
    <main className="flex">
      <div className="flex flex-col h-screen">{children}</div>
    </main>
  );
};
// export const Desktop = ()=>memo(Desktop);
