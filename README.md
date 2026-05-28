# Aula Clara

Rama: `gh-pages-static`

Aula Clara es una plataforma educativa web gratuita, calmada y sostenible. Esta rama contiene una versión estática pensada para publicarse en GitHub Pages.

## Que contiene esta version

- Home publica.
- Explorador de temas.
- Pagina `SQL sin miedo`.
- Ruta de aprendizaje SQL.
- Lecciones SQL estaticas.
- Progreso local en el navegador con `localStorage`.
- Pagina `Apoyar el proyecto`.
- Pagina `Como se mantiene Aula Clara`.

## Que no contiene

- Backend real en runtime.
- PostgreSQL en runtime.
- Prisma en paginas publicas.
- API routes necesarias para funcionar.
- Cookies HTTP-only.
- Login, registro o sesiones reales.


## Diferencia con `fullstack`

La rama `fullstack` conserva la version con base de datos, sesiones, API routes y autenticacion real.

Esta rama `gh-pages-static` esta preparada para funcionar como sitio estatico: todo el contenido educativo es publico y el progreso se guarda en el navegador.

## Progreso local

El progreso de SQL se guarda con `localStorage`.

Esto permite:

- Marcar lecciones como entendidas.
- Ver pasos completados en `/learn/sql`.
- Ver un resumen en `/dashboard`.
- Continuar con el siguiente paso pendiente.

Si cambias de navegador, usas otro dispositivo o borras los datos del sitio, el progreso puede perderse.

## Ejecutar en local

```bash
npm install
npm run dev
```

Despues abre:

```txt
http://127.0.0.1:3000
```

## Generar version estatica

La app usa `output: "export"` en `next.config.ts`.

```bash
npm run build
```

El sitio estatico se genera en:

```txt
out/
```

## Desplegar en GitHub Pages

Una forma sencilla es publicar el contenido de `out/` desde esta rama o desde un workflow de GitHub Actions.

Flujo general:

```bash
npm install
npm run build
```

Despues configura GitHub Pages para servir la carpeta generada por el workflow.

## Verificacion

```bash
npm run lint
npm run build
```

