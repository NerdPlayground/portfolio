rm -f README.md
rm -rf app public
mkdir app public app/ui
touch app/page.js app/layout.js
touch app/ui/styles.scss app/ui/media-queries.scss app/ui/_functions.scss
pnpm add --save-dev sass
pnpm add next@canary