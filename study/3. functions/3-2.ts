// 📌 3.2 Polymorphism

// ✅ 다형성(polymorphism)
// ❓poly란?
// - many, serveral, much, multi 등과 같은 뜻
// ❓morphos란?
// - form, structure 등과 같은 뜻
// ❗polymorphos = poly + morphos = 여러 다른 구조

// concrete type
// - number, void, string 등 지금까지 배운 타입

// generic type
// - 타입의 placeholder
// - 타입스크립트에게 타입을 유추하도록 알려줌
// - 꺽쇠(<>)를 열어서 임의의 이름을 넣어, call signature가 제너릭을 받는다는 것을 알려줌

// 예시
type SuperPrint = {
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder;
};

const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4]);
const b = superPrint([true, false, true]);
const c = superPrint(["a", "b", "c"]);
const b = superPrint([1, 2, true, false]);
