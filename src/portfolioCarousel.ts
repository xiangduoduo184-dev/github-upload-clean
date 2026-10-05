import type { PortfolioVideo } from './portfolioVideos';

export type PortfolioCarouselItem = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  video: PortfolioVideo;
};

export function toPortfolioCarouselItems(videos: PortfolioVideo[]): PortfolioCarouselItem[] {
  return videos.map((video) => ({
    src: video.hlsSrc.replace('/hls/', '/posters/').replace('/index.m3u8', '.jpg'),
    alt: `${video.title} 视频作品封面`,
    title: video.title,
    subtitle: video.type,
    video,
  }));
}
