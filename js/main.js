var videoBoxes = document.querySelectorAll('.video-box');
videoBoxes.forEach(function(item) {
	var video = item.getElementsByTagName('video')[0];
	var icon = item.getElementsByTagName('span')[0];
	video.addEventListener('click', function() {
		this.play();
		icon.style.display = 'none';
	})
	icon.addEventListener('click', function() {
		this.style.display = 'none';
		video.play()				
	})
	video.addEventListener('ended', function() {
		icon.style.display = 'block';	
	})
});
// window.addEventListener('scroll',function () {
// 	videoBoxes.forEach(function(item,index) {
// 		rect = item.getBoundingClientRect();
// 		// console.log(index,rect);
// 		// if (rect.top < 1000) {
// 		// 	item.play();												
// 		// }
// 	});
// })
