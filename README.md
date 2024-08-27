# modules-fe

storybook을 통한 컴포넌트 개발 프로젝트

## develop

```bash
- next.js 프레임워크 위에서 돌아가는 컴포넌트 개발
- storybook을 활용하여 컴포넌트 시각화
- npm을 이용하여 컴포넌트 패키지 배포
```

# branch 관리

main - legacy
StorybookNpm - storybook과 npm 배포가 이루어지는 브랜치

# git workflow 관리

- s3를 통한 storybook 배포는 pull-request가 닫혔을 때 작동 : s3.yml
- pull-request 검증 기능 : test.yml
- Npm package 배포는 version이 변경될 때 작동 : npm.yml

# 부모 프로젝트에서 우리팀 디자인을 사용하는 방법
1.작업할 프로젝트의 tailwind.config.ts 파일로 이동
2. yarn add lodash (tailwind.config파일 merge를 위한 라이브러리 설치)
3. 아래 예시처럼 저희가 생성한 스타일관련 설정파일들을 import
4. import한 설정요소들을 lodash의 merge를 통해 하나로 통합

## 실사용 예시
   
```
import type { Config } from 'tailwindcss';
import { merge } from 'lodash';
import ColorGroundConfig from './tailwindConfig/colorGround/ColorGround.config';
import tailwindColorConfig from './tailwindConfig/themeGround/tailwind_color.config';
import tailwindElevationConfig from './tailwindConfig/themeGround/tailwind_elevation.config';
import tailwindSpacingConfig from './tailwindConfig/themeGround/tailwind_spacing.config';
import tailwindRadiusConfig from './tailwindConfig/themeGround/tailwind_radius.config';
import tailwindMotionsConfig from './tailwindConfig/themeGround/tailwind_motions.config';
import tailwindTypographyConfig from './tailwindConfig/themeGround/tailwind_typography.config';

const baseConfig: Config = {
    이런저런 기본설정코드...
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
```
