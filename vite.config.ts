import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // Explicitly define the public directory (though 'public' is the default)
  publicDir: 'public',
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
  // Optional: Add server configuration if needed, though defaults usually work
  // server: {
  //   watch: {
  //     // Watch the public directory for changes (might help in some environments)
  //     usePolling: true,
  //     ignored: ['!**/public/**']
  //   }
  // }
});
