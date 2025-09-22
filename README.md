# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

```
vue3-basic
├─ .eslintrc.cjs
├─ eslint.config.js
├─ index(1).js
├─ index(2).js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ setting.json
├─ src
│  ├─ App.vue
│  ├─ assets
│  │  ├─ list(1).webp
│  │  ├─ list(2).webp
│  │  ├─ list(3).webp
│  │  ├─ list(4).webp
│  │  ├─ logo.png
│  │  ├─ 解析 JavaScript 代码 - 豆包.html
│  │  └─ 解析 JavaScript 代码 - 豆包_files
│  │     ├─ 10336.96e8061c.css
│  │     ├─ 11550.706831fe.css
│  │     ├─ 19737.80054bbe.css
│  │     ├─ 22586.2f7e20d4.css
│  │     ├─ 27952.101beb3d.css
│  │     ├─ 2893.1df73f91.css
│  │     ├─ 43249.f5f29313.css
│  │     ├─ 45079.f4859168.css
│  │     ├─ 45724.88792fed.css
│  │     ├─ 47235.1fc1f04b.css
│  │     ├─ 51639.aec07cf6.css
│  │     ├─ 58511.f7d9db9e.css
│  │     ├─ 65760.e2389c36.css
│  │     ├─ 68132.8c519858.js.下载
│  │     ├─ 72605.252f3635.css
│  │     ├─ 85164.2f7e20d4.css
│  │     ├─ 88616.2f7e20d4.css
│  │     ├─ 89600.9a871f07.css
│  │     ├─ 95973.87096c3a.css
│  │     ├─ 99889.16093391.css
│  │     ├─ async--shared-workspace.d28ad221.css
│  │     ├─ async-after-interactive-layout.b552357f.css
│  │     ├─ async-after-interactive.26eb497d.css
│  │     ├─ async-business-feed.0765955d.css
│  │     ├─ async-business-input-tool-button.d8b2c02a.css
│  │     ├─ async-business-layout.43f307a7.css
│  │     ├─ async-business-skill-bar.ea31069d.css
│  │     ├─ async-infra-guidance-input.f38ec923.css
│  │     ├─ async-infra-input-tool-button.a9647103.css
│  │     ├─ async-infra-layout.338e4ae4.css
│  │     ├─ async-infra-message.b18d3813.css
│  │     ├─ async-input-events.e6d59b7c.css
│  │     ├─ async-layout-canvas.d5c8ce57.css
│  │     ├─ async-skill-content-block.629dc118.css
│  │     ├─ async-skill-guidance-suggestions.21b7f6d5.css
│  │     ├─ async-skill-message-cmd.2d627178.css
│  │     ├─ async-skill-message-lifecycle.8b194dc4.css
│  │     ├─ async-skill-message-list.fbdaee16.css
│  │     ├─ async-skill-receive-message-action.3f767a2c.css
│  │     ├─ async-skill-receive-message-box.4e2b647d.css
│  │     ├─ async-skill-send-message-action.8ae1bbe6.css
│  │     ├─ async-skill-send-message-box.8f6645d1.css
│  │     ├─ async-skill-sidebar-application.4c046037.css
│  │     ├─ async-skillbar.e96b0251.css
│  │     ├─ blank-screen.1.12.6.js.下载
│  │     ├─ browser.1.12.6.cn.js.下载
│  │     ├─ c58ea2f5522f4af63f9206f845aa916c~tplv-a9rns2rl98-icon-tiny.jpeg
│  │     ├─ chat.5b053d3d.css
│  │     ├─ chat.b690f762.js.下载
│  │     ├─ code-artifact-card.108ca556.css
│  │     ├─ code-canvas-popover-toolbar.10556e69.css
│  │     ├─ common-monitors.1.12.6.js.下载
│  │     ├─ default.light.2ea4b2b4.png
│  │     ├─ intro.12b8f8ef.png
│  │     ├─ lib-polyfill.2aad90d0.js.下载
│  │     ├─ lib-react.06109ab8.js.下载
│  │     ├─ marscode-comp.77ea28d5.css
│  │     ├─ mobile.light.997699fc.png
│  │     ├─ page.25790e3f.css
│  │     ├─ pure.umd.production.new.js.下载
│  │     ├─ skill-pin-modal.8a7c50dc.css
│  │     └─ webmssdk.es5.js.下载
│  ├─ components
│  │  ├─ TemplateList.vue
│  │  ├─ types.ts
│  │  └─ UserProfile.vue
│  ├─ env.d.ts
│  ├─ hooks
│  │  ├─ useMousePosition.ts
│  │  └─ useURLLoader.ts
│  ├─ keys.ts
│  ├─ main.ts
│  ├─ routes
│  │  └─ index.ts
│  ├─ store
│  │  ├─ index.ts
│  │  ├─ templates.ts
│  │  └─ user.ts
│  ├─ style.css
│  ├─ views
│  │  ├─ Index.vue
│  │  ├─ LegoEditor.vue
│  │  ├─ LegoHome.vue
│  │  ├─ Setting.vue
│  │  └─ TemplateList-Detail.vue
│  └─ vite-env.d.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```
```
vue3-basic
├─ .eslintrc.cjs
├─ eslint.config.js
├─ index(1).js
├─ index(2).js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ setting.json
├─ src
│  ├─ App.vue
│  ├─ assets
│  │  ├─ list(1).webp
│  │  ├─ list(2).webp
│  │  ├─ list(3).webp
│  │  ├─ list(4).webp
│  │  ├─ logo.png
│  │  ├─ 解析 JavaScript 代码 - 豆包.html
│  │  └─ 解析 JavaScript 代码 - 豆包_files
│  │     ├─ 10336.96e8061c.css
│  │     ├─ 11550.706831fe.css
│  │     ├─ 19737.80054bbe.css
│  │     ├─ 22586.2f7e20d4.css
│  │     ├─ 27952.101beb3d.css
│  │     ├─ 2893.1df73f91.css
│  │     ├─ 43249.f5f29313.css
│  │     ├─ 45079.f4859168.css
│  │     ├─ 45724.88792fed.css
│  │     ├─ 47235.1fc1f04b.css
│  │     ├─ 51639.aec07cf6.css
│  │     ├─ 58511.f7d9db9e.css
│  │     ├─ 65760.e2389c36.css
│  │     ├─ 68132.8c519858.js.下载
│  │     ├─ 72605.252f3635.css
│  │     ├─ 85164.2f7e20d4.css
│  │     ├─ 88616.2f7e20d4.css
│  │     ├─ 89600.9a871f07.css
│  │     ├─ 95973.87096c3a.css
│  │     ├─ 99889.16093391.css
│  │     ├─ async--shared-workspace.d28ad221.css
│  │     ├─ async-after-interactive-layout.b552357f.css
│  │     ├─ async-after-interactive.26eb497d.css
│  │     ├─ async-business-feed.0765955d.css
│  │     ├─ async-business-input-tool-button.d8b2c02a.css
│  │     ├─ async-business-layout.43f307a7.css
│  │     ├─ async-business-skill-bar.ea31069d.css
│  │     ├─ async-infra-guidance-input.f38ec923.css
│  │     ├─ async-infra-input-tool-button.a9647103.css
│  │     ├─ async-infra-layout.338e4ae4.css
│  │     ├─ async-infra-message.b18d3813.css
│  │     ├─ async-input-events.e6d59b7c.css
│  │     ├─ async-layout-canvas.d5c8ce57.css
│  │     ├─ async-skill-content-block.629dc118.css
│  │     ├─ async-skill-guidance-suggestions.21b7f6d5.css
│  │     ├─ async-skill-message-cmd.2d627178.css
│  │     ├─ async-skill-message-lifecycle.8b194dc4.css
│  │     ├─ async-skill-message-list.fbdaee16.css
│  │     ├─ async-skill-receive-message-action.3f767a2c.css
│  │     ├─ async-skill-receive-message-box.4e2b647d.css
│  │     ├─ async-skill-send-message-action.8ae1bbe6.css
│  │     ├─ async-skill-send-message-box.8f6645d1.css
│  │     ├─ async-skill-sidebar-application.4c046037.css
│  │     ├─ async-skillbar.e96b0251.css
│  │     ├─ blank-screen.1.12.6.js.下载
│  │     ├─ browser.1.12.6.cn.js.下载
│  │     ├─ c58ea2f5522f4af63f9206f845aa916c~tplv-a9rns2rl98-icon-tiny.jpeg
│  │     ├─ chat.5b053d3d.css
│  │     ├─ chat.b690f762.js.下载
│  │     ├─ code-artifact-card.108ca556.css
│  │     ├─ code-canvas-popover-toolbar.10556e69.css
│  │     ├─ common-monitors.1.12.6.js.下载
│  │     ├─ default.light.2ea4b2b4.png
│  │     ├─ intro.12b8f8ef.png
│  │     ├─ lib-polyfill.2aad90d0.js.下载
│  │     ├─ lib-react.06109ab8.js.下载
│  │     ├─ marscode-comp.77ea28d5.css
│  │     ├─ mobile.light.997699fc.png
│  │     ├─ page.25790e3f.css
│  │     ├─ pure.umd.production.new.js.下载
│  │     ├─ skill-pin-modal.8a7c50dc.css
│  │     └─ webmssdk.es5.js.下载
│  ├─ components
│  │  ├─ TemplateList.vue
│  │  ├─ types.ts
│  │  └─ UserProfile.vue
│  ├─ env.d.ts
│  ├─ hooks
│  │  ├─ useMousePosition.ts
│  │  └─ useURLLoader.ts
│  ├─ keys.ts
│  ├─ main.ts
│  ├─ routes
│  │  └─ index.ts
│  ├─ store
│  │  ├─ index.ts
│  │  ├─ templates.ts
│  │  └─ user.ts
│  ├─ style.css
│  ├─ views
│  │  ├─ Index.vue
│  │  ├─ LegoEditor.vue
│  │  ├─ LegoHome.vue
│  │  ├─ Setting.vue
│  │  └─ TemplateList-Detail.vue
│  └─ vite-env.d.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```