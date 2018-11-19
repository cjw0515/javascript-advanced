/* 
익명함수

익명함수의 장점

- 함수를 객체의 메서드가 되게 할 수있다. 프로퍼티의 참조를 이용해서 메서드를 호출할 수 있다.
- 다른함수를 호출할 때 익명함수를 콜백으로 제공할수 있다.
- 불필요한 함수의 이름으로 전역 네임스페이스를 오염시키지 않을 수 있다.


*/
function test(num1, num2, num3){    
    console.log(arguments)
    console.log(arguments.length);
}

test(1,2,3);
