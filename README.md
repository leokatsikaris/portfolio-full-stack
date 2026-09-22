# Leonel Katsikaris — Fullstack Developer

Portfolio profesional bilingüe, desarrollado sobre el proyecto React/Vite existente. Cuatro secciones: introducción, tecnologías, experiencia/proyectos y contacto. Contenido orientado a oportunidades Fullstack y proyectos freelance, con datos reales y estados pendientes explícitos.

## Iniciar el proyecto

Abrí una terminal en la carpeta del proyecto:

```powershell
cd C:\Users\leone\Documents\ChatGPT\portfolio-full-stack
npm.cmd install
npm.cmd run dev
```

Si las dependencias ya están instaladas, alcanza con `npm run dev`. Vite muestra la dirección local (normalmente `http://localhost:5173`; el script usa `127.0.0.1`). Para una instalación reproducible desde el lockfile usar `npm ci`.

Requiere Node.js 22.12+; validado con Node 24. Para entrar desde otro dispositivo de tu red: `npm run dev -- --host 0.0.0.0`.

## Stack

React 19, TypeScript, Vite, Tailwind CSS 4, Lucide React y ESLint. Manrope variable se sirve localmente. CSS + IntersectionObserver para motion; sin biblioteca de animación ni i18n adicional. Sin backend, formulario remoto, trackers o servicios externos en tiempo de ejecución.

## Comandos

```bash
npm run dev
npm run lint
npm run build
npm test
npm run preview
```

`build` verifica TypeScript y genera `dist/`. Los tests requieren un build previo: verifican el HTML, el CV, Vercel, el bootstrap de preferencias, equivalencia de traducciones, datos pendientes y contraste de los tokens. `preview` sirve el resultado de producción, normalmente en el puerto 4173.

## Estructura

```text
src/
  components/  Navbar, preferencias, encabezados, enlaces y casos reutilizables
  sections/    Hero, Capabilities, Experience y Contact
  data/        Experiencias localizadas y tecnologías
  config/      Datos personales, enlaces y persistencia
  hooks/       Sección activa, progreso de lectura y reveal
  i18n/        Registro de idiomas, diccionarios y contexto tipado
  styles/      Tokens de ambos temas y sistema de motion
  types/       Contratos de datos
  styles.css   Composición, componentes y responsive
public/        CV original y favicon
tests/         Verificaciones del artefacto y contratos de datos
docs/          Decisiones de diseño y validación
```

Se conservaron React/Vite, las dependencias, el CV y los componentes que seguían aportando valor. About se integró al hero; Projects y Experience se unificaron para evitar contenido repetido. La lógica de servicios y de IA se integró en introducción y tecnologías. Se eliminaron los archivos obsoletos de esas secciones.

## Dónde editar

| Contenido                                      | Archivo                  |
| ---------------------------------------------- | ------------------------ |
| Nombre, email, CV y enlaces sociales           | `src/config/personal.ts` |
| Experiencias, fechas, proyectos, stack y TODO  | `src/data/experience.ts` |
| Tecnologías por categoría                      | `src/data/skills.ts`     |
| Textos de interfaz, secciones y SEO en español | `src/i18n/es.ts`         |
| Textos en inglés                               | `src/i18n/en.ts`         |
| Registro de idiomas                            | `src/i18n/locales.ts`    |
| Paleta, superficies y tokens                   | `src/styles/tokens.css`  |
| Motion y reduced motion                        | `src/styles/motion.css`  |
| Composición y responsive                       | `src/styles.css`         |

LinkedIn y GitHub están configurados con las URLs proporcionadas. Los accesos de email abren la redacción de Gmail en otra pestaña (puede requerir iniciar sesión); el botón Copiar email permite usar cualquier otro proveedor sin depender de un cliente de correo del sistema.

## Experiencia y placeholders

Las experiencias están ordenadas como se solicitó: Phinxlab, Aulasneo, H+Trace, Somos Olea. Cada entrada contiene identidad y fechas compartidas más `content.es` y `content.en` con rol, proyecto, descripción, contexto, contribuciones e impacto. Para sumar otra experiencia, agregar un objeto de tipo `Experience`; no hace falta editar componentes.

Las fechas conocidas y los hechos de H+Trace proceden del CV original proporcionado. Su impacto no está documentado: permanece en `null` y muestra un estado pendiente. Somos Olea incluye el proyecto y las contribuciones proporcionadas, traducidas al español e inglés. Conserva TODO_PERIOD y TODO_IMPACT hasta disponer de fechas y resultados verificables. No se muestran esos identificadores internos al visitante; se presentan placeholders traducidos.

Formato de fechas: `YYYY-MM`; se muestran con `Intl.DateTimeFormat`. `current: true` identifica la experiencia actual. Los casos comparten el mismo componente, son desplegables nativos y no contienen material propietario.

