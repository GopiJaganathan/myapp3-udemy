import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  	make: attr('string'),
  	model: attr('string'),
  	year: attr('string')
});
