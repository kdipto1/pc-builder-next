import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import { Google } from "@styled-icons/boxicons-logos/Google";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();

  const { callbackUrl } = router.query;

  const [isHoveredGithub, setIsHoveredGithub] = useState(false);

  const handleMouseEnterGithub = () => {
    setIsHoveredGithub(true);
  };

  const handleMouseLeaveGithub = () => {
    setIsHoveredGithub(false);
  };

  const boxStyleGithub = {
    width: "200px",
    height: "200px",
    backgroundColor: isHoveredGithub ? "#FFC0CB" : "#00CED1",
    transition: "background-color 0.3s ease",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", fontSize: "2rem" }}>Login</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ marginLeft: "0.5rem" }}>
          <Github
            style={boxStyleGithub}
            onMouseEnter={handleMouseEnterGithub}
            onMouseLeave={handleMouseLeaveGithub}
            onClick={() =>
              signIn("github", {
                callbackUrl: callbackUrl || process.env.BASE_URL,
              })
            }
          />
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
