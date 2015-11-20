// UTF-8 编码
/*
var $oSidebar = $("#sidebar");
var $oMain = $("#main");
if( $oMain.height()<$oSidebar.height() ){
	$oMain.height( $oSidebar.height() );
}*/


/* 侧栏-产品搜索 开始 ===================================================== */
var $oProSearchType = $("#proSearchType");
var $oProSearchContent = $("#proSearchContent");
function post(){
	switch( $oProSearchType.val() ){
		case "name" : $oProSearchContent.attr( "name", "Name" ); break;
		case "size" : $oProSearchContent.attr( "name", "Size" ); break;
		case "intro" : $oProSearchContent.attr( "name", "Intro" ); break;
	}
}







/* 收藏我们 开始 ===================================================== */
function addfavorite(url,title) 
{ 
		try 
		{ 
				window.external.addfavorite(url,title); 
		} 
		catch (e) 
		{ 
				try 
				{ 
						window.sidebar.addPanel(title, url, ""); 
				} 
				catch (e) 
				{ 
						alert("加入收藏失败，请使用ctrl+d进行添加"); 
				} 
		} 
}



/* 侧栏属性列表 开始======================================================== */
$("#property span").click(function(){
	$(this).next().toggle();
});


/* 在线客服 开始 
$(".jsService").hover(
	function(){
		$(this).find(".icon").hide();
		$(this).find(".content").show();
		$(this).find(".title").css({"background":"#eeeeef", "color":"#000"});
		$(".jsService2").animate({"top":"365"});
	},
	function(){
		$(this).find(".icon").show();
		$(this).find(".content").hide();
		$(this).find(".title").css({"background":"#fff", "color":"#333"});
		$(".jsService2").animate({"top": "145"});
	}
);

$(".jsService2").hover(
	function(){
		$(this).find(".icon").hide();
		$(this).find(".content").show();
		$(this).find(".title").css({"background":"#eeeeef", "color":"#000"});
	},
	function(){
		$(this).find(".icon").show();
		$(this).find(".content").hide();
		$(this).find(".title").css({"background":"#fff", "color":"#333"});
	}
);*/





