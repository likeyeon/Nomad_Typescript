// #2.1 Implicit Types vs Explicit Types

// TypeSciprt은 두 가지 접근 방식을 결합

// 1. 명시적 정의 (변수 선언 시 타입 정의)
// -> 명시적 표현은 키보드 치는 시간을 줄이기 위해 최소한으로 사용하는 것이 좋다.
let a: boolean = "x"; // 'string' 형식은 'boolean' 형식에 할당할 수 없습니다. ts(2322)

// 2. 암시적 정의 (변수만 생성하여 타입 추론)
// -> js에서는 다른 타입의 값을 할당하는 것이 가능하지만, ts는 X
let b = "hello"; // b가 string 타입이라고 추론
b = 1; // 'number' 형식은 'string' 형식에 할당할 수 없습니다. ts(2322)

let c = [1, 2, 3];
c.push("1"); // 'string' 형식의 인수는 'number' 형식의 매개 변수에 할당될 수 없습니다. ts(2345)
