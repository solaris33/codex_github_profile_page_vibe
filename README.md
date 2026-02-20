# GitHub Pages 개발자 포트폴리오

배포 URL: `https://<username>.github.io/<repository>/`  
(배포 완료 후 실제 URL로 교체하세요)

정적 `HTML/CSS/JS` 기반 원페이지 포트폴리오입니다. 채용 지원용 정보 전달에 맞춰 6개 섹션으로 구성되어 있습니다.

## 구성 파일

- `index.html`: 페이지 구조/콘텐츠(6개 섹션)
- `assets/css/styles.css`: 디자인 토큰, 레이아웃, 반응형, 모션 스타일
- `assets/js/main.js`: 스크롤 리빌, 현재 섹션 네비게이션 하이라이트
- `.github/workflows/pages.yml`: `main` push 시 GitHub Pages 자동 배포
- `assets/img/`: 이미지 파일 보관 폴더

## 로컬 확인

정적 파일이라 별도 빌드가 필요 없습니다.

```bash
# 선택: 로컬 서버 실행
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

## 콘텐츠 수정 가이드

모든 콘텐츠는 `index.html`에서 직접 수정합니다.

- Hero: 이름/직무/한줄 소개/CTA
- About: 요약 소개 + 핵심 강점 3개
- Skills: 언어/프레임워크/도구
- Projects: 프로젝트 카드 3개
- Experience: 최신순 경력/활동
- Contact: 이메일/GitHub/LinkedIn

`index.html` 내부에 `<!-- TODO(...) -->` 주석 블록이 있으니, 해당 필드를 기준으로 교체하면 됩니다.

## 입력 체크리스트 (실데이터 반영용)

- [ ] Hero 이름/직무/한줄 가치 제안이 실제 이력과 일치한다.
- [ ] About 문단이 현재 지원 포지션에 맞게 작성되었다.
- [ ] Skills가 실제 실무 사용 스택 기준으로 정리되었다.
- [ ] Projects 3개에 아래 필수가 모두 채워졌다.
  - `title`, `role`, `period`, `problem`, `solution`, `impact`, `links`
- [ ] Experience 항목이 최신순이며, 각 항목에 성과가 포함되었다.
- [ ] Contact의 이메일/GitHub/LinkedIn 링크가 실제 프로필로 연결된다.

## 배포 설정 (GitHub Pages)

1. GitHub 저장소에 코드 푸시
2. 저장소 Settings → Pages → Build and deployment → Source를 `GitHub Actions`로 설정
3. `main` 브랜치에 push하면 `.github/workflows/pages.yml` 워크플로가 자동 실행
4. 배포 완료 후 표시된 Pages URL을 README 상단에 기록

## 검증 시나리오

- 네비게이션 앵커 이동: `#about`, `#skills`, `#projects`, `#experience`, `#contact`
- 외부 링크 동작: `mailto`, GitHub, LinkedIn
- 반응형 확인: 360px / 768px / 1280px
- 접근성 기본 확인: 포커스 표시, 텍스트 대비, heading 구조
- 배포 확인: CSS/JS/이미지 404 없음

## 참고

GitHub Pages 프로젝트 페이지(`username.github.io/repository`) 호환을 위해 정적 자원은 `assets/...` 형태의 상대경로로 연결되어 있습니다.
