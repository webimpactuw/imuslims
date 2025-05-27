# Next.js Project

## Getting Started
Run npm install to install dependencies for this project

## File structure
The public folder contains all the image assets, and can be accesed in image tags using\
`<img src='/filename.png' alt='some image'>`\
Note that files within the public folder can be automatically referenced using just `/` as the base url\\

The `src` folder contains all the code required to run the project. `app` contains all the information required for [routing](https://github.com/JimmyALiu/iMuslims/blob/migrate-nextjs/README.md#routing). `components` contains all the react components that don't require a route (those go in `app`), and `styles` contains the global CSS styles.

## Routing
The folder structure within `app` defines the routes for the page. Each folder represents a route in our project by that folder name, and if we want to display the page by that route we must contain a js/jsx/ts/tsx file under that directory called page. For example, `app/home/page.jsx` corresponds to the URL `URL/home`. Each folder can optionally contain a layout file defining how that route should be displayed. Note that at the top level of `app`, there is a layout file containing all the wrapper html (`<head>`, `<body>`) and defines that it should display a header and a footer component around the `children`, with `children` being the the `page` file at the current URL (for `URL/home` children will be `app/home/page.jsx`, for `URL/about` children will be `app/about/page.jsx`). Subdirectories can also contain their own layout file if necessary, since these routes are handled recursively.

## CSS Modules
> [!NOTE]
> Global styles are stored underneath src/styles, and are imported at the top level layout.js file under `app`, meaning you don't need to import it for individual pages.

Next.js introduces the concept of CSS modules that apply to only a single page. To do this, create a file ending in `.module.css` in the same location as the page you want to apply the CSS module to. For example, a CSS module for the home page `app/home/page.jsx` will be `app/home/page.module.css`. To import it into the js file, and use the notation styles.className in order to apply that style to an element.\
```
// home/page.jsx

import styles from './page.module.css';

export default function Home() {
    return (
      <p className={styles.moduleClassName}>Hello World!</p> {// apply a style from the module}
      <p> className={"globalClassStyle " + styles.moduleClassName}>Hi again</p>  {// apply a style from the global CSS file and a style from the module}
    )
}
```
```
// home/page.module.jsx
.moduleClassName {
  // ... styles
}
```
```
// global.css
.globalClassStyle {
  // ... styles
}

```
> [!NOTE]
> We still use the string notation for global styles, but module styles require using styles.className. To use both, we have to concatenate them together as a string.
> Also note that this means we must use camelCase for class names because CSS modules don't allow for dashes (-).
