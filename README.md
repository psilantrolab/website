#   PsilantroLab

Proyecto creado usando [Create React App](https://github.com/facebook/create-react-app) y [Bootstrap5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

Es necesario tener instalado node 
https://nodejs.org/en/download/

### Construir proyecto
Abrir terminal dentro de la carpeta del proyecto
### `npm run build`

### Subir a firebase
Instalar herramientas firebase
### `npm install -g firebase-tools`

Iniciar sesión en firebase
### `firebase login`

Necesario antes de subir
### `firebase init`

    Choose Hosting: Configure and deploy Firebase Hosting sites
    Choose [create a new project]
    Answer the following questions like below:
    What do you want to use as your public directory? (public) build
    Configure as a single-page app (rewrite all urls to /index.html)? Yes
    File build/index.html already exists. Overwrite? No

Hacer el Build

### `npm run build`

Subirlo a firebase (revisar que firebase.json apunte a `build`)
### `firebase deploy`


Puede guiarse con https://medium.com/@julienrioux/deploy-react-js-app-on-firebase-c7fa6ddc153f


### Estructura del proyecto
Dentro de **src** se encuentra una carpeta llamada **pages**, en esta carpeta se encuentra cada una de las vistas por ejemplo **contact** o **people**. Estos archivos tienen extensión [jsx](https://reactjs.org/docs/introducing-jsx.html). En el caso de querer modificar alguna de estas vistas se tendría que modificar el archivo con ese nombre.

El archivo **footer.jsx** es el pie de página que tiene cada una de las vistas. Lo mismo aplica para el **navigation.jsx**, el cual contiene la barra de navegación que se repite en cada vista.
![Footer](https://github.com/psilantrolab/website/blob/main/footer.png)
![Navigation](https://github.com/psilantrolab/website/blob/main/navigation.png)
**index.jsx** es la vista **about** y **400.jsx** es la vista de página no encontrada.
Dentro de la carpeta **public** se encuentra **images**, ahí es donde se encuentran todas las imágenes del proyecto.

Dentro de **src** se encuentra **App.js**, este archivo contiene las rutas de la página, o sea, lo que sigue después del **/**, por ejemplo, **/people** o **/resources**. Si se quiere agregar otra ruta (`<Route exact path="/" component={}/>`) tendrá que ser antes de la etiqueta `<Redirect to="/404"/>`, sino no funcionará. 




