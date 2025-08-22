declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module 'swiper/css/pagination';
declare module 'swiper/css/scrollbar';
declare module 'react-inner-image-zoom' {
  import * as React from 'react';

  interface InnerImageZoomProps {
    src: string;
    zoomSrc?: string;
    zoomScale?: number;
    zoomType?: 'click' | 'hover';
    width?: number | string;
    height?: number | string;
    zoomPreload?: boolean;
    className?: string;
    alt?: string;
    hasSpacer?: boolean;
    afterZoomIn?: () => void;
    afterZoomOut?: () => void;
    hideHint?: boolean;
  }

  const InnerImageZoom: React.FC<InnerImageZoomProps>;

  export default InnerImageZoom;
}