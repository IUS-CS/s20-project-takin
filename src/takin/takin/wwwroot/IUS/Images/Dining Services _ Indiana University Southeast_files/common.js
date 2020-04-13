function addLinkClasses() {
    // Add pdf icons to pdf links
    $("#page-body a[href$='.pdf']:not('#site-navigation a'):not('.se-button a')").each(function() {
        if($(this).find('img').length == 0) {
            $(this).addClass("lnk_pdf");
        }
        $(this).attr("target", "_blank");
	});
	// Add txt icons to document links (doc, rtf, txt)
	$("#page-body a[href$='.doc']:not('#site-navigation a'):not('.se-button a')").each(function() {
		if($(this).find('img').length == 0) {
			$(this).addClass("lnk_txt");
			}
	});
	$("#page-body a[href$='.docx']:not('#site-navigation a'):not('.se-button a')").each(function() {
		if($(this).find('img').length == 0) {
			$(this).addClass("lnk_txt");
			}
	});
	$("#page-body a[href$='.txt']:not('#site-navigation a'):not('.se-button a')").each(function() {
		if($(this).find('img').length == 0) {
			$(this).addClass("lnk_txt");
			}
	});
	$("#page-body a[href$='rtf']:not('#site-navigation a'):not('.se-button a')").each(function() {
		if($(this).find('img').length == 0) {
			$(this).addClass("lnk_txt");
			}
	});
 
	// Add zip icons to Zip file links (zip, rar)
	$("#page-body a[href$='zip']:not('#site-navigation a'):not('.se-button a')").each(function() {
		if($(this).find('img').length == 0) {
			$(this).addClass("lnk_zip");
			}
	});
	$("#page-body a[href$='rar']:not('#site-navigation a'):not('.se-button a')").each(function() {
		if($(this).find('img').length == 0) {
			$(this).addClass("lnk_zip");
			}
	});
 
	// Add email icons to email links
	$("#page-body a[href^='mailto:']:not('#site-navigation'):not('.se-button a')").each(function() {
		if($(this).find('img').length == 0) {
			$(this).addClass("lnk_email");
			}
	});
	// Add external link icons to external links
	$("#page-body a:not('#site-navigation a'):not('#quick-links a'):not('.status_alert a'):not('.se-button a')").filter(function() {
		return this.hostname && this.hostname !== location.hostname;
	}).each(function() {
		if(this.hostname && this.hostname !== location.hostname) {
			if(!$(this).hasClass('lnk_pdf') && !$(this).hasClass('lnk_txt') && !$(this).hasClass('lnk_zip') && $(this).find('img').length == 0 && $(this).find('.action_arrow').length == 0) {
				$(this).addClass("lnk_ext").attr("target", "_blank");
			}
		}
	});
}
function landingcolumns() {
    try {
    	var zmaxhght = 0; 
		$('#main-body-content .se-column.se-landing .se-block .se-text').each(function(){
			zmaxhght = zmaxhght + 1;
			//alert('here ' + zmaxhght );
			if($(this).height() > zmaxhght) {
				zmaxhght = $(this).height();
			}
		});
		if(0 < zmaxhght) {
			$('#main-body-content .se-column.se-landing .se-block .se-text').each(function(){
				$(this).css({height: zmaxhght})
			});
		}
		/* 
		skirtheight = 0;
		skirtcol1 = $('#campus-skirt .skirt-col1').height();
		skirtcol2 = $('#campus-skirt .skirt-col2').height();
		skirtcol3 = $('#campus-skirt .skirt-col3').height();
		skirtheight = skirtcol1;
		if(skirtcol2 > skirtheight) {
			skirtheight = skirtcol2;
		}
		if(skirtcol3 > skirtheight) {
			skirtheight = skirtcol3;
		}
		$('#campus-skirt .skirt-col1').css({height: skirtheight});
		$('#campus-skirt .skirt-col2').css({height: skirtheight});
		$('#campus-skirt .skirt-col3').css({height: skirtheight});
		*/
	} catch(errr) { }
}
function LiveChatFixes() {
	$('img[src^="https://u3s.mathtag.com"]').attr("alt","");
	$("#livechat-eye-catcher-img > img:nth-child(1)").attr("alt","Let's talk. Click to activate the chat feature.");
	$("#livechat-eye-catcher-img").attr("alt","Let's talk. Click to activate the chat feature.");
	$("#livechat-eye-catcher a:first-of-type").attr("aria-label","Click to close the Let's Talk bubble.");
	$("#livechat-compact-container a#livechat-badge").attr("aria-label","Click to open the chat window.");
	$("#livechat-compact-container a#livechat-badge").attr("href","index.php#LiveChat");
	$("#full-view-button").attr("aria-label","Open the chat window.");
	$('#livechat-compact-view').contents().find('#full-view-button').attr("aria-label","Open the chat window.");
	$('#digital-marketing-code-top1').each(function() {
		$(this).next('img').each(function() {
			if ( ! $(this).attr('alt')) {
				$(this).attr('alt', '');
			}
		});
	});
}
/* 
function skirtcolumns() {
    try {
		skirtheight = 0;
		skirtcol1 = $('#campus-skirt .skirt-col1').height();
		skirtcol2 = $('#campus-skirt .skirt-col2').height();
		skirtcol3 = $('#campus-skirt .skirt-col3').height();
		skirtheight = skirtcol1;
		if(skirtcol2 > skirtheight) {
			skirtheight = skirtcol2;
		}
		if(skirtcol3 > skirtheight) {
			skirtheight = skirtcol3;
		}
		$('#campus-skirt .skirt-col1').css({height: skirtheight});
		$('#campus-skirt .skirt-col2').css({height: skirtheight});
		$('#campus-skirt .skirt-col3').css({height: skirtheight});
	} catch(errr) { }
}
function sportsnewscolumns() {
    try {
        sportcolheight = 0;
    	sportcol1 = $('.se-sports').height();
		iunewscol2 = $('.se-iu-news-container').height();
		sportcolheight = sportcol1;
		if(iunewscol2 > sportcolheight) {
			sportcolheight = iunewscol2;
		}
		$('.se-sports').css({height: sportcolheight});
		$('.se-iu-news-container').css({height: sportcolheight});
	} catch(errr) { }
} */
(function($){
    $.fn.activateAccordionItem = function() {
		// Expand accordion if visitied by anchor
		if(window.location.hash) {
			var currHash = window.location.hash;
			if(currHash) {
				$.fn.activateAccordionItem2(currHash);
			}
		}
		// End Expand accordion if visitied by anchor
	}

	$.fn.activateAccordionItem2 = function(currHash) {
		// Expand accordion if visitied by anchor
		if(currHash) {
			var foundHash = $('' + currHash).length;
			var currAccordion = $('' + currHash).closest('.se-accordion');
			if(currAccordion.length) {
				var currHeading = $('' + currHash).closest(':header');
				if(currHeading) {
					var headerID = $(currHeading).attr('id');
					if(headerID) {
						var currHeadingPos = headerID.substring(headerID.lastIndexOf("-") + 1);
						// jQuery changed numbering
						var newHeadingPos = Math.ceil(currHeadingPos / 2);
						newHeadingPos = newHeadingPos - 1;
						$(currAccordion).accordion( 'option', 'active', parseInt(newHeadingPos));
					}
				}
			}
		}
		// End Expand accordion if visitied by anchor
	}

	$(document).ready(function(e){
        $('#toggles div.row a.right-off-canvas-toggle').click(function() {
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
        $('#toggles div.row a.right-off-canvas-toggle').keyup(function(e){
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
		//IUSearch && IUSearch.init({ CX: { site: '013797427787343721755:xt34rixxvau', all: '016278320858612601979:ddl1l9og1w8' } });
        IUSearch && IUSearch.init({
        	CX: {
    			site: '013797427787343721755:xt34rixxvau',
    			all: '016278320858612601979:ddl1l9og1w8' 
    		},
    		attributes: {
    			 resultsUrl: '/search.php'
    		}
    	});
		if($('#curraid').length > 0) {
			currAID = $('#curraid').attr('data-curraid');
			tmpLink = $('a[data-aid="' + currAID + '"]');
            tmpLink2 = $('#site-navigation .vertical a[data-aid="' + currAID + '"]');
			if(tmpLink.length > 0) {
				$(tmpLink).closest('div.nav-group-header').addClass('active');
                $(tmpLink).closest('div.nav-group').children('div.nav-group-header').addClass('active');
				$(tmpLink).closest('li.nav-link-item').addClass('active');
                try {
                    $(tmpLink2).parent().closest('.nav-group-content').show();
                    $(tmpLink2).parent().closest('.nav-group').children('.nav-group-header').children('.nav-plus').children('span').html('-');
                } catch(errr) { }
			}
		}
        //$('.nav-group-header a[href$="' + $(location).attr('href') + '"]').parent().addClass('active');
        //$('.nav-group-header a[href$="' + $(location).attr('pathname') + '"]').parent().addClass('active');
        try {
    		tmpLink = $('a[href$="' + $(location).attr('pathname') + '"]');
			if($(tmpLink).closest('li').hasClass('active')) {
				//
			} else {
				$(tmpLink).closest('li').addClass('active');
			}
			$(tmpLink).closest('div.nav-group').children('div.nav-group-header').addClass('active');
		} catch(err) { }
		try {
			tmpLink = $('a[href$="' + $(location).attr('href') + '"]');
			if($(tmpLink).closest('li').hasClass('active')) {
				//
			} else {
				$(tmpLink).closest('li').addClass('active');
			}
			$(tmpLink).closest('div.nav-group').children('div.nav-group-header').addClass('active');
		} catch(err) { }
		try {
			tmpLink = $('a[href$="' + $(location).attr('pathname') + '"]');
			if($(tmpLink).closest('ul.folder-links').closest('li').hasClass('active')) {
				//
			} else {
				$(tmpLink).closest('ul.folder-links').closest('li').addClass('active');
			}
		} catch(err) { }
		try {
			tmpLink = $('a[href$="' + $(location).attr('href') + '"]');
			if($(tmpLink).closest('ul.folder-links').closest('li').hasClass('active')) {
				//
			} else {
				$(tmpLink).closest('ul.folder-links').closest('li').addClass('active');
			}
		} catch(err) { }
        if($('#curraid').length > 0) {
    		currAID = $('#curraid').attr('data-curraid');
			var abc = "#site-navigation a[data-aid='" + currAID + "']";
			if($(abc).length > 1) {
				abc = "#site-navigation a[data-aid='" + currAID + "' ][data-ref='true']";
				$(abc).closest('.nav-link-item').removeClass('active');
				$(abc).closest('.nav-group').children('.nav-group-header').removeClass('active');
				try {
					$(abc).parent().closest('.nav-group-content').hide();
					$(abc).parent().closest('.nav-group').children('.nav-group-header').children('.nav-plus').children('span').html('+');
				} catch(errr) { }

			}
			abc = "#mobile-site-nav a[data-aid='" + currAID + "']";
			if($(abc).length > 1) {
				abc = "#mobile-site-nav a[data-aid='" + currAID + "' ][data-ref='true']";
				$(abc).closest('.nav-link-item').removeClass('active');
				$(abc).closest('.nav-group').children('.nav-group-header').removeClass('active');
				try {
					$(abc).parent().closest('.nav-group-content').hide();
					$(abc).parent().closest('.nav-group').children('.nav-group-header').children('.nav-plus').children('span').html('+');
				} catch(errr) { }
			}
		}
		/* $('a[href="https://blogs.ius.edu/greek-life/"]').each(function(){
			$(this).closest('div.nav-group-header').removeClass('active');
			$(this).closest('div.nav-group').children('div.nav-group-header').removeClass('active');
			$(this).closest('li.nav-link-item').removeClass('active');
		}); */
		$('a[href^="https://blogs.ius.edu/"]').each(function(){
			$(this).closest('div.nav-group-header').removeClass('active');
			$(this).closest('div.nav-group').children('div.nav-group-header').removeClass('active');
			$(this).closest('li.nav-link-item').removeClass('active');
		});
		$('a[href^="http://blogs.ius.edu/"]').each(function(){
			$(this).closest('div.nav-group-header').removeClass('active');
			$(this).closest('div.nav-group').children('div.nav-group-header').removeClass('active');
			$(this).closest('li.nav-link-item').removeClass('active');
		});
		$('a[href^="https://blogs.iu.edu/"]').each(function(){
			$(this).closest('div.nav-group-header').removeClass('active');
			$(this).closest('div.nav-group').children('div.nav-group-header').removeClass('active');
			$(this).closest('li.nav-link-item').removeClass('active');
		});
		$('a[href^="http://blogs.iu.edu/"]').each(function(){
			$(this).closest('div.nav-group-header').removeClass('active');
			$(this).closest('div.nav-group').children('div.nav-group-header').removeClass('active');
			$(this).closest('li.nav-link-item').removeClass('active');
		});
        $( ".accordion" ).accordion({
            collapsible: true
        });
        $("#campus-navigation .navigation .nav-group .nav-group-header").keyup(function(e){
    		if(e.keyCode == 32) {
				$(this).parent().children('.nav-group-content').each(function(){
					if($(this).is(":visible")) {
						//$(this).hide();
						$(this).css({display: ''});
					} else {
						//$(this).show();
						$(this).css({display: 'block'});
					}
				});
				$(this).focus();
				window.scrollTo(0, 0);
				//$(this).addClass('campus-nav-ddl-fix');
				return false;
			}
		});
		
		$("#site-navigation .nav-group .nav-group-header").click(function() {
            if ($(this).find("a").attr('target') == '_blank') {
			   //Do Nothing
               //return false;
            } else {
                window.location=$(this).find("a").attr("href");
            }
		});
        $("#site-navigation .nav-plus").click(function() {
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
    			$(this).children('span').html('-');
    		} else {
    			$(this).children('span').html('+');
    		}
    		return false;
    	});
		$("#site-navigation .nav-plus").keyup(function(e){
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
					$(this).children('span').html('-');
				} else {
					$(this).children('span').html('+');
				}
				return false;
			}
		});
		/* $("#site-navigation .nav-group-header a").parent().click(function() {
			$(this).parent().children('.nav-group-content').each(function(){
			});
		});
		$("#site-navigation .nav-plus").parent().click(function() {
        	var txtvis = false;
    		$(this).parent().children('.nav-group-content').each(function(){
    			if($(this).is(":visible")) {
    				$(this).hide();
    				txtvis = false;
    			} else {
    				$(this).show();
    				txtvis = true;
    			}
    		});
    		if(txtvis) {
    			$(this).children('.nav-plus').html('-');
    		} else {
    			$(this).children('.nav-plus').html('+');
    		}
    		return false;
    	});
		$("#site-navigation .nav-plus").parent().keyup(function(e){
			if(e.keyCode == 32) {
				var txtvis = false;
				$(this).parent().children('.nav-group-content').each(function(){
					if($(this).is(":visible")) {
						$(this).hide();
						txtvis = false;
					} else {
						$(this).show();
						txtvis = true;
					}
				});
				if(txtvis) {
					$(this).children('.nav-plus').html('-');
				} else {
					$(this).children('.nav-plus').html('+');
				}
				return false;
			}
    	}); */
		$('.se-testimonial-slider').slick({
        	slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
            respondTo: 'min',
		});
        $('.se-slider-complete').slick({
            slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
            respondTo: 'min',
		});
        $('.se-slider-incontent').slick({
            lazyLoad: 'ondemand',
            slidesToShow: 1,
    		slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 5000,
            respondTo: 'min',
		});
		$('.se-news-details').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 5000,
            respondTo: 'min',
            prevArrow: '<button type="button" data-role="none" class="slick-prev" style="">Previous news item</button>',
			nextArrow: '<button type="button" data-role="none" class="slick-next" style="">Next news item</button>',
            responsive: [
                {
                  breakpoint: 722,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },{
                  breakpoint: 330,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
		});
		$('.se-events').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 5000,
            respondTo: 'min',
            prevArrow: '<button type="button" data-role="none" class="slick-prev" style="">Previous campus event</button>',
			nextArrow: '<button type="button" data-role="none" class="slick-next" style="">Next campus event</button>',
            responsive: [
                {
                  breakpoint: 722,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },{
                  breakpoint: 330,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
		});
		$( ".se-accordion" ).accordion({
			heightStyle: "content",
			collapsible: true,
            active: false
		});
		$( ".accordion" ).accordion({ heightStyle: "content" });

        // Expand accordion if visitied by anchor
    	$.fn.activateAccordionItem();

		$("a.seAcordionAnchor").click(function() {
			var currHash = this.hash;
			$.fn.activateAccordionItem2(currHash);
        });

        landingcolumns();
        //addLinkClasses();
		//sportsnewscolumns();
        //skirtcolumns();
        
        /* Campus Alerts */
        var eCont = '#campus_alert';
        var eFeed = '';
    	if(window.location.host == "www.ius.edu") {
			eFeed = 'https://www.ius.edu/feeds/campusstatus/CampusStatus.php';
		} else {
			if(window.location.host == "www-dev.ius.edu") {
				eFeed = 'https://www-dev.ius.edu/feeds/campusstatus/CampusStatus.php';
			}
		}
    	$.fn.alertsError = function(strSel) {
            $(strSel).html('<div class="content-container se-belt-container cmpstat_red se-campus-alert"><div class="se-content-area"><div id="campus_alert_0" class="campus_alert"><div class="campus_status_messages"><div class="cmpstat_large"><div class="status_container"><h2>Campus Status</h2><div class="status_message"><a href="http://ius.edu/about-southeast/emergency-preparedness/emergency-preparedness.html" class="alertlink"><span class="status_description">Click Here</span></a></div></div></div><div class="clear"></div></div></div></div></div>');
        }
    	$.fn.noIUSAlerts = function(strSel){
            $(strSel).html('<div class="content-container se-belt-container se-campus-alert"><div class="se-content-area"></div></div>');
        }
    	$.fn.updateStatus = function(strURL, strSel) {
			//alert(window.location.host);
			if(strURL != '') {
				//alert('true');
				try {

					$.ajax({
						url: strURL,
						type: 'GET',
						dataType: 'html',
						async: false, 
						error: function() {
							$.fn.alertsError(strSel);
						}, 
						success: function(data) {
							if($(data).length > 0) {
								var new_data = '<div>' + data + '</div>';
								var tmp_val = $(new_data).find('div.campus_alert');
								if(tmp_val.length > 0) {
									if($(strSel).length > 0) {
										$(strSel).html(data);
									}
								} else {
									$.fn.noIUSAlerts(strSel);
								}
							} else {
								$.fn.noIUSAlerts(strSel);
							}
						}
					});

				} catch(e) {
					$.fn.alertsError(strSel);
				}
			}
        }
        var setatime = 60000;
        try {
            if(location.pathname == '/about-southeast/emergency-preparedness/' || location.pathname == '/about-southeast/emergency-preparedness/index.php') {
                setatime = 15000;
            }
        } catch(e123) {
            
        }
    	try {
    		if($(eCont).length > 0) {
    			var feedUpdate = setInterval(function(){
    					$.fn.updateStatus(eFeed, eCont);
    			}, setatime);
    		}
    	} catch(e) {
    
    	}
        /* End Campus Alerts*/

        /* Horizontal Button Height Equalizer */
    	$('.se-horizontal-buttons').each(function() {
			var mBtnHeight = 0;
			var hButtons = $(this).find('.se-button');
			$(hButtons).each(function() {
				if($(this).height() > mBtnHeight) {
					mBtnHeight = $(this).height();
				}
			});
			$(hButtons).each(function() {
				if($(this).height() < mBtnHeight) {
					$(this).height(mBtnHeight);
				}
			});
		});
        /* End Horizontal Button Height Equalizer */
		
		/* Form Student ID input limit to numbers */
		$(".se-inpt-id input").keyup(function() {
			$(this).val().replace(/[^\d\.]/g, '');
			var value = $(this).val().replace(/[^\d\.]/g, '');
			value = value.replace(".", '');
			$(this).val(value);
		});
		$(".se-inpt-id input").focusout(function() {
			$(this).val().replace(/[^\d\.]/g, '');
			var value = $(this).val().replace(/[^\d\.]/g, '');
			value = value.replace(".", '');
			$(this).val(value);
		});
		/* End Form Student ID input limit to numbers */
		/* Form remove continue button on No */
        jQuery(".se-inpt-frm-continue input").change(function() {
			try {
				jQuery(".se-inpt-frm-continue input[type='radio']:checked").each(function() {
					var idVal = jQuery(this).attr("id");
					labelVal = jQuery("label[for='"+idVal+"']").text();
					if(labelVal == 'No') {
						jQuery('#submit_primary').prop('disabled', true);
						jQuery('#submit_primary').hide();
						jQuery('#li_resume_checkbox').hide();
					} else {
						jQuery('#submit_primary').prop('disabled', false);
						jQuery('#submit_primary').show();
						jQuery('#li_resume_checkbox').show();
					}
				});
			} catch(errr) { }
		});
		/* End Form remove continue button on No */
        /* Form compliance with FERPA */
        jQuery(".se-38337-compliance input").change(function() {
            if($(this).is(':checked') && $(this).val() == '1') {
            	$('#li_113').show();
        		$('#li_114').show();
        	}
        });
        /* End Form compliance with FERPA */
        /* Change Breadcrumb on schedule of classes for Spring 2017 -> Wintersession 2016 */
    	var seTestURL = window.location.href;
		if(seTestURL.indexOf('/spring-2017') >= 0) {
			if(seTestURL.indexOf('?session=INT') >= 0) {
				$(".sub_header a[href$='/registrar/schedule-of-classes/semesters/spring-2017/sessions']").each(function() {
					$(this).after(' &raquo; <a href="/registrar/schedule-of-classes/semesters/spring-2017?session=INT">Wintersession</a>');
				});
			}
		}
		/* End Change Breadcrumb on schedule of classes for Spring 2017 -> Wintersession 2016 */
		//Fix accessibility issues in Live Chat
		LiveChatFixes();
		setTimeout(LiveChatFixes, 500);
		setTimeout(LiveChatFixes, 1000);
		setTimeout(LiveChatFixes, 2000);
		setTimeout(LiveChatFixes, 3000);
		setTimeout(LiveChatFixes, 4000);
		setTimeout(LiveChatFixes, 10000);
	});
})(jQuery);
function seCourseShowDesc(itemID) {
    if(jQuery('#' + itemID).is(":visible")) {; 
		jQuery('#' + itemID).hide();
	} else {
        jQuery('.se-course-tbl-desc').hide();
		jQuery('#' + itemID).show();
	}
}
/*
window.addEventListener('load', function () {
    $("#se-google-site").submit(function(event) {
        if($('#se-google-site .se-search-input').val() == '' || $('#se-google-site .se-search-input').val() == 'Googleâ„¢ Custom Search' || $('#se-google-site .se-search-input').val() == 'Google&#8482; Custom Search' || $('#se-google-site .se-search-input').val() == "Google™ Custom Search") {
            event.preventDefault();
        }
    });
    $('#se-google-site .se-search-input').focus(function() {
        // Google brand statement
        var googleBrand = "Googleâ„¢ Custom Search";
        if ($(this).val() == googleBrand || $(this).val() == "Google&#8482; Custom Search" || $(this).val() == "Google™ Custom Search") {
            $(this).val("");
    	}
    });
    $('#se-google-site .se-search-input').blur(function() {
    	if ($(this).val() == "") {
    		$(this).val("Google™ Custom Search");
    	}
    });
}, false);
*/