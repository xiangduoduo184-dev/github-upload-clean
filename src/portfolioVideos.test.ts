import { describe, expect, it } from 'vitest';
import { portfolioVideos } from './portfolioVideos';

describe('portfolioVideos', () => {
  it('keeps the selected 17 works inside the site as HLS playback', () => {
    expect(portfolioVideos.map((video) => video.title)).toEqual([
      '极盗者demo',
      '暗昼·金陵',
      '脉动创意广告',
      '外星人系列 01',
      '小峙模块创意广告',
      '科技的温度',
      '沟通',
      '科普不当法人demo',
      '正大集团demo',
      '女频虐恋demo',
      '重生年代',
      '攻略你你不理demo',
      '我的斯密斯室友',
      '外星人系列 02',
      '外星人系列 03',
      '当我试图驯服AI',
      '当我试图驯服AI·修仙篇',
    ]);

    expect(portfolioVideos.every((video) => video.hlsSrc?.endsWith('/index.m3u8'))).toBe(true);
    expect(portfolioVideos.some((video) => video.title === '听见')).toBe(false);
    expect(portfolioVideos.some((video) => video.title === '游戏cg测试')).toBe(false);
  });
});
