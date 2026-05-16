# Inclusión Digital en Medellín

Blog académico universitario desarrollado para la materia **Práctica en Responsabilidad Social** de UNIMINUTO.

**Tema:** Inclusión Digital como herramienta para reducir la brecha tecnológica en Medellín.

## Tecnologías

- React 19 + Vite
- Tailwind CSS 4
- Lucide React (iconos)
- Despliegue estático en GitHub Pages

## Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- npm
- Cuenta de GitHub

## Instalación local

```bash
cd C:\inclusion-digital-medellin
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en el navegador.

## Estructura del proyecto

```
inclusion-digital-medellin/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes React por sección
│   ├── data/            # Contenido y navegación
│   ├── hooks/           # Hooks personalizados
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css        # Estilos globales + Tailwind
├── vite.config.js       # Base path para GitHub Pages
└── package.json
```

## Configuración para GitHub Pages

### 1. Crear repositorio en GitHub

Crea un repositorio llamado `inclusion-digital-medellin` (o el nombre que prefieras).

### 2. Ajustar el base path

En `vite.config.js`, cambia el valor de `repoName` por el **nombre exacto** de tu repositorio:

```js
const repoName = 'inclusion-digital-medellin'
```

### 3. Subir el código

```bash
git init
git add .
git commit -m "Proyecto blog inclusión digital UNIMINUTO"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/inclusion-digital-medellin.git
git push -u origin main
```

### 4. Desplegar con gh-pages

```bash
npm run deploy
```

Este comando ejecuta `npm run build` y publica la carpeta `dist` en la rama `gh-pages`.

### 5. Activar GitHub Pages

1. Ve a **Settings → Pages** en tu repositorio.
2. En **Source**, selecciona la rama `gh-pages` y la carpeta `/ (root)`.
3. Guarda los cambios.

Tu sitio estará disponible en:

```
https://TU_USUARIO.github.io/inclusion-digital-medellin/
```

> El despliegue puede tardar unos minutos en estar disponible.

## Scripts disponibles

| Comando           | Descripción                          |
|-------------------|--------------------------------------|
| `npm run dev`     | Servidor de desarrollo               |
| `npm run build`   | Genera build de producción en `dist` |
| `npm run preview` | Previsualiza el build localmente     |
| `npm run deploy`  | Build + publicación en GitHub Pages  |

## Personalización

- **Contenido:** edita `src/data/content.js`
- **Menú:** edita `src/data/navigation.js`
- **Colores y fuentes:** edita `src/index.css` (variables `@theme`)
- **URL de GitHub en footer:** edita `footerContent.githubUrl` en `content.js`

## Licencia

Proyecto académico — UNIMINUTO · Práctica en Responsabilidad Social.
