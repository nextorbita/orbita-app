import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/contact",
        destination: "https://api-form.up.railway.app/form",
      },
    ];
  },
};

export default withNextIntl(nextConfig);
