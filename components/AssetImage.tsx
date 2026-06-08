"use client";

import { ReactNode, useState } from "react";

type AssetImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallback: ReactNode;
};

export function AssetImage({ src, alt, className, fallback }: AssetImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className={`asset-fallback ${className ?? ""}`}>{fallback}</div>;
  }

  return (
    // Native img keeps missing optional assets from failing the build.
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />
  );
}
