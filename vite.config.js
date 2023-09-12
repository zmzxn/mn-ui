import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    DefineOptions()
  ],
  build: {
		outDir: 'lib', // 输出目录
		lib: {
			entry: path.resolve(__dirname, 'packages/index.js'), //指定组件编译入口文件
			name: 'MnUi',
			fileName: 'mn-ui',
		},//库编译模式配置
		rollupOptions: {
			// 确保外部化处理那些你不想打包进库的依赖
			external: ['vue'],
			output: {
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
					vue: 'Vue',
				},
        exports: 'named', // 添加此行配置
			},
		},// rollup打包配置
	}
})
