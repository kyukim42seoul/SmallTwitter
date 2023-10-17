## Commands
* yarn : 패키지 설치
* yarn dev : 라이브 서버 실행
* yarn storybook : 스토리북 실행
* yarn tsc [fileName]: fileName 을 typescript 로 컴파일

## 기술 스택
* React
* Typescript
* vite
* styled-components
* Storybook
* react-route-dom
* axios


## 주요기능
* 회원가입, 로그인
* 즐겨찾기
* 태그로 필터링 및 정렬
* 대시보드
* 권한 분리
* CRUD
* 모바일, 맥북, PC 반응형 레이아웃
* (필요하다면 SSG, SSR)

2023-07-24

- FlexContainer 추가
- react-router 추가
- ErrorPage 추가

import 절대경로로 바꾸는 방법 알아보기.
typescript baseURL 처럼 동작하는 기능이 없나

prettier 적용 고민. ESLint 가 이미 적용되어 있지 않나 어떻게 써야하나 알아보기

props -> {attribute, attribute} 이렇게 나눌 수 있는지 해보자

button.text -> button.label 로 변경

component 스타일에 필요한 attribute 들을 객체로 받게 바꾸자. 가독성이 안 좋다.

DefaultList 컴포넌트를 만들어서 동적인 리스트를 만들고 싶은데 태그를 props 로 넘기더라도 해당 컴포넌트 파일을 import 해야해서 어렵다...

```javascript
<FlexContainer
        direction="column"
        padding="0px"
        between="70px"
        width="100%"
        height="100vh"
      >
이렇게 적을 경우 가독성이 심각하게 떨어지는데 어떻게 해야하나?
attribute 가 적으면서 재사용 가능한 컴포넌트...
일단 이대로 사용하다가 어느정도 디자인이 정규화되면 불필요한 속성을 정리하자
- default 시리즈를 상속받아서 각 element 이름으로 export 하자
```

FlexContainer 가 자식들의 크기에 맞게 커지려면?

맥북이랑 PC 에서 컴포넌트 크기 차이가 심해서 위화감을 준다. window 사이즈에 맞는 비율로 전면 수정해야 할 것 같다.
FlexContainer 가 너무 다양한 환경에서 쓰이면 UI 중 한 군데를 수정했을 때 다른 곳도 틀어질 위험이 있지 않나?

### MiniCard
* self, read_only, isComment 인자에 따라 구성요소가 카드 Head, Body 를 오가야해서 return 에 분기를 줬음.
  * 조건부 렌더링으로 해결해보려 했으나 Head 와 Body 를 오갈 경우 요소의 배치 순서 자체가 바뀌어야 해서 포기.
  * 이거 너무 절차지향 아닌가...? 하...ㅠ
  * 나중에 MiniCard 에서 각각 다른 이름으로 2개의 컴포넌트를 export 하고, 상위 컴포넌트에서 조건부로 두 컴포넌트를 골라 렌더링하자
* 부모, 자식, 형제간 서로 범위가 겹치지 않도록 하는 CSS 작성법을 알고 싶다.
* 특정 요소가 사라져도 상대적 위치를 유지하는 방법을 알고 싶다.

### 오늘의 이슈
* storybook 적용
  * yarn add 로 storybook 을 깔았는데 루트경로에 .storybook 폴더와 설정 파일이 생성되지 않는다.
  * npx sb init 으로 위 문제는 해결되었지만 해당 모듈 내의 require() 문법 지원 이슈로 실행되지 않음.
* 로직 흐름 다듬기 : 2023.08.19
  * Login
    * form vaildation
    * send request
  * id, password 를 각각 형태에 맞는 정규표현식으로 점검.
  * 점검에 통과한 경우 다음 동작 >> 비밀번호 입력 노출, id/pw 인증 요청(/validation)
* 사전에 정의해 둔 스타일을 외부에서 주입 할 방법이 없을까? : 2023.08.22

### Storybook
* 설치 커맨드 : npx storybook@latest init
* src/stories 안의 파일들로 돌아감
* ComponentName.stories.js 에서 해당 컴포넌트를 import 해서 작동
* Card 컴포넌트 만들어 보는 중...
* 주의사항
  * .stories.js 파일은 마지막에 만들 것 : 이 파일을 만들면 스토리북이 실시간 렌더링을 시도한다.

### StyledComponent
* StyledComponent 를 사용할 때 바로 사용하면 기존 HTML 와 괴리감이 크지 않지만 ReactComponent 로 래핑하면 모든 속성을 받고 다시 넘겨줘야해서 불편하다.