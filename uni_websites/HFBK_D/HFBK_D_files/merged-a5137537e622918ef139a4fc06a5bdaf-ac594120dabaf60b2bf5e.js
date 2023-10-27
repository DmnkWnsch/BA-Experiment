
/*
 * jQuery FlexSlider v2.7.1
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */!function($){var e=!0;$.flexslider=function(t,a){var n=$(t);void 0===a.rtl&&"rtl"==$("html").attr("dir")&&(a.rtl=!0),n.vars=$.extend({},$.flexslider.defaults,a);var i=n.vars.namespace,r=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,s=("ontouchstart"in window||r||window.DocumentTouch&&document instanceof DocumentTouch)&&n.vars.touch,o="click touchend MSPointerUp keyup",l="",c,d="vertical"===n.vars.direction,u=n.vars.reverse,v=n.vars.itemWidth>0,p="fade"===n.vars.animation,m=""!==n.vars.asNavFor,f={};$.data(t,"flexslider",n),f={init:function(){n.animating=!1,n.currentSlide=parseInt(n.vars.startAt?n.vars.startAt:0,10),isNaN(n.currentSlide)&&(n.currentSlide=0),n.animatingTo=n.currentSlide,n.atEnd=0===n.currentSlide||n.currentSlide===n.last,n.containerSelector=n.vars.selector.substr(0,n.vars.selector.search(" ")),n.slides=$(n.vars.selector,n),n.container=$(n.containerSelector,n),n.count=n.slides.length,n.syncExists=$(n.vars.sync).length>0,"slide"===n.vars.animation&&(n.vars.animation="swing"),n.prop=d?"top":n.vars.rtl?"marginRight":"marginLeft",n.args={},n.manualPause=!1,n.stopped=!1,n.started=!1,n.startTimeout=null,n.transitions=!n.vars.video&&!p&&n.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var a in t)if(void 0!==e.style[t[a]])return n.pfx=t[a].replace("Perspective","").toLowerCase(),n.prop="-"+n.pfx+"-transform",!0;return!1}(),n.isFirefox=navigator.userAgent.toLowerCase().indexOf("firefox")>-1,n.ensureAnimationEnd="",""!==n.vars.controlsContainer&&(n.controlsContainer=$(n.vars.controlsContainer).length>0&&$(n.vars.controlsContainer)),""!==n.vars.manualControls&&(n.manualControls=$(n.vars.manualControls).length>0&&$(n.vars.manualControls)),""!==n.vars.customDirectionNav&&(n.customDirectionNav=2===$(n.vars.customDirectionNav).length&&$(n.vars.customDirectionNav)),n.vars.randomize&&(n.slides.sort(function(){return Math.round(Math.random())-.5}),n.container.empty().append(n.slides)),n.doMath(),n.setup("init"),n.vars.controlNav&&f.controlNav.setup(),n.vars.directionNav&&f.directionNav.setup(),n.vars.keyboard&&(1===$(n.containerSelector).length||n.vars.multipleKeyboard)&&$(document).bind("keyup",function(e){var t=e.keyCode;if(!n.animating&&(39===t||37===t)){var a=n.vars.rtl?37===t?n.getTarget("next"):39===t&&n.getTarget("prev"):39===t?n.getTarget("next"):37===t&&n.getTarget("prev");n.flexAnimate(a,n.vars.pauseOnAction)}}),n.vars.mousewheel&&n.bind("mousewheel",function(e,t,a,i){e.preventDefault();var r=t<0?n.getTarget("next"):n.getTarget("prev");n.flexAnimate(r,n.vars.pauseOnAction)}),n.vars.pausePlay&&f.pausePlay.setup(),n.vars.slideshow&&n.vars.pauseInvisible&&f.pauseInvisible.init(),n.vars.slideshow&&(n.vars.pauseOnHover&&n.hover(function(){n.manualPlay||n.manualPause||n.pause()},function(){n.manualPause||n.manualPlay||n.stopped||n.play()}),n.vars.pauseInvisible&&f.pauseInvisible.isHidden()||(n.vars.initDelay>0?n.startTimeout=setTimeout(n.play,n.vars.initDelay):n.play())),m&&f.asNav.setup(),s&&n.vars.touch&&f.touch(),(!p||p&&n.vars.smoothHeight)&&$(window).bind("resize orientationchange focus",f.resize),n.find("img").attr("draggable","false"),setTimeout(function(){n.vars.start(n)},200)},asNav:{setup:function(){n.asNav=!0,n.animatingTo=Math.floor(n.currentSlide/n.move),n.currentItem=n.currentSlide,n.slides.removeClass(i+"active-slide").eq(n.currentItem).addClass(i+"active-slide"),r?(t._slider=n,n.slides.each(function(){var e=this;e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault();var t=$(this),a=t.index();$(n.vars.asNavFor).data("flexslider").animating||t.hasClass("active")||(n.direction=n.currentItem<a?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction,!1,!0,!0))})})):n.slides.on(o,function(e){e.preventDefault();var t=$(this),a=t.index(),r;r=n.vars.rtl?-1*(t.offset().right-$(n).scrollLeft()):t.offset().left-$(n).scrollLeft(),r<=0&&t.hasClass(i+"active-slide")?n.flexAnimate(n.getTarget("prev"),!0):$(n.vars.asNavFor).data("flexslider").animating||t.hasClass(i+"active-slide")||(n.direction=n.currentItem<a?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){n.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var e="thumbnails"===n.vars.controlNav?"control-thumbs":"control-paging",t=1,a,r;if(n.controlNavScaffold=$('<ol class="'+i+"control-nav "+i+e+'"></ol>'),n.pagingCount>1)for(var s=0;s<n.pagingCount;s++){r=n.slides.eq(s),void 0===r.attr("data-thumb-alt")&&r.attr("data-thumb-alt","");var c=""!==r.attr("data-thumb-alt")?c=' alt="'+r.attr("data-thumb-alt")+'"':"";if(a="thumbnails"===n.vars.controlNav?'<img src="'+r.attr("data-thumb")+'"'+c+"/>":'<a href="#">'+t+"</a>","thumbnails"===n.vars.controlNav&&!0===n.vars.thumbCaptions){var d=r.attr("data-thumbcaption");""!==d&&void 0!==d&&(a+='<span class="'+i+'caption">'+d+"</span>")}n.controlNavScaffold.append("<li>"+a+"</li>"),t++}n.controlsContainer?$(n.controlsContainer).append(n.controlNavScaffold):n.append(n.controlNavScaffold),f.controlNav.set(),f.controlNav.active(),n.controlNavScaffold.delegate("a, img",o,function(e){if(e.preventDefault(),""===l||l===e.type){var t=$(this),a=n.controlNav.index(t);t.hasClass(i+"active")||(n.direction=a>n.currentSlide?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction))}""===l&&(l=e.type),f.setToClearWatchedEvent()})},setupManual:function(){n.controlNav=n.manualControls,f.controlNav.active(),n.controlNav.bind(o,function(e){if(e.preventDefault(),""===l||l===e.type){var t=$(this),a=n.controlNav.index(t);t.hasClass(i+"active")||(a>n.currentSlide?n.direction="next":n.direction="prev",n.flexAnimate(a,n.vars.pauseOnAction))}""===l&&(l=e.type),f.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===n.vars.controlNav?"img":"a";n.controlNav=$("."+i+"control-nav li "+e,n.controlsContainer?n.controlsContainer:n)},active:function(){n.controlNav.removeClass(i+"active").eq(n.animatingTo).addClass(i+"active")},update:function(e,t){n.pagingCount>1&&"add"===e?n.controlNavScaffold.append($('<li><a href="#">'+n.count+"</a></li>")):1===n.pagingCount?n.controlNavScaffold.find("li").remove():n.controlNav.eq(t).closest("li").remove(),f.controlNav.set(),n.pagingCount>1&&n.pagingCount!==n.controlNav.length?n.update(t,e):f.controlNav.active()}},directionNav:{setup:function(){var e=$('<ul class="'+i+'direction-nav"><li class="'+i+'nav-prev"><a class="'+i+'prev" href="#">'+n.vars.prevText+'</a></li><li class="'+i+'nav-next"><a class="'+i+'next" href="#">'+n.vars.nextText+"</a></li></ul>");n.customDirectionNav?n.directionNav=n.customDirectionNav:n.controlsContainer?($(n.controlsContainer).append(e),n.directionNav=$("."+i+"direction-nav li a",n.controlsContainer)):(n.append(e),n.directionNav=$("."+i+"direction-nav li a",n)),f.directionNav.update(),n.directionNav.bind(o,function(e){e.preventDefault();var t;""!==l&&l!==e.type||(t=$(this).hasClass(i+"next")?n.getTarget("next"):n.getTarget("prev"),n.flexAnimate(t,n.vars.pauseOnAction)),""===l&&(l=e.type),f.setToClearWatchedEvent()})},update:function(){var e=i+"disabled";1===n.pagingCount?n.directionNav.addClass(e).attr("tabindex","-1"):n.vars.animationLoop?n.directionNav.removeClass(e).removeAttr("tabindex"):0===n.animatingTo?n.directionNav.removeClass(e).filter("."+i+"prev").addClass(e).attr("tabindex","-1"):n.animatingTo===n.last?n.directionNav.removeClass(e).filter("."+i+"next").addClass(e).attr("tabindex","-1"):n.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=$('<div class="'+i+'pauseplay"><a href="#"></a></div>');n.controlsContainer?(n.controlsContainer.append(e),n.pausePlay=$("."+i+"pauseplay a",n.controlsContainer)):(n.append(e),n.pausePlay=$("."+i+"pauseplay a",n)),f.pausePlay.update(n.vars.slideshow?i+"pause":i+"play"),n.pausePlay.bind(o,function(e){e.preventDefault(),""!==l&&l!==e.type||($(this).hasClass(i+"pause")?(n.manualPause=!0,n.manualPlay=!1,n.pause()):(n.manualPause=!1,n.manualPlay=!0,n.play())),""===l&&(l=e.type),f.setToClearWatchedEvent()})},update:function(e){"play"===e?n.pausePlay.removeClass(i+"pause").addClass(i+"play").html(n.vars.playText):n.pausePlay.removeClass(i+"play").addClass(i+"pause").html(n.vars.pauseText)}},touch:function(){function e(e){e.stopPropagation(),n.animating?e.preventDefault():(n.pause(),t._gesture.addPointer(e.pointerId),w=0,c=d?n.h:n.w,f=Number(new Date),l=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c)}function a(e){e.stopPropagation();var a=e.target._slider;if(a){var n=-e.translationX,i=-e.translationY;if(w+=d?i:n,m=(a.vars.rtl?-1:1)*w,x=d?Math.abs(w)<Math.abs(-n):Math.abs(w)<Math.abs(-i),e.detail===e.MSGESTURE_FLAG_INERTIA)return void setImmediate(function(){t._gesture.stop()});(!x||Number(new Date)-f>500)&&(e.preventDefault(),!p&&a.transitions&&(a.vars.animationLoop||(m=w/(0===a.currentSlide&&w<0||a.currentSlide===a.last&&w>0?Math.abs(w)/c+2:1)),a.setProps(l+m,"setTouch")))}}function i(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!x&&null!==m){var a=u?-m:m,n=a>0?t.getTarget("next"):t.getTarget("prev");t.canAdvance(n)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?t.flexAnimate(n,t.vars.pauseOnAction):p||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}s=null,o=null,m=null,l=null,w=0}}var s,o,l,c,m,f,g,h,S,x=!1,y=0,b=0,w=0;r?(t.style.msTouchAction="none",t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",e,!1),t._slider=n,t.addEventListener("MSGestureChange",a,!1),t.addEventListener("MSGestureEnd",i,!1)):(g=function(e){n.animating?e.preventDefault():(window.navigator.msPointerEnabled||1===e.touches.length)&&(n.pause(),c=d?n.h:n.w,f=Number(new Date),y=e.touches[0].pageX,b=e.touches[0].pageY,l=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c,s=d?b:y,o=d?y:b,t.addEventListener("touchmove",h,!1),t.addEventListener("touchend",S,!1))},h=function(e){y=e.touches[0].pageX,b=e.touches[0].pageY,m=d?s-b:(n.vars.rtl?-1:1)*(s-y),x=d?Math.abs(m)<Math.abs(y-o):Math.abs(m)<Math.abs(b-o);var t=500;(!x||Number(new Date)-f>500)&&(e.preventDefault(),!p&&n.transitions&&(n.vars.animationLoop||(m/=0===n.currentSlide&&m<0||n.currentSlide===n.last&&m>0?Math.abs(m)/c+2:1),n.setProps(l+m,"setTouch")))},S=function(e){if(t.removeEventListener("touchmove",h,!1),n.animatingTo===n.currentSlide&&!x&&null!==m){var a=u?-m:m,i=a>0?n.getTarget("next"):n.getTarget("prev");n.canAdvance(i)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?n.flexAnimate(i,n.vars.pauseOnAction):p||n.flexAnimate(n.currentSlide,n.vars.pauseOnAction,!0)}t.removeEventListener("touchend",S,!1),s=null,o=null,m=null,l=null},t.addEventListener("touchstart",g,!1))},resize:function(){!n.animating&&n.is(":visible")&&(v||n.doMath(),p?f.smoothHeight():v?(n.slides.width(n.computedW),n.update(n.pagingCount),n.setProps()):d?(n.viewport.height(n.h),n.setProps(n.h,"setTotal")):(n.vars.smoothHeight&&f.smoothHeight(),n.newSlides.width(n.computedW),n.setProps(n.computedW,"setTotal")))},smoothHeight:function(e){if(!d||p){var t=p?n:n.viewport;e?t.animate({height:n.slides.eq(n.animatingTo).innerHeight()},e):t.innerHeight(n.slides.eq(n.animatingTo).innerHeight())}},sync:function(e){var t=$(n.vars.sync).data("flexslider"),a=n.animatingTo;switch(e){case"animate":t.flexAnimate(a,n.vars.pauseOnAction,!1,!0);break;case"play":t.playing||t.asNav||t.play();break;case"pause":t.pause();break}},uniqueID:function(e){return e.filter("[id]").add(e.find("[id]")).each(function(){var e=$(this);e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var e=f.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){f.pauseInvisible.isHidden()?n.startTimeout?clearTimeout(n.startTimeout):n.pause():n.started?n.play():n.vars.initDelay>0?setTimeout(n.play,n.vars.initDelay):n.play()})}},isHidden:function(){var e=f.pauseInvisible.getHiddenProp();return!!e&&document[e]},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(c),c=setTimeout(function(){l=""},3e3)}},n.flexAnimate=function(e,t,a,r,o){if(n.vars.animationLoop||e===n.currentSlide||(n.direction=e>n.currentSlide?"next":"prev"),m&&1===n.pagingCount&&(n.direction=n.currentItem<e?"next":"prev"),!n.animating&&(n.canAdvance(e,o)||a)&&n.is(":visible")){if(m&&r){var l=$(n.vars.asNavFor).data("flexslider");if(n.atEnd=0===e||e===n.count-1,l.flexAnimate(e,!0,!1,!0,o),n.direction=n.currentItem<e?"next":"prev",l.direction=n.direction,Math.ceil((e+1)/n.visible)-1===n.currentSlide||0===e)return n.currentItem=e,n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),!1;n.currentItem=e,n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),e=Math.floor(e/n.visible)}if(n.animating=!0,n.animatingTo=e,t&&n.pause(),n.vars.before(n),n.syncExists&&!o&&f.sync("animate"),n.vars.controlNav&&f.controlNav.active(),v||n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),n.atEnd=0===e||e===n.last,n.vars.directionNav&&f.directionNav.update(),e===n.last&&(n.vars.end(n),n.vars.animationLoop||n.pause()),p)s?(n.slides.eq(n.currentSlide).css({opacity:0,zIndex:1}),n.slides.eq(e).css({opacity:1,zIndex:2}),n.wrapup(c)):(n.slides.eq(n.currentSlide).css({zIndex:1}).animate({opacity:0},n.vars.animationSpeed,n.vars.easing),n.slides.eq(e).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing,n.wrapup));else{var c=d?n.slides.filter(":first").height():n.computedW,g,h,S;v?(g=n.vars.itemMargin,S=(n.itemW+g)*n.move*n.animatingTo,h=S>n.limit&&1!==n.visible?n.limit:S):h=0===n.currentSlide&&e===n.count-1&&n.vars.animationLoop&&"next"!==n.direction?u?(n.count+n.cloneOffset)*c:0:n.currentSlide===n.last&&0===e&&n.vars.animationLoop&&"prev"!==n.direction?u?0:(n.count+1)*c:u?(n.count-1-e+n.cloneOffset)*c:(e+n.cloneOffset)*c,n.setProps(h,"",n.vars.animationSpeed),n.transitions?(n.vars.animationLoop&&n.atEnd||(n.animating=!1,n.currentSlide=n.animatingTo),n.container.unbind("webkitTransitionEnd transitionend"),n.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(n.ensureAnimationEnd),n.wrapup(c)}),clearTimeout(n.ensureAnimationEnd),n.ensureAnimationEnd=setTimeout(function(){n.wrapup(c)},n.vars.animationSpeed+100)):n.container.animate(n.args,n.vars.animationSpeed,n.vars.easing,function(){n.wrapup(c)})}n.vars.smoothHeight&&f.smoothHeight(n.vars.animationSpeed)}},n.wrapup=function(e){p||v||(0===n.currentSlide&&n.animatingTo===n.last&&n.vars.animationLoop?n.setProps(e,"jumpEnd"):n.currentSlide===n.last&&0===n.animatingTo&&n.vars.animationLoop&&n.setProps(e,"jumpStart")),n.animating=!1,n.currentSlide=n.animatingTo,n.vars.after(n)},n.animateSlides=function(){!n.animating&&e&&n.flexAnimate(n.getTarget("next"))},n.pause=function(){clearInterval(n.animatedSlides),n.animatedSlides=null,n.playing=!1,n.vars.pausePlay&&f.pausePlay.update("play"),n.syncExists&&f.sync("pause")},n.play=function(){n.playing&&clearInterval(n.animatedSlides),n.animatedSlides=n.animatedSlides||setInterval(n.animateSlides,n.vars.slideshowSpeed),n.started=n.playing=!0,n.vars.pausePlay&&f.pausePlay.update("pause"),n.syncExists&&f.sync("play")},n.stop=function(){n.pause(),n.stopped=!0},n.canAdvance=function(e,t){var a=m?n.pagingCount-1:n.last;return!!t||(!(!m||n.currentItem!==n.count-1||0!==e||"prev"!==n.direction)||(!m||0!==n.currentItem||e!==n.pagingCount-1||"next"===n.direction)&&(!(e===n.currentSlide&&!m)&&(!!n.vars.animationLoop||(!n.atEnd||0!==n.currentSlide||e!==a||"next"===n.direction)&&(!n.atEnd||n.currentSlide!==a||0!==e||"next"!==n.direction))))},n.getTarget=function(e){return n.direction=e,"next"===e?n.currentSlide===n.last?0:n.currentSlide+1:0===n.currentSlide?n.last:n.currentSlide-1},n.setProps=function(e,t,a){var i=function(){var a=e||(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo;return function(){if(v)return"setTouch"===t?e:u&&n.animatingTo===n.last?0:u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:n.animatingTo===n.last?n.limit:a;switch(t){case"setTotal":return u?(n.count-1-n.currentSlide+n.cloneOffset)*e:(n.currentSlide+n.cloneOffset)*e;case"setTouch":return e;case"jumpEnd":return u?e:n.count*e;case"jumpStart":return u?n.count*e:e;default:return e}}()*(n.vars.rtl?1:-1)+"px"}();n.transitions&&(i=n.isFirefox?d?"translate3d(0,"+i+",0)":"translate3d("+parseInt(i)+"px,0,0)":d?"translate3d(0,"+i+",0)":"translate3d("+(n.vars.rtl?-1:1)*parseInt(i)+"px,0,0)",a=void 0!==a?a/1e3+"s":"0s",n.container.css("-"+n.pfx+"-transition-duration",a),n.container.css("transition-duration",a)),n.args[n.prop]=i,(n.transitions||void 0===a)&&n.container.css(n.args),n.container.css("transform",i)},n.setup=function(e){if(p)n.vars.rtl?n.slides.css({width:"100%",float:"right",marginLeft:"-100%",position:"relative"}):n.slides.css({width:"100%",float:"left",marginRight:"-100%",position:"relative"}),"init"===e&&(s?n.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+n.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(n.currentSlide).css({opacity:1,zIndex:2}):0==n.vars.fadeFirstSlide?n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).css({opacity:1}):n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing)),n.vars.smoothHeight&&f.smoothHeight();else{var t,a;"init"===e&&(n.viewport=$('<div class="'+i+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(n).append(n.container),n.cloneCount=0,n.cloneOffset=0,u&&(a=$.makeArray(n.slides).reverse(),n.slides=$(a),n.container.empty().append(n.slides))),n.vars.animationLoop&&!v&&(n.cloneCount=2,n.cloneOffset=1,"init"!==e&&n.container.find(".clone").remove(),n.container.append(f.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(f.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),n.newSlides=$(n.vars.selector,n),t=u?n.count-1-n.currentSlide+n.cloneOffset:n.currentSlide+n.cloneOffset,d&&!v?(n.container.height(200*(n.count+n.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){n.newSlides.css({display:"block"}),n.doMath(),n.viewport.height(n.h),n.setProps(t*n.h,"init")},"init"===e?100:0)):(n.container.width(200*(n.count+n.cloneCount)+"%"),n.setProps(t*n.computedW,"init"),setTimeout(function(){n.doMath(),n.vars.rtl&&n.isFirefox?n.newSlides.css({width:n.computedW,marginRight:n.computedM,float:"right",display:"block"}):n.newSlides.css({width:n.computedW,marginRight:n.computedM,float:"left",display:"block"}),n.vars.smoothHeight&&f.smoothHeight()},"init"===e?100:0))}v||n.slides.removeClass(i+"active-slide").eq(n.currentSlide).addClass(i+"active-slide"),n.vars.init(n)},n.doMath=function(){var e=n.slides.first(),t=n.vars.itemMargin,a=n.vars.minItems,i=n.vars.maxItems;n.w=void 0===n.viewport?n.width():n.viewport.width(),n.isFirefox&&(n.w=n.width()),n.h=e.height(),n.boxPadding=e.outerWidth()-e.width(),v?(n.itemT=n.vars.itemWidth+t,n.itemM=t,n.minW=a?a*n.itemT:n.w,n.maxW=i?i*n.itemT-t:n.w,n.itemW=n.minW>n.w?(n.w-t*(a-1))/a:n.maxW<n.w?(n.w-t*(i-1))/i:n.vars.itemWidth>n.w?n.w:n.vars.itemWidth,n.visible=Math.floor(n.w/n.itemW),n.move=n.vars.move>0&&n.vars.move<n.visible?n.vars.move:n.visible,n.pagingCount=Math.ceil((n.count-n.visible)/n.move+1),n.last=n.pagingCount-1,n.limit=1===n.pagingCount?0:n.vars.itemWidth>n.w?n.itemW*(n.count-1)+t*(n.count-1):(n.itemW+t)*n.count-n.w-t):(n.itemW=n.w,n.itemM=t,n.pagingCount=n.count,n.last=n.count-1),n.computedW=n.itemW-n.boxPadding,n.computedM=n.itemM},n.update=function(e,t){n.doMath(),v||(e<n.currentSlide?n.currentSlide+=1:e<=n.currentSlide&&0!==e&&(n.currentSlide-=1),n.animatingTo=n.currentSlide),n.vars.controlNav&&!n.manualControls&&("add"===t&&!v||n.pagingCount>n.controlNav.length?f.controlNav.update("add"):("remove"===t&&!v||n.pagingCount<n.controlNav.length)&&(v&&n.currentSlide>n.last&&(n.currentSlide-=1,n.animatingTo-=1),f.controlNav.update("remove",n.last))),n.vars.directionNav&&f.directionNav.update()},n.addSlide=function(e,t){var a=$(e);n.count+=1,n.last=n.count-1,d&&u?void 0!==t?n.slides.eq(n.count-t).after(a):n.container.prepend(a):void 0!==t?n.slides.eq(t).before(a):n.container.append(a),n.update(t,"add"),n.slides=$(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.added(n)},n.removeSlide=function(e){var t=isNaN(e)?n.slides.index($(e)):e;n.count-=1,n.last=n.count-1,isNaN(e)?$(e,n.slides).remove():d&&u?n.slides.eq(n.last).remove():n.slides.eq(e).remove(),n.doMath(),n.update(t,"remove"),n.slides=$(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.removed(n)},f.init()},$(window).blur(function(t){e=!1}).focus(function(t){e=!0}),$.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,isFirefox:!1,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){},rtl:!1},$.fn.flexslider=function(e){if(void 0===e&&(e={}),"object"==typeof e)return this.each(function(){var t=$(this),a=e.selector?e.selector:".slides > li",n=t.find(a);1===n.length&&!1===e.allowOneSlide||0===n.length?(n.fadeIn(400),e.start&&e.start(t)):void 0===t.data("flexslider")&&new $.flexslider(this,e)});var t=$(this).data("flexslider");switch(e){case"play":t.play();break;case"pause":t.pause();break;case"stop":t.stop();break;case"next":t.flexAnimate(t.getTarget("next"),!0);break;case"prev":case"previous":t.flexAnimate(t.getTarget("prev"),!0);break;default:"number"==typeof e&&t.flexAnimate(e,!0)}}}(jQuery);
/**
 * Google Preview
 *
 * @author Ryan Chase
 * @version 1.0
 * @url http://www.blastam.com/blog/index.php/2013/03/how-to-track-downloads-in-google-analytics-v2
 */
document.addEventListener('DOMContentLoaded', function(event) {
  var filetypes = /\.(zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i;

  document.querySelector('a').addEventListener('click', function(event) {
    var track = true,
      href = this.href,
      isThisDomain = href.match(document.domain.split('.').reverse()[1] + '.' + document.domain.split('.').reverse()[0]);

    if(!href.match(/^javascript:/i)) {
      var elEv = [];
      elEv.value = 0, elEv.non_i = false;
      if(href.match(/^mailto\:/i)) {
        elEv.category = "email";
        elEv.action = "click";
        elEv.label = href.replace(/^mailto\:/i, '');
        elEv.loc = href;
      } else if(href.match(filetypes)) {
        var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
        elEv.category = "download";
        elEv.action = "click-" + extension[0];
        elEv.label = href.replace(/ /g, "-");
        elEv.loc = href;
      } else if(href.match(/^https?\:/i) && !isThisDomain) {
        elEv.category = "external";
        elEv.action = "click";
        elEv.label = href.replace(/^https?\:\/\//i, '');
        elEv.non_i = true;
        elEv.loc = href;
      } else if(href.match(/^tel\:/i)) {
        elEv.category = "telephone";
        elEv.action = "click";
        elEv.label = href.replace(/^tel\:/i, '');
        elEv.loc = href;
      } else track = false;

      if(track) {
        ga('send', 'event', elEv.category.toLowerCase(), elEv.action.toLowerCase(), elEv.label.toLowerCase(), elEv.value, {'nonInteraction': elEv.non_i});
      }
    }
  });
});

//TEST-Flag; true = Simulation Mobil-Gerät auf Desktop-Browsern
var DISABLE_MOBILE_DETECT = false;
var bodyScrollTop = 0;
var currMouseY;
var SHOW_HEADER_UNTIL_MOUSE_Y = 100;
var SHOW_HEADER_UNTIL_DOC_SCROLL_Y = 0;
var platform; //desk / mobil / desk-xs
var viewport_width = document.documentElement.clientWidth;


function obscureAddMid() {
        document.write('@');
}
function obscureAddEnd() {
        document.write('.');
}

  $( function() {
    $( ".resizable" ).resizable({
       handles: 'e, w',
       minWidth: 400,
       maxWidth: viewport_width-400
    });
  } );
  

var iframeIds = [];

   



$(document).ready(function(){

  init();
  showMaskVideo();
  
  $('input[autocomplete="new-powermail-hp"]').attr('aria-hidden', 'true');
  
  $('.news-list-view.person-register').prepend('<div class="person-register-liveregion sr-only" role="status" aria-live="polite" aria-atomic="true"></div>');

    //contrast-button   

    $('.accessibility-switch').on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    
    var stored_data = window.lastStored || JSON.parse( window.localStorage.getItem("hfbk") || window.sessionStorage.getItem("hfbk") || getCookie('hfbk') );

    if(!!stored_data.contrast && stored_data.contrast === 1) {
      stored_data.contrast = 0; 
      if($('body').hasClass("contrast")) {
        $('body').removeClass("contrast");
        $('body').addClass("default");
      }
                if(!!$('body').attr('data-old-colortheme')) {
                    $('body').attr('data-colortheme', $('body').attr('data-old-colortheme')).removeAttr('data-old-colortheme');
                }      
      
    } else {
      stored_data.contrast = 1;
        $('body').addClass("contrast");
        $('body').attr('data-old-colortheme', $('body').attr('data-colortheme')).removeAttr('data-colortheme');
    }

    try {
      window.localStorage.setItem("hfbk", JSON.stringify(stored_data));
    } catch(e) {
      //alert(e);
    }

    try {
      window.sessionStorage.setItem("hfbk", JSON.stringify(stored_data));
    } catch(e) {
      //alert(e);
    }

    try {
      setCookie("hfbk", JSON.stringify(stored_data), 1);
    } catch(e) {
      //alert(e);
    }
  });   

      
    $('form.date-menu').on('submit', function(e) {
        e.preventDefault;
              
        var url = $(this).find('select').val();
        if(url) {
            console.log('    success');
            location.href = url;
        }
        
        return false;
    });

    
    $('.scrollbox').on("resize, scroll",function(){
      if ($('.scrollbox').scrollTop()>150) {
         $('#top-link').addClass('show');


      } else {
        $('#top-link').removeClass('show');
      }
    });


        

  /*menue*/
  /*
  $('.slide').on( "click", function() {
      
      if ($('.menue').hasClass('active')) {
        //$('.dropdown').addClass('panelout');
      //  $('.location-selection').addClass('panelout');
           //   $('.active').addClass('open blubber');
              setTimeout( function() {
                  //$('.active').addClass('open');
              }, 10);
      //  $('.sub_navi').addClass('slide');
      } else {
      
        $('.dropdown').removeClass('panelout');
        $('.location-selection').removeClass('panelout');
      }
      
    });
*/
/*
    $('[data-submenu]').submenupicker();
    

    $('.dropdown .dropdown-button').on( "click", function() {
      if ($('.dropdown').hasClass('panelout')) {
        $('.dropdown').removeClass('panelout').fadeIn(1000);
        $('.location-selection').removeClass('panelout');
        //$('.sub_navi').css( "left","0" );
      } else {
        $('.dropdown').addClass('panelout');
        $('.location-selection').addClass('panelout');
        $(".sub_navi").addClass('slide');
      }
    });


    $('.dropdown-subbutton').on( "click", function() {
      if ($('.dropdown-menu .menue').hasClass('panelout')) {
        $('.dropdown-menu .menue').removeClass('panelout');
        //$('.location-selection').removeClass('panelout');
        if ($('.dropdown').hasClass('open')) {
          $('.dropdown').children('a').css('display', 'block');
        }
        //$('.dropdown').addClass('open');
      } else {
        $('.dropdown-menu .menue').addClass('panelout');
        $('.location-selection').addClass('panelout');
        $(".sub_navi2").addClass('slide');
        if ($('.dropdown').hasClass('open')) {
          $('.dropdown').children('a').css('display', 'none');
        }
      }
    });  
*/
  /*fancy*/
  $('.fancybox').fancybox({
      loop     : true,
      caption : function( instance, item ) {
        return $(this).find('img').attr('title');
      }      
  });

/* Suche ein- ausblenden*/
  $('#searchbutton').on( "click", function() {
    $("#suchbox").toggle("slide");
    $('#ke_search_searchfield_sword').focus();
  })  
  $('.searchbox-button').on( "click", function() {
    $('#suchbox').hide();
  })


/*Suchfeld bei Eingabe ausdehnen*/
var initialWidth = $("#ke_search_searchfield_sword").width();
$("#ke_search_searchfield_sword").keydown( function(event) {
   var charWidth = 8.5;
   var elemwidth = $(this).val().length*charWidth;
   if ($(this).width() < elemwidth)
   {   
       $(this).width(elemwidth);
       
   } else {
       //$(this).width(initialWidth );
   }


});

//resize flexslider in accordion
$('.card-collapse').on('shown.bs.collapse', function(e) {
  var picslider = $('.flexslider').data('flexslider'); 
  picslider.resize();
});

//link-klasse je nach fileextension setzen
$("a").each(function(){
    var match = this.href.match(/\.([a-zA-Z0-9]{2,4})([#;?]|$)/);
    if(match){
        if(match[1]!="pdf") {
          $(this).addClass("linkIcon-" + match[1]);                  
        }
        else $(this).addClass("linkIcon-" + match[1]);        
    }
});

$('.panel-collapse').on('shown.bs.collapse', function(e) {
    var $panel = $(this).closest('.panel');
    $('html,body').animate({
      scrollTop: $panel.offset().top-95
    }, 800);
  });


$('.content-type-video button.accept').on('click', function(){
   showMaskVideo();
});

        /**
         * toggle list view for person register
         */

        $('.switch_view-wrapper').on('click', 'button', function(e){

            e.stopPropagation();
            e.preventDefault();
            
            if($('.person-register').length) {
              var id = $('.person-register').first().data('id');
  
              var stored_data = window.lastStored || JSON.parse( window.localStorage.getItem(id));
              if(!stored_data) {
                stored_data = {};
              }
  
              if(!!stored_data.personregisterview && stored_data.personregisterview === "list") {
                  stored_data.personregisterview = "vcard";
              } else {
                  stored_data.personregisterview = "list";
              }
                
                $('.person-register h3').each(function(i,elem) {
                    $(elem).children('a, span').text( $(elem).data(stored_data.personregisterview) );
                });
  
              $('.person-register').attr('data-view', stored_data.personregisterview);
              $('button.switch_view').attr('data-view', stored_data.personregisterview);
  
              window.localStorage.setItem(id, JSON.stringify(stored_data));
            }
        });



        /**
         * select a category to filter register of persons
         */

        var filtered_categories = [];
        var removeValueFromArray = function(array, value) {
            var found;
            while ((found = array.indexOf(value, found)) !== -1) {
                array.splice(found, 1);
            }
            return array;
        };

        $('.category-wrapper').on('click', '.dropdown-menu a', function(e) {

            e.stopPropagation();
            e.preventDefault();

//            console.log("~~~~~ filter clicked");

            var $clicked = $(this);
            var category = $clicked.data('value');
            var select = $clicked.closest('.dropdown').data('index');


            
            /* deactivate other filters --- start */
            $('#person-search').val('').trigger('change');
            $('.category-wrapper button, #person-search').removeClass('active');
            $clicked.closest('.dropdown-menu').prev('button').addClass('active');
            $('.category-wrapper button:not(.active) + .dropdown-menu a.option.selected:not(.all)').each(function(i, option) {
                var cat = $(option).data('value');
                var sel = $(option).closest('.dropdown').data('index');
                filtered_categories[sel] = removeValueFromArray(filtered_categories[sel], cat);
                $(option).removeClass('selected');
            });
            /* deactivate other filters --- end */



            if($clicked.hasClass('selected')) {

                if($clicked.hasClass("all")) {
                    $clicked.closest('.dropdown-menu').find('a.option.selected').trigger('click');

                } else {
//                    var $all_link = $clicked.closest('.dropdown-menu').find('a.all');
//                    if($all_link.hasClass('selected')) {
//                        $all_link.removeClass('selected');
//                        filtered_categories = filterByCategory(filtered_categories, "0");
//                    }
                    $clicked.closest('.dropdown-menu').find('a.all.selected').removeClass('selected');
                    filtered_categories[select] = removeValueFromArray(filtered_categories[select], category);
                }

                $clicked.removeClass('selected');

            } else {

                if($clicked.hasClass("all")) {
                    $clicked.closest('.dropdown-menu').find('a.option:not(.selected)').trigger('click');

                } else {
                    if(!!filtered_categories[select] === false) {
                        filtered_categories[select] = [];
                    }
                    filtered_categories[select].push(category);
                }

                $clicked.addClass('selected');
                if($clicked.closest('.dropdown-menu').find('a.option:not(.selected)').length === 0) {
                    $clicked.closest('.dropdown-menu').find('a.all').addClass('selected');
                }

            }

            var new_label = $clicked.closest('.dropdown-menu').find('a.option.selected').map(function() { return $(this).text(); }).get().join(', ');

//            console.log("~~~~~ filtering for", filtered_categories);
//            console.log("      ", new_label);

            var merged = [].concat.apply([], filtered_categories).join("");

//            console.log("      merged =", merged);

            if(merged.length) {
                $('.news-list-view .news-list-item')
                    .addClass('hidden-by-category')
                    .filter( function(index) {
                        for (var key in filtered_categories) {
                            var filter_cat = filtered_categories[key];
                            var found = false;

                            if(filter_cat.length) {
    //                            console.log("~~~~~ comparing item:", filter_cat, $(this).data('categories'));
                                for (var index in filter_cat) {
                                    var filter_cat_item = filter_cat[index];
                                    var filter_regex = new RegExp("(--|^)" + filter_cat_item + "(--|$)");
//                                    console.log('~~~~~ filter:', filter_regex, $(this).data('categories'));
//                                    if($(this).data('categories').indexOf(filter_cat_item) !== -1) {
                                    if($(this).data('categories').match(filter_regex)) {
                                        found = true;
                                        break;
                                    }
                                }

                                if(!found) {
                                    return false;
                                }
                            }
                        }
                        return true;
                    })
                    .removeClass('hidden-by-category');
					
                     if($('.person-register .news-list-item:not(.hidden-by-category)').length) {

                      var personen_anzahl = $('.person-register .news-list-item:not(.hidden-by-category)').length;

                      $('.news-list-view.person-register').find('.person-register-liveregion').html('Es werden '+personen_anzahl+' Personen angezeigt.');
                     } else {
                       $('.news-list-view.person-register').find('.person-register-liveregion').html('Es werden keine Personen angezeigt.');
                     } 					
            
            } else {
                $('.news-list-view .news-list-item').removeClass('hidden-by-category');
                
            
                /* deactivate other filters --- start */
                $clicked.closest('.dropdown-menu').prev('button').removeClass('active');
                /* deactivate other filters --- end */
            }
        });



        /**
         * filter register of persons according to search input
         */

        var $personSearch = $('#person-search');
        if($personSearch.length) {

            /* Save current value of element */
            $personSearch.data('oldVal', $personSearch.val());

            /* Look for changes in the value */
            $('#person-search').on('propertychange change click keyup input paste', function() {

                /* If value has changed... */
                var new_val = $personSearch.val();
                if ($personSearch.data('oldVal') != new_val) {
            
            
                    /* deactivate other filters --- start */
                    $('.category-wrapper button').removeClass('active');
                    $('.category-wrapper .dropdown-menu a.option.selected').each(function(i, option) {
                        var cat = $(option).data('value');
                        var sel = $(option).closest('.dropdown').data('index');
                        filtered_categories[sel] = removeValueFromArray(filtered_categories[sel], cat);
                        $(option).removeClass('selected');
                    });
                    $('.person-register .news-list-item').removeClass('hidden-by-category');
                    $('#person-search').addClass('active');
                    /* deactivate other filters --- end */
            
            

                    /* Updated stored value */
                    $personSearch.data('oldVal', new_val);

                    /* Do action */
                    if(new_val.length) {
                    $('.person-register .news-list-item')
                        .addClass('hidden-by-search')
                        .filter(function(index, elem) {
                            var content = $(elem).html()
                                            .toLowerCase()
                                            .replace(/\<.*?\>/g, " ") // replace all tags including their attributes with whitespace
                                            .replace(/[\r\n]+/g, " ") // replace all line breaks with whitespace
                                            .replace(/\s+/g, " ") // replace all kinds of (multiple) whitespaces with a single default whitespace
                                            .replace(/[^0-9a-z\u0080-\u00FF ]+/g, ""); // strip all non default unicode alphanumeric characters

//                            console.log("~~~~~ item:", $(elem).text());

                            var found = false;
                            $.each(new_val.toLowerCase().split(","), function(i, val) {
                                var search = val.trim();
//                                console.log("~~~~~ filter:", content, search, content.indexOf(search));
                                if(search.length && content.indexOf(search) > -1) {
                                    found = true;
                                    return true;
                                }
                            });
                            return found;
                        })
                        .removeClass('hidden-by-search');
						
                     if($('.person-register .news-list-item:not(.hidden-by-search)').length) {

                      var personen_anzahl = $('.person-register .news-list-item:not(.hidden-by-search)').length;

                      $('.news-list-view.person-register').find('.person-register-liveregion').html('Es werden '+personen_anzahl+' Personen angezeigt.');
                     } else {
                       $('.news-list-view.person-register').find('.person-register-liveregion').html('Es werden keine Personen angezeigt.');
                     }						

                    } else {
                        $('.person-register .news-list-item').removeClass('hidden-by-search');
                    }
                }
            });
        }


        /**
         * add capital letter anchors to person register list view
         */
        
        if( $('.switch_view-wrapper').length > 0 ) {
            
            console.info('found switch_view-wrapper');
            
            $('button.switch_view').attr('data-view', $('.person-register').first().data('view') );
            
            var person_letters = [];
            var $person_list = $('foobar');

            $('.person-register .news-list-item h2').each( function(i, elem) {

                if(!$person_list.length) {
                    $person_list = $(elem).closest('.news.persons');
                }

                var firstChar = $(elem).data('list');
                firstChar = firstChar.substr(0, 1);

                if($.inArray(firstChar, person_letters) == -1) {
                    person_letters.push(firstChar);
                    $('<span />', {
                        'id' : "letter_" + firstChar
                    }).insertBefore($(elem));
                }
            });

            if(person_letters.length >= 1) {

                $person_list.prepend( $('<div />', {
                    'class' : "col-xs-12 letter-anchors"
                }));
                $person_list.append( $('<div />', {
                    'class' : "col-xs-12 letter-anchors"
                }));
                for(var i in person_letters) {
                    $('<a />', {
                        'class' : "btn btn-default letter-anchor",
                        'html' : person_letters[i],
                        'href' : '//' + location.host + location.pathname + location.search + "#letter_" + person_letters[i]
                    }).appendTo('.letter-anchors')
                }
            }
        } else {
			console.log('nichts gefunden');
		}

/*scroll to element with anchor*/
$(document).on("click","a.site-anchor, a.letter-anchor",function(e){  
if ($(this).attr('href').match('#')){
  event.preventDefault();

  $('.scrollbox').animate({
            scrollTop: $("#"+$(this).attr('href').split('#')[1]).offset().top-100
            }, 1200);  


    /*$("#content").mCustomScrollbar("scrollTo",$("#"+$(this).attr('href').split('#')[1]));
      
    if ($(("#content").mCustomScrollbar("scrollTo",$("#heading"+$(this).attr('href').split('#')[1])).length)) {
       $("#content").mCustomScrollbar("scrollTo",$("#heading"+$(this).attr('href').split('#')[1]).substring(1));
    }

    */
}
  
});

//opens link with pdf in new window
$(function() {
    $('a[href$=".pdf"]').prop('target', '_blank');
    $('a[href$=".html"]').prop('target', '_blank');
});

/*$("a.site-anchor, a.letter-anchor").click(function( event) {  
if ($(this).attr('href').match('#')){
  event.preventDefault();
  $("#content").mCustomScrollbar("scrollTo",$("#"+$(this).attr('href').split('#')[1]));
}
});

$("a.crosssite-anchor").click(function( event) {  
if ($(this).attr('href').match('#')){  
  $("#content").mCustomScrollbar("scrollTo",$("#"+$(this).attr('href').split('#')[1]));
  $('html,body').animate({
          scrollTop: $("#"+$(this).attr('href').split('#')[1]).offset().top
          }, 800);  
}
});
*/

/*
  // Opening accordion based on URL and scroll into view
  var url = document.location.toString();

  if ( url.match('#') ) {
      
      var $anchor = $('#'+url.split('#')[1]);
      
      //normaler anker
      $("#content").mCustomScrollbar("scrollTo",$anchor);

     /*$('html,body').animate({
          scrollTop: $anchor.offset().top-100
        }, 800);*/
  /*} else {
    //console.log('not');
    $("#main-content .panel-collapse").each(function(index, element){
      $(element).addClass(index == 0 ? "in" : "");
    }); 
  }
  */


})



window.addEventListener("load", function(){
  
  //remove switch_view-wrapper
 // $('.switch_view-wrapper').remove();
    
  
  //doppelte IDs in CE der Accordions beheben

  $('.collapse .card-body div').each(function(){
    if(this.id){
    this.id = "card-"+this.id;
    }
  });  
  

 /*breiter flexslider-content*/
 $('.wsflexslider-style2').closest('.flexslider').find('.flex-direction-nav').addClass('style2');


  //scroll to top Button  
  $( "#content" ).append( '<a id="top-link"><span class="sr-only sr-only-focusable">zum Seitenanfang</span></a>' );
  var topbtn = $('#top-link');

 $('#top-link').on('click',function () {
                   
            $('.scrollbox').animate({
                scrollTop: 0
            }, 1000);
          }); 


/*
  topbtn.on('click', function(e) {
    e.preventDefault();
    $("#content").mCustomScrollbar("scrollTo", "top");
  });  
*/


if (location.hash) {
  //$("#content").mCustomScrollbar("scrollTo",location.hash);
 
 $('.scrollbox').animate({
            scrollTop: $(''+location.hash+'').offset().top-100
            }, 1200);        
  }

});

function showMaskVideo() {

/**video mit mask**/
        if( $( '.hfbk-video .embed-responsive' ).length > 0 ) {
        
        loadScript();

      //   var tag = document.createElement('script');

      //tag.src = "https://www.youtube.com/iframe_api";
      //var firstScriptTag = document.getElementsByTagName('script')[0];
      //firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);       

// Init empty array of iframe IDs, one from each video
                    
                    var x = 1;
                    // For each iframe you find, add its ID to the iframeIds array
                    var iframes = document.querySelectorAll(".hfbk-video .video_trigger");

                      $(".hfbk-video .video_trigger").each(function (n) {
                      
                      iframeIds[x] = {};
                      iframeIds[x]['player'] = $(this).attr('data-id');
                      iframeIds[x]['video'] = $(this).attr('data-source');
                      x++;
                    });      

                      console.log(iframeIds);
                
                $( '.hfbk-video .embed-responsive' ).each( function() {
                    v_wrapper = $( this );
                    v_trigger = $( this ).find( '.video_trigger');
                    v_trigger.hide();

                   //v_wrapper.children( '.video_layer' ).show().children( 'iframe' ).attr( 'src', 'https://www.youtube-nocookie.com/embed/' + v_trigger.attr( 'data-source' ) + '?rel=0&controls=1&showinfo=0&autoplay=0' );
                    v_wrapper.children( '.video_layer' ).show();
                                    
                });

                //onYouTubeIframeAPIReady();
                window.onYouTubePlayerAPIReady = function() {
                                onYouTubeIframeAPIReady();
                            };

        }  
}


function init() {

    checkPlatform();


  if($(window).width() < 992) {
    //infobox in accordion umwandeln
    $('.infobox .content').wrapAll('<div class="card"/>');
    $('.infobox .card').wrapAll('<div class="accordion"/>');       
    $('.infobox .accordion').attr('id','accordion-infobox').attr('role','tablist').attr('aria-multiselectable','true')
    
    $('.infobox .content header').wrapAll('<div class="card-header"/>');

    $('.infobox .content .col-lg-12').wrapAll('<div class="card-body"/>');
    $('.infobox .content .card-header').attr('id', 'header-infobox').detach().prependTo(".infobox .card");

    var headline = $('.infobox .card-header header h2').text();
    $('.infobox .card-header header h2').wrap('<h2 class="card-title"><a role="button" class="collapsed" data-toggle="collapse" data-parent="#accordion-infobox" href="#collapse-infobox" aria-controls="collapse-infobox">'+headline+'<span class="accordion-down pull-right"></span></a></h2>');
    $('.infobox .card-header .accordion-down h2').remove();

    $('.infobox .content').removeAttr('id').attr('id', 'collapse-infobox').attr('role','tabpanel').attr('aria-labelledby','header-infobox').addClass('card-collapse collapse');
    $('.infobox .card-body > div').attr('id', 'infobox');

  }   

    /*$('#main-content .row .default').addClass("content-hidden").viewportChecker({
        classToAdd: 'content-visible animated fadeIn', // Class to add to the elements when they are visible
        offset: 0    
    });   
    */

}

function checkPlatform () {

    platform = "desk";

    if(!DISABLE_MOBILE_DETECT){

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            platform = "mobil";

            if (window.innerWidth <= 768) {              
              //$("#content").mCustomScrollbar("destroy");
            }
        }else{
            if (window.innerWidth < 768) {
                platform = "desk-xs";
            }
        }
    }else{
        platform = "mobil";
    }

    $('html').removeClass().addClass(platform);

}

  function loadScript() {
                        if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
                            var tag = document.createElement('script');
                            tag.src = "https://www.youtube.com/iframe_api";
                            var firstScriptTag = document.getElementsByTagName('script')[0];
                            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                        }
                    }


// Init empty array of iframe YT objects for use elsewhere
// Here I only use this to iterate through and pause all videos when
// another begins playing
var iframeObjects = [];
var player;

// Shared onReady event which adds events to each video's corresponding
// play and stop buttons
function onPlayerReady(event) {
  var iframeObject = event.target;
 
  // Push current iframe object to array
  iframeObjects.push(iframeObject);

  iframeObjects.forEach(function(scopediframeObject) {
      //scopediframeObject.playVideo();
  });  
}

function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
        var iframeObject = event.target;
 
        // Push current iframe object to array
        iframeObjects.push(iframeObject);

        //console.log(iframeObjects);

        iframeObjects.forEach(function(scopediframeObject) {
            scopediframeObject.seekTo(0);
            scopediframeObject.stopVideo();
            //player.seekTo(0);
            //player.stopVideo();             
         });  
         
        }
}

// Once the YouTube API is ready, for each iframeId in your array, create
// a new YT player and give it the onReady event
function onYouTubeIframeAPIReady() {
  iframeIds.forEach(function(iframeId) {
    var video = iframeId['video'];

    player = new YT.Player(iframeId['player'], {
          height: '360',
          width: '640',
          videoId: video,
          host: 'https://www.youtube-nocookie.com',
          playerVars: { 'autoplay': 0, 'rel': 0 , 'showinfo': 0},          
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange          
      }
    });
  });
}



