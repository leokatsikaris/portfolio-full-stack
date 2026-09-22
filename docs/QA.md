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
