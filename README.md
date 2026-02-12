# json-schema-ng16 demo

Demo Angular 16 para visualizar el comportamiento de la libreria `@miguimono/json-schema/ng16`.

## Requisitos

- Node.js 20+
- npm 9+

## Desarrollo local

```bash
npm ci
npm start
```

App local: `http://localhost:4200/`

## Build de produccion

```bash
npm run build:prod
```

Salida en: `dist/json-schema-ng16`

## Deploy en GitHub Pages

Este repo ya incluye workflow en `.github/workflows/deploy-pages.yml`.

### 1) Subir a GitHub

```bash
git add .
git commit -m "optimize demo and setup GitHub Pages deploy"
git push origin main
```

### 2) Configurar Pages en el repo

En GitHub:

1. `Settings` -> `Pages`
2. `Build and deployment` -> `Source`: **GitHub Actions**

### 3) Validar despliegue

- Ve a `Actions` y espera el workflow **Deploy Angular Demo to GitHub Pages**.
- Al finalizar, GitHub mostrara la URL publica del sitio.

## Scripts utiles

- `npm run build`: build por defecto de Angular (production)
- `npm run build:prod`: build explicito de produccion
- `npm run build:pages`: build local para Pages con `base-href` fijo a `/json-schema-ng16/`
- `npm test`: pruebas unitarias
