app.adapters.activity = (function () {

    var findById = function (id) {
            var deferred = $.Deferred();
            var activity = null;
            var l = activities.length;
            for (var i = 0; i < l; i++) {
                if (activities[i].id === id) {
                    activity = activities[i];
                    break;
                }
            }
            deferred.resolve(activity);
            return deferred.promise();
        },
    
    	findByType = function (searchKey) {
            var deferred = $.Deferred(),
                activities = JSON.parse(window.localStorage.getItem("activities")),
                results = activities.filter(function (element) {
                    return element.type.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
                });
            deferred.resolve(results);
            return deferred.promise();
        },

        findByTime = function (time) {
            var deferred = $.Deferred(),
                activities = JSON.parse(window.localStorage.getItem("activities")),
                results = activities.filter(function (element) {
                    return element.time.toLowerCase().indexOf(time.toLowerCase()) > -1;
                });
            deferred.resolve(results);
            return deferred.promise();
        },
        
        activities = [
            {"id": 1, "type": "Cart Create", "time": "2014-03-09 14:34:52", "title": "New cart creation"},
            {"id": 2, "type": "Order Payment", "time": "2014-03-08 4:16:12", "title": "Sheryl Just Placed an order"},
            {"id": 3, "type": "Customer Update", "time": "2014-03-08 12:39:42", "title": "John Doe Signed Up"}
        ];
        
       
    
    	//window.localStorage.setItem("activities", activities);
    	
    	console.log(activities);

		//activities = app._activities;
		
        

    // The public API
    return {
    	findById: findById,
        findByType: findByType,
        findByTime: findByTime
    };

}());