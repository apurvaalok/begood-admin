var app = {
    views: {},
    models: {},
    routers: {},
    utils: {},
    adapters: {},
    _activities: new Array()
};

$(document).on("ready", function () {
    app.router = new app.routers.AppRouter();
    /*$.ajax({ 
			url: 'http://app.begoodclothes.com/api/',
			data: {
				request: 'activities', 
				limit: '250'
			},
			dataType: "json",
			type: 'POST',
			crossDomain: true,
			success: function(status) { 
				console.log(status);
				var activity;
				status.activities.forEach(function(product) {
					activity = {"id": activity.id, "type": activity.type, "title": activity.title, "time": activity.time},
					app._activities.push(activity);	
				});
				console.log(app._activities);
				app.utils.templates.load(["HomeView", "ActivityView", "ActivityListItemView"],
					function () {
						app.router = new app.routers.AppRouter();
						Backbone.history.start();
					});
			},
			error: function(status) {
				$('.scroller', this.el).append('Error getting Activities');
				console.log(status);
				
			}
	}); */ 
	app.utils.templates.load(["HomeView", "ActivityView", "ActivityListItemView"],
					function () {
						app.router = new app.routers.AppRouter();
						Backbone.history.start();
					});
});