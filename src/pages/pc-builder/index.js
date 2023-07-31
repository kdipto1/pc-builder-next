import { Button, Card } from "antd";
import styles from "@/styles/PcBuilder.module.css";
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
import { notification } from "antd";

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
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `Build completed`,
      placement,
    });
  };

  return (
    <div>
      {contextHolder}
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
      <div className={styles.selectCardContainer}>
        <div className={styles.selectCard}>
          <div style={{ display: "flex" }}>
            <Cpu size={52} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "0.5rem",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  textAlign: "center",
                }}
              >
                CPU
              </p>
              <Link href={`${process.env.BASE_URL}/pc-builder/choose/cpu`}>
                <Button style={{ fontWeight: "revert" }}>Choose</Button>
              </Link>
            </div>
            <div className={styles.divider}></div>
            {cpuComponent?.map((compo) => (
              <div
                key={compo._id}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                    marginLeft: "0.5rem",
                  }}
                >
                  <p>Name: {compo.productName}</p>
                  <p>Price: {compo.price}$</p>
                </div>
                {/* <div style={{ marginLeft: "0.5rem" }}>
                <Image
                  width={50}
                  height={50}
                  src={compo.image}
                  alt="cpu image"
                />
              </div> */}
              </div>
            ))}
          </div>
        </div>

        {/*  */}
        <div className={styles.selectCard}>
          <div style={{ display: "flex" }}>
            <Cpu size={52} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "0.5rem",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  textAlign: "center",
                }}
              >
                Motherboard
              </p>
              <Link
                href={`${process.env.BASE_URL}/pc-builder/choose/motherboard`}
              >
                <Button style={{ fontWeight: "revert" }}>Choose</Button>
              </Link>
            </div>
            <div className={styles.divider}></div>
            {motherboardComponent?.map((compo) => (
              <div
                key={compo._id}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                    marginLeft: "0.5rem",
                  }}
                >
                  <p>Name: {compo.productName}</p>
                  <p>Price: {compo.price}$</p>
                </div>
                {/* <div style={{ marginLeft: "0.5rem" }}>
                <Image
                  width={50}
                  height={50}
                  src={compo.image}
                  alt="motherboard image"
                />
              </div> */}
              </div>
            ))}
          </div>
        </div>
        {/* +++++++++++++++ motherboard ------- */}
        <div className={styles.selectCard}>
          <div style={{ display: "flex" }}>
            <Cpu size={52} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "0.5rem",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  textAlign: "center",
                }}
              >
                RAM
              </p>
              <Link href={`${process.env.BASE_URL}/pc-builder/choose/ram`}>
                <Button style={{ fontWeight: "revert" }}>Choose</Button>
              </Link>
            </div>
            <div className={styles.divider}></div>
            {ramComponent?.map((compo) => (
              <div
                key={compo._id}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                    marginLeft: "0.5rem",
                  }}
                >
                  <p>Name: {compo.productName}</p>
                  <p>Price: {compo.price}$</p>
                </div>
                {/* <div style={{ marginLeft: "0.5rem" }}>
                <Image
                  width={50}
                  height={50}
                  src={compo.image}
                  alt="ram image"
                />
              </div> */}
              </div>
            ))}
          </div>
        </div>
        {/* +++++++++ ram ---------- */}
        <div className={styles.selectCard}>
          <div style={{ display: "flex" }}>
            <Cpu size={52} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "0.5rem",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  textAlign: "center",
                }}
              >
                PSU
              </p>
              <Link
                href={`${process.env.BASE_URL}/pc-builder/choose/power supply`}
              >
                <Button style={{ fontWeight: "revert" }}>Choose</Button>
              </Link>
            </div>
            <div className={styles.divider}></div>
            {powerSupplyComponent?.map((compo) => (
              <div
                key={compo._id}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                    marginLeft: "0.5rem",
                  }}
                >
                  <p>Name: {compo.productName}</p>
                  <p>Price: {compo.price}$</p>
                </div>
                {/* <div style={{ marginLeft: "0.5rem" }}>
                <Image
                  width={50}
                  height={50}
                  src={compo.image}
                  alt="motherboard image"
                />
              </div> */}
              </div>
            ))}
          </div>
        </div>
        {/* +++++++++++psu ------------- */}
        <div className={styles.selectCard}>
          <div style={{ display: "flex" }}>
            <Cpu size={52} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "0.5rem",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  textAlign: "center",
                }}
              >
                Storage Device
              </p>
              <Link href={`${process.env.BASE_URL}/pc-builder/choose/storage`}>
                <Button style={{ fontWeight: "revert" }}>Choose</Button>
              </Link>
            </div>
            <div className={styles.divider}></div>
            {storageComponent?.map((compo) => (
              <div
                key={compo._id}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                    marginLeft: "0.5rem",
                  }}
                >
                  <p>Name: {compo.productName}</p>
                  <p>Price: {compo.price}$</p>
                </div>
                {/* <div style={{ marginLeft: "0.5rem" }}>
                <Image
                  width={50}
                  height={50}
                  src={compo.image}
                  alt="storage image"
                />
              </div> */}
              </div>
            ))}
          </div>
        </div>
        {/* ++++++++++++++ storage --------------- */}
        <div className={styles.selectCard}>
          <div style={{ display: "flex" }}>
            <Cpu size={52} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "0.5rem",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  textAlign: "center",
                }}
              >
                Monitor
              </p>
              <Link href={`${process.env.BASE_URL}/pc-builder/choose/monitor`}>
                <Button style={{ fontWeight: "revert" }}>Choose</Button>
              </Link>
            </div>
            <div className={styles.divider}></div>
            {monitorComponent?.map((compo) => (
              <div
                key={compo._id}
                style={{ display: "flex", justifyContent: "" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                    marginLeft: "0.5rem",
                  }}
                >
                  <p>Name: {compo.productName}</p>
                  <p>Price: {compo.price}$</p>
                </div>
                {/* <div>
                <Image
                  width={50}
                  height={50}
                  src={compo.image}
                  alt="monitor image"
                />
              </div> */}
              </div>
            ))}
          </div>
        </div>
        {/*  +++++++++ monitor ------------*/}
        <div className={styles.selectCard}>
          <div style={{ display: "flex" }}>
            <Cpu size={52} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "0.5rem",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  textAlign: "center",
                }}
              >
                GPU
              </p>
              <Link href={`${process.env.BASE_URL}/pc-builder/choose/gpu`}>
                <Button style={{ fontWeight: "revert" }}>Choose</Button>
              </Link>
            </div>
            <div className={styles.divider}></div>
            {gpuComponent?.map((compo) => (
              <div
                key={compo._id}
                style={{ display: "flex", justifyContent: "" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                    marginLeft: "0.5rem",
                  }}
                >
                  <p>Name: {compo.productName}</p>
                  <p>Price: {compo.price}$</p>
                </div>
                {/* <div>
                <Image
                  width={50}
                  height={50}
                  src={compo.image}
                  alt="monitor image"
                />
              </div> */}
              </div>
            ))}
          </div>
        </div>
        {/* +++++++++++ gpu------- */}
        <div className={styles.selectCard}>
          <div style={{ display: "flex" }}>
            <Cpu size={52} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "0.5rem",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  textAlign: "center",
                }}
              >
                Mouse
              </p>
              <Link href={`${process.env.BASE_URL}/pc-builder/choose/mouse`}>
                <Button style={{ fontWeight: "revert" }}>Choose</Button>
              </Link>
            </div>
            <div className={styles.divider}></div>
            {mouseComponent?.map((compo) => (
              <div
                key={compo._id}
                style={{ display: "flex", justifyContent: "" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                    marginLeft: "0.5rem",
                  }}
                >
                  <p>Name: {compo.productName}</p>
                  <p>Price: {compo.price}$</p>
                </div>
                {/* <div>
                <Image
                  width={50}
                  height={50}
                  src={compo.image}
                  alt="monitor image"
                />
              </div> */}
              </div>
            ))}
          </div>
        </div>
        {/* ++++++++++ mouse ----------- */}
        <div className={styles.selectCard}>
          <div style={{ display: "flex" }}>
            <Cpu size={52} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "0.5rem",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  textAlign: "center",
                }}
              >
                Keyboard
              </p>
              <Link href={`${process.env.BASE_URL}/pc-builder/choose/keyboard`}>
                <Button style={{ fontWeight: "revert" }}>Choose</Button>
              </Link>
            </div>
            <div className={styles.divider}></div>
            {keyboardComponent?.map((compo) => (
              <div
                key={compo._id}
                style={{ display: "flex", justifyContent: "" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                    marginLeft: "0.5rem",
                  }}
                >
                  <p>Name: {compo.productName}</p>
                  <p>Price: {compo.price}$</p>
                </div>
                {/* <div>
                <Image
                  width={50}
                  height={50}
                  src={compo.image}
                  alt="monitor image"
                />
              </div> */}
              </div>
            ))}
          </div>
        </div>
        {/* +++++++++++++ keyboard ------- */}
      </div>
      {/*  +++++++++++++++++++++++ */}
      <div style={{ textAlign: "center", paddingBottom: "4rem" }}>
        <Button
          type="primary"
          onClick={() => openNotification("top")}
          disabled={selectedComponents.length <= 5}
        >
          Complete Build
        </Button>
      </div>
    </div>
  );
};

export default PcBuilderPage;
