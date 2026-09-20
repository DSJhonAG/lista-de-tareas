# Lista de Tareas — React

Aplicación de Lista de Tareas hecha con **React + Vite**, para la Cátedra de
Aplicaciones en Internet (Corte 1), Universidad Libre – Cali.

## Funcionalidades

1. Mostrar las tareas
2. Agregar tareas
3. Marcar una tarea como terminada
4. Borrar tareas

Los datos viven en memoria (`useState`), tal como pide el enunciado: se
reinician al recargar la página.

## Instalación y ejecución local

```bash
npm install
npm run dev
```

Abre la URL que muestra la terminal (por defecto `http://localhost:5173`).

## Build de producción

```bash
npm run build
npm run preview
```

## Desplegar en GitHub Pages

1. Sube este proyecto a un repositorio de GitHub (por ejemplo `lista-de-tareas-react`).
2. Abre `vite.config.js` y cambia `base: '/aurum-motors-react/'` por
   `'/NOMBRE-DE-TU-REPO/'`, usando el nombre exacto de tu repositorio.
3. **Opción A — automática (recomendada):** este proyecto ya incluye
   `.github/workflows/deploy.yml`. Solo debes ir a
   *Settings → Pages → Build and deployment → Source* y elegir
   **GitHub Actions**. Cada `push` a `main` construye y publica el sitio solo.
4. **Opción B — manual con `gh-pages`:**
   ```bash
   npm install
   npm run deploy
   ```
   Esto publica el contenido de `dist/` en la rama `gh-pages`. Luego en
   *Settings → Pages* selecciona la rama `gh-pages` como origen.
5. Tu app quedará en `https://TU-USUARIO.github.io/NOMBRE-DE-TU-REPO/`.

## Estructura

```
lista-de-tareas-react/
├── index.html
├── package.json
├── vite.config.js
├── .github/workflows/deploy.yml
└── src/
    ├── main.jsx
    ├── App.jsx      # lógica: mostrar, agregar, marcar, borrar
    └── App.css      # estilos
```
