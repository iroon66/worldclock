# worldclock - 세계시계 앱 랜딩페이지 🌍⏰

**worldclock**의 공식 랜딩페이지입니다. Next.js 15, TypeScript, Tailwind CSS로 제작되었습니다.

![worldclock](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)

## 🎯 프로젝트 소개

전 세계 어디서든 정확한 시간을 손쉽게 비교할 수 있는 "worldclock" 앱의 랜딩페이지입니다.

### 주요 기능
- 📱 실시간 시간대 변환
- 📍 위치 기반 자동 설정
- ⭐ 즐겨찾기 도시 관리
- ✨ 간단하고 직관적인 UI
- 🔒 완벽한 프라이버시 보호

## 🛠️ 기술 스택

- **프레임워크**: Next.js 15 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS v4
- **애니메이션**: Framer Motion
- **아이콘**: Lucide React
- **마크다운**: react-markdown, remark-gfm

## 📦 설치 및 실행

### 1. 저장소 클론

```bash
git clone https://github.com/iroon66/between-time-landing.git
cd between-time-landing
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 4. 프로덕션 빌드

```bash
npm run build
npm start
```

## 📂 프로젝트 구조

```
worldclockweb/
├── src/
│   └── app/
│       ├── layout.tsx          # 메인 레이아웃 및 메타데이터
│       ├── page.tsx            # 홈 페이지
│       ├── privacy/
│       │   └── page.tsx        # 개인정보처리방침 페이지
│       ├── sitemap.ts          # 사이트맵 생성
│       └── globals.css         # 글로벌 스타일
├── components/
│   ├── Header.tsx              # 헤더 (네비게이션)
│   ├── Hero.tsx                # 히어로 섹션
│   ├── Features.tsx            # 주요 기능 섹션
│   ├── HowItWorks.tsx          # 사용 방법 섹션
│   ├── Screenshots.tsx         # 스크린샷 캐러셀
│   ├── Download.tsx            # 다운로드 섹션
│   ├── Footer.tsx              # 푸터
│   ├── ThemeProvider.tsx       # 다크모드 Provider
│   ├── ThemeToggle.tsx         # 다크모드 토글
│   └── ui/
│       ├── Button.tsx          # 버튼 컴포넌트
│       ├── Card.tsx            # 카드 컴포넌트
│       └── Container.tsx       # 컨테이너 컴포넌트
├── content/
│   └── privacy-policy.md       # 개인정보처리방침 마크다운
├── public/
│   ├── robots.txt
│   ├── site.webmanifest
│   └── screenshots/
└── package.json
```

## 🎨 주요 기능

### 🌓 다크모드 지원
- 시스템 설정 자동 감지
- 토글 버튼으로 수동 전환 가능
- localStorage에 설정 저장

### 📱 완벽한 반응형 디자인
- Mobile-first 디자인
- 모든 디바이스에서 최적화된 경험
- Breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px)

### 🎭 부드러운 애니메이션
- Framer Motion을 활용한 인터랙션
- 스크롤 기반 애니메이션
- Hover 효과

### 🔍 SEO 최적화
- 메타데이터 최적화
- Open Graph 태그
- robots.txt 및 sitemap.xml
- 시맨틱 HTML

## 🚀 배포

### Vercel 배포 (권장)

1. [Vercel](https://vercel.com)에 가입/로그인
2. GitHub 저장소 연결
3. 프로젝트 import
4. 자동 배포 완료!

```bash
# Vercel CLI 사용
npm i -g vercel
vercel
```

### 환경 변수

필요한 환경 변수는 없습니다. 모든 설정이 코드에 포함되어 있습니다.

### 커스텀 도메인 설정

Vercel 대시보드에서 Settings > Domains로 이동하여 커스텀 도메인을 추가할 수 있습니다.

## 📝 커스터마이징

### 컬러 스킴 변경

`src/app/globals.css` 파일에서 CSS 변수를 수정하세요:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --background: 0 0% 100%;
  /* ... */
}
```

### 콘텐츠 수정

각 섹션 컴포넌트에서 직접 수정할 수 있습니다:
- `components/Hero.tsx` - 히어로 섹션
- `components/Features.tsx` - 기능 섹션
- `content/privacy-policy.md` - 개인정보처리방침

### 다운로드 링크 추가

`components/Download.tsx`와 `components/Hero.tsx`에서 플레이스홀더 링크를 실제 스토어 URL로 교체하세요:

```tsx
<Button href="https://play.google.com/store/apps/details?id=your.app.id">
  Google Play에서 다운로드
</Button>
```

## 🧪 개발 명령어

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# Lint 검사
npm run lint
```

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 👨‍💻 개발자

**iroon66**
- GitHub: [@iroon66](https://github.com/iroon66)

## 🤝 기여

버그 리포트, 기능 제안, Pull Request 환영합니다!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의

프로젝트에 대한 질문이나 피드백은 [GitHub Issues](https://github.com/iroon66/between-time/issues)를 통해 남겨주세요.

---

⭐ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요!
