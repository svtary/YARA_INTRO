window.addEventListener('load', function() {
    var tab_list = document.querySelector('.navitems');
    var lis = tab_list.querySelectorAll('li');
    var items = document.querySelectorAll('.item');
    var focus1 = document.getElementById('jsc1');
    var focus2 = document.getElementById('jsc2');
    var focus3 = document.getElementById('jsc3');
    var focus4 = document.getElementById('jsc4');
    for (var i = 0; i < lis.length; i++) {
        //开始给5个li设置索引号
        lis[i].setAttribute('data-index', i);
        // console.log(lis[i].dataset.index); //dataset是集合 里面存放了所有以data开头的自定义属性
        console.log(lis[i].dataset['index']);

        lis[i].onclick = function() {
            var index = this.getAttribute('data-index');
            focus1.src = './upload/J' + index + '.jpg';
            focus2.src = './upload/J' + index + '.jpg';
            focus3.src = './upload/J' + index + '.jpg';
            focus4.src = './upload/J' + index + '.jpg';
        }



    }



    var begin = document.querySelector('.begin');
    var end = document.querySelector('.end');
    var timer1 = null;
    begin.addEventListener('click', function() {
        var day = document.querySelector('.day');
        var hour = document.querySelector('.hour');
        var min = document.querySelector('.minute');
        var sec = document.querySelector('.second');
        var inputTime = +new Date('1999-4-6 10:30'); //返回的是用户输入时间总的毫秒数
        //倒计时案例
        conutDown() //先调用一次这个 防止第一次出现空白
        timer1 = setInterval(conutDown, 1000);

        function conutDown() {
            var nowTime = +new Date(); //返回当前时间总的毫秒数

            var times = (nowTime - inputTime) / 1000; //time是剩余时间总的毫秒数
            var d = parseInt(times / 60 / 60 / 24);
            d = d < 10 ? '0' + d : d;
            day.innerHTML = d + 'd';
            var h = parseInt(times / 60 / 60 % 24);
            h = h < 10 ? '0' + h : h;
            console.log(h);
            hour.innerHTML = h + 'h'; //剩余小时给盒子
            var m = parseInt(times / 60 % 60);
            m = m < 10 ? '0' + m : m;
            min.innerHTML = m + 'm';
            var s = parseInt(times % 60);
            s = s < 10 ? '0' + s : s;
            sec.innerHTML = s + 's';
            return d + 'day' + h + 'hours' + m + 'mins' + s + 'second';

        }
    });

    end.addEventListener('click', function() {
        clearInterval(timer1);
    })



    var dt = document.querySelector('#yincang');
    var dd = document.querySelector('#xianshi');
    dt.addEventListener('mousemove', function() {
        dd.style.display = 'block';
    })

    /*   dt.addEventListener('mouseout', function() {
          dd.style.display = 'none';
      })
      console.log(dt); */
})