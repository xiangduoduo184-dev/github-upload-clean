import type { CSSProperties } from 'react';
import type { PortfolioCarouselItem } from '../portfolioCarousel';

type FlexCarouselProps = {
  items: PortfolioCarouselItem[];
  preset?: 'liquid' | 'ribbon' | 'vortex' | 'arch';
  intro?: 'rise' | 'bloom' | 'spin' | 'deal' | 'none';
  cardHeight?: number;
  gap?: number;
  radius?: number;
  fit?: 'natural' | 'portrait' | 'square' | 'landscape';
  squeeze?: number;
  focusOnClick?: boolean;
  captions?: boolean;
  captureWheel?: boolean;
  className?: string;
  style?: CSSProperties;
  onSelect?: (index: number, item: PortfolioCarouselItem) => void;
};

declare const FlexCarousel: (props: FlexCarouselProps) => JSX.Element;

export default FlexCarousel;
