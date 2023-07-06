// 📌 4.5 Polymorphism

// 제너릭, 다형성, 클래스와 인터페이스를 합쳐서 작업

interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringsStorage = new LocalStorage<string>();
const booleansStorage = new LocalStorage<boolean>();

stringsStorage.get("ket"); // get(key: string): string
stringsStorage.set("hello", "hi");

booleansStorage.get("xxx"); // get(key: string): boolean
booleansStorage.set("hello", true);
