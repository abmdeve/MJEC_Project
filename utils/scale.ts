import { CONSTANTS } from "../configs/Constants";

const widthDesign = 375;
const heightDesign = 812;

export const scale = (size: number, accordingHeight?: boolean) => {
  if (accordingHeight) {
    return (size * CONSTANTS.height) / heightDesign;
  }
  return (size * CONSTANTS.width) / widthDesign;
};
