


if ('') console.log('ok1'); //빈 문자열 (empty string)
//falsy

if (' ') console.log('ok2'); //공백 문자열 (space string)
//true

if(undefined) console.log('ok3');
if(null) console.log('ok4');
if(567) console.log('ok5');  //true
if(0) console.log('ok6');


if(NaN) console.log('ok7');
if([]) console.log('ok8');//
if([1,2,3]) console.log('ok9'); //
if({}) console.log('ok10'); //


var orangeJuice = 10;
if(orangeJuice) {
    console.log('오렌지주스가 있습니다.');
} else {
    console.log('오렌지주스가 없습니다.');
}