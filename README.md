# Mutliple Next.s Apps with Base Path & Rewrites
Multiple Next.js apps can live in harmony by configuring the `basePath` property in `next.config.js` and using rewrites.

In this repo, there are two Next.js applications: `A` and `B`. App `A` is our primary website (source) and we want to use rewrites to display content from App `B` (destination). Since Next.js compiles using relative URLs for the front-end assets, if we only configure a rewrite on App `A`, the pages on App `B` will attempt to request static assets that don't exist. This causes 404 errors in the browser's console.

To work around this, Next.js provides a `basePath` property in `next.config.js` that will change the relative pathname for the static assets of App `B`.

## Exploring This Configuration
To get started, clone the repo and install the dependencies.

```bash
npm install
```

Next let's start the development server.

```bash
npm run dev
```
### Configure Base Path in the Destination App
Let's start by taking a look at App `B`. In your browser, open [http://localhost:3001](http://localhost:3001). As you can see, the index page of this Next app 404s. This is because `basePath` is set to `/maintenance` in App `B`'s [`next.config.js`](./apps/b/next.config.js). This means that the Next.js app will serve [`pages/index.tsx`](./apps/b/pages/index.tsx) at [`/maintenance`](http://localhost:3001/maintenance). If you pull up [http://localhost:3001/maintenance](http://localhost:3001/maintenance), open DevTools, and look in the Network tab, you can see that all static assets are coming from `http://localhost:3001/maintenace/_next/...`, and the App `B`'s [`pages/index.tsx`](./apps/b/pages/index.tsx) is successfully served to this path.

### Configure Rewrites in the Source App
Now that we've configured App `B`, let's connect App `A` to our destination app by using rewrites. In App `A`'s [`next.config.js`](./apps/a/next.config.js) file, you can see a `beforeFiles` rewrite rule listed:

```js
beforeFiles: [
    ...
    {
        source: '/maintenance/:path*',
        destination: `http://127.0.0.1:3001/maintenance/:path*`
    },
    ...
],
```
This rewrite ensures that both the page requests and any static assets requested after this pathname will be rewritten to App `B`. To test this, you can open [http://localhost:3000](http://localhost:3000) which serves App `A`'s [`pages/index.tsx`](./apps/a/pages/index.tsx). Click through to the [Maintenance Page](http://localhost:3000/maintenance) which will display App `B`'s [`pages/index.tsx`](./apps/b/pages/index.tsx).

In DevTools, you can verify that all requests for App `B`'s static assets (e.g. JS, CSS, and JSON files) are being successfully delivered from `http://localhost:3000/maintenance/_next/...`.

## Takeaways
Next.js applications can work with each other to deliver incredible experiences for users, including using multiple applications under different directories with a single top-level domain name.
