const configs = require("./configs");

module.exports = {
    title: '三清',
    description: '一个喜欢唱歌、技术、二次元的产品经理',
    head: [
    ],
    base: '/blog/', //设置地址1
    themeConfig: {
        logo: '/images/logo-72x72.jpg',
        sidebar: false,
        nav: [
            { text: '首页', link: '/' },
            {
                text: '文章',
                items: [
                    { text: '四叫受的策歌', link: '/si-jiao-shou-de-ce-ge/' },
                    { text: '活动营销技术', link: '/huo-dong-ying-xiao-ji-shu/' },
                    { text: '产品经验心得', link: '/chan-pin-jing-yan-xin-de/' }
                ]
            },
            {
                text: 'GitHub',
                link: 'https://github.com'
            },
        ],
        lastUpdated: '最近修改:',
    },
    ...configs
}