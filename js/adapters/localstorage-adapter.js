app.adapters.activity = (function () {

    console.log("Loading localstorage adapter module");

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
        };


    
     window.localStorage.setItem("activities", app._products);

        // The public API
    return {
    	findById: findById,
        findByType: findByType,
        findByTime: findByTime
    };


}());