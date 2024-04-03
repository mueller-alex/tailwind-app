import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import devtoolBreakpoints from "astro-devtool-breakpoints";

import pageInsight from "astro-page-insight";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), devtoolBreakpoints(), pageInsight()]
});