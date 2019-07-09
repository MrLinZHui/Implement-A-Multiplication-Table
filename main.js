/** 
Given:有两个数：2,4
when: 用2和4生成一个乘法表
then：输出的结果：
2x2=4
2x3=6 3x3=9
2x4=8 3x4=12 4x4=16
*/
function makeMultiptyTable(num1,num2) {
    var tablestr = "";
    //tablestr = isNumberLimit(num1,num2)? makeMultiptyString(num1,num2):null;
    if(isNumberLimit(num1,num2)){
        if(isNumberBetweenRand(num1,num2)){
            tablestr = makeMultiptyString(2,4);
            //console.log("tablestr:"+tablestr);
            return tablestr;
        }
    }
    return null;
}
//console.log(makeMultiptyTable(2,4));
function isNumberLimit(num1,num2){
    if(num1<=num2){
       return true;
    }
    return false;
}
//console.log(isNumberLimit(2,4));
function isNumberBetweenRand(num1,num2){
    if(1<=num1&&num2<=1000){
        return true;
    }
    return false;
}
//console.log(isNumberBetweenRand(2,4));
function makeMultiptyString(num1,num2){
    var multiptyString = "";
    for(let i = num1; i <= num2; i++){
        for(let j = num1;j<=i;j++){
            multiptyString+=j+"*"+i+"="+i*j+"\t";
            if(j==i){
                multiptyString+=("\n")
            }
        }
    }
  // console.log(multiptyString);
   return multiptyString;
}
makeMultiptyTable(2,4);