import { Feature, LineString } from "geojson";
import { Coord } from "@turf/helpers";

/**
 * http://turfjs.org/docs/#lineslice
 */
export default function lineSlice(
  startPt: Coord,
  stopPt: Coord,
  line: Feature<LineString> | LineString
): Feature<LineString>;
