import { RouteObject, useRoutes } from 'react-router-dom';

export const Router = ({ allRoutes }: { allRoutes: RouteObject[] }) => {
  return useRoutes(allRoutes);
};
