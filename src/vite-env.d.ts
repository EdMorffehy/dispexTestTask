/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vite/client" />
import { FC, ReactNode, SetStateAction, Dispatch } from "react";

declare global {
  type FCC<PROPS extends object = object> = FC<{ children?: ReactNode } & PROPS>;

  type SetStateType<TYPE> = Dispatch<SetStateAction<TYPE>>;
}

interface ImportMetaEnv {
  readonly REACT_APP_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
