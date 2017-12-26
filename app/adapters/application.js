import DS from 'ember-data'

export default DS.RESTAdapter.extend({
	host: "cars.json?jsonp=?",
	shouldReloadAll(){return true;}
});