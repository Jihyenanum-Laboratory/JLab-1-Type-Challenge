## 문제

<a href="https://tsch.js.org/43/play/ko" target="_blank"><img src="https://img.shields.io/badge/-%EB%8F%84%EC%A0%84%ED%95%98%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="도전하기"/>
`T`에서 `U`에 할당할 수 있는 타입을 제외하는 내장 제네릭 `Exclude<T, U>`를 이를 사용하지 않고 구현하세요.

```ts
type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'
```

### 테스트케이스

```ts
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
  Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
  Expect<
    Equal<MyExclude<string | number | (() => void), Function>, string | number>
  >
];
```

## 정답 및 풀이 과정

---

### 정답

```ts
type MyExclude<T, U> = T extends U ? never : T;
```

### 풀이 과정

> 삼항연산자를 활용해 문제를 해결한다.
> T를 순환해 U요소가 포함되어 있으면 `never`를 리턴한다.
> 포함되어 있지 않다면 `T`를 리턴한다.

## 새롭게 알게 된 내용

1. Exclude<T, U>
   > Exclude 타입은 2개의 제네릭 타입을 받을 수 있으며, 첫번쨰 제네릭 타입 T중 두번쨰 제네릭 타입 U와 겹치는 타입을 제외한 타입을 반환한다.
