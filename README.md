# Proyecto Contador de Calorías

## Herramientas y/o tecnologías

- React
- Node.js (20.19.0)
- Vite
- TailwindCSS
  - **_npm install tailwindcss @tailwindcss/vite_**
- TypeScript
- Generador de ID'S
  - **_npm i uuid_**
  - Si marca **error**, ejecutamos:
    - **_npm i --save-dev @types/uuid_**
- HeroIcons
  - **_npm i @heroicons/react_**

## Creación del proyecto

- Para la creación del proyecto, ejecutamos en consola:
  - **_npm create vite@lastest_**
- Con esto, nos intalará la última versión de _Vite_.
- Al ejecutar el comando, nos aparecerá lo siguiente:
  - _Project name:_ **NombreProyecto**
  - _Select a framework:_ **Seleccionamos el FRAMEWORK con el teclado, aparecerá puntos o flechas, elegimos: _REACT_**
  - _Select a variant:_ **Seleccionamos para este proyecto: _TypeScript + SWC_**
  - _Use rolldown-vite (Experimental)?:_ **No**
  - _Install with npm and start now?_ **Yes**
- Después de terminar la configuración, nos aparece la _URL_ de cómo debemos abrirla en el navegador
  - _http://localhost:5173/_
- En caso que no aparezca, nos movemos a la carpeta del proyecto
  - **cd nombreProyecto**
- Y ejecutamos:
  - **npm i**
- Ya una vez creado el proyecto y terminando la configuración inicial, limpiamos el contenido de los archivos:
  - **_App.jsx_**
  - **_main.jsx_** -> aquí solo realizamos unos pequeños ajustes
  - **_index.css_** -> limpiamos todo el CSS
- El proyecto lo levantamos con:
  - **_npm run dev_**
- Una vez que terminamos el proyecto, ejecutamos el comando:
  - **_npm run build_**
- Con esto nos aparecerá la carpeta de:
  - _dist_ 
- Abrimos la carpeta: _public_ y eliminamos el archivo: **.svg**
- Abrimos: _src_ y eliminamos: 
  - **assets**
  - **App.css**
- Del archivo: **App.tsx**
  - Limpiamos o eliminamos las variables y lo que esta dentro del _return_
  - Así mismo también eliminamos los _IMPORT_
- Del archivo: _index.css_, borramos todo su contenido.

### TAILWINDCSS

- _TaildinwCSS_ es un _framework CSS_ basado en utilidades.
- A diferencia de _Bootstrap_ donde una clase tiene diferentes propiedades de _CSS_, en _TaldinwCSS_ cada clase es una propiedad de _CSS_ con un nombre similar.

  ## VENTAJAS

  - Su ventaja principal es que escribes el código _CSS_ en tus componentes sin hojas externas.
  - Tampoco es necesario preocuparte por la herencia en _CSS_.
  - El como nombrar tus clases tampoco es un problema.
  - Excelente Documentación.
  - La extensión de _VSC_ es excelente para el autocompletado.

- Instalación:
  - **_npm install tailwindcss @tailwindcss/vite_**
- Después de la instalación aparecerá un archivo:
  - **vite.config.ts**
- Dentro del archivo tenemos que agregar la línea:
  - _import tailwindcss from '@tailwindcss/vite';_
- Dentro de ese archivo tenemos que agregar lo siguiente en la línea, solo complementamos con _tailwindcss_:
  - **plugins: [react(), tailwindcss()],**
- En el archivo: _index.css_, agregamos lo siguiente:
  - **@import "tailwindcss";**


### USEREDUCER

- Es una alternative de:
  - _useSTate_
- Es un _hook_ de _React_ que te permite agregar un _reducer_ a tu componente.
- El _hook_ **useReducer** en _React_ es una alterantiva a _useState_ que se utiliza para manejar estados más complejos y transiciones de estado que involucran lógica más complicada.
- Mientras que _usteState_ es perfecto para el manejo de estados simples, _useReducer_ es más adecuado para situaciones donde el nuevo estado depende del estado anteriro o cuando hay múltiples sub-valores o lógica condicional a considerar.
  - ## Composición
    - El _hook_ **useReducer** toma dos argumentos:
      - _Reducer_: una función que toma el estado actual y una acción, y devuelve un nuevo estado.
      - Estado inicial: El estado inicial de _reducer_.
      - Ejemplo:
        - `` const [state, dispatch] = useReducer(reducer, initalState) ``
      
      - ### Algunos términos
        - Cuando trabajas con **useReducer**.
        - Cuando creas tus _reducers_ encontrarás varios términos.
        - _state_: es el valor del estado cuya lógica se maneja dentro del _Reducer_.
        - _initialState_: es el _state_ inicial con el que es creado el _reducer_, este _initialState_ es similar a los valores de inicio de _useState_.
        - _Actions_: las acciones son las funciones que manejan toda la lógica para modificar tu _state_.
        - _Payload_: es la información que modifica tu _state_.
        - _Dispatch_: es la función que manda llamar la acción con el _payload_.
        