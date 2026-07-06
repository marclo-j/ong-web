# FlowFest — Codesotec Web

Landing page de **FlowFest** ("Webflow chat, festival vibes, good times"), un sitio
de evento/festival renderizado en el servidor (SSR). Proyecto generado con
[Lovable](https://lovable.dev) sobre **TanStack Start**.

La página es de una sola ruta (`/`) e incluye secciones de hero, galería con shuffle,
sponsors en marquee, speakers, FAQs y CTA de tickets, con un sistema de diseño
"neo-brutalista" propio (bordes gruesos, sombras `pop`, colores cálidos en OKLCH).

---

## Stack tecnológico

| Categoría                  | Tecnología                                                                                        | Versión                       |
| -------------------------- | ------------------------------------------------------------------------------------------------- | ----------------------------- |
| Runtime                    | Node.js                                                                                           | `v24.16.0`                    |
| Gestor de paquetes         | [pnpm](https://pnpm.io)                                                                           | `10+`                         |
| Lenguaje                   | TypeScript                                                                                        | `5.9.3`                       |
| Framework full-stack (SSR) | [TanStack Start](https://tanstack.com/start)                                                      | `1.167.50`                    |
| Routing (file-based)       | [TanStack Router](https://tanstack.com/router)                                                    | `1.168.25`                    |
| Plugin de router           | `@tanstack/router-plugin`                                                                         | `1.167.28`                    |
| Librería UI                | [React](https://react.dev)                                                                        | `19.2.5`                      |
| React DOM                  | `react-dom`                                                                                       | `19.2.5`                      |
| Build tool / dev server    | [Vite](https://vite.dev)                                                                          | `7.3.2`                       |
| Plugin React de Vite       | `@vitejs/plugin-react`                                                                            | `5.2.0`                       |
| Config de build            | `@lovable.dev/vite-tanstack-config`                                                               | `2.3.2`                       |
| Servidor de producción     | [Nitro](https://nitro.build) (target Cloudflare por defecto)                                      | `3.0.260603-beta`             |
| Estado de datos / cache    | [TanStack Query](https://tanstack.com/query)                                                      | `5.100.1`                     |
| Estilos                    | [Tailwind CSS](https://tailwindcss.com)                                                           | `4.2.4`                       |
| Plugin Tailwind de Vite    | `@tailwindcss/vite`                                                                               | `4.2.4`                       |
| Componentes                | [shadcn/ui](https://ui.shadcn.com) (estilo _new-york_) sobre [Radix UI](https://www.radix-ui.com) | Radix `react-dialog` `1.1.15` |
| Utilidades de clases       | `class-variance-authority` `0.7.1`, `tailwind-merge` `3.5.0`, `clsx` `2.1.1`                      | —                             |
| Iconos                     | [lucide-react](https://lucide.dev)                                                                | `0.575.0`                     |
| Formularios                | `react-hook-form` `7.73.1` + `@hookform/resolvers`                                                | —                             |
| Validación de esquemas     | [Zod](https://zod.dev)                                                                            | `3.25.76`                     |
| Gráficas                   | [Recharts](https://recharts.org)                                                                  | `2.15.4`                      |
| Linter                     | [ESLint](https://eslint.org) + `typescript-eslint`                                                | `9.39.4`                      |
| Formateador                | [Prettier](https://prettier.io)                                                                   | `3.8.3`                       |

> Las versiones corresponden a las efectivamente resueltas en `pnpm-lock.yaml`. Los rangos
> declarados (`^x.y.z`) están en [`package.json`](./package.json).

---

## Requisitos previos

- **pnpm** `>= 10` — gestor de paquetes y ejecutor de scripts del proyecto
  (hay un `pnpm-lock.yaml` y un `.npmrc`).

  Instalación de pnpm (vía npm):

  ```bash
  npm install -g pnpm
  ```

  O vía winget (Windows):

  ```powershell
  winget install pnpm
  ```

---

## Cómo ejecutar el proyecto

1. **Instalar dependencias**

   ```bash
   pnpm install
   ```

2. **Servidor de desarrollo** (con hot-reload)

   ```bash
   pnpm run dev
   ```

   La app queda disponible en **http://localhost:8080/**.

3. **Build de producción**

   ```bash
   pnpm run build
   ```

4. **Previsualizar el build**
   ```bash
   pnpm run preview
   ```

### Scripts disponibles

| Script      | Comando                         | Descripción                         |
| ----------- | ------------------------------- | ----------------------------------- |
| `dev`       | `vite dev`                      | Servidor de desarrollo en `:8080`   |
| `build`     | `vite build`                    | Build de producción (SSR vía Nitro) |
| `build:dev` | `vite build --mode development` | Build en modo desarrollo            |
| `preview`   | `vite preview`                  | Sirve el build localmente           |
| `lint`      | `eslint .`                      | Análisis estático del código        |
| `format`    | `prettier --write .`            | Formatea el código                  |

---

## Estructura del proyecto

```
.
├── src/
│   ├── routes/            # Rutas file-based de TanStack Router
│   │   ├── __root.tsx     # Shell de la app (HTML, providers, error/404)
│   │   └── index.tsx      # Página principal "/" (FlowFest landing)
│   ├── components/ui/      # Componentes shadcn/ui (Radix)
│   ├── hooks/              # Hooks reutilizables
│   ├── lib/                # Utilidades, manejo de errores y API
│   ├── assets/             # Imágenes (eventos, speakers, stickers)
│   ├── router.tsx          # Configuración del router + QueryClient
│   ├── server.ts           # Entrada SSR (wrapper de manejo de errores)
│   ├── start.ts            # Middleware de servidor de TanStack Start
│   ├── styles.css          # Tailwind v4 + tema de diseño (tokens OKLCH)
│   └── routeTree.gen.ts    # Árbol de rutas autogenerado (no editar)
├── vite.config.ts          # Config Vite (delegada a @lovable.dev config)
├── components.json         # Config de shadcn/ui
├── tsconfig.json           # Config de TypeScript (alias @/* → src/*)
├── eslint.config.js        # Config de ESLint
├── .npmrc                  # Config de pnpm (shamefully-hoist)
└── pnpm-lock.yaml          # Lockfile de pnpm
```

### Routing

Se usa **routing basado en archivos** de TanStack Router: cada `.tsx` dentro de
`src/routes/` es una ruta. `__root.tsx` es el layout raíz y `routeTree.gen.ts`
se genera automáticamente. No crear carpetas `pages/` ni `app/` (convenciones de
Next.js/Remix). Ver [`src/routes/README.md`](./src/routes/README.md).

---

## Notas

- **Puerto:** el dev server arranca en `:8080` (configurado por
  `@lovable.dev/vite-tanstack-config`, que también añade los plugins de
  TanStack Start, React, Tailwind, alias `@`, Nitro, etc. — no los agregues a
  mano en `vite.config.ts`).
- **Despliegue:** el build usa Nitro con **Cloudflare** como target por defecto.
- **Tipado:** alias de importación `@/…` apunta a `src/…`.
