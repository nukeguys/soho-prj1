# HTML/CSS/JavaScript 프로젝트

## 프로젝트 실행

1. 터미널을 통해 프로젝트 폴더에서 `npm install` 입력
2. `npm start`를 입력해서 서버 실행
3. 브라우저에서 `http://localhost:3000`로 접속

## 1. 자동완성 기능 구현하기

아래 내용을 참고해서 google/index.js에 코드를 구현합니다.

- API 응답을 `<li>` 태그로 감싸서 class명이 `autocomplete-results`인 `<ul>`태그에 추가
- 검색창 입력인 input 태그의 id는 `search-field`
- 참고) API는 'u', 'up', 'upl', 'uplu', 'uplus'에 대해서만 응답이 오고, `data.json`파일에서 검색어와 응답을 추가 가능

### 구현 내용

- 검색창에 `uplus`를 한 글자씩 입력해 나갈 때 마다 검색창 하단에 추천 검색어 리스트 표시
- 추천 검색어를 선택하면 검색창을 선택한 단어로 변경

#### api 요청하기

- 추천 검색어는 `/autocomplete` 경로에 `keyword` 쿼리 파라미터로 요청  
  예) `uplus` 입력시 http://localhost:3000/autocomplete?keyword=uplus
- API 요청시 fetch 사용(https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch)

## 2. GitHub 사용자 검색하기

아래 내용을 참고해서 github 디렉토리 안의 index.js, index.html, style.css에 자유롭게 코드를 구현합니다. (기존 작성된 코드 수정 가능)

- GitHub 사용자 이름(username)을 입력 후 검색 버튼을 클릭하면 GitHub API를 사용해서 사용자의 프로필 정보(id, 프로필사진, 팔로워/팔로잉 수 등)와 저장소 목록을 가져온 후 화면에 표시(최대 5개)
- 저장소 목록을 클릭하면 해당 repository로 이동

### GitHub API

- 사용자 프로필정보 조회 (https://api.github.com/users/${username})  
  예) https://api.github.com/users/nukeguys

- 사용자 repository 목록 (https://api.github.com/users/${username}/repos)  
  예) https://api.github.com/users/nukeguys/repos
