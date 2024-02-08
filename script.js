  const accessToken = 'ccbced88fed2c56a8dded722bdfa4e41'
  const body = document.querySelector('body')
  const preview = document.querySelector('.preview')
  const modal = document.querySelector('.modal')
  const playerContainer = document.getElementById('player')
  const modalContent = document.querySelector('.modal-content')
  const pagi = document.querySelector('.pagination')

  const videos = [
    { id: 0, url: '824804225', thumbnail: 'https://i.vimeocdn.com/video/1666894951-d3fc47ae1d5f09250c468b79e4063afa7142163b5734eacb2277ea28acd44b52-d?mw=1000&mh=1000' },
    { id: 1, url: '824804225', thumbnail: 'https://i.vimeocdn.com/video/1666894951-d3fc47ae1d5f09250c468b79e4063afa7142163b5734eacb2277ea28acd44b52-d?mw=1000&mh=1000' },
    { id: 2, url: '824804225', thumbnail: 'https://i.vimeocdn.com/video/1666894951-d3fc47ae1d5f09250c468b79e4063afa7142163b5734eacb2277ea28acd44b52-d?mw=1000&mh=1000' },
    { id: 3, url: '824804225', thumbnail: 'https://i.vimeocdn.com/video/1666894951-d3fc47ae1d5f09250c468b79e4063afa7142163b5734eacb2277ea28acd44b52-d?mw=1000&mh=1000' },
    { id: 4, url: '824804225', thumbnail: 'https://i.vimeocdn.com/video/1666894951-d3fc47ae1d5f09250c468b79e4063afa7142163b5734eacb2277ea28acd44b52-d?mw=1000&mh=1000' },
    { id: 5, url: '824804225', thumbnail: 'https://i.vimeocdn.com/video/1666894951-d3fc47ae1d5f09250c468b79e4063afa7142163b5734eacb2277ea28acd44b52-d?mw=1000&mh=1000' },
    { id: 6, url: '824804225', thumbnail: 'https://i.vimeocdn.com/video/1666894951-d3fc47ae1d5f09250c468b79e4063afa7142163b5734eacb2277ea28acd44b52-d?mw=1000&mh=1000' },
    { id: 7, url: '824804225', thumbnail: 'https://i.vimeocdn.com/video/1666894951-d3fc47ae1d5f09250c468b79e4063afa7142163b5734eacb2277ea28acd44b52-d?mw=1000&mh=1000' }
  ]

	function createPreview(video) {
		const videoElement = document.createElement('img')
		videoElement.src = video.thumbnail
		videoElement.classList.add('video-thumbnail')
		videoElement.addEventListener('click', () => openModal(video))
		return videoElement
  }

function openModal(videoId) {
	if (document.querySelector('.active')) {
		document.querySelector('.active').classList.remove('active')
	}
	document.querySelectorAll('span')[videoId.id].classList.add('active')
	modal.style.display = 'block'
		const player = document.createElement('div')
		player.id = 'player'
		modalContent.prepend(player)
	new Vimeo.Player('player', {
		id: videoId.url,
		autoplay: true,
		loop: true,
		width: 800,
		height: 800
	});
}

window.addEventListener('click', e => {
	if (e.target.className === 'modal') {
		modal.style.display = 'none'
		document.querySelector('#player').remove()
	}
})

window.addEventListener('keydown', e => {
	if (e.code === "Escape") {
		modal.style.display = 'none';
		document.querySelector('#player').remove()
	}
})

  videos.forEach((video) => {
    preview.append(createPreview(video))
	const span = document.createElement('span')
	span.addEventListener('click', () => {
		document.querySelector('#player').remove()
		if(document.querySelector('.active')) {
			document.querySelector('.active').classList.remove('active')
		}
		span.classList.add('active')
		openModal(video)
	})
 	span.innerHTML = video.id + 1
  	pagi.append(span)
  });