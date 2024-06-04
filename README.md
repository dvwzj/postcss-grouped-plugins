# postcss-grouped-plugins
group multiple postcss plugins into a single plugin for nuxt

## Installation

```bash
npm install postcss-grouped-plugins
```

## Example

```javascript
// nuxt.config.ts
export default defineNuxtConfig({
    ...
    postcss: {
        plugins: {
            "postcss-grouped-plugins": {
                "postcss-import": {},
                "postcss-mixins": {},
                "postcss-advanced-variables": {},
            },
            "tailwindcss/nesting": {},
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    ...
})
```