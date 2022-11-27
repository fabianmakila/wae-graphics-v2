import { tsParticles } from "tsparticles-engine";
import { loadFull } from "tsparticles";

// Images
const logoSvg = new URL("../assets/wae-logo+wordmark.svg", import.meta.url);
const barSvg = new URL("../assets/bar-6-units-default.svg", import.meta.url);

// URL params
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (!urlParams.has("nologo")) {
  const logo = document.createElement("img");
  logo.alt = "";
  logo.src = logoSvg.href;
  logo.classList.add("logo");
  document.body.append(logo);
}

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
