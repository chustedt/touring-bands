import skaBand from "../band-json/ska-band.json";
import kpopBand from "../band-json/kpop-band.json";
import punkBand from "../band-json/punk-band.json";

const bands = [skaBand, kpopBand, punkBand];

export async function getBandById(id) {
  return bands.find((band) => band.id === id);
}

export async function getBands() {
  return bands;
}
