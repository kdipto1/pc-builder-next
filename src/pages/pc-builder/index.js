import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { Cpu } from "@styled-icons/bootstrap/Cpu";
import { Motherboard } from "@styled-icons/bootstrap/Motherboard";
import { Memory } from "@styled-icons/bootstrap/Memory";
import { Power } from "@styled-icons/icomoon/Power";
import { DeviceSsd } from "@styled-icons/bootstrap/DeviceSsd";
import { MonitorOutline } from "@styled-icons/evaicons-outline/MonitorOutline";

const PcBuilderPage = () => {
  const selectedComponents = useSelector(
    (state) => state.pcBuilder.selectedComponents
  );
  // console.log(selectedComponents);
  const cpuComponent = selectedComponents.filter(
    (component) => component.category === "CPU"
  );
  const motherboardComponent = selectedComponents.filter(
    (component) => component.category === "Motherboard"
  );
  const ramComponent = selectedComponents.filter(
    (component) => component.category === "RAM"
  );
  const powerSupplyComponent = selectedComponents.filter(
    (component) => component.category === "Power Supply"
  );
  const storageComponent = selectedComponents.filter(
    (component) => component.category === "Storage"
  );
  const monitorComponent = selectedComponents.filter(
    (component) => component.category === "Monitor"
  );
  const gpuComponent = selectedComponents.filter(
    (component) => component.category === "GPU"
  );
  const mouseComponent = selectedComponents.filter(
    (component) => component.category === "Mouse"
  );
  const keyboardComponent = selectedComponents.filter(
    (component) => component.category === "Keyboard"
  );
  console.log(
    cpuComponent,
    motherboardComponent,
    ramComponent,
    powerSupplyComponent,
    storageComponent,
    monitorComponent
  );
  return (
    <div>
      <p
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
          padding: "1rem 1rem",
        }}
      >
        Pc Builder
      </p>
      <div>
        Cpu
        {cpuComponent.map((compo) => (
          <div
            key={compo._id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div>
              <Cpu size={22} />
            </div>
            <div>
              <p>Cpu</p>
              <p>{compo.productName}</p>
              <p>{compo.price}$</p>
            </div>
            <div></div>
            <Link href={`${process.env.BASE_URL}/pc-builder/choose/cpu`}>
              Choose
            </Link>
          </div>
        ))}
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

      {/*  +++++++++++++++++++++++ */}
      <button disabled={selectedComponents.length <= 3}>Done</button>
    </div>
  );
};

export default PcBuilderPage;
