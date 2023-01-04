/**
 * Case1
 */
type MyPick<T, K extends keyof T = keyof T> = {
  [P in K]: T[P];
};

/**
 * Case2
 */
type MyPick2<T, K extends keyof T> = {
  [P in K]: T[P];
};
