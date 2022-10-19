# Winning-I

### 목차

[1. 프로젝트 개발 기간](##-✔-프로젝트-개발-기간)<br>
[2. 배포 주소](##-✔-배포-주소)<br>
[3. 사용 기술 및 라이브러리](##-✔-사용-기술-및-라이브러리)<br>
[4. 프로젝트, 서버 설치 및 실행 방법](##-✔-프로젝트,-서버-설치-및-실행-방법)<br>
[5. 주요 기능 및 프로젝트 설명(Page 단위)](<##-✔-주요-기능-및-프로젝트-설명(Page-단위)>)

<br>
<br>
<br>

## ✔ 프로젝트 개발 기간

2022.10.17 ~ 2022.10.19

<br>
<br>
<br>

## ✔ 배포 주소

### 📒 https://winning-i.netlify.app/

- 배포 사이트를 들어가기 전에 서버를 꼭 켜야됩니다.<br>
  아래 [서버 실행 방법](##-✔️-프로젝트,-서버-설치-및-실행-방법)을 참고하셔서 서버를 키신 후에 배포 사이트 이용 바랍니다.

<br>
<br>
<br>

## ✔ 사용 기술 및 라이브러리

> JavaScript

> React.js

> styled-components

> styled-reset

> react-dom

> react-router-dom

> axios

> react-apexcharts

> react-quill

<br>
<br>
<br>

## ✔ 프로젝트, 서버 설치 및 실행 방법

1. Node.js를 설치해주세요.

```
https://nodejs.org/
```

2. 레포지토리를 클론 후 폴더로 이동 해주세요.

```
git clone https://github.com/sh-inv/winning-i.git

cd winning-i
```

3. dependencies를 설치해주세요.

```
npm install
```

4. json-server를 설치해주세요.

```
npm install -g json-server
```

5. 터미널에서 json-server를 실행해주세요.

```
json-server ./db.json --port 8000
```

6. 새로운 터미널에서 프로젝트를 실행해주세요.

```
npm run dev
```

<br>
<br>
<br>

## ✔ 주요 기능 및 프로젝트 설명(Page 단위)

### WINNING.I 기업과제 가이드에 따라 기능을 구현한 후 몇가지 기능을 추가했습니다.

<br>

#### ‣ SideBar

- 슬라이드 사이드바 구현
- UX를 고려해 사이드바가 열려있을때 사이드바 이외의 영역을 클릭해도 닫히게 설정

#### ‣ Login

- 로그인을 성공할 때마다 graph page의 '월별 방문자 추이'의 해당 월에 +1이 되게끔 구현

#### ‣ Graph

- Apex Chart 라이브러리를 사용해 확대, 축소, 저장 기능을 구현
- json-server를 이용해 데이터가 동적으로 변하게끔 구현

#### ‣ Board

- DB에서 데이터를 받아서 UI를 구현
- 페이지 최하단으로 내려갔을 때 이전 글 목록을 불러오게끔 무한 스크롤 구현

#### ‣ Write(게시글 작성)

- 위즈윅 에디터로 quill 라이브러리를 사용해 본문 내용을 작성 할 수 있게 구현
- 제목과 본문 내용이 한글자 이상이 되어야 등록 버튼이 활성화 되게 구현
- 게시글을 등록 할 때마다 graph page의 '월별 게시글 등록수'의 해당 월에 +1이 되게끔 구현
- 게시글을 등록했을 때 DB에 저장되게 구현

#### ‣ Detail Page(게시글 상세페이지)

- DB에서 데이터를 받아서 UI를 구현
- 게시글 삭제 기능 구현
- 게시글을 삭제했을 때 graph page의 '월별 게시글 등록수'의 해당 월에 -1이 되게끔 구현

#### ‣ 추가적인 UI

- 640px을 기준으로 반응형 구현
- scroll to top 구현
- 로그아웃 버튼을 누르면 로그인 화면으로 전환
