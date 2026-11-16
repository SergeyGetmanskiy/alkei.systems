import { promises as fs } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

import { build } from 'esbuild';

/**
 * Рендерит каждый маршрут в строку и проверяет, что страница
 * действительно отрисовалась и содержит ожидаемый текст.
 * Запуск: node scripts/check-render.mjs
 */
const outDir = path.resolve('.tmp');
const outfile = path.join(outDir, 'render.mjs');

await fs.mkdir(outDir, { recursive: true });

await build({
  stdin: {
    contents: `
      export { createElement } from 'react';
      export { renderToString } from 'react-dom/server';
      export { MemoryRouter } from 'react-router-dom';
      export { AppRouter } from './src/router/AppRouter';
    `,
    resolveDir: process.cwd(),
    loader: 'ts',
  },
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile,
  loader: { '.scss': 'empty', '.css': 'empty', '.svg': 'empty' },
  // react-dom/server в CJS использует require() для node-модулей
  banner: {
    js: "import { createRequire } from 'node:module'; const require = createRequire(import.meta.url);",
  },
  logLevel: 'error',
});

const { createElement, renderToString, MemoryRouter, AppRouter } = await import(
  pathToFileURL(outfile).href
);

const cases = [
  { path: '/', redirect: true, note: 'редирект на основной язык (клиентский)' },
  { path: '/ru', expect: 'Alkei.Systems' },
  { path: '/ru/mentor', expect: 'Когда собственнику нужна ясность' },
  { path: '/ru/startup', expect: 'От идеи до запуска и развития продукта' },
  { path: '/ru/product', expect: 'SDF' },
  { path: '/ru/experience', expect: 'Опыт основателя' },
  { path: '/ru/projects/instroy', expect: 'InStroy' },
  { path: '/ru/projects/twelveai', expect: 'TwelveAI' },
  { path: '/ru/partners', expect: 'Партнёрам' },
  { path: '/ru/about', expect: 'Что такое Alkei.Systems' },
  { path: '/ru/privacy', expect: 'Политика конфиденциальности' },
  { path: '/ru/unknown-page', expect: 'Страница не найдена' },
  { path: '/kz', expect: 'Технология үшін технология емес' },
  { path: '/kz/mentor', expect: 'Меншік иесіне айқындық' },
  { path: '/kz/product', expect: 'SDF' },
  { path: '/en', expect: 'Not technology for its own sake' },
  { path: '/en/product', expect: 'Digital Process Engineering' },
  { path: '/en/privacy', expect: 'Privacy Policy' },
  {
    path: '/xx/about',
    redirect: true,
    note: 'неизвестный язык → основной (клиентский редирект)',
  },
];

const failures = [];

for (const testCase of cases) {
  let html = '';

  try {
    html = renderToString(
      createElement(MemoryRouter, { initialEntries: [testCase.path] }, createElement(AppRouter)),
    );
  } catch (error) {
    failures.push(`${testCase.path}: ошибка рендера — ${error.message}`);
    continue;
  }

  // Клиентский редирект не выполняется при серверном рендере:
  // проверяем только отсутствие ошибок и отсутствие страницы 404.
  if (testCase.redirect) {
    if (html.includes('Страница не найдена')) {
      failures.push(`${testCase.path}: показана страница 404 вместо редиректа`);
      continue;
    }

    console.log(`ok  ${testCase.path}${testCase.note ? ` (${testCase.note})` : ''}`);
    continue;
  }

  if (!html.includes(testCase.expect)) {
    failures.push(`${testCase.path}: не найден ожидаемый текст «${testCase.expect}»`);
    continue;
  }

  console.log(`ok  ${testCase.path}${testCase.note ? ` (${testCase.note})` : ''}`);
}

if (failures.length > 0) {
  console.error('\nПроблемы:');
  failures.forEach((failure) => console.error(`  - ${failure}`));
  process.exit(1);
}

console.log(`\nВсе маршруты отрисованы: ${cases.length}.`);
