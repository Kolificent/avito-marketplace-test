import React from 'react';

export type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function Dashboard({ children }: DashboardLayoutProps) {
  return <div>{children}</div>;
}
