# Dirección visual y decisiones

Revisión de referencias realizada el 22/09/2026. Se usaron como inspiración y criterio de implementación, sin copiar sus composiciones.

| Referencia                                                                                      | Observación relevante                                                                                                                             | Aplicación en este portfolio                                                                                   |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| [Rauno Freiberg](https://rauno.me/)                                                             | La tipografía y la composición pueden sostener una identidad sin una sucesión de tarjetas.                                                        | Hero editorial, escala tipográfica marcada y segunda línea desplazada. No se reutilizan sus recursos gráficos. |
| [Emil Kowalski](https://emilkowal.ski/)                                                         | Contenido concreto y una presentación fácil de recorrer.                                                                                          | Índices cortos, jerarquía explícita y contacto directo.                                                        |
| [Motion con propósito, Emil Kowalski](https://emilkowal.ski/ui/you-dont-need-animations)        | Animaciones breves para causa/efecto y respuesta, no para demorar acciones.                                                                       | Controles de 180–250 ms, reveal una vez y entradas iniciales escalonadas. Sin loops continuos.                 |
| [Geist Typography](https://vercel.com/geist/typography) y [Geist Font](https://vercel.com/font) | Separar display, lectura y metadatos técnicos; consistencia de escala.                                                                            | Se conserva Manrope local y se contrasta con monospace de sistema. No se agrega una familia por moda.          |
| [Rediseño de Linear](https://linear.app/now/how-we-redesigned-the-linear-ui)                    | Reducción de ruido, jerarquía y tokens de superficies/contraste en ambos temas. Artículo de 2024, usado como fundamento, no como novedad de 2026. | Temas independientes mediante tokens semánticos. Sombras en claro, jerarquía por superficies en oscuro.        |
| [Web Interface Guidelines](https://vercel.com/design/guidelines)                                | Foco visible, objetivos táctiles, movimiento reducido y prioridad a transform/opacity.                                                            | Enlaces reales, disclosures nativos, controles de 44 px y animaciones CSS sin biblioteca adicional.            |

## Identidad elegida

Un índice editorial de producto: numeración, líneas de referencia, nombres de tecnologías con ritmo tipográfico y un recorrido de experiencias que combina contexto con contribución. El naranja mineral une el monograma, los controles y las anotaciones. El diagrama del hero representa la relación interfaz/lógica/datos; no pretende ser una captura o una arquitectura específica de un cliente.

- **Claro:** blanco mineral, tinta oscura, acento terracota, planos suaves y sombras contenidas.
- **Oscuro:** carbón, texto claro, acento naranja cálido y superficies diferenciadas sin brillos o cristal.
- **Tipografía:** Manrope variable local; monospace nativa para índices, períodos y anotaciones.
- **Motion:** entrada de título escalonada, dibujo de línea inicial, reveal por viewport, hover de tecnologías, indicadores de navegación, apertura de casos y respuesta de selectores. Mobile reduce distancia y duración. Reduced motion elimina animación y smooth scroll.
- **Estructura:** introducción (incluye enfoque de trabajo), tecnologías (incluye IA), experiencia/proyectos, contacto.

Se descartaron carruseles, partículas, porcentajes de habilidad, contadores, efectos de mouse permanentes y dependencias adicionales. No ayudan a comprender la experiencia profesional ni el trabajo realizado.
