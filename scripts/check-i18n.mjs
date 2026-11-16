import { promises as fs } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

import { build } from 'esbuild';

/**
 * Проверяет, что все языковые версии содержат одинаковый набор ключей.
 * Запуск: node scripts/check-i18n.mjs
 */
const outDir = path.resolve('.tmp');
const outfile = path.join(outDir, 'content.mjs');

await fs.mkdir(outDir, { recursive: true });

await build({
  entryPoints: ['src/content/index.ts'],
  bundle: true,
  format: 'esm',
  platform: 'neutral',
  outfile,
  logLevel: 'error',
});

const { contentByLanguage } = await import(pathToFileURL(outfile).href);
const languages = Object.keys(contentByLanguage);
const [base, ...rest] = languages;

function keyPaths(value, prefix = '') {
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => keyPaths(item, `${prefix}[${index}]`));
  }

  if (value && typeof value === 'object') {
    return Object.keys(value).flatMap((key) => keyPaths(value[key], prefix ? `${prefix}.${key}` : key));
  }

  return [prefix];
}

const problems = [];
const baseKeys = keyPaths(contentByLanguage[base]).sort();

for (const language of rest) {
  const keys = keyPaths(contentByLanguage[language]).sort();
  const missing = baseKeys.filter((key) => !keys.includes(key));
  const extra = keys.filter((key) => !baseKeys.includes(key));

  if (missing.length > 0 || extra.length > 0) {
    problems.push({ language, missing, extra });
  }
}

if (problems.length > 0) {
  problems.forEach((problem) => {
    console.error(`\n[${problem.language}] структура контента отличается от ${base}`);
    if (problem.missing.length > 0) {
      console.error(`  отсутствуют ключи: ${problem.missing.join(', ')}`);
    }
    if (problem.extra.length > 0) {
      console.error(`  лишние ключи: ${problem.extra.join(', ')}`);
    }
  });
  process.exit(1);
}

console.log(`Локализации согласованы: ${languages.join(', ')} — по ${baseKeys.length} ключей.`);
