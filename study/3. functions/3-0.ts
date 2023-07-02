// 📌 3.0 Call Signatures

// ✅ call signature
// : 코드에 마우스를 올렸을 때 나오는 것
// - 해당 코드의 변수나 함수의 매개변수, 반환값 타입을 알려줌
// - type 생성자를 통해 call signatures를 만들 수 있음
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;
