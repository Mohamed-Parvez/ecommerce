import React from "react";
import Bars from "../ui/bars";
import Logo from "../ui/logo";

const Nav = () => {
  return (
    <section className="bg-black px-3 py-10">
      <div className="flex items-center justify-start gap-4">
        <Bars
          src="/assets/icons/menu.svg"
          alt="bar icon"
          height={24}
          width={24}
        />
        <Logo src="/assets/images/logo.svg" alt="logo" height={60} width={90} />
      </div>
    </section>
  );
};

export default Nav;
