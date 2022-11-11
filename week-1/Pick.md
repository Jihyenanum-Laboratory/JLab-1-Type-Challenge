## 문제

<a href="https://tsch.js.org/4/play/ko" target="_blank"><img src="https://img.shields.io/badge/-%EB%8F%84%EC%A0%84%ED%95%98%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="도전하기"/>
`T`에서 `K` 프로퍼티만 선택해 새로운 오브젝트 타입을 만드는 내장 제네릭 `Pick<T, K>`을 이를 사용하지 않고 구현하세요.

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
```

### 테스트케이스

```ts
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}
```

## 정답 및 풀이 과정

---

### 정답

```ts
type MyPick<T, K extends keyof T> = {
  [Key in K]: T[Key];
};
```

### 풀이 과정

1. `TodoPreview`와 `MyPick`이 동일해야 한다.
2.

## 새롭게 알게 된 내용

1. Pick<T,K>

   > T타입을부터 K프로퍼티만 추출한다.
   > 키값 T에 속하는 union 타입 K를 받아(= K extends keyof T) 매칭되는 프로퍼티만 리턴한다.( = [P in K: T [P])
   > keyof 키워드
   >
   > > keyof 키워드는 타입 값에 존재하는 모든 프로퍼티의 키값을 union 형태로 리턴 받는다.

2. keyof

   > 어떤 타입(이하 타입스크립트의 interface와 혼용할 수 있습니다.) 의 키 부분들만을 모아 놓은 것을 뜻한다.

3. MappedType
   > 기존에 정의되어 있는 타입을 새로운 타입으로 변환해 주는 문법
