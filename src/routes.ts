import { lazy } from 'react';

// Webpack require.context type declaration
declare const require: {
  context(
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp
  ): {
    keys(): string[];
    <T>(id: string): T;
  };
};

interface RouteConfig {
  path: string;
  component: React.LazyExoticComponent<React.ComponentType>;
  meta: {
    requiresAuth: boolean;
    title: string;
  };
}

const pages = require.context('./pages', true, /\.tsx$/);

const routes: RouteConfig[] = pages.keys().map(file => {
  const path = file
    .replace('./', '/') // './' 제거
    .replace(/\/index$/, '') // /index.tsx를 루트로 변환
    .replace('.tsx', ''); // 확장자 제거

  return {
    path: path === '/' ? '/' : path,
    component: lazy(() => import(`./pages${file.slice(1)}`)),
    meta: {
      requiresAuth: false, // 기본값으로 인증 불필요
      title:
        path === '/'
          ? 'Home'
          : (path.split('/').pop() || '').charAt(0).toUpperCase() +
            (path.split('/').pop() || '').slice(1),
    },
  };
});

export default routes;
