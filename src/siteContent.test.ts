import { describe, expect, it } from 'vitest';
import { featuredPortfolioTitles, navigationItems } from './siteContent';

describe('portfolio navigation content', () => {
  it('keeps the four strongest works in the first visible featured row', () => {
    expect(featuredPortfolioTitles).toEqual([
      '极盗者demo',
      '暗昼·金陵',
      '脉动创意广告',
      '外星人系列 01',
    ]);
  });

  it('uses portfolio-specific navigation labels and destinations', () => {
    expect(navigationItems).toEqual([
      { label: '首页', href: '#top' },
      { label: '作品', href: '#作品' },
      { label: '项目成果', href: '#项目' },
      { label: '工作经历', href: '#经历' },
      { label: '制作流程', href: '#流程' },
      { label: '联系我', href: '#联系' },
    ]);
  });
});
