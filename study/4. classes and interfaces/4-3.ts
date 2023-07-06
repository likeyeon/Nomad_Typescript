// 📌 4.3 Interfaces part Two

// ✅ 추상클래스
// - 추상 클래스는 하나 이상의 추상 프로퍼티/메서드를 포함하면서 구현 메서드도 포함할 수 있는 클래스이다.
// (추상 메서드 : 선언부만 있는 메서드 / 구현 메서드 : 실제 구현 내용을 포함하는 메서드)
abstract class User_ab {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}

class Player_ab extends User_ab {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}

// ✅ 인터페이스
// - 객체가 반드시 구현해야할 프로퍼티/메서드의 선언부만 모아놓은 것.
// - 인터페이스에 선언된 프로퍼티/메서드를 올바르게 구현하지 못하면 오류가 발생한다.
// - 인터페이스는 자바스크립트 ES6이 지원하지 않는 타입스크립트만의 특징이다.
// - 인터페이스는 type이며, 컴파일 이후에는 사라진다.
// - 인터페이스를 상속할 때는, 멤버 변수와 멤버 메소드에 접근 제한자 설정 불가 (public만 가능)
interface User_i {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

// implements 활용법
// - implements를 사용하여 클래스가 특정 인터페이스를 충족하는지 확인할 수 있다.
// - 또한 클래스는 여러 인터페이스를 구현할 수도 있다. (ex. implements User_i, Human)
class Player_i implements User_i, Human {
  constructor(
    // 🚫 private(or protected) firstName:string,
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}

// argument로 인터페이스를 사용할 수 있다.
function makeUser(user: User_i) {
  return "hi";
}

makeUser({
  firstName: "nico",
  lastName: "las",
  fullName: () => "xx",
  sayHi: (name) => "string",
});

// ❗️ 인터페이스 VS 추상클래스
// 인터페이스는 여러 개의 인터페이스를 implements하여 다양한 기능을 조합할 수 있지만 구현을 가지지는 않는다.
// 추상클래스는 구체적은 구현 세부 사항을 제공할 수 있고 계층적인 클래스 구조를 만들 수 있지만 단일 상속만 가능하다.

// 📝 Reference
// - https://github.com/reesekimm/TIL/blob/master/typescript/interface_abstract_class.md
