import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import purgecssModule from '@fullhuman/postcss-purgecss';

const purgecss = purgecssModule.default({
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
