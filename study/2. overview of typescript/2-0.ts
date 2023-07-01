// #2.0 How Typescript Works

// 타입스크립트란?
// 1. TypeScript는 JavaScript에 타입에 대한 구문을 추가한, 강타입(strongly type) 프로그래밍 언어
// 2. TypeScript 코드는 JavaScript가 실행되는 모든 곳(브라우저, Node.js 또는 Deno 및 앱 등)에서 JavaScript로 변환될 수 있다.
// 3. TypeScript는 타입 추론(type inference)을 사용하여 타입을 비교하여 컴파일 과정에서 오류를 확인할 수 있다.

// 예시 1 : '{ nickname: string; }' 형식에 'hello' 속성이 없습니다.ts(2339)
const nico = {
  nickname: "nick",
};
nico.hello();

// 예시 2 : '+' 연산자를 'number[]' 및 'boolean' 형식에 적용할 수 없습니다.ts(2365)
console.log([1, 2, 3, 4] + false);

// 예시 3 : 2개의 인수가 필요한데 1개를 가져왔습니다.ts(2554)
function divide(a, b) {
  return a / b;
}
divide("hello");
