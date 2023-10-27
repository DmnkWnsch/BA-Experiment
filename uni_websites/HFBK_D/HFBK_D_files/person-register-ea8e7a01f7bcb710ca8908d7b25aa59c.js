window.pers_reg_view = "";

;(function(window, document) {
//	console.log($('.person-register').first().data('id'));
	
	if($('.person-register').length) {
		var id = $('.person-register').first().data('id');

		var stored_data = window.lastStored || JSON.parse( window.localStorage.getItem(id));
		if(!stored_data) {
        	stored_data = {};
        }
	    var last_personregisterview = $('.person-register').first().data('view');

	    if(!!stored_data && stored_data.personregisterview) {
	        last_personregisterview = stored_data.personregisterview;
	    } else {
//	    	stored_data = {};
	        stored_data.personregisterview = last_personregisterview
	        window.localStorage.setItem(id, JSON.stringify(stored_data));
	    }

	    var pers_reg_view = document.createAttribute("data-view");
	        pers_reg_view.value = last_personregisterview;

	    window.pers_reg_view = pers_reg_view
	}
	

}(window, document));