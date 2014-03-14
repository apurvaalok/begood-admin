app.models.Activity = Backbone.Model.extend({

    initialize:function () {
        this.type = new app.models.TypeCollection();
    },

    sync: function(method, model, options) {
        if (method === "read") {
            app.adapters.activity.findById(parseInt(this.id)).done(function (data) {
                options.success(data);
            });
        }
    }

});

app.models.ActivityCollection = Backbone.Collection.extend({

    model: app.models.Activity,

    sync: function(method, model, options) {
        if (method === "read") {
            app.adapters.activity.findByTime(options.data.time).done(function (data) {
                options.success(data);
            });
        }
    }

});

app.models.TypeCollection = Backbone.Collection.extend({

    model: app.models.Activity,

    sync: function(method, model, options) {
        if (method === "read") {
            console.log("find by type");
            app.adapters.activity.findByType(this.type).done(function (data) {
                options.success(data);
            });
        }
    }

});