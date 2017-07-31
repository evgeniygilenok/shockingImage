'use strict';

function shockingImage(qwerty) {
    var blockk = document.getElementsByClassName('shock');
    var immgg = [];
    for (var qty = 0; qty < blockk.length; qty++) {
        immgg[qty] = blockk[qty].children[0];
        immgg[qty].id = 'image' + qty;
        sho(qwerty, immgg[qty].src, blockk[qty], immgg[qty].id);

        function sho(z, urlImg, block, imageg) {
            var img = document.getElementById(imageg);
            img.onload = function () {
                // getting image width and height
                var w = window.getComputedStyle(img).getPropertyValue('width');
                var h = window.getComputedStyle(img).getPropertyValue('height');
                w = parseInt(w);
                h = parseInt(h);
                block.style.width = w + 'px';
                block.style.height = h + 'px';
                var k = 0;
                var A = [];

                function getRandomArbitrary(min, max) {
                    return Math.random() * (max - min) + min;
                }

                // create DOM div's
                function transform(k) {
                    var n = 0;
                    var dd = 0;
                    var diapason = h;
                    var sum = 0;
                    for (var i = 0; i < k; i++) {
                        dd = getRandomArbitrary(0, diapason / k * 3);
                        if (i == k - 1) {
                            A.push(diapason);
                        } else {
                            A.push(dd);
                        }
                        for (var j = 0; j < A.length; j++) {
                            sum += A[j];
                        }
                        diapason = h - sum;

                        var str = '<div class="bl" style="width:' + w + 'px;height:' + A[i] + 'px;background-position-y:-' + n + 'px;transition:' + 0.1 + 's;background-image: url(' + urlImg + ');background-repeat:no-repeat;"></div>';
                        block.innerHTML += str;
                        n += A[i];
                        sum = 0;
                    }
                }
                transform(z);
                var bl = block.children;
                // animation function with random css margins
                function animation(k) {
                    var Anim = [];
                    for (var i = 0; i < k; i++) {
                        Anim.push(getRandomArbitrary(-3, 3));
                    }
                    for (var i = 1; i < bl.length; i++) {
                        bl[i].style.marginLeft = Anim[i] + 'px';
                    }
                }
                var interval = setInterval(
                    function () {
                        animation(z)
                    }, 100);
                // stopped animation when mouse over on the block
                block.onmouseover = function () {
                    clearInterval(interval);
                    for (var i = 1; i < bl.length; i++) {
                        bl[i].style.marginLeft = 0 + 'px';
                    }
                }
                block.onmouseout = function () {
                    interval = setInterval(function () {
                        animation(z)
                    }, 100);
                }
                img = document.getElementById(imageg);
                img.style.display = 'none';
            }
        };
    }
}