# Jisun Kim · Data Science Portfolio

영문 포트폴리오입니다. HTML과 CSS를 중심으로 만들었고, 사진과 연락처, 프로젝트 repo 주소만 간단한 JavaScript 설정 파일로 관리합니다. 프레임워크, 패키지 설치, 빌드 과정은 필요 없습니다. JavaScript를 끄더라도 본문과 메뉴, 상세 페이지는 작동합니다.

## 먼저 열어보기

다운로드한 ZIP의 압축을 풀고 `index.html`을 브라우저로 열면 됩니다. 사진과 스타일, 다른 페이지가 함께 작동하려면 `assets`와 `projects` 폴더도 같은 위치에 두세요. 이 사이트의 작업용 저장소에서는 공개할 파일이 `dist` 폴더에 모여 있으며, 다운로드 ZIP에는 해당 파일들이 최상위에 있습니다.

## 구성

| 파일 | 내용 |
| --- | --- |
| `index.html` | 자기소개, 성격을 나타내는 문구, 사진 자리, 연락처, 대표 프로젝트 |
| `work.html` | 직장별 기간, 직책, 업무와 프로젝트 링크 |
| `education.html` | 두 대학의 기간과 GPA, 수강 과목 설명과 관련 프로젝트 |
| `projects.html` | 전체 프로젝트 소개 카드 |
| `projects/*.html` | 프로젝트별 상세 페이지 12개 |
| `assets/style.css` | 모든 페이지의 공통 디자인과 반응형 레이아웃 |
| `assets/portfolio-config.js` | 사진, 이메일, LinkedIn, GitHub, 프로젝트별 repo 주소 |
| `assets/portfolio.js` | 설정된 정보와 링크를 화면에 적용하는 작은 스크립트 |

## 사진과 연락처 수정

`assets/portfolio-config.js`를 텍스트 편집기로 열고 빈 따옴표를 채우세요. 아래 값은 형식을 보여주는 예시이며 실제 연락처가 아닙니다.

```javascript
email: "your-email@example.com",
github: "https://github.com/YOUR_USERNAME",
linkedin: "https://www.linkedin.com/in/YOUR_PROFILE/",
photo: "assets/portrait.jpg",
```

사진 파일을 `assets/portrait.jpg`로 저장한 후 위처럼 경로를 입력하면 됩니다. 다른 이름의 JPG, PNG, WebP 파일도 사용할 수 있습니다. 외부 폰트나 사진 서비스에 의존하지 않습니다. 사진이 없거나 불러오기에 실패하면 JK 이니셜과 사진 추가 안내가 유지됩니다. 빈 연락처는 실제 링크처럼 보이게 만들지 않고 `To be added`로 표시합니다.

## 프로젝트 repo 연결

같은 설정 파일의 `repositories`에서 연결할 프로젝트를 찾으세요.

```javascript
"california-housing": "https://github.com/YOUR_USERNAME/YOUR_REPOSITORY",
```

주소가 있으면 Home, Work, Education, Projects의 해당 프로젝트 링크가 repo로 연결됩니다. 주소가 비어 있으면 내부 상세 페이지로 이동합니다. 상세 페이지에도 repo 버튼이 자동으로 생깁니다. 외부 주소는 `https://`로 시작해야 합니다.

| 설정 키 | 프로젝트 |
| --- | --- |
| `california-housing` | California Home Price Prediction |
| `clinical-code-prediction` | Clinical Code Prediction from Longitudinal Notes |
| `ehr-agent-research` | AI Agents for Clinical Research Workflows |
| `store-location` | Store Location Recommendation |
| `cannibalization` | Store Cannibalization Analysis |
| `drive-thru` | Drive-thru Sales Underperformance |
| `market-potential` | Market Potential & Comparable Stores |
| `retail-catchments` | Retail Catchments & Accessibility |
| `market-segmentation` | Market Segmentation & Sales Patterns |
| `data-pipelines` | Automated Analytics Pipelines |
| `market-research` | Market Research & Consumer Insights |
| `entrepreneurship` | Entrepreneurship Education & Program Support |

## 내용과 디자인 수정

