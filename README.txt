Aquí tienes el README en un formato listo para guardar en un archivo `.txt`:  

---

# README - Proyecto React de Gestión de Menús y Tiendas  

Este proyecto en React permite al usuario iniciar sesión, ver una lista de menús, consultar los detalles de cada uno y cambiar el idioma de la aplicación. Usa hooks para manejar estados, efectos y navegación, además de consumir datos mockeados desde un archivo JSON.  

---  

## 1. Inicio y configuración  

Para ejecutar el proyecto:  
1. Instalar dependencias con `npm install`.  
2. Ejecutar `npm start` para levantar el servidor de desarrollo.  

El proyecto está estructurado con diferentes componentes y rutas. Cada vista se maneja con React Router.  

---  

## 2. Rutas principales (rout.js)  

Aquí se definen las rutas de la aplicación usando `react-router-dom`. Se importan:  
- BrowserRouter  
- Routes  
- Route  

Las rutas principales son:  
- `/login` → `login.js` (pantalla de inicio de sesión)  
- `/home` → `home.js` (pantalla principal con la lista de menús)  
- `/detail/:id` → `detail.js` (muestra detalles de un menú específico)  

Para navegar entre pantallas, se usa `useNavigate()`, lo que permite cambiar de ruta dinámicamente.  

---  

## 3. Inicio de sesión (login.js)  

Este componente maneja el acceso del usuario mediante un formulario con validaciones.  

Hooks utilizados:  
- `useState` para manejar los valores de los inputs (correo y contraseña).  
- `useEffect` para verificar si los datos ingresados cumplen con las validaciones y habilitar el botón.  

Estructura:  
- Un `<form>` que contiene dos `<input>`: uno para el correo y otro para la contraseña.  
- Un botón de enviar (`<button>`) que solo se habilita si los datos cumplen las reglas de validación.  

Validaciones:  
- El correo debe tener una estructura válida (`c@c.c`).  
- La contraseña debe tener un mínimo y un máximo de caracteres definidos.  
- Si ambas validaciones son correctas, el botón se activa.  

Para manejar estas validaciones, en `useEffect` se revisa cada cambio en los inputs y se actualiza el estado del botón.  

Cuando el usuario presiona el botón, se usa `useNavigate()` para redirigirlo a la pantalla principal (`/home`).  

---  

## 4. Pantalla principal (home.js)  

Aquí se muestran los menús disponibles.  

Hooks utilizados:  
- `useState` para almacenar los datos de los menús.  
- `useEffect` para cargar los datos desde el JSON al renderizar la pantalla.  

Estructura:  
- Un contenedor principal `<div>`.  
- Un carrusel de imágenes con los menús.  
- Una lista de tarjetas (`<div>` o `<article>`) con información de cada menú.  

Cómo se cargan los datos:  
Los datos de los menús se guardan en un JSON mockeado generado con Mockaroo.  
- Se cargan con `useEffect()`, simulando una llamada a una API.  
- Se almacenan en un estado con `useState()`.  
- Se mapean en la vista para generar las tarjetas dinámicamente.  

Cada tarjeta contiene:  
- Imagen.  
- Nombre.    

Cuando el usuario hace clic en una tarjeta, se usa `useNavigate()` para enviarlo a `/detail/:id` con el ID del menú seleccionado.  

---  

## 5. Detalle de menú (detail.js)  

Muestra información detallada de un menú seleccionado.  

Hooks utilizados:  
- `useState` para almacenar los datos del menú seleccionado.  
- `useEffect` para obtener los datos cuando se monta el componente.  
- `useParams()` para leer el ID de la URL.  

Estructura:  
- Se obtiene el ID desde la URL con `useParams()`.  
- Se busca el menú correspondiente en los datos del JSON.  
- Se muestra la información en un `<div>` con imagen, nombre, descripción y precio.  

Si el ID no existe, se muestra un mensaje de error.  

---  

## 6. Formularios (forms.js)  

Los formularios se manejan con `useState()` para capturar la entrada del usuario.  

Validaciones en los formularios:  
- Se actualizan los valores en tiempo real.  
- Se muestra un mensaje de error si algún campo es inválido.  
- Se deshabilita el botón hasta que todo sea correcto.  

En cada cambio de los inputs, se actualiza el estado con `onChange`.  

---  

## 7. Consumo de datos mockeados  

Los datos de los menús fueron generados con Mockaroo.  

- Cada menú tiene un id, nombre, image y imageCarrusel 
- Se guardan en un archivo JSON.  
- Se cargan con `useEffect()` y se almacenan en `useState()`.  
- Se filtran y buscan dinámicamente según la pantalla.  

Se simula el consumo de una API, pero en realidad los datos están en local.  

---  

## 8. Carrusel de imágenes  

En la pantalla principal hay un carrusel con imágenes de los menús.  

Cómo funciona:  
- Se usa un estado (`useState`) para controlar la imagen actual.  
- Con `setInterval()` dentro de `useEffect()`, las imágenes cambian automáticamente.  
- También hay botones para moverse manualmente entre las imágenes.  

Cada imagen en el carrusel es un menú, y al hacer clic en ella, se redirige al detalle (`/detail/:id`).  

---  

## 9. Internacionalización (i18n.js, es.json, en.json)  

El proyecto es multilingüe, soportando inglés y español.  

- Se usa `react-i18next`.  
- Los textos están en `es.json` y `en.json`.  
- Un estado global maneja el idioma seleccionado.  
- Los textos cambian dinámicamente sin recargar la página.  
