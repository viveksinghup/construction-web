function stickyHeader(){$(".globalHeader").height(),$("nav").height();if($("html").hasClass("no-touch")&&$(".sticky").sticky({topSpacing:0}),$("body").hasClass("home")){$("html").hasClass("no-touch")&&$("#promoLink").sticky({topSpacing:53}),$(".promotionalLinks").on("click","ul li",function(e){var i=$("#promoLink-sticky-wrapper").attr("class"),t=$(this).children("a").attr("href"),a=$(this);$("html").hasClass("no-touch")?"sticky-wrapper"==i?$("html, body").animate({scrollTop:$(t).offset().top-180},2e3):"sticky-wrapper is-sticky"==i&&$("html, body").animate({scrollTop:$(t).offset().top-140},2e3):$("html, body").animate({scrollTop:$(t).offset().top},2e3),$(".promotionalLinks ul li").removeClass("active"),$(a).addClass("active"),e.preventDefault()});var e=parseInt($("#buildingthefuture").offset().top),i=parseInt($("#csr").offset().top)+360,t=parseInt($("#investors").offset().top)+360,a=parseInt($("#news").offset().top)+360;$("html").hasClass("no-touch")&&$(window).on("scroll",function(){var n=$(this).scrollTop();n<e&&$(".promotionalLinks ul li").removeClass("active"),n>=e&&($(".promotionalLinks ul li").removeClass("active"),$(".promotionalLinks ul li").eq(0).addClass("active")),n>=i&&($(".promotionalLinks ul li").removeClass("active"),$(".promotionalLinks ul li").eq(1).addClass("active")),n>=t&&($(".promotionalLinks ul li").removeClass("active"),$(".promotionalLinks ul li").eq(2).addClass("active")),n>=a&&$(".promotionalLinks ul li").removeClass("active")})}}function focusAreaLoad(){var e=$(".globalHeader").innerHeight(),i=$("header").innerHeight(),t=$(".mainNavigation").innerHeight(),a=$("#promoLink-sticky-wrapper").innerHeight();tlHeight=screenHeight-(e+i+t+a),$(".largeBanner .bxslider li").height(tlHeight)}function adjustfullPanel(){if(screenWidth>tabletMedia){var e=$(".fullPanel img").height(),i=-$(".fullPanel img").width()/2;$(".fullPanel").css({height:e}),$(".fullPanel img").css({marginLeft:i})}}function showSearch(){$(".mainNavigation").on("click",".showSearch",function(){$("a.showSearch").addClass("close"),$(".menu-icon a").removeClass("close"),$(".inputDiv").slideDown(),$(window).width()<=960?$(".navigationList").hide():($(".navigationList > li > h2 > a").data("oneclick","false"),$(".navigationList > li > h2 > a").removeClass("hover active"),$(".navigationList > li .dropBlock").slideUp())}),$(".mainNavigation").on("click",".showSearch.close",function(){$("a.showSearch").removeClass("close"),$(".inputDiv").slideUp()}),$(".mainNavigation").on("click",".menu-icon a",function(){$("a.showSearch").removeClass("close"),$(".inputDiv").hide(),$(".navigationList").slideDown(),$(this).addClass("close")}),$(".mainNavigation").on("click",".menu-icon a.close",function(e){$(".navigationList").slideUp(),$(this).removeClass("close")})}function resetNavigation(){$(".mainNavigation").find("*").each(function(){$(this).removeAttr("style")}),$(".mainNavigation .showSearch").removeClass("close"),$(".mainNavigation .menu-icon a").removeClass("close"),$(".navigationList > li > h2 > a").data("oneclick","false"),$(".navigationList > li > h2 > a").removeClass("hover active")}function orientationChg(){var e=function(){resetNavigation(),$(".mainNavigation").data("navigation")&&$(".mainNavigation").data("navigation").setMenuPosition(),screenWidth=$(window).width(),screenHeight=$(window).height(),menuScroll(),$(".panelOpen").each(function(){panelAdjust($(this))}),$(".overlay .popup").animate({width:screenWidth,height:screenHeight},1e3),$(".lightboxOverlay").length>0&&$(".lightboxOverlay").css("display","none"),$(".lightbox").length>0&&$(".lightbox").css("display","none"),adjustfullPanel()};setTimeout(e,500)}function overlayVideo(){$(".videoLink").on("click",function(e){if(e.preventDefault(),videoId=$(this).attr("href"),"undefined"==typeof YT){var i=document.createElement("script");i.src="https://www.youtube.com/iframe_api";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(i,t)}else onYouTubeIframeAPIReady()}),$(".overlay ").on("click",".close",function(e){$(".overlay .popup").html(""),$(".overlay").fadeOut(),e.preventDefault()})}function onYouTubeIframeAPIReady(){$("body, html").animate({scrollTop:0},{duration:500,complete:function(){$(".overlay").fadeIn(1e3)}}),$(".overlay .popup").html(""),$(".overlay .popup").append("<div class='iframedContent'><div id='player'></div></div>"),$(".overlay .popup").append('<img class="loaderImg absolute-center" src="/assets/corporate/images/ajax-loader.gif" alt="" />'),$(".overlay .popup").animate({width:screenWidth,height:screenHeight},1e3),player=new YT.Player("player",{height:"80%",width:"100%",videoId:videoId,autoplay:1,events:{onReady:onPlayerReady,onStateChange:onPlayerStateChange},playerVars:{rel:0,wmode:"opaque"}})}function onPlayerReady(e){$(".loaderImg").hide()}function onPlayerStateChange(e){e.data!=YT.PlayerState.PLAYING||done||(done=!0)}function stopVideo(){player.stopVideo()}function panelAdjust(e){e.find(".heading").innerHeight()}function menuScroll(){var e=$(window).width(),i=$(window).height();e>960&&$("html").hasClass("no-touch")?$(".dropBlock").each(function(){var e=$(this),t=$(".globalHeader").outerHeight()+$("header").outerHeight()+$(".mainNavigation").outerHeight(),a=i-t-50;e.height()>a?(e.css({height:a}).bind("jsp-initialised",function(e,i){$(this).css({visibility:"visible",display:"none"})}).jScrollPane({horizontalGutter:0,verticalGutter:0,showArrows:!1,maintainPosition:!0}),e.find(".jspPane").css("padding-right","0px"),$("html").hasClass("webkit")&&e.find(".menuContent > ul > li:first-child").css("width","214px")):e.css({height:"auto",visibility:"visible",display:"none","padding-right":"0"})}):$(".dropBlock").css({height:"auto",display:"none",visibility:"visible","padding-right":"0"}),$(".navigationList").css("visibility","visible")}function txtSelect(){$(".redirectionBox input:text, .threeColumn input").each(function(){var e=$(this).val();$(this).focus(function(){$.trim(this.value)==e&&$(this).val("")}),$(this).blur(function(){""===$(this).val()&&$(this).val(e)})})}function expandContent(){$(".expandContent").hide(),$(".expandLink").click(function(){curState=$(this).prev(".expandContent").css("display"),"none"==curState?($(this).addClass("collapse"),$(this).prev(".expandContent").slideDown("slow")):($(this).removeClass("collapse"),$(this).prev(".expandContent").slideUp())})}function anchoringContinents(){$(".anchorBand a").on("click",function(e){e.preventDefault(),_thisAnchor=$(this).attr("href"),$("html").hasClass("no-touch")?$("html, body").animate({scrollTop:$(_thisAnchor).offset().top-53},1e3):$("html, body").animate({scrollTop:$(_thisAnchor).offset().top},1e3)}),$("a.top").on("click",function(e){$("html").hasClass("no-touch")?$("html, body").animate({scrollTop:$("#anchorLinks").offset().top-60},1e3):$("html, body").animate({scrollTop:$("#anchorLinks").offset().top},1e3),e.preventDefault()})}function otherwebsiteOpen(){$(".siteListings").height("");var e=$(window).height(),i=$(".siteListings .rowContent").height(),t=$(".wrapper").height(),a=Math.max(e,t,i);$(".siteListings").height(a),$(".otherWebsites").click(function(){$(this).addClass("active");var t=$(".wrapper").height(),a=Math.max(e,t,i);$(".siteListings").height(a),$(".mainNavigation").hide(),$(".siteListings").addClass("active").stop().slideDown(1e3)}),$(".closeMe").click(function(){$(".mainNavigation").show(),$(".siteListings").removeClass("active").stop().slideUp(1e3,function(){$(".otherWebsites").removeClass("active")})}),$(".otherWebsitesIcon a").on("click",function(e){resetNavigation(),$(".otherWebsites").triggerHandler("click"),$("html, body").animate({scrollTop:0})})}function accordion(){$(".accordion h3.title a").click(function(){"none"==$(this).parent().next().css("display")?($(this).closest(".accordion").find("li.active .accContent").slideUp("slow"),$(this).closest(".accordion").find("li.active").removeClass("active"),$(this).closest("li").addClass("active"),$(this).parent().next().slideDown("slow")):($(this).closest("li").removeClass("active"),$(this).parent().next().slideUp("slow"))})}function setDataTable(){var e=$(".contentDetails table, .plainContent table");e.length>0&&e.each(function(){if(_this=$(this),_this.addClass("dataTable"),!_this.parent().hasClass("dataTableWrapper")){var e=$("<div/>");e.addClass("dataTableWrapper"),e.insertBefore(_this),_this.remove().appendTo(e)}})}function resizeCall(e){var t=e.find("li"),a=t.length,n=e.find("a.expand"),o=0,s=0;e.find(".blockgrid").innerHeight();for(screenWidth>mobileMedia&&$(".leftColumn").not(".noRightPanel")&&(a<=(o=3)?$(n).hide():$(n).show()),screenWidth>mobileMedia&&$(".leftColumn").hasClass("noRightPanel")&&(o=4,t.parent().removeClass("large-block-grid-3").addClass("large-block-grid-4"),a<=o?$(n).hide():$(n).show()),screenWidth<=mobileMedia&&(a<=(o=2)?$(n).hide():$(n).show()),i=0;i<o;i++)t.eq(i).addClass("nt");s=-1,e.find("li.nt").each(function(){var e=$(this).height();s=e>s?e:s}),e.find(".productsExpand").css({height:s+5}),e.find(".anchorLink").removeClass("collapse").addClass("expand")}function browserDetect(){($("html").hasClass("windowsxp")&&$("html").hasClass("ie8")||$("html").hasClass("ie7")||$("html").hasClass("ie6")||$("html").hasClass("desktop")&&$("html").hasClass("safari4"))&&($("body").addClass("errorPages"),$(".browserDetect").show(),$("html").css({overflow:"hidden"})),$(".continue").on("click",function(e){$("body").removeClass("errorPages"),$(".browserDetect").hide(),$("html").css({overflow:"auto"}),e.preventDefault()})}function debouncer(e,i){var t;return i=i||200,function(){var a=this,n=arguments;clearTimeout(t),t=setTimeout(function(){e.apply(a,Array.prototype.slice.call(n))},i)}}var screenWidth=$(window).width(),screenHeight=$(window).height(),mobileMedia=641,tabletMedia=960,smallMobileMedia=481,videoId="",player,posPanel,property=null,done=!1,panelOpen=function(e){var i=$(e);i.find(".heading").on("click",function(){i.find(".heading").toggleClass("active"),$(this).is(".active")?(i.find(".expandPanel").stop().slideDown(),i.addClass("active"),i.find(".expandPanel").css({top:posPanel})):(i.find(".expandPanel").stop().hide(),i.removeClass("active"))})};!function(e){e.fn.tabPlugIn=function(i){this.each(function(){var t=e(this).find(".tabsDiv li"),a=e(this).find(".tabContent");e(a).hide(),e(a).eq(0).show(),e(t).eq(0).addClass("active"),e(t).click(function(n){var o=e(this).index();e(t).removeClass("active"),e(this).addClass("active"),e(a).fadeOut(),e(a).eq(o).delay(400).fadeIn({complete:function(){e(window).width()<mobileMedia&&e("html, body").animate({scrollTop:e(this).offset().top-e(".mainNavigation").height()})}}),n.preventDefault(),i&&i(this)})})}}(jQuery);var showMoreProducts=function(e){var i=$(e),t=(i.find("li"),i);$(i).on("click",".expand",function(e){var t=i.find(".blockgrid").innerHeight();$(this).removeClass("expand").addClass("collapse"),$(this).prev().animate({height:t}),e.preventDefault()}),$(i).on("click",".collapse",function(e){var a=-1;i.find("li.nt").each(function(){var e=$(this).height();a=e>a?e:a}),$(this).removeClass("collapse").addClass("expand"),$(this).prev().stop().animate({height:a}),$("html, body").animate({scrollTop:$(t).offset().top-140}),e.preventDefault()})};$(document).ready(function(){$(".leftColumn").length>0&&$(".leftColumn").each(function(){$(this).hasClass("noRightPanel")&&($(this).find(".productLists ul.blockgrid").removeClass("large-block-grid-3").addClass("large-block-grid-4"),$(this).find(".album ul.blockgrid").removeClass("large-block-grid-3").addClass("large-block-grid-4"))}),otherwebsiteOpen(),anchoringContinents(),txtSelect(),expandContent(),$(".tabsPlugin").tabPlugIn(),stickyHeader(),accordion(),setDataTable(),overlayVideo(),showSearch(),window.attachEvent?window.attachEvent("orientationchange",orientationChg,!1):window.addEventListener("orientationchange",orientationChg,!1),$(".panelOpen").each(function(){panelOpen(this)})}),$(window).load(function(){adjustfullPanel(),menuScroll(),$(".mainNavigation").navigation({layoutWidth:960}),$(".list1").each(function(){showMoreProducts(this)}),$(".list2").each(function(){showMoreProducts(this)}),$(".list1").each(function(){resizeCall($(this))}),$(".list2").each(function(){resizeCall($(this))})}),$(window).resize(function(){otherwebsiteOpen()}),$("html").hasClass("no-touch")?$(window).bind("resize",debouncer(function(e){$("html").hasClass("ie8")||(screenWidth=$(window).width(),$(".list1").each(function(){resizeCall($(this))}),$(".list2").each(function(){resizeCall($(this))}))})):$("html").hasClass("touch")&&$(window).bind("orientationchange",debouncer(function(e){screenWidth=$(window).width(),$(".list1").each(function(){resizeCall($(this))}),$(".list2").each(function(){resizeCall($(this))})})),$(document).ready(function(){$("[data-popup-open]").on("click",function(e){var i=jQuery(this).attr("data-popup-open");$('[data-popup="'+i+'"]').fadeIn(350),e.preventDefault()}),$("[data-popup-close]").on("click",function(e){var i=jQuery(this).attr("data-popup-close");$('[data-popup="'+i+'"]').fadeOut(350),e.preventDefault()})}),$(document).ready(function(){$(".scrollbox").enscroll()}),function(e){e.fn.sameHeight=function(){var i=this,t=[];i.each(function(){var i=e(this).height();t.push(i)});var a=Math.max.apply(null,t);i.each(function(){e(this).height(a)})}}(jQuery),$(window).load(function(){$(".ourBusiness .blockContent .OverBgBlue").sameHeight()}),$(window).resize(function(){$(".ourBusiness .blockContent .OverBgBlue").sameHeight()});