import { job } from "./jobContext";

export interface DataContextType {
  jobs: job[];
  navbarOpen: boolean;
  setNavbarOpen: (flag: boolean) => void;
}
