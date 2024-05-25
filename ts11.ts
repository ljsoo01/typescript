// npm install -g typescript
// tsc -w 실행
// 타입스크립트: 자바스크립트 + 자료형 문법 (타입에러를 방지)
let var11 : number = 11;
let number11 : (number | string | undefined) = '11';

// 함수 (매개변수의 자료형, return의 자료형)
function func11(num1 : (number | string | undefined), num : number) : number{
  return 11;
}

// 객체 {키:값, 키:값}
type objType11 = {
  [key : string] : Number
}

// 인터페이스 (객체전용)
// name: string, age: number
type objName = {name: string} // 반드시 name 갖고있어야함
type objAge = {age: number} // 반드시 age를 갖고있어야함

let 이름11: objName = {name: '이순신'}
// 이름, 나이
type newType = objName & objAge;
let _이름: newType = {name: '이순신', age: 33}

// 객체의 속성을 상속 interface: 다른 객체의 속성을 물려받음
interface IPerson {name: string}
interface IPerson {age: number}

// 인터페이스는 이름이 곂치면 합침
let 아빠: IPerson = {name: '신영만', age: 33}

interface ISon extends IPerson {} // 상속
let 아들: ISon = {name:'짱구', age: 5}