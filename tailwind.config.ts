import type { Config } from 'tailwindcss';
import { merge } from 'lodash';
import ColorGroundConfig from './colorGround/ColorGround.config';
import tailwindColorConfig from './themeGround/foundation/tailwind_color.config';
import tailwindElevationConfig from './themeGround/foundation/tailwind_elevation.config';
import tailwindSpacingConfig from './themeGround/foundation/tailwind_spacing.config';
import tailwindRadiusConfig from './themeGround/foundation/tailwind_radius.config';
import tailwindMotionsConfig from './themeGround/foundation/tailwind_motions.config';
import tailwindTypographyConfig from './themeGround/foundation/tailwind_typography.config';

const baseConfig: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};

const config: Config = merge(
    baseConfig,
    ColorGroundConfig,
    tailwindElevationConfig,
    tailwindSpacingConfig,
    tailwindRadiusConfig,
    tailwindMotionsConfig,
    tailwindTypographyConfig,
    tailwindColorConfig
);

export default config;
