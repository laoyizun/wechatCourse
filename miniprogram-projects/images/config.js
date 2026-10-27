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
        // 小方的开学第一天 —— 沿用原图
        'intro-1':   'https://education-cos-1307366133.cos.ap-shanghai.myqcloud.com/%E6%96%B9%E5%9D%97%E9%B8%9F%E7%BC%96%E7%A8%8B/%E5%A4%A7%E5%B0%8A/AI%E7%94%9F%E5%9B%BE-4737278068631748611-ai-generated-1791956194996.png',
        // 小方要送妈妈生日礼物 —— 沿用原图
        'tool-1':    'https://education-cos-1307366133.cos.ap-shanghai.myqcloud.com/%E6%96%B9%E5%9D%97%E9%B8%9F%E7%BC%96%E7%A8%8B/%E5%A4%A7%E5%B0%8A/AI%E7%94%9F%E5%9B%BE-4737278068631748611-ai-generated-1791956086568.png',
        // 小方要请同学来家里玩
        'social-1':  'https://edu.wxqcloud.qq.com.cn/ai_img/3573372913598251012/4756761174510239744.png',
        // 小方的周三
        'tool-2':    'https://edu.wxqcloud.qq.com.cn/ai_img/3573372913598251012/4756881315096870914.png',
        // 小方的"班级冰箱"
        'tool-3':    'https://edu.wxqcloud.qq.com.cn/ai_img/3573372913598251012/4756882650010009601.png',
        // 小方的翻牌游戏被同学抄走了
        'social-2':  'https://edu.wxqcloud.qq.com.cn/ai_img/3573372913598251012/4756885049520603137.png',
        // 小方想给全班一个"匿名树洞"
        'social-3':  'https://edu.wxqcloud.qq.com.cn/ai_img/3573372913598251012/4756886310244696065.png'
    }
};
