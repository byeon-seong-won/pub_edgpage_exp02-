class StickyNavigation {
	
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		let self = this;
		$('.et-hero-tab').click(function() { 
			self.onTabClick(event, $(this)); 
		});
		$(window).scroll(() => { this.onScroll(); });
		$(window).resize(() => { this.onResize(); });
	}
	
	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
	}
	
	onScroll() {
		this.checkTabContainerPosition();
    this.findCurrentTabSelector();
	}
	
	onResize() {
		if(this.currentId) {
			this.setSliderCss();
		}
	}
	
	checkTabContainerPosition() {
		let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
		if($(window).scrollTop() > offset) {
			$('#wrap header').addClass('up');
			$('.et-hero-tabs-container-wrap').addClass('et-hero-tabs-container-wrap--top');
		} 
		else {
			$('#wrap header').removeClass('up');
			$('.et-hero-tabs-container-wrap').removeClass('et-hero-tabs-container-wrap--top');
		}
	}
	
	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.et-hero-tab').each(function() {
			let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
			if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
				newCurrentId = id;
				newCurrentTab = $(this);
				// console.log("newCurrentId" + newCurrentId)
			}
		});
		if(this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss(newCurrentId);
		}
	}
	
	setSliderCss(newCurrentId) {
		let width = 0;
		let left = 0;
		let height = 0;
		// if(this.currentTab) {
		// 	width = this.currentTab.css('width');
		// 	height = this.currentTab.css('height');
		// 	left = this.currentTab.offset().left;
		// 	console.log(left)
		// }
		// $('.et-hero-tab-slider').css({'width': width, 'height':height , "z-index" : "-1"});
		// $('.et-hero-tab-slider').css('left', left);

		if(this.currentTab) {
			// console.log("여기탔음", "newCurrentId" + newCurrentId)
			let idx = newCurrentId;

			if(idx == '#tab01') {
				$('#tabmenu01').addClass('on');
				$('#tabmenu02').removeClass('on')
				$('#tabmenu03').removeClass('on')
				$('#tabmenu04').removeClass('on')

			} else if(idx == '#tab02') {
				$('#tabmenu01').removeClass('on');
				$('#tabmenu02').addClass('on')
				$('#tabmenu03').removeClass('on')
				$('#tabmenu04').removeClass('on')
	
			} else if(idx == '#tab03') {
				$('#tabmenu01').removeClass('on');
				$('#tabmenu02').removeClass('on')
				$('#tabmenu03').addClass('on')
				$('#tabmenu04').removeClass('on')

			} else if(idx == '#tab04') {
				$('#tabmenu01').removeClass('on');
				$('#tabmenu02').removeClass('on')
				$('#tabmenu03').removeClass('on')
				$('#tabmenu04').addClass('on')
	
			}		
		}
	}
	
}

new StickyNavigation();




// 라디오 버튼 클릭 시
$('.idx_tab04_con02_tx label').click(function(){
    $(this).find('em').addClass('checked');
	$(this).siblings().find('em').removeClass('checked')
});




