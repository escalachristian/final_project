$("document").ready(function(){
	$("#scroll-bar").html(localStorage.getItem("transfer"));
	$("#banner-image").attr("src", localStorage.getItem("image"));
	$(".name").html(localStorage.getItem("name"));
	$(".recipe").click(function(){
		$("#banner-image").attr("src", $(this).find("img").attr("src"));
		$(".name").html($(this).find("img").attr("alt"));
	});
});