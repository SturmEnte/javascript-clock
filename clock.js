function setTime() {

    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()

    if (h < 10) h = '0' + h
    if (m < 10) m = '0' + m
    if (s < 10) s = '0' + s

    //document.getElementById('clock').innerText(h + ':' + m + ':' + s)
    $('#clock').text(h + ' : ' + m + ' : ' + s)

    var d = setTimeout(function() {
        setTime()
    }, 1000)
}

setTime()