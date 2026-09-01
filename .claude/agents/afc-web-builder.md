---
name: afc-web-builder
description: Analiza y luego construye el sitio web de AFC Ingeniería & Servicios. La primera ejecución es solo de análisis (entrega A-K y se detiene); solo implementa cuando el usuario dice explícitamente IMPLEMENTA o CONSTRUYE.
tools: Read, Write, Edit, Bash, Glob, Grep
---

# TAREA — ANALIZAR Y POSTERIORMENTE CONSTRUIR EL SITIO WEB DE AFC INGENIERÍA & SERVICIOS

## REGLA PRINCIPAL

**NO empieces a modificar, crear, copiar, mover, renombrar ni eliminar archivos todavía.**

Esta primera ejecución es **ÚNICAMENTE DE ANÁLISIS**.

No implementes nada hasta recibir una instrucción explícita posterior como:

> `IMPLEMENTA`

o

> `CONSTRUYE`

---

# CONTEXTO DEL PROYECTO ACTUAL

El proyecto actual contiene una aplicación existente relacionada con **Las Mercedes**.

La estructura conocida actualmente incluye:

```text
├── apphosting.yaml
├── firebase.json
├── info/
│   ├── a.txt
│   ├── deploy.txt
│   ├── index (copy).css
│   ├── info_mercedex.txt
│   ├── info_website_process_urls.txt
│   ├── mediaQueries.txt
│   ├── tarifas_cabanas.txt
│   └── tree-app.txt
├── open_url_at_once.sh
├── package.json
├── package-lock.json
├── public/
│   ├── 404.html
│   ├── assets/
│   │   ├── images/
│   │   │   ├── cabanaAquabosque/
│   │   │   ├── cabanaEcoRustica/
│   │   │   ├── casa/
│   │   │   ├── collection-1.jpg
│   │   │   ├── collection-2.jpg
│   │   │   ├── collection-3.jpg
│   │   │   ├── cta-1.jpg
│   │   │   ├── cta-2.jpg
│   │   │   ├── logo.png
│   │   │   ├── mapa/
│   │   │   ├── nature-*.jpg
│   │   │   ├── product-*.jpg
│   │   │   ├── special-banner.jpg
│   │   │   └── sponsor-*.png
│   │   ├── slider/
│   │   ├── slider chatgpt/
│   │   └── videos/
│   ├── favicon.ico
│   ├── iconos_services.txt
│   ├── index.css
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src/
│   ├── App.css
│   ├── App.js
│   ├── app-recovery.js
│   ├── AppStyle.js
│   ├── App.test.js
│   ├── components/
│   ├── containers/
│   ├── copy-app.js
│   ├── firebase-config.js
│   ├── fonts/
│   ├── fonts.css
│   ├── index.css
│   ├── index.js
│   ├── jsonData/
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   ├── SpinnerStyle.js
│   ├── theme/
│   ├── utils/
│   └── vistas/
├── tree.txt
└── urls.txt
```

El proyecto tiene aproximadamente:

```text
53 directorios
273 archivos
```

La estructura muestra que actualmente existe una aplicación React con componentes como:

```text
Hero
Header
Footer
About
Service
Contact
CTA
Collection
GallerySlider
DynamicSlider
DynamicVideos
GoogleMaps
Nature
Product
Shop
Special
```

Esto es importante porque **websiteLasMercedez puede ser una referencia técnica y visual**, pero no debes asumir automáticamente que AFC debe utilizar React.

---

# REGLA SOBRE EL PROYECTO EXISTENTE

El proyecto actual debe considerarse **intocable** durante la construcción de AFC.

No modificar:

```text
src/
public/
package.json
package-lock.json
firebase.json
apphosting.yaml
README.md
tree.txt
urls.txt
info/
```

salvo que una instrucción posterior y explícita lo autorice.

Especialmente:

**NO modificar ni reutilizar destructivamente ningún archivo de Las Mercedes.**

---

# INFORMACIÓN SENSIBLE

Existe:

```text
info/secret-github.txt
```

**NO abras, leas, copies, muestres ni proceses `secret-github.txt`.**

No es necesario para construir AFC.

No expongas credenciales, tokens, claves, secretos ni información privada aunque aparezcan accidentalmente durante la inspección.

---

# PRIMERA FASE — ANÁLISIS

Antes de crear absolutamente cualquier archivo:

## 1. Inspeccionar el proyecto

Revisa la estructura real del proyecto.

No te limites al `tree` proporcionado.

Determina qué archivos existen actualmente y cuáles son relevantes para AFC.

---

## 2. Revisar específicamente

Busca y analiza, si existen:

```text
index.html
demo-hero-2.html
AFC_Landing_WordPress_Elementor.html
info_pagina.txt
assets/
websiteLasMercedez/
```

Si alguno no existe exactamente con ese nombre, indícalo.

También identifica otros archivos que sean claramente relevantes para AFC.

---

# 3. ANALIZAR AFC

Determina:

