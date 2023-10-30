import skaBand from "../band-json/ska-band.json";
import kpopBand from "../band-json/kpop-band.json";
import punkBand from "../band-json/punk-band.json";

const bands = [skaBand, kpopBand, punkBand];

export const getBandById = async (id) => {
  return bands.find((band) => band.id === id);
};

export const getBands = async () => {
  return bands;
};
