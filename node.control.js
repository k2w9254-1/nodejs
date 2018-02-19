//시간 측정을 시작
console.time('alpha');

var output =1;
for (var i=1; i<=10;i++){
	output *= i;	
}
console.log('result:',output);

//종료
console.timeEnd('alpha');

