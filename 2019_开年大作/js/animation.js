function fn(emlent,targe,sude){
    clearInterval(emlent.trime)
    var num = sude || 100

    var yuandian = emlent.offsetLeft

    emlent.trime = setInterval(() => {
        if(yuandian<targe){
            yuandian += num
        }else{
            yuandian -= num
        }
        emlent.style.left = yuandian + 'px'

        if(Math.abs(yuandian-targe) <= num){
            clearInterval(emlent.trime)
            emlent.style.left = targe + 'px'
        }

    }, 24);
}