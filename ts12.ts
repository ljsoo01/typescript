// 제네릭 타입 <>
// 사용하는 곳에서 타입을 결정해라 <T>
// 무언가 배열이 들어오면 그 배열의 첫번째 요소만 리턴하는 함수
function 제네릭함수<타입>(arr : 타입[]) : 타입 {
  return arr[0]; // 들어온 배열의 첫번째 요소만 리턴
}

// 제네릭함수(); ===> 제네릭함수<type>();
let 결과1 = 제네릭함수<number>([1,2,3]);
let 결과2 = 제네릭함수<string>(['a','b','c']); // 함수를 사용하는 곳에서 타입을 결정 <제네릭>
console.log(결과1)
console.log(결과2)