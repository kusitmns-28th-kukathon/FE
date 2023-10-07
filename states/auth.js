import { useRecoilState } from "recoil";
import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});
