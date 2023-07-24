import Particles from "react-tsparticles";
import particlesConfig from "./config/particle-config";
import { useCallback } from "react";
import { loadFull } from "tsparticles";

const ParticleBG = () => {
    const particleInit = useCallback(async (engine)=>{
        console.log(engine)
        await loadFull(engine);
    }, [])

    const particlesLoaded = useCallback(async (container)=>{
        await console.log(container)
    })

  return (
    <Particles 
        options={particlesConfig}
        init={particleInit}
        loaded={particlesLoaded}
        height="100vh"
        width="100vw"
    >
    </Particles>
  )
}

export default ParticleBG
