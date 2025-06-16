import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
  loading = 'lazy'
}) => {
  // Convert the original image path to WebP path
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const originalSrc = src;

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={originalSrc}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
      />
    </picture>
  );
};

export default OptimizedImage; 