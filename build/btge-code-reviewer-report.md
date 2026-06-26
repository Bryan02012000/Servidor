## 📊 PR Status

| Métrica | Valor |
|---------|-------|
| Talla | 🟢 **XS** |
| LOC cambiadas | 0 |
| Archivos | 0 |
| Líneas añadidas | +0 |
| Líneas eliminadas | -0 |

# 🔍 PR Check Report

## CÓDIGO

- ✅ **1.2** No tener console.logs
- ✅ **1.3** No tener comentarios TODO/FIXME
- ✅ **1.4** Usar let y const — evitar var
- ✅ **1.5** Binding — usar binding de litElement
- ✅ **1.6** Acceso al DOM — no usar document.querySelector/getElementById
- ✅ **1.7** .eslintrc.json — no modificar
- ✅ **1.9** Custom properties — clase contenedora obligatoria

## PATRONES

- ✅ **P.1** Debugger añadido
- ✅ **P.2** eslint-disable añadido
- ✅ **P.3** @ts-ignore añadido
- ✅ **P.4** Marcador de conflicto de merge
- ✅ **P.5** Unificar uso de rem(): evitar mixin.rem y px
- ✅ **P.6** Funciones vacias
- ✅ **P.7** Funcion de una linea que solo hace console.log
- ✅ **P.8** Evitar estilos inline
- ✅ **P.9** No anadir comentarios salvo JSDoc
- ✅ **P.10** Variables o literales con caracteres no ingleses
- ✅ **P.11** Nombres de clase con terminos en espanol comunes
- ✅ **P.12** Posible hardcode de texto en plantillas
- ✅ **P.13** Bucle potencialmente infinito (while true / for;;)
- ✅ **P.14** Uso de arguments en lugar de parametros rest
- ✅ **P.15** Uso de eval()
- ✅ **P.16** Mutacion directa de parametro de funcion
- ✅ **P.17** Funcion con demasiados parametros (mas de 4)

## ESTÁNDARES Y DEPENDENCIAS

- ✅ **2.2.1** Estándar de linteo — abortOnLintFailure activo
- 🔒 **2.2.2** Configuración eslint — extends "@btge/eslint-config-sf" (1 problemas)
  - ❌ [.eslintrc.json](../.eslintrc.json) — Falta .eslintrc o .eslintrc.json — debe contener {"root": true, "extends": "@btge/eslint-config-sf"}
- ✅ **2.5** Overrides en package.json — requieren justificación
- ✅ **2.8** Dependencias con vulnerabilidades — prohibidas
- ✅ **2.9** JSDoc — debe estar en inglés

## VERSIONADO

- ⚡️ **4.1** CHANGELOG.md — actualizar en cada PR (1 problemas)
  - ⚠️ [CHANGELOG.md](../CHANGELOG.md) — CHANGELOG.md no fue actualizado en esta PR — es obligatorio según la regla 4.1
- ✅ **4.3** Jenkinsfile — no modificar
- ✅ **4.4** sonar-project.properties — no modificar

## ARCHIVOS PROTEGIDOS

- ✅ **5.1.1** Jenkinsfile / libraries.branch — apuntar a master
- ✅ **5.1.2** Jenkinsfile / buildConfig — usar canonical
- ✅ **5.1.3** Jenkinsfile / abortOnLintFailure — debe ser true
- ✅ **5.1.4** Jenkinsfile / e2eTests.e2eGalatea.e2econfig.abortOnFailure — debe ser true
- ✅ **5.1.5** Jenkinsfile / accessibility.e2eAccessibility.abortOnFailure — debe ser true
- ✅ **5.2.1** package.json / version — gestionada por Release Manager

## ERRORES COMUNES — DEPENDENCIAS

- ✅ **SF-1.1** bbva-dev-demo-theme — no usar en producción
- ✅ **SF-1.2** isolate-core — no mezclar versiones lit2/lit3
- ✅ **SF-1.3** analytics-manager — no mezclar versiones lit2/lit3
- ✅ **SF-1.4** cells-template-paper-drawer-panel — no mezclar lit2/lit3
- ✅ **SF-1.5** context/action providers — solo en la demo
- ✅ **SF-1.6** Cross/microfrontend components — solo en demo o app contenedora
- ✅ **SF-1.7** Mocker — debe ser devDependency
- ✅ **SF-1.9** eslint-config-sf — debe ser devDependency
- ✅ **SF-1.10** sinon y @open-wc/testing — deben ser devDependencies
- ✅ **SF-1.12** cells-element/cells-page — no mezclar con cells-page-mixin
- ✅ **SF-1.13** Overrides — evitar en package.json

