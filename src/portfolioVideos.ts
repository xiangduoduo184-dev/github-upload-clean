export type PortfolioVideo = {
  title: string;
  type: string;
  description: string;
  videoSrc: string;
  hlsSrc: string;
};

const hls = (slug: string) => `/hls/${slug}/index.m3u8`;

export const portfolioVideos: PortfolioVideo[] = [
  {
    title: '小峙模块创意广告',
    type: '品牌创意广告',
    description: '围绕产品卖点完成剧情化创意表达，抖音、快手双端累计 60 万播放、1.1 万点赞，并成功售出 6 单产品。',
    videoSrc: '/videos/small-module-ad.mp4',
    hlsSrc: hls('small-module-ad'),
  },
  {
    title: '脉动创意广告',
    type: '品牌创意广告',
    description: '以轻快节奏和强记忆点完成产品创意表达，展示商业短片的概念转译与视觉节奏控制。',
    videoSrc: '/videos/pulse-ad.mp4',
    hlsSrc: hls('pulse-ad'),
  },
  {
    title: '暗昼·金陵',
    type: '长剧项目',
    description: '长剧项目视觉片段，负责从剧本方向到成片的全流程制作；项目已被爱奇艺收购。',
    videoSrc: '/videos/anzhou-jinling.mp4',
    hlsSrc: hls('anzhou-jinling'),
  },
  {
    title: '科技的温度',
    type: '公益短片',
    description: '广西洪水期间完成的公益“为爱发电”视频，以科技感视觉承载真实的支持与温度。',
    videoSrc: '/videos/tech-warmth.mp4',
    hlsSrc: hls('tech-warmth'),
  },
  {
    title: '沟通',
    type: '节日短片',
    description: '父亲节主题短片，围绕亲子沟通与情绪表达完成克制、温暖的叙事。',
    videoSrc: '/videos/communication.mp4',
    hlsSrc: hls('communication'),
  },
  {
    title: '科普不当法人demo',
    type: '高校科普视频',
    description: '面向高校发布的宣传科普视频，展示复杂信息的通俗转译、节奏设计和视觉包装。',
    videoSrc: '/videos/legal-science.mp4',
    hlsSrc: hls('legal-science'),
  },
  {
    title: '正大集团demo',
    type: '品牌广告',
    description: '品牌广告宣传片片段，负责食品与养殖场景的视觉生成、动态衔接与色彩统一。',
    videoSrc: '/videos/zhengda-group.mp4',
    hlsSrc: hls('zhengda-group'),
  },
  {
    title: '女频虐恋demo',
    type: 'AI短剧',
    description: '女频情绪向短剧片段，聚焦人物关系、氛围营造与情感冲突。',
    videoSrc: '/videos/female-romance.mp4',
    hlsSrc: hls('female-romance'),
  },
  {
    title: '重生年代',
    type: '真人短剧',
    description: '真人年代短剧片段，展示人物状态、连续剧情与年代质感的融合。',
    videoSrc: '/videos/rebirth-era.mp4',
    hlsSrc: hls('rebirth-era'),
  },
  {
    title: '攻略你你不理demo',
    type: 'AI动漫',
    description: 'AI 辅助动漫项目片段，展示连续角色动画、分镜生成与风格统一。',
    videoSrc: '/videos/gonglue.mp4',
    hlsSrc: hls('gonglue'),
  },
  {
    title: '极盗者demo',
    type: '预告片',
    description: '高概念视觉预告片，展示电影感运镜、节奏控制与光影氛围。',
    videoSrc: '/videos/jidaozhe-demo.mp4',
    hlsSrc: hls('jidaozhe-demo'),
  },
  {
    title: '我的斯密斯室友',
    type: 'AI搞笑短片',
    description: '以室友关系为核心的轻喜剧短片，用反差设定和快节奏包袱推进剧情。',
    videoSrc: '/videos/smith-roommate.mp4',
    hlsSrc: hls('smith-roommate'),
  },
  {
    title: '外星人系列 01',
    type: 'AI荒诞轻喜剧',
    description: 'AI 荒诞轻喜剧系列，以人外设定制造日常反差和节奏型包袱，展示连续角色与轻量叙事。',
    videoSrc: '/videos/alien-series-01.mp4',
    hlsSrc: hls('alien-series-01'),
  },
  {
    title: '外星人系列 02',
    type: 'AI荒诞轻喜剧',
    description: 'AI 荒诞轻喜剧系列，以人外设定制造日常反差和节奏型包袱，展示连续角色与轻量叙事。',
    videoSrc: '/videos/alien-series-02.mp4',
    hlsSrc: hls('alien-series-02'),
  },
  {
    title: '外星人系列 03',
    type: 'AI荒诞轻喜剧',
    description: 'AI 荒诞轻喜剧系列，以人外设定制造日常反差和节奏型包袱，展示连续角色与轻量叙事。',
    videoSrc: '/videos/alien-series-03.mp4',
    hlsSrc: hls('alien-series-03'),
  },
  {
    title: '当我试图驯服AI',
    type: 'AI搞笑短片',
    description: '围绕人与 AI 的日常碰撞展开，用拟人化反应和连续误会制造轻快的喜剧节奏。',
    videoSrc: '/videos/tame-ai.mp4',
    hlsSrc: hls('tame-ai'),
  },
  {
    title: '当我试图驯服AI·修仙篇',
    type: 'AI搞笑短片',
    description: '把修仙世界观与 AI 日常互动结合，以类型反差和夸张设定完成轻喜剧表达。',
    videoSrc: '/videos/tame-ai-cultivation.mp4',
    hlsSrc: hls('tame-ai-cultivation'),
  },
];

export const heroVideo = portfolioVideos.find((video) => video.title === '极盗者demo')!;
