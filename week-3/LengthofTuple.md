## 문제

<a href="https://tsch.js.org/18/play/ko" target="_blank"><img src="https://img.shields.io/badge/-%EB%8F%84%EC%A0%84%ED%95%98%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="도전하기"/>
배열(튜플)을 받아 길이를 반환하는 제네릭 Length<T>를 구현하세요

```ts
type tesla = ["tesla", "model 3", "model X", "model Y"];
type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
];

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5
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
type Length<T extends readonly any[]> = T["length"];
```

### 풀이 과정

> 배열의 길이를 반환하기 위해 length를 사용해 배열 길이에 접근한다.
> //@ts-expect-error에서 오류가 발생한다.
> 모든 배열(튜플)값을 반환하기 위해, `extends readonly any[]`를 사용한다.

## 새롭게 알게 된 내용

1. readonly를 활용해 includes 인수 범위를 확장할 수 있다.
2. `extends {length: number}`를 사용해도 해결 가능하다.
