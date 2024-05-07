import { Cards } from '../../types/index';
import { getMusic } from '../../services/index';
import styles from './songs.css';

const FormData: Omit<Cards, 'id'> = {
	image: '',
	Title: '',
	Author: '',
	Album: '',
	DateAdded: '',
	Duration: '',
};

class Songs extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	async render() {
		const css = this.ownerDocument.createElement('style');
		css.innerHTML = styles;
		this.shadowRoot?.appendChild(css);

		const songs = await getMusic();
		songs.forEach((song: Cards) => {
			const container = this.ownerDocument.createElement('section');
			const image = this.ownerDocument.createElement('img');
			image.innerText = song.image;
			container.appendChild(image);

			const Title = this.ownerDocument.createElement('H1');
			Title.innerText = song.Title;
			container.appendChild(Title);

			const Author = this.ownerDocument.createElement('p');
			Author.innerText = song.Author;
			container.appendChild(Author);

			const Album = this.ownerDocument.createElement('p');
			Album.innerText = song.Album;
			container.appendChild(Album);

			const DateAdded = this.ownerDocument.createElement('p');
			DateAdded.innerText = song.DateAdded;
			container.appendChild(DateAdded);

			const Duration = this.ownerDocument.createElement('p');
			Duration.innerText = song.Duration;
			container.appendChild(Duration);

			this.shadowRoot?.appendChild(container);
		});
	}
}

customElements.define('custom-songs', Songs);
export default Songs;