## ERRORES COMUNES — ESTILOS

- ✅ **SF-2.1** Estilos — archivo debe terminar en .css.js, no -styles.js
- ✅ **SF-2.2** Estilos — no editar .css.js manualmente
- ✅ **SF-2.3** Estilos — usar rem() en vez de grid8Spacer()
- ✅ **SF-2.4** Estilos — usar tokens para colores, tamaños y fuentes
- ✅ **SF-2.5** Estilos — usar rem() en vez de px/pt
- ✅ **SF-2.6** Estilos — evitar selectores excesivamente anidados
- ✅ **SF-2.7** Estilos — no usar estilos inline (atributo style)
- ✅ **SF-2.8** Estilos — no usar comentarios en .scss/.css
- ✅ **SF-2.9** Estilos — no usar @import en .scss (deprecado, usar @use/@forward)

## ERRORES COMUNES — SCRIPTS

- ✅ **SF-3.1** Scripts — no usar comandos de componente en SF

## ERRORES COMUNES — APP/SCRIPTS

- ✅ **SF-4.2** app-module.js — no añadir lógica adicional
- ✅ **SF-4.3** btge-microfrontend.js — no debe estar en app/scripts
- ✅ **SF-4.4** Polyfill scoped-custom-element-registry — debe estar en línea 1
- ✅ **SF-4.5** app.js — solo enrutado, sin lógica adicional

## ERRORES COMUNES — ESTRUCTURA

- ✅ **SF-5.1** Carpeta elements — no añadir componentes internos

## ERRORES COMUNES — JENKINSFILE

- ✅ **SF-6.1** Jenkinsfile — LibraryBranch debe ser masterV4
- ✅ **SF-6.2** Jenkinsfile — abortOnLintFailure debe ser true
- ✅ **SF-6.3** Jenkinsfile — e2econfig en una sola buildConfig

## ERRORES COMUNES — CONFIGURACIÓN

- ✅ **SF-7.1** canonical — mocker no debe activarse

## ERRORES COMUNES — LOCALISMOS

- ✅ **SF-8.1** Localismos — evitar dependencias y lógica local en SF global
- ✅ **SF-8.1b** Localismos — no usar servicios locales en SF global

## ERRORES COMUNES — DEMO

- ✅ **DEMO-1.1** Demo — isolate-core sin spherica
- ✅ **DEMO-1.2** Demo — analytics-manager sin spherica
- ✅ **DEMO-2.1** Demo — btge-microfrontend.js sin lógica adicional

## TESTS E2E

- ✅ **e2e.1** Archivos .root.page / .root.steps prohibidos en test/e2e
- ✅ **e2e.3** document.querySelector(All) prohibido — usar $ y $$
- ✅ **e2e.4** Abuso de browser.execute / browser.executeAsync / browser.waitUntil
- ✅ **e2e.5a** browser.pause prohibido en tests subidos al repo
- ✅ **e2e.5b** waitForClickable / waitForDisplayed con timeout explícito
- ✅ **e2e.7** Try/catch anidados
- ✅ **e2e.8a** @PageContext goPath debe apuntar a la ruta concreta
- ✅ **e2e.8b** URLs en archivos .feature
- ✅ **e2e.10** setTimeout / setInterval en tests e2e
- ✅ **e2e.11** console.* prohibido en tests e2e
- ✅ **e2e.13** shadow$ / shadowRoot prohibidos en tests e2e
- ✅ **e2e.15** Archivos .steps sin expect / assert
- ✅ **e2e.16** .feature demasiado largo
- ✅ **e2e.17** Config e2e en ci.yml sin Galatea (isLocalTest/abortOnFailure)
- ✅ **e2e.18a** Archivos e2e demasiado largos
- ✅ **e2e.18b** Modificación de archivos de configuración de tests
- ✅ **e2e.19a** Carpeta features/ solo debe contener archivos .feature
- ✅ **e2e.19b** Carpeta steps/ solo debe contener archivos .steps.{js,ts}
- ✅ **e2e.19c** Carpeta pages/ solo debe contener archivos .page.{js,ts}
- ✅ **e2e.20** Build e2econfig — los tests declarados deben existir en e2eTests/accessibility

## COMMITS

- ✅ **C.1** La rama feat/fix debe tener al menos un commit de ese tipo
- ✅ **C.2** Commits solo con caracteres ASCII imprimibles

---
**Total problemas:** 2
**🔒 Bloqueantes:** 1 — la PR no debería mergearse
**⚠️ Warnings:** 1 — revisar antes de mergear