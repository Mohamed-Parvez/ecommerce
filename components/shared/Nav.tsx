import React from "react";
import Menu from "../ui/menu";
import Logo from "../ui/logo";

const Nav = () => {
  return (
    <section className="items-top flex space-x-2 bg-black px-2 py-20">
      <div className="mt-[-8px] block md:hidden">
        <Menu
          src={"/assets/icons/bars_sm.svg"}
          alt="bars"
          height={28}
          width={28}
        />
      </div>
      <div className="hidden md:block">
        <Menu
          src={"/assets/icons/bars_lg.svg"}
          alt="bars"
          height={28}
          width={28}
        />
      </div>
      <div>
        <Logo
          src={"/assets/icons/logo.svg"}
          alt="logo"
          height={40}
          width={99}
        />
      </div>
    </section>
  );
};

export default Nav;
