# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).


Feladat leírása/folyamata:

1. Projekt generálása Vite-tel Vue 3-hoz (SFC stílus)
Terminálban futtasd ezt a parancsot:

npm create vite@latest glitch-vue-app -- --template vue

Ez létrehozza a glitch-vue-app mappában a Vue 3 projektet Vite build rendszerrel, SFC komponensekkel.


2. Projekt struktúra és fájlok
glitch-vue-app/

├── index.html

├── package.json

├── src/

│   ├── main.js

│   ├── App.vue

│   └── components/

│       └── GlitchText.vue

├── vite.config.js

└── node_modules/


3. Fontos fájlok tartalma
src/main.js
import { createApp } from 'vue'

import App from './App.vue'

createApp(App).mount('#app')


src/App.vue - kód másolás

src/components/GlitchText.vue - kód másolás
Ez a komponens a glitch animációt valósítja meg egyszerű CSS animációkkal

4. Futtatás
A projekt mappájában futtasd:

npm install

npm run dev

