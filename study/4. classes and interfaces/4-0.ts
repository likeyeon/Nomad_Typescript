// 📌 4.0 Classes

// ✅ 추상클래스
// : 다른 클래스가 상속받을 수 있는 클래스
// - 추상 클래스는 오직 다른 클래스가 상속받을 수 있는 클래스이다.
// - 직접 새로운 인스턴스를 만들 수는 없다.

// ✨ 접근 가능한 위치
// 구분　　　  선언한 클래스 내　 상속받은 클래스 내　 인스턴스
// private 　 　　  ⭕　　　　　　　 ❌　　　　　     ❌
// protected 　　  ⭕　　　　　　　 ⭕　　　　　     ❌
// public　　　　　  ⭕　　　　　　　 ⭕　　　　　     ⭕

abstract class User {
  constructor(
    public nickname: string,
    protected firstName: string,
    private lastName: string
  ) {}
  abstract getNickName(): void; // ✨ 추상 메소드 : 추상 클래스를 상속받는 모든 것들이 반드시 구현을 해야하는 메소드
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Players extends User {
  getNickName() {
    console.log(this.nickname);
    console.log(this.firstName);
    console.log(this.lastName); // ts(2341) 'lastName' 속성은 private 이며 'User' 클래스 내에서만 액세스할 수 있습니다.
  }
}

// 🚫 const nico = new User("nico", "las", "니꼬"); // ts(2511) 추상 클래스의 인스턴스를 만들 수 없습니다.
const nicos = new Players("nico", "las", "니꼬");

nicos.getFullName();
