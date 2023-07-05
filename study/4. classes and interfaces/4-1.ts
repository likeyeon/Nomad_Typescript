// 📌 4.1 Recap

// ❗️ Mission
// 1. Dict 클래스에 단어를 삭제하고, 단어를 업데이트 하는 메소드를 생성
// 2. Word 클래스에 단어의 정의를 추가하거나 수정하는 메소드, 단어를 출력하는 메소드 생성

// object의 Type을 선언
// - 제한된 양의 property 혹은 key를 가지는 타입을 정의해 줄 수 있음
type Words = {
  [key: string]: string; // Words 타입이 string만을 property로 가지는 오브젝트라는 것을 뜻함
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  // 클래스를 타입으로 사용 가능
  add(word: Word) {
    // 주어진 단어가 아직 사전에 존재하지 않다면
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
  update(word: Word) {
    if (this.words[word.term] !== undefined) {
      this.words[word.term] = word.def;
    }
  }
  remove(term: string) {
    if (this.words[term] !== undefined) {
      delete this.words[term];
    }
  }
}

class Word {
  constructor(public term: string, public def: string) {}
  addDef(def: string) {
    this.def += " | " + def;
  }
  reviseDef(def: string) {
    this.def = def;
  }
  printWord() {
    console.log(`${this.term} : ${this.def}`);
  }
}

const kimchi = new Word("kimchi", "한국의 음식");
const dict = new Dict();

/* 테스트 */

const dongchimi = new Word("kimchi", "하얀 김치");
dict.add(kimchi);
console.log(dict.def("kimchi"));
dict.update(dongchimi);
console.log(dict.def("kimchi"));
dongchimi.addDef("한국의 음식");
dongchimi.printWord();
dict.remove("kimchi");
console.log(dict.def("kimchi"));
