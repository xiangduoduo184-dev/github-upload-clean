import { describe, expect, it } from 'vitest';
import { selectVideoDelivery } from './videoDelivery';

describe('selectVideoDelivery', () => {
  it('keeps a video inside the site when an HLS source is available', () => {
    expect(
      selectVideoDelivery({
        videoSrc: '/videos/jidaozhe-demo.mp4',
        hlsSrc: '/hls/jidaozhe-demo/index.m3u8',
        externalUrl: 'https://pan.baidu.com/example',
      }),
    ).toEqual({ kind: 'hls', src: '/hls/jidaozhe-demo/index.m3u8' });
  });

  it('preserves the existing netdisk fallback for videos without HLS', () => {
    expect(
      selectVideoDelivery({
        videoSrc: '/videos/tingjian.mp4',
        externalUrl: 'https://pan.baidu.com/example',
      }),
    ).toEqual({ kind: 'external', src: 'https://pan.baidu.com/example' });
  });

  it('uses the native video file when there is no HLS or external link', () => {
    expect(selectVideoDelivery({ videoSrc: '/videos/local.mp4' })).toEqual({
      kind: 'native',
      src: '/videos/local.mp4',
    });
  });
});
