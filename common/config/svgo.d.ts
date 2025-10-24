interface SVGOPlugin {
  name: string;
  params?: Record<string, unknown>;
}

interface SVGOConfig {
  plugins: SVGOPlugin[];
  floatPrecision: number;
}

declare const svgoConfig: SVGOConfig;
export = svgoConfig;
