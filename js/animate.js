     //目标对象和目标位置
     //给不同的元素指定不同的定时器
     function animate(obj, target, callback) {
         //  console.log(callback); //callback=function(){}调用的时候callback()
         // div, style.left = div.offsetLeft + 5 + 'px'; //offset只能获取不能赋值
         clearInterval(obj.timer); //先清除以前的定时器，只保留当前的一个定时器执行
         obj.timer = setInterval(function() {
             //把每次+1变成慢慢变小额值,步长变成整数不要小数
             var step = (target - obj.offsetLeft) / 10;
             console.log(step);
             step = step > 0 ? Math.ceil(step) : Math.floor(step);
             obj.style.left = obj.offsetLeft + step + 'px'; //offset只能获取不能赋值
             if (obj.offsetLeft == target) {
                 clearInterval(obj.timer);
                 //回调函数写到定时器结束里面
                 if (callback) {
                     callback();
                 }
             }
         }, 15)

     }
     /* var btn = document.querySelector('button'); //不断点击按钮元素速度越来越快 因为开开启了太多的定时器，解决方案让元素只有一个定时器执行


     var div = document.querySelector('div');
     var span = document.querySelector('span');
     /*  var btn500 = document.querySelector('.btn500');
      var btn800 = document.querySelector('.btn800');
      // animate(div, 300);


      btn500.addEventListener('click', function() {
          animate(span, 500, function() {
              // alert('我是回调函数');
              span.style.backgroundColor = 'green';
          }); //函数当作是参数传递给了另外一个函数
      })
      btn800.addEventListener('click', function() {
              animate(span, 800);
          })
          // animate(span, 200); */