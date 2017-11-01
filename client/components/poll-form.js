Template.pollForm.events({

  'submit form': function(event) {

    event.preventDefault();

    var choices = event.target.choice;

    var newPoll = {
      name: event.target.name.value,
      question: event.target.question.value,
      choices: []
    };

    for (var index = 0; index < choices.length; index++ ) {
      if (choices[index].value) {
        newPoll.choices.push({ text: choices[index].value, votes: 0 });
      }
    }

    if (newPoll.choices.length > 1) {
        Polls.insert(newPoll);
        window.location.replace( window.location.href + newPoll.name )
    }
  }
});
