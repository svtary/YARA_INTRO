window.addEventListener('load', function() {
    var cloud = this.document.querySelector('.cloud');
    var sk_con = this.document.querySelector('.sk_con');
    var lis = sk_con.querySelectorAll('li');
    var current = 0;
    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener('mouseenter', function() {
            animate(cloud, this.offsetLeft);
        })
        lis[i].addEventListener('mouseleave', function() {
            animate(cloud, current);
        })
        lis[i].addEventListener('click', function() {
            current = this.offsetLeft;
            animate(cloud, this.offsetLeft);
        })
    }
})