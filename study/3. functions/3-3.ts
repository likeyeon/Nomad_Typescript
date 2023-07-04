// 📌 3.3 Generics Recap

// ✅ any 대신 Generic을 사용하는 이유는 무엇일까?
// : Generic은 타입이 명시된 call signature를 생성
type SuperPrintAny = {
  (arr: any[]): any;
};

// any 예시
const superPrintAny: SuperPrintAny = (arr) => arr[0];

const any = superPrintAny([1, "b"]); // const superPrintAny: (arr: any[]) => any
any.toUpperCase(); // 실행 시 에러 발생

// Generic 예시
type SuperPrintRecap = {
  <T>(arr: T[]): T;
};

const superPrintRecap: SuperPrintRecap = (arr) => arr[0];

const recap = superPrintRecap([1, "b"]); // const superPrintRecap: <string | number>(arr: (string | number)[]) => string | number
recap.toUpperCase(); // Generic의 경우 타입 체커로부터 보호받아 추후 발생할 에러를 방지할 수 있다.

// ✅ 복수의 Generic 선언 예시

type SuperPrints = {
  <T, M>(arr: T[], b: M): T;
};

const superPrints: SuperPrints = (arr) => arr[0];

const s = superPrints([1, 2, 3, 4], "x");
