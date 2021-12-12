module.exports = {
    plugins: {
        'one-click-copy': {},
        'permalink-pinyin': {},
        'rpurl': {},
        "autobar": {
            pinyinNav: 'permalink-pinyin'
        },
        // 鼠标点击特效
        "cursor-effects": {
            size: 2,
            shape: 'circle',  // 点击形状: 'star', 'star' | 'circle'
            zIndex: 999999999
        },
        "meting": {
            meting: {
                // 歌单地址-> 如果输入可忽略server|type|mid
                // 但是不知道为什么不写上这三个会报错, 所以我都写上了
                auto: 'https://music.163.com/#/playlist?id=5312894314',
                // 当前服务为netease -> 网易
                server: "netease",
                // 类型为歌单
                type: "playlist",
                // 歌单id
                mid: "5312894314",
            },
            aplayer: {
                // 歌单为随机
                order: 'random',
                // 0为不显示歌词
                lrcType: 0,
                // 音量
                volume: 0.15,
                // 开启迷你模式
                mini: true,
                // 自动播放
                autoplay: true
            },
        },
        '@vuepress/back-to-top': {},
        '@vuepress/active-header-links': {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        },
        'vuepress-plugin-helper-live2d': {
            live2d: {
                // 是否启用(关闭请设置为false)(default: true)
                enable: true,
                // 模型名称(default: hibiki)>>>取值请参考：
                // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
                model: 'tororo',
                display: {
                    position: "right", // 显示位置：left/right(default: 'right')
                    width: 320, // 模型的长度(default: 135)
                    height: 300, // 模型的高度(default: 300)
                    hOffset: 65, //  水平偏移(default: 65)
                    vOffset: 0, //  垂直偏移(default: 0)
                },
                mobile: {
                    show: false // 是否在移动设备上显示(default: false)
                },
                react: {
                    opacity: 0.8 // 模型透明度(default: 0.8)
                }
            }
        },
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'github',
            // 其他的 Vssue 配置
            owner: 'purity3',
            repo: 'blog',
            clientId: 'cdb5fb6e9b37690c3cb0',
            clientSecret: '05d4342de2186c9ed74272bebaa5049f36192e50'
        },
    }
}