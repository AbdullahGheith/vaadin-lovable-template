import { UserConfigFn } from 'vite';
import { overrideVaadinConfig } from './vite.generated';
import {fileURLToPath, URL} from "node:url";

const customConfig: UserConfigFn = (env) => ({
  // Here you can add custom Vite parameters
  // https://vitejs.dev/config/
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src/main/frontend', import.meta.url))
    }
  }
});

export default overrideVaadinConfig(customConfig);
