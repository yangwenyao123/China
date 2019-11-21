var array = [
    {
        title:'游戏中心',
        img:'1.jpg'
    },
    {
        title:'崩坏学园2',
        img:'2.png'
    },
    {
        title:'崩坏学园3',
        img:'2.png'
    },
    {
        title:'崩坏学园4',
        img:'2.png'
    },
    {
        title:'崩坏学园5',
        img:'2.png'
    },
    {
        title:'崩坏学园6',
        img:'2.png'
    },
    {
        title:'崩坏学园7',
        img:'2.png'
    },
]

var array3 = [
    {
        img:'lhsl_199x259.jpg',
        title:'灵魂撕裂'
    },
    {
        img:'tmcs_199X259.jpg',
        title:'灵魂撕裂'
    },
    {
        img:'wdxkxq.jpg',
        title:'灵魂撕裂'
    },
    {
        img:'zwfz.jpg',
        title:'灵魂撕裂'
    },
    {
        img:'zwfz.jpg',
        title:'灵魂撕裂'
    },
    {
        img:'zwfz.jpg',
        title:'灵魂撕裂'
    },
    {
        img:'zwfz.jpg',
        title:'灵魂撕裂'
    },
    {
        img:'zwfz.jpg',
        title:'灵魂撕裂'
    },
]

    var array5 = [
        {
            img:'43m(4).jpg',
            title:'就想要个女朋友',
            describe:'睡筝女',
            update:'最后更新:第3话'

        },
        {
            img:'43m(4).jpg',
            title:'就想要个女朋友',
            describe:'睡筝女',
            update:'最后更新:第23话'
        },
        {
            img:'43m(5).jpg',
            title:'就想要个女朋友',
            describe:'睡筝女',
            update:'最后更新:第13话'
        },
        {
            img:'43m(11).jpg',
            title:'就想要个女朋友',
            describe:'睡筝女',
            update:'最后更新:第31话'
        },
        {
            img:'43m(11).jpg',
            title:'就想要个女朋友',
            describe:'睡筝女',
            update:'最后更新:第31话'
        },
        {
            img:'43m(11).jpg',
            title:'就想要个女朋友',
            describe:'睡筝女',
            update:'最后更新:第31话'
        },
        {
            img:'43m(11).jpg',
            title:'就想要个女朋友',
            describe:'睡筝女',
            update:'最后更新:第31话'
        },
        {
            img:'43m(11).jpg',
            title:'就想要个女朋友',
            describe:'睡筝女',
            update:'最后更新:第31话'
        },
        {
            img:'43m(11).jpg',
            title:'就想要个女朋友',
            describe:'睡筝女',
            update:'最后更新:第31话'
        },
        {
            img:'43m(11).jpg',
            title:'就想要个女朋友',
            describe:'睡筝女',
            update:'最后更新:第31话'
        },
        {
            img:'43m(11).jpg',
            title:'就想要个女朋友',
            describe:'睡筝女',
            update:'最后更新:第31话'
        },
        {
            img:'43m(11).jpg',
            title:'就想要个女朋友',
            describe:'睡筝女',
            update:'最后更新:第31话'
        },
    ]

var list = document.querySelector('#list')
var content_list = document.querySelector('#content_list')
var content_list2 = document.querySelector('#content2_list')



var array2 = []

var array4 = []
var array6 = []

for(var i=0;i<array.length;i++)
{
    var obj = array[i]

    array2.push(' <li>\n' +
        '                <a href="#">\n' +
        '                  <img src="./img/'+obj.img+'" alt="">\n' +
        '                  <p>'+obj.title+'</p>\n' +
        '                </a>\n' +
        '            </li>')



}
for (var i = 0; i < array3.length; i++) {
    // 循环遍历内部
    var obj = array3[i]
    array4.push('<li><a href="#"><img src="./img/'+obj.img+'" alt=""><p>'+obj.title+'</p></a></li>')

}

for (var i = 0; i < array5.length; i++){
    var obj = array5[i]
    array6.push('<li><a href="#">\n' +
        '                        <img src="./img/'+obj.img+'" alt="">\n' +
        '                        <p class="title">'+obj.title+'</p>\n' +
        '                    </a>\n' +
        '                    <p class="describe">'+obj.describe+'</p>\n' +
        '                    <p class="update">'+obj.update+'</p>\n' +
        '                   </li>')
}




list.innerHTML = array2.join('')

content_list.innerHTML = array4.join('')

content_list2.innerHTML = array6.join('')









