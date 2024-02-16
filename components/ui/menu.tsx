import React from "react";
import { ImageProps } from "@/types";
import Image from "next/image";

const Menu = ({ src, alt, height, width }: ImageProps) => {
  return (
    <main>
      <Image src={src} alt={alt} height={height} width={width} />
    </main>
  );
};

export default Menu;
