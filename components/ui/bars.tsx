import Image from "next/image";
import React from "react";
import { ImageProps } from "@/types";

const Bars = ({ src, alt, height, width }: ImageProps) => {
  return (
    <main>
      <Image
      className="mt-[-14px]"
      src={src} alt={alt} height={height} width={width} />
    </main>
  );
};

export default Bars;
