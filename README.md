# tsx-webpack-terser-issue

Just run two really simple tasks:

1. Using ts-node `npm run works` -> no problem
2. Using tsx `npm run issue` -> see error:

```
assets by status 6.19 KiB [cached] 1 asset
runtime modules 663 bytes 3 modules
cacheable modules 2.76 KiB
  ./src/style.scss 449 bytes [built] [code generated]
f is not defined
ReferenceError: f is not defined
```
