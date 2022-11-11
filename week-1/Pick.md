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

> 제네릭 타입으로 온 `T`에 대한 모든 키값을 선택적으로 만든다.

## 새롭게 알게 된 내용

1. 유니온(Union) 타입

   > 하나의 프로퍼티에 다양한 변수가 올 수 있는 타입

2. Partial<T>
   > 타입 T의 모든 프로퍼티를 Optional 형태로 바꾸어준다.
   > 오른쪽에서 P in keyof T는 타입 T의 프로퍼티 키값에 해당하는 P를 전부 옵셔널(물음표 키워드) 형태로 감싸 리턴한다.

```ts
type Partial<T> = { [P in keyof T]?: T[P] };
```
