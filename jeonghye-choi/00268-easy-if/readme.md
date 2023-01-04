<!--info-header-start--><h1>If <img src="https://img.shields.io/badge/-%EC%89%AC%EC%9B%80-7aad0c" alt="쉬움"/> <img src="https://img.shields.io/badge/-%23utils-999" alt="#utils"/></h1><blockquote><p>by Pavel Glushkov <a href="https://github.com/pashutk" target="_blank">@pashutk</a></p></blockquote><p><a href="https://tsch.js.org/268/play/ko" target="_blank"><img src="https://img.shields.io/badge/-%EB%8F%84%EC%A0%84%ED%95%98%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="도전하기"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

조건 `C`, 참일 때 반환하는 타입 `T`, 거짓일 때 반환하는 타입 `F`를 받는 타입 `If`를 구현하세요. `C`는 `true` 또는 `false`이고, `T`와 `F`는 아무 타입입니다.

### My Solutions

```ts
// solution
type If<C extends boolean, T, F> = C extends true ? T : F;
```

```ts
// to make this work
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>
];

// @ts-expect-error
type error = If<null, 'a', 'b'>;
```

### Explain

- 삼항연산자 사용: C가 true라면 `T` type, 아니라면 `F` type
- 그러기 위해선, C가 boolean이라는 조건이 필요
