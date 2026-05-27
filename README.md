# 팜로컬 (Farm Local)

스마트팜 체험 + 로컬 농산물 재배 + 지역 관광/축제 할인 연계 플랫폼 **공모전 시제품** 웹사이트입니다.

## 기술 스택

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4
- shadcn/ui 스타일 컴포넌트 (Button, Card, Dialog 등)
- lucide-react
- react-router-dom

## 바로 열기 (추천 · npm 불필요)

**`팜로컬.html`** 파일을 더블클릭하면 브라우저에서 바로 실행됩니다.

- 위치: 프로젝트 루트 `팜로컬.html` 또는 `farm-local/팜로컬.html`
- 서버 설치 없이 동작하는 단일 HTML 시제품입니다.

## 개발 서버로 실행 (선택)

```bash
cd farm-local
npm install
npm run dev
```

브라우저에서 `http://localhost:5173` 으로 접속합니다.

### 빌드

```bash
npm run build
npm run preview
```

## 주요 화면

| 경로 | 설명 |
|------|------|
| `/` | 홈 – 히어로, 서비스 흐름, 투표 UI |
| `/service` | 메인 서비스 – 상태 확인, 농장 신청, 지도, 관광, 쿠폰함 |

## 더미 데이터 수정

모든 예시 데이터는 `src/data/mockData.ts` 한 곳에서 관리합니다.

## 프로토타입 범위

- 실제 서버/API/결제/카메라 연결 없음
- 모달·토스트·더미 지도·QR UI로 동작 시연
