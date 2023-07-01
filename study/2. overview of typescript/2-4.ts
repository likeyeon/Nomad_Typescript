// 📌 2.4 Types of TS part Three

// ✅ unknown
// : 변수의 타입을 미리 알지 못 할 때 사용 (모든 값을 나타냄)
let u: unknown;
🚫 let v = u + 1; // 'u'은(는) 'unknown' 형식입니다.ts(18046)

if(typeof u === 'number'){
  let v = u + 1;
}

// ✅ void
// 아무것도 return하지 않는 함수
function hello() {
  console.log('x')
}

// ✅ never
// 절대 발생할 수 없는 타입을 나타낸다.
// 함수에서 항상 오류를 발생시키거나 절대 반환하지 않는 반환 타입으로 쓰인다.
function never(): never {
  throw new Error("xxx") // return 하지않고 오륲를 발생시킴
  🚫 return "X"
}

function never(name:string|number){
  if(typeof name === "string"){
    name // name: string
  } else if(typeof name ==="number"){
    name // name: number
  } else {
    name // name: never => 즉, 제대로 인자가 전달되었다면 else로 올 수 없음
  }
}