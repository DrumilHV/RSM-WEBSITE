"use client";
import React, { useEffect } from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./config/particle-config";
import { loadFull } from "tsparticles";

const ParticleBG = () => {
  useEffect(() => {
    const particleInit = async (engine) => {
      console.log(engine);
      await loadFull(engine);
    };

    const particlesLoaded = async (container) => {
      await console.log(container);
    };

    // Call your particle initialization and loaded functions here
    particleInit(particlesConfig);
    particlesLoaded(particlesConfig);
  }, []);

  return <Particles options={particlesConfig} height="100vh" width="100vw" />;
};

export default ParticleBG;
