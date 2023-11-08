import {fileURLToPath, URL} from 'node:url'
import {resolve} from "path"
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    build: {
        sourcemap: true,
        lib: {
            name: 'my-lib',
            entry: {
                'my-lib': resolve(__dirname, 'src/index.ts'),
                'components': resolve(__dirname, 'src/components/index.ts'),
                'stores': resolve(__dirname, 'src/stores/index.ts'),
            },
            fileName: (fmt, name) => `${name}.${fmt}.js`,
        },
        rollupOptions: {
            external: ['vue', 'pinia', 'vue-router', 'axios', 'vue-i18n', 'vuetify', '@vueuse/core'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            }
        }
    },
    plugins: [vue()],
    resolve: {
        alias: {'@': fileURLToPath(new URL('./src', import.meta.url))}
    }
})