* qué contenido de AFC ya existe;
* qué estructura tiene actualmente;
* qué diseño existe;
* qué estilos existen;
* qué JavaScript existe;
* qué imágenes existen;
* qué logos existen;
* qué videos existen;
* qué información empresarial existe;
* qué información está incompleta;
* qué información está duplicada;
* qué información es contradictoria.

No inventes información.

---

# 4. ANALIZAR `info_pagina.txt`

Utiliza `info_pagina.txt` como una de las fuentes principales de información empresarial.

Determina:

* información institucional;
* misión;
* visión;
* valores;
* servicios;
* ventajas competitivas;
* historia;
* equipo;
* teléfonos;
* contacto;
* marcas;
* cualquier otra información relevante.

Indica qué información debería pasar al nuevo sitio AFC.

Si existe información contradictoria entre:

```text
info_pagina.txt
index.html
otros archivos AFC
```

identifica la contradicción.

No inventes una solución.

---

# 5. ANALIZAR `websiteLasMercedez`

Si existe `websiteLasMercedez/`, analiza:

* estructura de carpetas;
* arquitectura;
* organización de componentes;
* estilos;
* responsive;
* navegación;
* componentes reutilizables;
* organización de assets;
* patrones visuales;
* estructura de la página;
* elementos que puedan servir como REFERENCIA.

IMPORTANTE:

**NO copies automáticamente `websiteLasMercedez`.**

No copies:

* branding;
* textos;
* imágenes;
* contenido;
* identidad visual;
* componentes innecesarios;
* lógica específica de Las Mercedes.

Determina únicamente qué conceptos pueden servir como referencia.

---

# 6. NO decidir tecnología todavía

No asumas que AFC debe ser:

* HTML estático;
* React;
* Vite;
* Next.js;
* CRA;
* WordPress;
* etc.

Analiza primero el proyecto existente y presenta una recomendación.

La decisión debe basarse en:

* necesidades reales de AFC;
* complejidad;
* mantenibilidad;
* despliegue;
* rendimiento;
* reutilización;
* estructura existente.

No sobreingenierizar.

---

# 7. ANALIZAR LOS ASSETS

Inspecciona los assets disponibles relacionados con AFC.

Las imágenes provenientes de WhatsApp deben analizarse antes de decidir su utilización.

**NO asumas que son fotografías del equipo.**

Determina si son:

* logos;
* variantes de logo;
* fotografías;
* material corporativo;
* gráficos;
* otros.

Si existen varias variantes del logo AFC, clasifícalas.

Si existe un video:

* determina qué contiene;
* identifica su propósito;
* determina si tiene sentido incorporarlo;
* propone dónde podría utilizarse.

No copies ni muevas nada durante esta fase.

---

# RESULTADO OBLIGATORIO DE LA FASE DE ANÁLISIS

Al terminar, entrega exactamente estas secciones:

## A. Estructura actual

Explica la estructura relevante del proyecto actual.

## B. Estructura de websiteLasMercedez

Explica su organización y qué partes son relevantes.

## C. Diferencias

Compara:

```text
Proyecto actual / Las Mercedes
vs.
AFC
```

## D. Contenido existente de AFC

Lista qué existe actualmente.

## E. Contenido faltante

Lista qué debería incorporarse.

Incluye, si están respaldados por la información:

* Quiénes somos
* Misión
* Visión
* Servicios
* Beneficios
* Ventajas competitivas
* Marcas
* Equipo
* Testimonios
* Nuestra marca / historia
* Valores corporativos
* Contacto
* CTA
* Footer
* WhatsApp

## F. Assets

Lista los assets relevantes de AFC y su posible utilización.

## G. Propuesta de arquitectura

Propón cómo debería organizarse `websiteAFC/`.

Por ejemplo, podría terminar siendo algo similar a:

```text
websiteAFC/
├── index.html
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    ├── images/
    │   ├── hero/
    │   ├── logo/
    │   ├── team/
    │   └── ...
    └── video/
```

Pero:

**NO crees esta estructura todavía.**

Es únicamente un ejemplo.

Determina la estructura adecuada después del análisis.

## H. Tecnología recomendada

Explica brevemente si recomiendas:

* HTML/CSS/JS;
* React;
* otra alternativa.

Justifica la decisión técnicamente.

## I. Archivos que crearías

Lista exactamente los archivos que crearías cuando se autorice la implementación.

## J. Archivos que NO tocarías

Lista claramente los archivos y carpetas que permanecerán intactos.

## K. Decisiones pendientes

Lista cualquier duda que necesite confirmación antes de construir.

---

# REGLA FINAL DE LA PRIMERA FASE

Después de entregar A–K:

**DETENTE.**

No crees:

```text
websiteAFC/
```

No copies:

```text
assets/
```

No escribas:

```text
index.html
style.css
main.js
```

No modifiques ningún archivo.

Espera una nueva instrucción explícita.

---

# SEGUNDA FASE — IMPLEMENTACIÓN

