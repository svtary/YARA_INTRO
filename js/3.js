window.addEventListener('load', function() {
    // console.log(33333);

    var focus = this.document.querySelector('.recom_bd');
    focus.addEventListener('mouseenter', function() {
        arrowl.style.display = 'block';
        arrowr.style.display = 'block';

    })
    focus.addEventListener('mouseleave', function() {
        arrowl.style.display = 'none';
        arrowr.style.display = 'none';

    })

    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    console.log(ul.children.length);
    for (var i = 0; i < ul.children.length; i++) {
        //创建li
        //插入ol
        //记录当前小圆圈的索引号通过自定义属性来做


        var li = this.document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function() {
            //干掉所有人留下我自己
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
                this.className = 'current';
                //点击小圆圈移动图片
                //ul移动距离就是小圆圈索引号乘图片的宽度 是负值
                // /当点击了小li就拿到当前li的索引号
                var index = this.getAttribute('index');
                num = index;
                circle = index;
                var wid = focus.offsetWidth;
                animate(ul, -index * 300);
            }
        })
    }
    /*    //ol第一个li设置current
       ol.children[0].className = 'current';
       var first = ul.children[0].cloneNode(true);
       ul.appendChild(first); */
    //小圆圈的排他思想，直接生成小圆圈的同时绑定点击事件


})