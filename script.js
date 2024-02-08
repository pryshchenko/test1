  const accessToken = 'ccbced88fed2c56a8dded722bdfa4e41'
  const body = document.querySelector('body')
  const preview = document.querySelector('.preview')
  const modal = document.querySelector('.modal')
  const playerContainer = document.getElementById('player')
  const modalContent = document.querySelector('.modal-content')
  const pagi = document.querySelector('.pagination')
  const leftArrow = document.querySelector('.leftArrow')
  const rightArrow = document.querySelector('.rightArrow')
  
  let active

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

function createPagi(video) {
	const span = document.createElement('span')
	span.addEventListener('click', () => openModal(video))
	span.innerHTML = video.id + 1
	return span
}

function openModal(videoId) {
	if (document.querySelector('#player')) {
		document.querySelector('#player').remove()
	}

	if (videoId.id === 7) {
		rightArrow.style.display = 'none'
	} else rightArrow.style.display = 'block'

	if (videoId.id === 0) {
		leftArrow.style.display = 'none'
	} else leftArrow.style.display = 'block'

	if (document.querySelector('.active')) {
		document.querySelector('.active').classList.remove('active')
	}

	document.querySelectorAll('span')[videoId.id].classList.add('active')

	active = videoId.id

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
	}
})

window.addEventListener('keydown', e => {
	if (e.code === "Escape") {
		modal.style.display = 'none';
	}
})

window.addEventListener('keydown', e => {
	if(e.code === "ArrowRight" && active < 7) {
		active += 1
		openModal(videos[active])
	}
	if (e.code === "ArrowLeft" && active > 0) {
		active -= 1
		openModal(videos[active])
	}
})

leftArrow.addEventListener('click', () => {
	if (active > 0) {
		active -= 1
		openModal(videos[active])
	}
})

rightArrow.addEventListener('click', () => {
	if (active < 7) {
		active += 1
		openModal(videos[active])
	}
})

videos.forEach((video) => {
    preview.append(createPreview(video))
  	pagi.append(createPagi(video))
});