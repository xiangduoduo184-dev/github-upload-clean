export type VideoDeliveryInput = {
  videoSrc: string;
  hlsSrc?: string;
  externalUrl?: string;
};

export type VideoDelivery = {
  kind: 'hls' | 'external' | 'native';
  src: string;
};

export function selectVideoDelivery(video: VideoDeliveryInput): VideoDelivery {
  if (video.hlsSrc) {
    return { kind: 'hls', src: video.hlsSrc };
  }

  if (video.externalUrl) {
    return { kind: 'external', src: video.externalUrl };
  }

  return { kind: 'native', src: video.videoSrc };
}
