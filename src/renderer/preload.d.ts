import { ElectronHandler } from '../main/preload';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: ElectronHandler;
    electronStore: {
      get: (key: string) => any;
      set: (key: string, val: any) => void;
     
    };
  }
}
export {};
