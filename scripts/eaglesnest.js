$( document ).ready(function() {
    function sortNew() 
    {
        var eaglesList = $('#eaglesList');
        eaglesList.find('.eaglesItems').sort(function(a, b) 
        {   
            var x = $(a).attr("data-order"); 			
            var y = $(b).attr("data-order"); 			
            if (x > y) 
            {
                return -1;
            } 			
            if (x < y) 
            {
                return 1;
            } 			
            return 0; 				
        }
        ).appendTo(eaglesList);	  
    }
    function sortOld() 
    {
        var eaglesList = $('#eaglesList');
        eaglesList.find('.eaglesItems').sort(function(a, b) 
        {   
            var x = $(a).attr("data-order"); 			
            var y = $(b).attr("data-order"); 			
            if (x < y) 
            {
                return -1;
            } 			
            if (x > y) 
            {
                return 1;
            } 			
            return 0; 				
        }
        ).appendTo(eaglesList);	  
    }
    function nameAZ() 
    {
        var eaglesList = $('#eaglesList');
        eaglesList.find('.eaglesItems').sort(function(a, b) 
        {   
            var x = $(a).attr("data-lastName"); 			
            var y = $(b).attr("data-lastName"); 			
            if (x < y) 
            {
                return -1;
            } 			
            if (x > y) 
            {
                return 1;
            } 			
            return 0; 				
        }
        ).appendTo(eaglesList);	  
    }
    function nameZA() 
    {
        var eaglesList = $('#eaglesList');
        eaglesList.find('.eaglesItems').sort(function(a, b) 
        {   
            var x = $(a).attr("data-lastName"); 			
            var y = $(b).attr("data-lastName"); 			
            if (x > y) 
            {
                return -1;
            } 			
            if (x < y) 
            {
                return 1;
            } 			
            return 0; 				
        }
        ).appendTo(eaglesList);	  
    }
    function test(selectedValue){
        if(selectedValue === 'sortOld')
        {
            sortOld();
        }
        else if (selectedValue === 'sortNew'){
            sortNew();
        }
        else if(selectedValue === 'nameAZ') {
            nameAZ();
        }
        else{
            nameZA();
        }
    }
    $('.eaglesContent').hide();
    $('.eaglesTitle').click(function(){
        $(this).find('img').toggleClass('expandActive');
        $(this).next('.eaglesContent').slideToggle();
    })
})