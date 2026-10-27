/**
 * 统一图片配置 —— 换图只改这一个文件
 * 用法：把 value 改成图片 URL（本地路径 images/xxx.jpg 或远程 https://...）
 * 留空字符串则显示占位色块，不会破图
 */
window.IMAGE_CONFIG = {
    // 小方头像（左上角圆形头像 + 故事卡头像）
    avatar: 'images/avatar-xiaofang.jpg',

    // 故事配图（按故事 id 对应）
    scenes: {
        'intro-1':   '',   // 小方的开学第一天
        'tool-1':    '',   // 小方要送妈妈生日礼物
        'tool-2':    '',   // 小方的周三
        'tool-3':    '',   // 小方的"班级冰箱"
        'social-1':  '',   // 小方要请同学来家里玩
        'social-2':  '',   // 小方的翻牌游戏被同学抄走了
        'social-3':  ''    // 小方想给全班一个"匿名树洞"
    }
};
