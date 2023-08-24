import { lazy } from 'react';

export const PoisonWormsEmbed = lazy(() => import('./poison-womrs-embed'));

// export const PoisonWormsEmbed = lazy(
//   () =>
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(import('./poison-womrs-embed'));
//       }, 10000);
//     }),
// );

export const InPerpetuityEmbed = lazy(() => import('./in-perpetuity-embed'));