페이지의 문장은 각 HTML 파일에서 직접 수정하면 됩니다. 회사명과 기간은 `work.html`, 학력과 과목은 `education.html`, 프로젝트 소개는 `projects.html`, 자세한 설명은 `projects` 폴더에 있습니다. 동일한 내용이 여러 페이지에 사용되면 함께 수정하세요.

전체 색상은 `assets/style.css`의 맨 위 `:root`에서 변경합니다. `--blue`는 강조색, `--ink`는 기본 글자색, `--navy`는 짙은 배경색입니다. 데스크톱과 모바일 레이아웃을 포함하며, 메뉴를 모바일에서도 바로 볼 수 있게 했습니다.

## 반영한 자료와 남은 입력 항목

- 경력 기간, 직책과 GPA는 제공된 `Jisun_s_CV_updated.pdf`를 참고했습니다. Starbucks 기간의 `Present` 표기는 해당 CV의 내용이므로 현재 상태에 맞춰 확인해주세요.
- University of Minnesota 시작 시점은 기존에 알려준 Fall 2025, 졸업 예정은 CV의 May 2027로 기입했습니다. GPA 분모는 CV에 명시되지 않아 추가하지 않았습니다.
- Chungnam National University의 공식 영문 표기와 2011년 3월–2017년 8월, GPA 3.92 / 4.5를 반영했습니다.
- 주택가격 예측 결과는 `California Home Price Prediction - Final Presentation.pptx`를 참고했습니다. May 2026 테스트 월의 LightGBM MdAPE는 9.17%입니다.
- 개인 사진, 이메일, GitHub 및 LinkedIn 주소, 프로젝트별 실제 repo 주소는 제공되지 않아 비워두었습니다.
- IDX Exchange의 정확한 인턴십 시작·종료일은 `work.html`에서 추가해주세요.
- Recommender Systems와 Principles of Database Systems는 과목 설명을 넣었으며, 구체적인 과제 이름과 링크는 추가가 필요합니다. 현재 관련 프로젝트 링크는 과목별 제출 과제라고 단정하지 않고 관련 주제로 연결했습니다.
- 임상 NLP 프로젝트와 캡스톤 설명은 기존에 공유한 내용을 바탕으로 작성했습니다. 캡스톤은 진행 중인 연구로 표시하고 완료된 연구 성과로 표현하지 않았습니다.
- 과거 회사 프로젝트는 높은 수준의 업무 개요로 작성했습니다. 공개하기 전에 본인이 공개할 수 있는 범위와 정확한 문구를 확인해주세요.

## GitHub Pages에 올리기

1. GitHub에서 포트폴리오를 넣을 저장소를 만듭니다. 개인 대표 사이트를 원하면 이름을 `YOUR_USERNAME.github.io`로 사용합니다.
2. ZIP을 푼 뒤 **ZIP 내부 파일과 폴더**를 저장소 최상위에 업로드합니다. `index.html`이 최상위에 있어야 합니다. 작업용 저장소에서 옮긴다면 `dist` 안의 내용을 업로드하세요.
3. 저장소 **Settings → Pages → Build and deployment**에서 **Source: Deploy from a branch**를 선택합니다.
4. **Branch: main**, **폴더: /(root)**를 선택하고 저장합니다.
5. Pages 화면에 표시되는 사이트 주소를 확인합니다. `.nojekyll` 파일을 포함하면 Jekyll 처리를 사용하지 않는 정적 사이트로 게시할 수 있습니다.

모든 내부 링크와 파일 경로는 상대 경로이므로 개인 사이트와 `username.github.io/repository/` 형태의 프로젝트 사이트 모두에 사용할 수 있습니다. 이 파일을 제공한 것만으로 GitHub 저장소에 업로드되거나 GitHub Pages가 활성화되는 것은 아닙니다.

공식 안내:

- [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 점검

HTML 페이지의 내부 파일 및 앵커 연결과 JavaScript 문법을 확인했습니다. 별도 서버가 필요 없는 정적 사이트이며, 자동화된 브라우저 화면 검증은 수행하지 않았습니다.