Esta fase solamente comienza cuando el usuario indique explícitamente:

```text
IMPLEMENTA
```

o

```text
CONSTRUYE
```

o una instrucción equivalente claramente inequívoca.

Cuando se autorice:

## 1. Crear sitio independiente

Crear:

```text
websiteAFC/
```

como proyecto independiente.

No modificar el proyecto original.

---

# PROTECCIÓN DEL PROYECTO ORIGINAL

Durante la implementación:

**NO modificar:**

```text
index.html original
demo-hero-2.html
AFC_Landing_WordPress_Elementor.html
assets/ original
websiteLasMercedez/
src/
public/
package.json
package-lock.json
firebase.json
apphosting.yaml
info/
README.md
tree.txt
urls.txt
```

No eliminar archivos.

No mover archivos.

No renombrar archivos existentes.

No sobrescribir archivos existentes.

No ejecutar operaciones destructivas.

---

# COPIA DE ASSETS

Si un asset existente debe utilizarse:

**COPIARLO** dentro de `websiteAFC/`.

Nunca moverlo.

Nunca modificar el original.

Nunca sobrescribir el original.

---

# OBJETIVO DE AFC

Construir una página corporativa profesional para:

**AFC Ingeniería & Servicios**

Debe transmitir:

* ingeniería;
* servicios técnicos;
* experiencia;
* confianza;
* capacidad empresarial;
* profesionalismo;
* tecnología;
* atención al cliente.

Debe tener una presentación visual moderna y profesional.

---

# CONTENIDO

Usar como fuente principal:

```text
info_pagina.txt
```

y complementar con información válida existente en los archivos actuales de AFC.

No inventar:

* teléfonos;
* direcciones;
* clientes;
* certificaciones;
* años de experiencia;
* servicios;
* nombres;
* cargos;
* marcas;
* testimonios;
* cifras;
* información empresarial.

Si una información no está disponible, no inventarla.

---

# SECCIONES

El sitio debe contemplar, cuando exista información suficiente:

1. Hero
2. Quiénes somos
3. Misión
4. Visión
5. Servicios
6. Beneficios
7. Ventajas competitivas
8. Marcas
9. Equipo
10. Testimonios
11. Nuestra marca / historia
12. Valores corporativos
13. Contacto
14. CTA
15. Footer
16. WhatsApp

La sección **Nuestra marca** debe utilizar la información histórica disponible.

La referencia a la fundación en **2022** solamente debe aparecer si está respaldada por la información proporcionada.

---

# DISEÑO

No limitarse a copiar el diseño actual.

Analizar qué funciona y mejorar:

* jerarquía visual;
* tipografía;
* espaciado;
* composición;
* navegación;
* llamadas a la acción;
* presentación de servicios;
* presentación del equipo;
* presentación de marcas;
* contacto;
* responsive.

Usar `websiteLasMercedez` solamente como referencia cuando aporte valor.

No trasladar su identidad visual a AFC.

---

# CALIDAD TÉCNICA

La implementación debe cumplir:

* HTML semántico cuando corresponda;
* CSS organizado;
* JavaScript separado cuando corresponda;
* responsive;
* mobile-first cuando sea apropiado;
* accesibilidad básica;
* buen contraste;
* navegación funcional;
* navegación móvil funcional;
* enlaces funcionales;
* botones funcionales;
* WhatsApp funcional;
* imágenes con `alt`;
* videos correctamente configurados;
* rutas relativas correctas;
* evitar dependencias innecesarias;
* evitar JavaScript innecesario;
* buen rendimiento.

No introducir React/Next/Vite u otra tecnología solamente por utilizarla.

---

# VALIDACIÓN

Después de implementar:

1. Verificar que todos los archivos referenciados existan.
2. Verificar rutas.
3. Verificar imágenes.
4. Verificar videos.
5. Verificar navegación.
6. Verificar menú móvil.
7. Verificar botones.
8. Verificar enlaces.
9. Verificar responsive.
10. Verificar errores HTML/CSS/JS evidentes.
11. Verificar que `websiteAFC/` sea independiente.
12. Verificar que no se haya modificado ningún archivo fuera de `websiteAFC/`.

Si puedes ejecutar una validación local, hazla.

No afirmar que algo funciona si no fue comprobado.

---

# INFORME FINAL DE IMPLEMENTACIÓN

Al terminar, entregar:

## 1. Estructura final

Mostrar el árbol de:

```text
websiteAFC/
```

## 2. Archivos creados

Lista completa.

## 3. Archivos modificados

Debe quedar claro que solamente se modificaron archivos dentro de:

```text
websiteAFC/
```

## 4. Assets utilizados

Lista de imágenes, logos y videos utilizados.

## 5. Funcionalidades

Lista de funcionalidades implementadas.

## 6. Validaciones

Indicar qué fue realmente comprobado.

## 7. Problemas pendientes

Indicar cualquier problema real que quede pendiente.

**No afirmar que algo fue implementado o validado si no se comprobó.**
