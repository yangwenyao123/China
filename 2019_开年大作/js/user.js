var array = [
   {
    img:'43m(7).jpg',
    title:'死神'
   },
   {
    img:'43m(3).jpg',
    title:'死神'
   },
   {
    img:'43m(7).jpg',
    title:'死神'
   },
   {
    img:'43m(7).jpg',
    title:'死神'
   },
    {
        img:'43m(7).jpg',
        title:'死神'
    },

    {
        img:'43m(7).jpg',
        title:'死神'
    },

    {
        img:'43m(7).jpg',
        title:'死神'
    },


]

var array2= []
var list = document.querySelector('.list')


for(var i=0;i<array.length;i++)
{
    var obj = array[i]

    array2.push('<li>\n' +
        '                    <a href="#">\n' +
        '                        <img src="./img/'+obj.img+'" alt="">\n' +
        '                        <p>'+obj.title+'<i class="iconfont fr ii">&#xe640;</i></p>\n' +
        '                    </a>\n' +
        '                    <div class="choose">\n' +
        '                        <a href="#">好看</a>\n' +
        '                        <a href="#">激烈</a>\n' +
        '                        <a href="#" class="aa">+</a>\n' +
        '                    </div>\n' +
        '                </li>')


}

list.innerHTML = array2.join('')

var ii = document.getElementsByClassName('ii')

for (var i = 0; i < ii.length; i++) {
    // 循环遍历内部
    ii[i].onclick = function(){
        this.style.color= 'red'
    }
}

