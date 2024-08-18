# Optimizing Images with Squoosh

Squoosh is a fantastic [open-source](https://github.com/GoogleChromeLabs/squoosh) image compression tool by Google usable both as a [web app ](https://squoosh.app/) and as a [CLI tool](https://www.npmjs.com/package/@squoosh/cli). Although the CLI is no longer maintained, it still is useful for bulk compressing images (such as every year's new board members).

## Using the Squoosh CLI

> [!IMPORTANT]  
> The Squoosh CLI does not support Node versions 18 and above. **Node 16 is recommended (`nvm use 16`).**

For our directory structure (as of Aug. 2024):

```
DUCI-website
 └─ src
    └─ assets
       └─ images
          ├─ board
          │  ├─ current
          │  └─ alumni
          └─ merch
             ├─ ...
```

If you wanted to optimize all images within `current/`, you'd run (at the root):

```
npx @squoosh/cli --mozjpeg '{quality:75}' \
-d src/assets/images/output \
src/assets/images/board/alumni
```

Breaking it down:

1. `npx @squoosh/cli` — calls the Squoosh CLI
2. `--mozjpeg` — a flag converting images to `mozjpeg`
3. `'{quality:75}'` — options
4. `-d src/assets/images/output` — creates a directory with the outputted images at the specified location
5. `src/assets/images/board/alumni` — what file(s) to compress
