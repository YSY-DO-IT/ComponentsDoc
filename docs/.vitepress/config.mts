import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/ysy-docs/',
    title: "ysy-docs",
    description: "说明文档",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config 具体参数,看官网
        /*导航菜单项的配置 右上角*/
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Docs', link: '/markdown-examples'}
        ],
        /*导航栏中展示带有图标的社交帐户链接*/
        socialLinks: [
            {icon: 'github', link: 'https://ysy-do-it.github.io/ysy-docs'}
        ],
        /*左侧栏*/
        sidebar: [
            {
                text: 'Docs',
                items: [
                    {text: 'div-splitter', link: '/markdown-examples'},
                    {text: 'qrcode', link: '/api-examples'},
                ]
            }
        ],
        /*logo*/
        // logo: '/logo.svg',

        /*底部*/
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2024-present JACK-YANG'
        }
    }
})
