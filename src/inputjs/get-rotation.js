import getAngle from './get-angle';
import { PROPS_CLIENT_XY } from './input-consts';

/**
 * @private
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
export default function getRotation(start, end) {
  const startAngle = start[0].identifier && start[0].identifier > start[1].identifier ?
    getAngle(start[0], start[1], PROPS_CLIENT_XY) : getAngle(start[1], start[0], PROPS_CLIENT_XY);

  const endAngle = end[0].identifier && end[0].identifier > end[1].identifier ?
    getAngle(end[0], end[1], PROPS_CLIENT_XY) : getAngle(end[1], end[0], PROPS_CLIENT_XY);

  return endAngle + startAngle;
}
