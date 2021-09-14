window.addEventListener('load', function () {
	setTimeout(
		function () {
		var card_images = document.querySelectorAll('.card-image');
		card_images.forEach(function (image) {
			image.style.filter = 'none';
		 });
		},
		1000,
	)
});