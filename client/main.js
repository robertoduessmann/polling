import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { $ } from 'meteor/jquery';

import './main.html';

Template.body.rendered = function() {
  if(window.location.pathname != '/'){
    $('#new-poll').hide();
  }
}

Template.body.helpers({  
  polls: function() {
    return Polls.find();
  },
  findOne: function() {
    var pollName = window.location.pathname.substring(1);
    var poll = Polls.find({name: pollName});
    if(poll != null){
      return poll;
    }
  }
});

UI.registerHelper('indexedArray', function(context, options) {
  if (context) {
    return context.map(function(item, index) {
      item._index = index;
      return item;
    });
  }
});

/*validation for not to allow space in name field */
$(function() {
  $('#nome').on('keypress', function(e) {
      if (e.which == 32)
          return false;
  });
})
