# 🏗 사내 UI 라이브러리 개발 프로젝트

## 📌 프로젝트 소개  
기존 서브모듈 방식의 비효율성(버전 관리, 문서화 부족, 재사용성 제한)을 해결하고,  
팀 얼루가의 일관된 개발 환경과 협업 효율성을 높이기 위해  
공통 컴포넌트와 디자인 요소를 **NPM 패키지로 배포**하고 **Storybook으로 문서화**하는 프로젝트입니다.

---

## 🚀 배포 및 리소스  
- **GitHub**: [modules-fe](https://github.com/the-kingdoms/modules-fe)  
- **NPM**: [`@eolluga/eolluga-ui`](https://www.npmjs.com/package/@eolluga/eolluga-ui)  
- **Storybook**: [UI 라이브러리 문서](https://ui.eolluga.com/)  

---

## 🛠 기술 스택  
| 분류        | 기술  |
|------------|--------------------------------|
| **개발 언어**  | TypeScript |
| **프레임워크** | React |
| **스타일링** | Tailwind CSS |
| **문서화 도구** | Storybook |
| **버전 관리 및 배포 자동화** | Git, GitHub Actions |

---

## ✨ 주요 기능  
- 🏗 **공통 컴포넌트 개발**: `Button`, `Accordion`, `Dialog` 등 재사용 가능한 UI 컴포넌트 제작  
- 📖 **Storybook을 통한 문서화**: 컴포넌트별 사용법 및 스타일 가이드 제공  
- 🎨 **디자인 협업**: 컬러, 타이포그래피 등 스타일 가이드 형성  

---

## 🛠 문제 해결 경험  
### ✅ SSR 환경에서의 FOUC 문제 해결  
- 초기에는 **인라인 CSS**로 인해 Next.js SSR 환경에서 **스타일이 적용되지 않는 FOUC(Flash of Unstyled Content)** 문제가 발생  
- **해결책**: Rollup 설정을 변경하여 **CSS를 별도로 추출**하도록 개선  

### ✅ 번들 크기 최적화  
- 초기에 모든 모듈을 한 번에 불러오는 방식으로 **최대 4.7MB** 로드됨  
- **개선책**: `glob` 라이브러리를 사용해 **코드 스플리팅 적용**, 필요한 컴포넌트만 개별 import 가능하도록 수정  
- **결과**: 이후 퍼블리싱 시간이 **약 40% 단축**됨  

---

## 👨‍💻 팀 구성 및 역할  
| 역할 | 인원 | 담당 업무 |
|------|----|--------------------------------|
| **디자이너** | 2명 | UI 스타일 가이드 및 디자인 시스템 구축 |
| **프론트엔드 개발자** | 2명 | 공통 컴포넌트 개발 및 문서화, Storybook 작성, 성능 최적화 |

---

## 🔍 회고  
### 🌟 좋았던 점  
✅ 예상보다 복잡한 문제를 해결하면서 **큰 성취감**을 느꼈고,  
✅ **JavaScript 모듈 시스템**에 대한 이해도를 높일 수 있었음  

### 😢 아쉬웠던 점  
⚠️ Tailwind 의존성을 줄였다면 **번들 크기를 더 줄일 수 있었을 것**  
⚠️ 앞으로 초기 기술 스택 선택이 **성능에 미치는 영향을 더 신중히 고려**해야 함  

---

📌 **문의 / 피드백**  
이 프로젝트에 대한 피드백이나 문의가 있다면 **Issue** 또는 **PR**을 통해 기여해 주세요! 🚀  

