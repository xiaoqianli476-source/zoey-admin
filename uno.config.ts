import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  // 配置预设
  presets: [
    // UnoCSS 的核心预设，提供基础的原子化类
    presetUno(),
    // 启用属性模式，让你可以直接在 HTML 标签上使用类似 style 的方式写样式
    presetAttributify(),
    // 图标预设，支持使用各种图标库，如 Font Awesome、Material Icons 等
    presetIcons({
      scale: 1.2, // 图标缩放比例
      warn: true, // 当图标不存在时发出警告
    }),
  ],
  // 配置主题
  theme: {
    colors: {
      // 自定义颜色主题
      primary: '#1890ff', // 主色
      secondary: '#f5222d', // 辅助色
    },
    // 配置字体大小
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
    },
  },
  // 自定义规则
  rules: [
    // 自定义一个类名，用于设置特定的阴影效果
    ['my-shadow', { 'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.1)' }],
  ],
  // 配置短类名的别名
  shortcuts: {
    // 将 "btn" 映射为多个类名的组合
    'btn': 'px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600',
    // 将 "icon-btn" 映射为图标和按钮样式的组合
    'icon-btn': 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 disabled:cursor-default disabled:opacity-50',
  },
  // 配置属性和值的映射
  variants: [
    // 例如，为 hover 状态添加自定义样式
 
  ],
})