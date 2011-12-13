define([
  'jQuery',
  'Underscore',
  'Backbone'
], function($, _, Backbone) {
  
  var SectionScrape = Backbone.Model.extend({
    idAttribute: '_id',
    defaults: {
      'title'                : '',
      'fullTitle'            : '',
      'htmlEscapedTitle'     : '', // Set in initialize
      'lowerCaseTitle'       : '', // Set in initialize
      'sectionNames'         : [],
      'sectionHTMLs'         : [],
      
      // display properties
      'tocVisible'           : false,
      'mainVisible'          : false,
    },
    
    initialize: function() {
      var htmlEscapedTitle = $('<div/>').html(this.get('title')).text();
      this.set({
        htmlEscapedTitle: htmlEscapedTitle,
        lowerCaseTitle: htmlEscapedTitle.toLowerCase()
      }, {
        silent: true
      });
    },
    
    url: function() {
      return this.urlRoot + '/' + this.get('name');
    },
  
  });
  
  return SectionScrape;
});
