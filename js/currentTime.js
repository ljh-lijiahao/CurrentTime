let second;

function getDate(time) {
    let year = time.getFullYear();
    year = year < 10 ? '0' + year : year;
    let month = time.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = time.getDate();
    day = day < 10 ? '0' + day : day;
    const arr = ['日', '一', '二', '三', '四', '五', '六'];
    let week = time.getDay();
    return year + '年' + month + '月' + day + '日 ' + '星期' + arr[week];
}

function getTime(time) {
    let hour = time.getHours();
    hour = hour < 10 ? '0' + hour : hour;
    let minute = time.getUTCMinutes();
    minute = minute < 10 ? '0' + minute : minute;
    second = time.getSeconds();
    second = second < 10 ? '0' + second : second;
    let ss = time.getTime() % 1000;
    ss = ss < 10 ? '00' + ss : ss < 100 ? '0' + ss : ss;
    return hour + ':' + minute + ':' + second + ' ' + ss;
}

let divDate = document.querySelector('.div-date');
let divTime = document.querySelector('.div-time');


window.setInterval(
    function () {
        let time = new Date();
        divDate.innerHTML = getDate(time);
        divTime.innerHTML = getTime(time);
        switch (second % 10) {
            case 0:
                divTime.style.color = '#FF0000';
                break;
            case 1:
                divTime.style.color = '#FF00FF';
                break;
            case 2:
                divTime.style.color = '#FF7F00';
                break;
            case 3:
                divTime.style.color = '#D98719';
                break;
            case 4:
                divTime.style.color = '#B5A642';
                break;
            case 5:
                divTime.style.color = '#238E23';
                break;
            case 6:
                divTime.style.color = '#4A766E';
                break;
            case 7:
                divTime.style.color = '#7093DB';
                break;
            case 8:
                divTime.style.color = '#4D4Dff';
                break;
            case 9:
                divTime.style.color = '#CC3299';
                break;
        }
    },1);
