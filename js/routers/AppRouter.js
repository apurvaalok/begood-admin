app.routers.AppRouter = Backbone.Router.extend({

    routes: {
        "":                        "home",
        "products/:id":            "activityDetails",
    },

    initialize: function () {
        app.slider = new PageSlider($('body'));

    },

    home: function () {
        // Since the home view never changes, we instantiate it and render it only once
        if (!app.homeView) {
            app.homeView = new app.views.HomeView();
            app.homeView.render();
        } else {
            console.log('reusing home view');
            app.homeView.delegateEvents(); // delegate events when the view is recycled
        }
        app.slider.slidePage(app.homeView.$el);
    },

    activityDetails: function (id) {
        var product = new app.models.Activity({id: id});
        activity.fetch({
            success: function (data) {
                // Note that we could also 'recycle' the same instance of ActivityFullView
                // instead of creating new instances
                app.slider.slidePage(new app.views.ActivityView({model: data}).render().$el);
            }
        });
    }

});