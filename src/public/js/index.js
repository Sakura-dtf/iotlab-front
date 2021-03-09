


window.onload = () =>{
    /* 开局首页动画*/
    let bg = document.getElementsByClassName('bg-container')[0];

    bg.classList.remove('active')

    bg.classList.add('active');

    bg.className = "bg-container active";




    $(function () {
        /* 优秀案例动画 */
        $(".case-item").on("mouseover mouseout",function(){
            $(this).toggleClass("active");
        });

        let liList = $('.bottom .bottom-box');
        console.log(111);
        console.log(liList);
        /* 方向动画 */
        $('.direction-content .top li').on('mouseover mouseout', function () {
            liList.each( function(){
                $(this).removeClass("activeBg");
            });
            $(this).toggleClass("active");
            let index = parseInt($(this).data("index"));
            liList.eq(index).toggleClass("activeBg");
            console.log(liList.eq(index).attr('class'))
        })
    })




}
