// 파일은 자바스크립트 그대로 두면서, 타입스크립트의 보호를 받고 싶다면?
// @ts-check를 통해 JSDoc 주석을 사용하여 자바스크립트 파일에 type 정보를 제공할 수 있다.
// https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html

// @ts-check
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
  return true;
}

/**
 * Exit the program
 * @param {number} code
 * @returns number
 */
export function exit(code) {
  return code + 1;
}
