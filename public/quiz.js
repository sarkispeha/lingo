var wrongAnswers = 0;

var getWord = function () {
	//Query server for word.
	$.get('/api/getWord', {}, function (resultData) {
		$('#word').text(resultData);
	});
};


$(document).on('ready', function (req, res) {
	// Grab info
	var num = $('#question').data('num');
	var answerLang = $('#quiz-area').data('answer-lang');
	$('#quest-num').text((num+1)+'/10');

	getWord();	

	// Check word
	$('#answer').on('submit', function (event) {
		event.preventDefault();
		var userAnswer = $(this).find('[name=userAnswer]').val();
		$(this).find('[name=userAnswer]').val('');
		$.post('/api/translateWord', {to: 'eng', from: answerLang, text: userAnswer}, function (resultData) {
			var translatedUserAnswer = resultData.translation;
			
			if (translatedUserAnswer.toUpperCase() === $('#word').text().toUpperCase()) {
				$('#answer-results').text('Correct!');
			}
			else {
				wrongAnswers++;
				$('#answer-results').text('WRONG!');
			}
			$('#answer-results').append('<button id="next"> Next Question');
			});
	});

	$('#answer-results').on('click', '#next', function () {
  		num = parseInt($('#question').data('num')) +1;
  		$('#question').data('num', num);
  		$('#quest-num').text((num+1)+'/10');
  		$('#answer-results').empty();
  		getWord(num);
	});

});