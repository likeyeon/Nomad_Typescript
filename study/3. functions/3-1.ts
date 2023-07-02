// 📌 3.1 Overloading

// ✅ 오버로딩(overloading)
// : 동일한 함수에 다중 함수 타입(call signature)을 제공하는 것

// ✅ 다른 타입의 call signatures를 가질 경우
type Add_1 = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

// 🚫 const add_1: Add_1 = (a, b) => a + b;
const add_1: Add_1 = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};

// Next.js의 라우터 push가 두 가지 방법으로 페이지를 이동하는 예시
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string")
    console.log(config); //(parameter) config: string
  else {
    console.log(config.path); //(parameter) config: Config
  }
};

// ✅ call signatures의 파라미터의 개수가 다를 경우
type Add_2 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number; // 추가 파라미터 c는 옵션(선택사항)
};

const add_2: Add_2 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add_2(1, 2);
add_2(1, 2, 3);
