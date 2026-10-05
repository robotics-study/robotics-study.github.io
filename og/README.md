# og/ — 소셜 공유 카드(OG 이미지) 소스

루트의 `og-image.png`(한글) / `og-image-en.png`(영문)은 랜딩 페이지가 공유될 때
`<meta property="og:image">`로 붙는 1200×630 이미지의 **소스**입니다.
HTML/CSS로 만들어 두면 문구·칩 수정 후 아래 방법으로 다시 렌더할 수 있습니다.

## 구조
- `ko.html` / `en.html` — 한글/영문 카드. 레이아웃은 동일하고 텍스트만 다릅니다.
- `card.css` — 공용 스타일. 색은 랜딩 페이지 다크 토큰(`#0b1020` 배경, `#818cf8`/`#22d3ee` 포인트)과 같습니다.

## 재생성 방법
Inter 웹폰트를 네트워크로 받아 오므로 **온라인 상태에서** 실행합니다.
한글은 macOS 시스템 폰트(Apple SD Gothic Neo)를 쓰므로 macOS에서 렌더하는 것을 전제로 합니다.

```sh
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless=new --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=1 --window-size=1200,630 \
  --virtual-time-budget=8000 \
  --screenshot=../og-image.png "file://$(pwd)/ko.html"
"$CHROME" --headless=new --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=1 --window-size=1200,630 \
  --virtual-time-budget=8000 \
  --screenshot=../og-image-en.png "file://$(pwd)/en.html"
```

## 디자인 스펙(기존 PNG에서 픽셀 실측으로 역산)
- 캔버스 1200×630, 배경 `#0b1020` + 48px 그리드선(`rgba(148,163,184,.05)`),
  좌측 10px 세로 스트립(`#6366f1 → #06b6d4`)
- 글로우: 좌상단 `radial-gradient(620px 460px at -40px -80px, rgba(99,102,241,.3) 60%, transparent)`,
  우하단 `radial-gradient(620px 540px at 1300px 720px, rgba(6,182,212,.25) 60%, transparent)`
- 로고 타일 76×76(r20, `#0f1730`/`#2b3856`) + 파비콘과 동일한 경로 아이콘 SVG
- 워드마크: 모노(SF Mono) 볼드 30px, 자간 -.02em, `#c7d2fe`
- h1: 70.5px 볼드(한글 Apple SD Gothic Neo / 영문 Inter), 자간 -.03em, 줄높이 1.13,
  그라디언트 텍스트(`linear-gradient(90deg,#fff 32%,#a5b4fc)`)
- 부제: 30px, 줄높이 1.5, `#94a3b8`
- 칩: 모노 볼드 19px — 기존 카드의 22px에서 칩이 5개로 늘어 콘텐츠 폭(1020px)에
  맞추려 축소했습니다. 패딩 9×17px, 갭 15px
