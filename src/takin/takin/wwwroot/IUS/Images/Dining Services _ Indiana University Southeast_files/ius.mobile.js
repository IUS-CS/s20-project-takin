/**
 * Indiana University at New Albany
 * Copyright 2015
*/
ius = {}
ius.mobile = function() {
    //ius.mobile.floatsitename();
    $( window ).resize(function() {
        //ius.mobile.floatsitename();
        $('#mobile-nav').hide();
        $('#page-body').show();
        $('#se-page-content').show();
        $('#site-titlebar').show();
        $('#site-header-image').show();
        //ius.mobile.floatfixfortools();
    });
    //var $divtoclone = $('#campus-navigation');
	//$divtoclone.after($divtoclone.clone().attr('id','mobile-nav'));
    $('article.column-two').prepend($('#site-navigation').clone().attr('id','mobile-site-nav'));
	$('article.column-two').append($('aside.column-one div.se-sm-icons-wrap').clone().attr('id','se-sm-icons-wrap-mobile'));
    $('#mobile-site-nav .horizontal').addClass('vertical');
    $('#mobile-site-nav .horizontal').removeClass('horizontal');
    $('#mobile-site-nav .vertical .nav-expandable .nav-group-header .nav-plus').after('<div class="mobile-nav-plus"><a href="#"><span>+</span></a></div>');
    $('#mobile-site-nav .vertical .nav-expandable .nav-group-header .nav-plus').parent().children('a').css({width: '75%'});
    $("#mobile-site-nav .vertical .nav-group .mobile-nav-plus").click(function() {
		var txtvis = false;
		$(this).parent().parent().children('.nav-group-content').each(function(){
			if($(this).is(":visible")) {
				$(this).hide();
				txtvis = false;
			} else {
				$(this).show();
				txtvis = true;
			}
		});
		if(txtvis) {
			$(this).html('<a href="#"><span>-</span></a>');
		} else {
			$(this).html('<a href="#"><span>+</span></a>');
		}
		return false;
	});
    //$("#mobile-site-nav").attr('aria-hidden','true');
    //$("#mobile-nav").attr('aria-hidden','true');
    $("#mobile-site-nav .vertical .nav-group .mobile-nav-plus").keyup(function(e){
        if(e.keyCode == 32) {
            // user has pressed space
            var txtvis = false;
        	$(this).parent().parent().children('.nav-group-content').each(function(){
    			if($(this).is(":visible")) {
    				$(this).hide();
    				txtvis = false;
    			} else {
    				$(this).show();
    				txtvis = true;
    			}
    		});
    		if(txtvis) {
    			$(this).html('<a href="#"><span>-</span></a>');
    		} else {
    			$(this).html('<a href="#"><span>+</span></a>');
    		}
    		return false;
        }
    });
	$('#mobile-menu-button').click(function() {
		 if($('#mobile-nav').is(":visible")) {
			  $('#mobile-nav').hide();
			  $('#page-body').show();
              $('#site-titlebar').show();
              $('#site-header-image').show();
		 } else{
			  $('#mobile-nav').show();
			  $('#page-body').hide();
              $('#site-titlebar').hide();
              $('#site-header-image').hide();
		 }
	});
    $('#mobile-menu-button').keyup(function(e){
        if(e.keyCode == 32) {
            // user has pressed space
            if($('#mobile-nav').is(":visible")) {
        		  $('#mobile-nav').hide();
    			  $('#page-body').show();
                  $('#site-titlebar').show();
                  $('#site-header-image').show();
    		 } else{
    			  $('#mobile-nav').show();
    			  $('#page-body').hide();
                  $('#site-titlebar').hide();
                  $('#site-header-image').hide();
    		 }
        }
    });
	//var $div2toclone = $('#campus-stripe-nav ul');
	//var $newclone = $div2toclone.clone().addClass('nav-link-items').attr('id','mobile-append');
	//$('#mobile-nav .navigation .last').after($newclone);
    //$('#mobile-nav .nav-group:FIRST').before($newclone);
	//$('#mobile-append').wrap("<div class='nav-group-content' id='mobile-append-cont'></div>");
	//$('#mobile-append-cont').wrap("<div class='nav-group' id='mobile-append-nav'></div>");
	//$('#mobile-append-cont').before("<div class='nav-group-header'><a title='Quick Links' href=''>Quick Links</a></div>");
	/* $('#mobile-nav .nav-group-header a').click(function() {
		return false;
	}); */
    //$( "#mobile-site-nav .vertical .nav-group").click(function() {
    	//window.location=$(this).find("a").attr("href");
	//});
}

/* ius.mobile.floatsitename = function() {
	var sitename = $( "#site-titlebar.titlebar-type-1 #site-name" );
    var sitesubtitle = $( "#site-titlebar.titlebar-type-1 #site-name .site-name-sub" );
    if(sitename && sitename.length > 0) {
        var p = $( "#iu-trident img" );
        var position = p.offset();
    	if($( window ).width() < 480) {
    		sitename.css({top: position.top + 84, left: position.left, position:'absolute', display:'block', 'font-size':'14px'});
            if(sitesubtitle && sitesubtitle.length > 0) {
                sitesubtitle.css({'font-size':'12px'});
            }
    	} else if($( window ).width() < 786) {
            if($('#campus-navigation').is(":visible")) {
                sitename.css({top: position.top + 111, left: position.left, position:'absolute', display:'block', 'font-size':'25px'});
            } else {
    		    sitename.css({top: position.top + 87, left: position.left, position:'absolute', display:'block', 'font-size':'25px'});
            }
            if(sitesubtitle && sitesubtitle.length > 0) {
                sitesubtitle.css({'font-size':'20px'});
            }
    	} else if($( window ).width() < 1024) {
            if($('#campus-navigation').is(":visible")) {
                sitename.css({top: position.top + 114, left: position.left, position:'absolute', display:'block', 'font-size':'35px'});
            } else {
            	sitename.css({top: position.top + 90, left: position.left, position:'absolute', display:'block', 'font-size':'35px'});
            }
            if(sitesubtitle && sitesubtitle.length > 0) {
                sitesubtitle.css({'font-size':'25px'});
            }
    	} else {
    		sitename.css({top: position.top + 120, left: position.left, position:'absolute', display:'block', 'font-size':'40px'});
            if(sitesubtitle && sitesubtitle.length > 0) {
                sitesubtitle.css({'font-size':'30px'});
            }
    	}
    }
} */
/* ius.mobile.floatfixfortools = function() {
    var sitename = $( "#site-titlebar.titlebar-type-1 #site-name" );
	var htvis = false;
	if($( "#tools" ).is(":visible")) {
		htvis = true;
	}
	if(htvis) {
		sitename.hide();
	} else {
		sitename.show();
	}
} */