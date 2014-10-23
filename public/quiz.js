$(document).on('ready', function (req, res) {
	// Grab info
	var answerLang = $('#quiz-area').data('answerLang');
	var questionLang = $('#quiz-area').data('questionLang');
	var num = $('#question').data('num');

	//Query server for word.
	$.get('/api/getWord', {num: num}, function (resultData) {
		var word = resultData;
		if (questionLang !== 'eng') {
			$.post('/api/translateWord', {to: questionLang, from: 'eng', text: word}, function (resultData) {
				console.log(resultData)
				$('#word').text(resultData.translation);
			});
			$.post('/api/translateWord', {to: answerLang, from: 'eng', text: word }, function (resultData) {
				console.log('answer')
				$('#answer').append('<input type="hidden" value="'+resultData.translation+'">');
			});
		}
		else {
			$('#word').text(word);
		}
	});

	// Check word
	$('#answer').on('submit', function (event) {
		event.preventDefault();
		var answer = $(this).find('[name=from]').val();

	});
});