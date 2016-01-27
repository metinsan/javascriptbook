/**
 * Created by PC on 11.10.2015.
 */
$(":header").addClass("headline");
$("li:lt(4)").hide().fadeIn(1500);
$("li").on("click", function(){
    $(this).remove();
});