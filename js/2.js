window.addEventListener('load', function() {

    var big = document.querySelector('.big');
    var mask = document.querySelector('#ms');
    var nuja = document.querySelector('#nuja');
    var nujimg=document.querySelector('#nujimg');

    nuja.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';

    })

    nuja.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';

    })
    nuja.addEventListener('mousemove', function(e) {
        //计算出鼠标在盒子内的坐标
        /* var x = e.pageX - this.offsetLeft; //有定位  这么算是错的
        var y = e.pageY - this.offsetTop; */ 
         var x = e.pageX; 
        var y = e.pageY; 
        console.log(x, y);
        //鼠标移动的时候让黄色的跟着鼠标走
        var maskX=x -50;
        var maskY= y -235;
        if(maskX<=15){
            maskX=15;
        }else if(maskX>=100){
            maskX=100;

        }
        if(maskY<=10){
            maskY=10;
        }
        if(maskY>=333){
            maskY=330;
        }
          
        mask.style.left = maskX+ 'px';
        mask.style.top =maskY+ 'px';
        //遮挡曾不可超过图
        
    /*     var maskMax=50;//遮挡曾的最大移动距离
        var bigmax=nujimg.offsetWidth-big.offsetWidth;
        var bigX=maskX*bigmax/maskMax;
        var bigY=maskY*bigmax/maskMax;
        nujimg.style.left=bigX+'px';
        nujimg.style.top=bigY+'px'; */




    })
})