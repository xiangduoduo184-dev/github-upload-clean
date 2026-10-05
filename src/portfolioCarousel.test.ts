import { describe, expect, it } from 'vitest';
import { portfolioVideos } from './portfolioVideos';
import { toPortfolioCarouselItems } from './portfolioCarousel';

describe('toPortfolioCarouselItems', () => {
  it('maps every portfolio work to its local cover image without changing the selected order', () => {
    const items = toPortfolioCarouselItems(portfolioVideos);

    expect(items).toHaveLength(17);
    expect(items.slice(0, 4).map((item) => item.title)).toEqual([
      '极盗者demo',
      '暗昼·金陵',
      '脉动创意广告',
      '外星人系列 01',
    ]);
    expect(items.every((item) => item.src.startsWith('/posters/') && item.src.endsWith('.jpg'))).toBe(true);
  });
});
