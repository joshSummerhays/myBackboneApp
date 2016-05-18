// var appView = Backbone.View.extend({
  
//   tagname: 'table',

//   initialize: function(){
//     this.listenTo(this.collection, 'change', this.render);
//     this.render();
//   },

//   events: {

//   },

//   render: function(){
//     var domElement = this.$el.html('');
//     this.collection.each(function(model){
//       domElement.append('<tr><td>Size: ' + model.get('size') + '</td></tr>');
//     });
//     $('body').append(this.$el);
//   }

// });