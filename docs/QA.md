# Validación del refactor

## Automatizada

- TypeScript mediante `npm run build`.
- ESLint mediante `npm run lint`.
- Nueve pruebas con `npm test`, después del build.
- HTML de producción con español y metadata predeterminados.
- PDF idéntico al original y al archivo servido desde `dist`.
- Configuración Vercel conservada para una salida estática Vite.
- Bootstrap ejecutado en VM con sistema claro/oscuro, preferencias manuales, valores inválidos y almacenamiento bloqueado.
- Paridad de claves y textos completos en los diccionarios ES/EN.
- Orden de experiencias y datos conocidos de H+Trace; TODO explícitos para los campos desconocidos.
- Contraste mínimo 4.5:1 de texto principal/secundario, acento, CTA y superficies de ambos temas.

## Navegador

- Español por defecto en un origen sin preferencias previas.
- Cambio ES/EN incluyendo `html.lang`, title, description y OpenGraph.
- Cambio de tema, idioma y persistencia tras recarga.
- Revisión visual de introducción, tecnologías, experiencia/proyectos y contacto.
- Desktop claro/español y oscuro/inglés; mobile y tablet en ambas variantes durante el recorrido.
- Cuatro secciones principales y un H1.
- Anchos CSS de 320, 375, 768, 1024, 1440 y 1920 sin overflow horizontal.
- Menú mobile operable con Enter: foco inicial en el primer enlace, cierre con Escape y devolución al botón; selección de sección cierra el menú y enfoca el destino.
- Los cuatro casos se abren con Enter; los estados pendientes están traducidos y no se muestran identificadores TODO internos.
- Índice de experiencias, navegación activa, contacto por mailto y enlaces de CV.
- Consola revisada después de cargar la versión final; los eventos transitorios de HMR durante edición no se consideran errores de producción.

## Performance y límites

La revisión verifica build, tamaño de artefactos y comportamiento local; no es una auditoría Lighthouse ni una garantía de 60 fps en todos los dispositivos. No se agregaron dependencias. Las animaciones priorizan transform/opacity, se simplifican en mobile y se desactivan mediante `prefers-reduced-motion`. El contenido no depende de que se ejecute una animación.

Build final: JavaScript 263.21 kB (81.46 kB gzip), CSS 36.37 kB (10.79 kB gzip). El bundle JavaScript anterior era de 76.99 kB gzip; el incremento es aproximadamente 4.47 kB gzip. Las fuentes son locales y no hay solicitudes a servicios de tracking.

El sitio permanece como SPA estática: la metadata inicial para crawlers es española y la inglesa se actualiza al seleccionar el idioma en el navegador. No se publicaron rutas SEO por idioma. No se desplegó en Vercel ni se configuró un dominio, ya que la entrega pedida es un proyecto preparado para deployment.

Antes de publicación real: completar enlaces sociales, dominio y los campos pendientes que se deseen mostrar; reemplazar el CV solo cuando exista una nueva versión autorizada.

## Iteración de superficie y ampliación de experiencias — 22/09/2026

- Se mantuvieron tokens, fuente, estructura y dirección visual.
- Hero: sonda técnica temporal, desplazamiento máximo de título de 1,5 px; sin cursor personalizado ni librerías añadidas.
- Tecnologías: énfasis coordinado React/TypeScript, Node.js/PostgreSQL y Jest/React Testing Library. Experiencias: línea e índice activos al leer.
- GitHub y LinkedIn configurados con URLs del usuario.
- Descripciones y stacks ampliados con información aportada; Somos Olea completado en ES/EN salvo fechas y resultados no documentados.
- Email: redacción web en Gmail, sin envío automático, y copia al portapapeles confirmada visualmente. Gmail puede requerir sesión; no se probó envío ni se envió ningún mensaje.
- Revisión visual con navegador: desktop 1440 px y mobile 390 px, ambos temas, ES/EN, hero, tecnologías, experiencias y contacto. Sin overflow horizontal en las dimensiones revisadas.
- Movimiento real del puntero activó la sonda. React/TypeScript mostraron énfasis simultáneo; el índice de Somos Olea reflejó la entrada activa.
- Apertura de Aulasneo con Enter verificada, foco en summary. Sin errores/warnings capturados en consola.
- Reduced motion y touch: pruebas unitarias del controlador verifican bloqueo de seguimiento, cancelación al cambiar preferencias y limpieza de listeners. CSS revisado: sonda oculta y transforms desactivados. La herramienta del navegador no expone emulación de esta preferencia; no se afirma una prueba visual bajo emulación.
- Lint, TypeScript (incluido en build), build de producción y 12 tests aprobados.
- JS ~84 kB gzip, CSS ~12 kB gzip. Sin dependencias nuevas. No se realizó un perfil de FPS ni una auditoría Lighthouse.
