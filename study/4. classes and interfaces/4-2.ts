// 📌 4.2 Types

// ✅ Type의 용도
// - 타입 alias를 만드는데 사용할 수 있음
// - 타입이 특정 값을 가지도록 제한할 수 있음
// - 오브젝트의 모양을 묘사하는데 쓸 수 있음

type Alias = string;
type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;

type PlayerType = {
  nickname: string;
  team: Team;
  healthBar: Health;
};

const yeon: PlayerType = {
  nickname: "nico",
  team: "blue",
  healthBar: 10,
};

// ✅ 인터페이스
// - 타입스크립트에게 객체의 형태를 설명해주기 위한 용도로만 사용된다.
// - 같은 인터페이스에 다름 이름을 가진 property들을 축적할 수 있다.

interface PlayerInterface {
  nickname: string;
  team: Team;
  healthBar: Health;
}

🚫 interface Hello = string

// ✅ Type vs Interface
// 공통점 : 타입스크립트에게 객체의 형태(=오브젝트의 모양)을 알려줄 수 있음
// 차이점 :
// - type은 종류에 관계 없이 어떠한 타입을 만들 때 모두 사용 가능
// - but 인터페이스는 타입스크립트에게 오브젝트의 모양을 설명해주는 하나의 목적으로만 사용 가능하다.
// - 오브젝트의 모양을 알려줄 때는 인터페이스를 사용하는 것이 좋다 (인터페이스는 클래스와 비슷한 형태로, 객체지향 프로그래밍 문법 구조와 유사)

// ✨ Type vs Interface 예시

// 1. Type과 Interface의 객체 선언 및 사용
// 인터페이스
interface User {
  name: string;
}

interface Player extends User {}

const nico: Player = {
  name: "nico",
};

// 타입
type User = {
  name: string;
};

type Player = User & {}; // & : and를 의미

const nico: Player = {
  name: "nico",
};

// 2. property 축적 가능 여부
// 인터페이스 (가능)
interface User_property_i {
  name: string
}

interface User_property_i {
  lastName: string
}

interface User_property_i {
  health: number
}

const yuri: User_property_i = {
  name: "nico",
  lastName: "n",
  health:10
}

// 타입 (불가능)
// ts(2300)'User_property_t' 식별자가 중복되었습니다.
type User_property_t {
  name: string
}

type User_property_t {
  lastName: string
}