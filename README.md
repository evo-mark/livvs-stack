<p align="center">
    <a href="https://evomark.co.uk" target="_blank" alt="Link to evoMark's website">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://evomark.co.uk/wp-content/uploads/static/evomark-logo--dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://evomark.co.uk/wp-content/uploads/static/evomark-logo--light.svg">
          <img alt="evoMark company logo" src="https://evomark.co.uk/wp-content/uploads/static/evomark-logo--light.svg" width="500">
        </picture>
    </a>
</p>

# Introduction

This template installs a barebones Laravel 11 installation with the following features:

-   **InertiaJS** / **Vue3** framework
-   Error handling with frontend page for Inertia errors
-   **Tailwind** and sensible presets
-   **InertiaRoutes** plugin
-   **InertiaI18n** plugin for using your localisation strings inside Vue
-   **Vue3AutoViteComponents** plugin which automatically imports components from `components/sync` and `components/async` directories.
-   **UnpluginAutoImports** will auto-import from `vue`, `@inertiajs/vue3`, `vue-i18n`, `inertiaRoutes` and both `composables` and `helpers` directories.
-   Simple Header, Footer and DefaultLayout application structure.

---

-   ESLint and Prettier for code-presentation enforcement

## Installation

```sh
composer create-project -s dev evo-mark/inertia-11-template example-app
```
