// var array = [
//     0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37
// ]

// var li = document.getElementsByTagName('li')


var blues = document.querySelector('#blues')
var array2 = []
for(let i=1; i<=40;i++)
{   

    array2.push(`<li ${i%6==0?'style="width:94px;"':''}>${i}话</li>`);

}
blues.innerHTML = array2.join('')



