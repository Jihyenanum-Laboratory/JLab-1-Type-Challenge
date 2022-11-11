## 문제

<a href="https://tsch.js.org/7/play/ko" target="_blank"><img src="https://img.shields.io/badge/-%EB%8F%84%EC%A0%84%ED%95%98%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="도전하기"/>
`T`의 모든 프로퍼티를 읽기 전용(재할당 불가)으로 바꾸는 내장 제네릭 `Readonly<T>`를 이를 사용하지 않고 구현하세요.

```ts
interface Todo {
  title: string;
  description: string;
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
```

### 테스트케이스

```ts
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}
```

## 정답 및 풀이 과정

---

### 정답

```ts
type MyReadonly<T> = { readonly [K in keyof T]: T[K] };
```

### 풀이 과정

> 객체의 모든 프로퍼티를 읽기 전용으로 만들어야 한다.
> 모든 프로퍼티들을 순회하면하면서 각 프로퍼티에 접근 제어자를 추가해줘야 한다.

## 새롭게 알게 된 내용

1. 유니온(Union) 타입

   > 하나의 프로퍼티에 다양한 변수가 올 수 있는 타입

2. Partial<T>
   > 타입 T의 모든 프로퍼티를 Optional 형태로 바꾸어준다.
   > 오른쪽에서 P in keyof T는 타입 T의 프로퍼티 키값에 해당하는 P를 전부 옵셔널(물음표 키워드) 형태로 감싸 리턴한다.

```ts
type Partial<T> = { [P in keyof T]?: T[P] };
```
