// 자료형과 형 변환

// 숫자형
let age = 25;
let tall = 175.9; // js는 정수나 실수 등을 구분하지 않음
let inf = Infinity; // 무한대
let minusInf = -Infinity;
let nan = NaN;

console.log(age + tall);

// 문자열
let name = "heeyeon so";
let name1 = `소희연 ${name}`; 
// ``: 문자열 안에 변수 값을 넣을 수 있도록 함, ${}: 템플릿 리터럴
console.log(name1);

// 불리언
let isSwitchOff = false;

// Null
let a = null;
console.log(a);

//undefind
let variable; // 변수 선언을 헸으나, 값을 할당하지 않음
console.log(variable);

// 형 변환
let numberA = 12;
let numberB = "2";                                         
console.log(numberA * numberB); // 자동으로 js engine이 문자형을 숫자로 바꿔 계산 : 묵시적 형변환
console.log(numberA + numberB); // 숫자를 문자열로 바꿔서 붙힘
console.log(numberB + numberA);
console.log(numberA + parseInt(numberB)); // parseInt(): 문자열 값을 받아 숫자로 변환 : 명시적 형변환   