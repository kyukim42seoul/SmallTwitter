2023-07-24

- DefaultContainer 추가
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
<DefaultContainer
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

DefaultContainer 가 자식들의 크기에 맞게 커지려면?
