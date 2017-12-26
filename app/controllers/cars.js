import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		deleteCar: function(id){
			var self = this;
	
			this.store.findRecord('car', id).then(function(car){
				car.deleteRecord();
				//car.save();
				//self.transitionTo('cars');
			});
		}
	}
});
