// 📌 2.3 Types of TS part Two

// ✅ readonly : 읽기 전용. 값을 수정할 수 없음
const numbers: readonly number[] = [1, 2, 3, 4];
numbers.push(1); // 'readonly number[]' 형식에 'push' 속성이 없습니다.ts(2339)

// ✅ 튜플(Tuple)
// : 길이와 각 요소마다의 타입이 고정된 배열
const person: [string, number, boolean] = ["nico", 1, true];

// ✅ undefined, null, any
// undefined : 선언X 할당X
// null : 선언O 할당X
// any : 아무 타입 -> TypeScript의 보호장치를 빠져나오고 싶을 때 사용

type Person = {
  age?: number; // age?: number | undefined
  name: null; // name: null
};
const any_a: any[] = [1, 2, 3, 4]; // any_a: any[]
