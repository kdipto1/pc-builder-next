import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const PcBuilderPage = () => {
  const selectedComponents = useSelector(
    (state) => state.pcBuilder.selectedComponents
  );
  console.log(selectedComponents);
  return (
    <div>
      <p style={{ fontSize: "2rem", fontWeight: "bold" }}>Pc Builder</p>
      <div>
        Cpu
        <Link href={`${process.env.BASE_URL}/pc-builder/choose/cpu`}>
          Choose
        </Link>
      </div>
      <div>
        Motherboard
        <Link href={`${process.env.BASE_URL}/pc-builder/choose/motherboard`}>
          Choose
        </Link>
      </div>
      <div>
        Ram
        <Link href={`${process.env.BASE_URL}/pc-builder/choose/ram`}>
          Choose
        </Link>
      </div>
      <div>
        Power Supply
        <Link href={`${process.env.BASE_URL}/pc-builder/choose/power supply`}>
          Choose
        </Link>
      </div>
      <div>
        Storage
        <Link href={`${process.env.BASE_URL}/pc-builder/choose/storage`}>
          Choose
        </Link>
      </div>
      <div>
        Monitor
        <Link href={`${process.env.BASE_URL}/pc-builder/choose/monitor`}>
          Choose
        </Link>
      </div>
    </div>
  );
};

export default PcBuilderPage;
