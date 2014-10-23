$(document).on('ready', function () {
	$('#lang-form').on('submit', function (event) {
		event.preventDefault();
		var from = $(this).find('[name=from]').val();
		var to = $(this).find('[name=to]').val();
		var text = $(this).find('[name=text]').val();
		$(this).find('[name=text]').val('');
		var transObj = {
			from: from,
			to: to,
			text: text
		}
		$.post('/api/translateWord', transObj, function (resultData) {
			var translatedWord = resultData.translation;
			$('#trans-word').text(translatedWord);
		});
	});
});