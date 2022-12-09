import { tsParticles } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { NodeCGBrowser, ReplicantBrowser } from "nodecg/types/browser";

const logoReplicant = nodecg.Replicant("assets:intermission-logo");
const logoImageElement: HTMLImageElement = document.getElementById("logo") as HTMLImageElement;

// Images
const defaultLogo = new URL("../assets/wae-logo+wordmark.svg", import.meta.url);
const barSvg = new URL("../assets/bar-6-units-default.svg", import.meta.url);

// URL params
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

logoReplicant.on("change", (newValue: any) => {
  if (urlParams.has("nologo")) {
    return;
  }

  if (newValue[0] == undefined) {
    logoImageElement.src = defaultLogo.href;
    return;
  }

  logoImageElement.src = newValue[0].url;
})

// Particles

loadFull(tsParticles);

tsParticles.load("particles1", {
  detectRetina: true,
  fpsLimit: 60,
  particles: {
    shape: {
      type: "image",
      image: {
        src: barSvg.href,
        height: 32,
        width: 142,
      }
    },
    move: {
      direction: "left",
      enable: true,
      speed: 0.5,
      straight: true
    },
    number: {
      density: {
        enable: true,
        area: 500
      },
      value: 2
    },
    opacity: {
      value: .5
    },
    size: {
      value: 100
    },
  }
});

tsParticles.load("particles2", {
  detectRetina: true,
  fpsLimit: 60,
  particles: {
    shape: {
      type: "image",
      image: {
        src: barSvg.href,
        height: 32,
        width: 142,
      }
    },
    move: {
      direction: "left",
      enable: true,
      speed: 0.75,
      straight: true
    },
    number: {
      density: {
        enable: true,
        area: 500
      },
      value: 1.5
    },
    opacity: {
      value: .75
    },
    size: {
      value: 150
    },
  }
});

tsParticles.load("particles3", {
  detectRetina: true,
  fpsLimit: 60,
  particles: {
    shape: {
      type: "image",
      image: {
        src: barSvg.href,
        height: 32,
        width: 142,
      }
    },
    move: {
      direction: "left",
      enable: true,
      speed: 1,
      straight: true
    },
    number: {
      density: {
        enable: true,
        area: 500
      },
      value: 1
    },
    opacity: {
      value: 1
    },
    size: {
      value: 200
    },
  }
});
