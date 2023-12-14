import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadSlim } from "@tsparticles/slim";

import style from "./MyParticles.module.css";

import p1 from "./particles1.json";
import p2 from "./particles2.json";

const particles = [p1, p2];

export default function MyParticles({ index }) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      {init && (
        <Particles className={style.tsParticles} options={particles[index]} />
      )}
    </>
  );
}
