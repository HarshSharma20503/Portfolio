'use client';
import React, { useState } from "react";
import ContentArea from "./ContentArea";
import Navbar from "./Navbar";

const Mainbar: React.FC = () => {
  const [active, setActive] = useState<string>("About");

  return (
    <>
      <Navbar setActive={setActive} active={active} />
      <ContentArea  active={active} />
    </>
  );
};

export default Mainbar;