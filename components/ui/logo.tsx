import { ImageProps } from "@/types";
import Image from "next/image";
import React from "react";

const Logo = ({ src, alt, height, width }: ImageProps) => {
  return (
    <main>
      <Image src={src} alt={alt} height={height} width={width} />
    </main>
  );
};

export default Logo;
