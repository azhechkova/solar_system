import SunTexture from "../../static/images/sun.jpg";
import EarthTexture from "../../static/images/earth.jpg";
import MercuryTexture from "../../static/images/mercury.jpg";
import VenusTexture from "../../static/images/venus.jpg";
import MarsTexture from "../../static/images/mars.jpg";
import JupiterTexture from "../../static/images/jupiter.jpg";
import SaturnTexture from "../../static/images/saturn.jpg";

export const PLANETS = [
  {
    radius: 109 / 10,
    texture: SunTexture,
    zIndex: 0,
    animation: 0.001,
  },
  {
    radius: 0.38 / 10,
    texture: MercuryTexture,
    zIndex: 20,
    animation: 4,
  },
  {
    radius: 0.95 / 10,
    texture: VenusTexture,
    zIndex: 26,
    animation: 2,
  },
  {
    radius: 1 / 10,
    texture: EarthTexture,
    zIndex: 30,
    animation: 1,
  },
  {
    radius: 0.53 / 10,
    texture: MarsTexture,
    zIndex: 35,
    animation: 0.5,
  },
  {
    radius: 11.19 / 10,
    texture: JupiterTexture,
    zIndex: 45,
    animation: 0.4,
  },
  {
    radius: 9.4 / 10,
    texture: SaturnTexture,
    zIndex: 50,
    animation: 0.5,
  },
];

export const EARTH_YEAR = 2 * Math.PI * (1 / 60) * (1 / 60);
