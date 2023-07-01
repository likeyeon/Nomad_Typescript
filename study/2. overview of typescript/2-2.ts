// #2.2 Types of TS part One

// 📌 Types of TS(기본)
let a: number = 1; // 숫자
let b: string = "str"; // 문자열
let c: boolean = "true"; // 논리
let arr: number[] = [1, 2]; // 배열 (자료형[])
// optional
const player: {
  name: string;
  age?: number; // ❗️선택적 매개변수 : 매개변수 뒤에 물음표(?)를 붙여 반드시 필수적 매개변수 뒤에 와야 한다.
} = {
  name: "nico",
};

// 📌 타입 별칭(Type Alias)
// : 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수를 의미
// - type 별칭 = 타입;
// - 타입 별칭을 사용하면 타입을 재사용하기에 용이하다.

// ✅ 객체(object)에 타입 별칭 사용
// - 중괄호 안에 type을 명시하여 object의 타입을 정의할 수 있다.
type Name = string;
type Age = number;
type Player = {
  name: Name;
  age?: Age;
};

const playerNico: Player = {
  name: "nico",
};

const playerLynn: Player = {
  name: "lynn",
  age: 12,
};

// ✅ 함수에 타입 별칭 사용
// - 함수의 argument(인자)와 return 값의 타입을 지정할 수 있다.
function playerMaker(name: string): Player {
  return {
    name,
  };
}

const hayeon = playerMaker("hayeon");
hayeon.age = 12;

// +) 화살표 함수로 타입 별칭을 사용하는 방법
const playerMaker_arrow = (name: string): Player => ({ name });