## Idiomas

Español es el idioma por defecto; se utiliza la preferencia válida de `localStorage["portfolio.locale"]` cuando existe. El idioma del sistema no cambia este default. La selección actualiza todo el contenido, los labels accesibles, `html.lang`, title, description y metadatos OpenGraph/Twitter. Los nombres propios y tecnologías se conservan.

Para agregar un idioma:

1. Agregar su código, nombre, abreviatura y locale OpenGraph a `src/i18n/locales.ts`.
2. Crear un diccionario compatible con `Messages` y registrarlo en `src/i18n/index.ts`.
3. Completar ese idioma en el campo `content` de cada experiencia. El tipo `Localized<T>` detecta omisiones.
4. Añadir la cobertura del idioma a los tests de traducciones.

El selector se genera desde el registro. No se duplican componentes. El SEO del HTML estático se genera en español; la metadata en inglés se actualiza en el navegador. Para indexación independiente por idioma en el futuro, habría que sumar rutas localizadas y prerenderizado; no se simulan rutas ni hreflang inexistentes.

## Temas y preferencias

Sin selección manual se respeta `prefers-color-scheme`, incluyendo cambios del sistema mientras la página está abierta. Un cambio manual se guarda en `localStorage["portfolio.theme"]` y tiene prioridad. El bootstrap generado por Vite se ejecuta en el head antes de React/CSS para evitar un tema incorrecto al cargar. Los fallos de almacenamiento no rompen la página. Los cambios se sincronizan entre pestañas del mismo origen.

Para volver a la preferencia del sistema, eliminar `portfolio.theme` de localStorage y recargar. Para volver al idioma predeterminado, eliminar `portfolio.locale`. No se almacenan datos personales.

## CV

El archivo original permanece en `public/leonel-katsikaris-cv.pdf`, sin modificaciones. Sustituirlo para actualizarlo. Vite detecta si existe al iniciar/build: si falta, los enlaces muestran un mensaje traducido de disponibilidad pendiente. Reiniciar Vite tras agregarlo o quitarlo. El test de integridad presupone que el CV de esta entrega está presente.

## Deployment en Vercel

1. Subir este mismo proyecto a tu repositorio Git e importarlo en Vercel.
2. Usar el directorio raíz, preset **Vite**, instalación `npm ci`, build `npm run build` y salida `dist`.
3. Elegir Node.js 22 o 24 y desplegar.

`vercel.json` conserva la configuración estática. No requiere funciones serverless, variables obligatorias ni rewrites. Navegación por anclas; `#work` se conserva como destino compatible dentro de experiencia.

Para un dominio personalizado, agregarlo en **Settings → Domains** del proyecto en Vercel y aplicar los registros DNS indicados. Configurar `VITE_SITE_URL=https://tu-dominio.com` y volver a desplegar. Para local, copiar `.env.example` a `.env.local`. Se acepta un origen HTTPS sin rutas: canonical y og:url se generan en build. Si no se configura, se omiten sin inventar un dominio.

## Accesibilidad y performance

Un H1, cuatro secciones principales, enlaces reales, landmarks, foco visible, skip link, menú con Escape y foco gestionado, controles táctiles de 44 px y disclosures nativos. Ambos temas usan tokens contrastados. El cambio de idioma no remonta los casos ni pierde su estado de apertura.

Se usan transform/opacity para entradas y microinteracciones. Un observer compartido revela contenido una vez; el listener de scroll usa requestAnimationFrame y solo cambia el estado React al cambiar la sección activa. Con reduced motion se desactiva motion y smooth scroll. No hay loops decorativos, imágenes remotas o JS de animación adicional.

Decisiones y fuentes: [docs/DESIGN.md](docs/DESIGN.md). Verificación: [docs/QA.md](docs/QA.md).

## Interacción de superficie

El hero revela una relación técnica bajo el título al mover un mouse: React → TypeScript o Node.js → PostgreSQL. El desplazamiento del título está limitado a 1,5 px. La lógica vive en `src/hooks/useSurfaceProbe.ts`; los detalles visuales en `src/styles/signature.css`. Usa refs, variables CSS y requestAnimationFrame, sin actualizaciones React por movimiento. Cancela frames al salir, hacer scroll, cambiar preferencias o desmontarse. Se desactiva en touch, pantallas menores a 901 px y reduced motion.

Las tecnologías relacionadas se destacan juntas mediante CSS y el índice de experiencia sigue la lectura usando el listener de scroll existente. El único easter egg es un mensaje opcional en la consola. No se añadieron dependencias, colores ni fuentes. En PowerShell, usar `npm.cmd` evita el bloqueo de `npm.ps1` sin modificar políticas del sistema.
