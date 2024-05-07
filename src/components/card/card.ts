import { Cards } from '../../types/index';
import { addMusic } from '../../services/index';
import styles from './card.css';
const FormData: Omit<Cards, 'id'> = {
	image: '',
	Title: '',
	Author: '',
	Album: '',
	DateAdded: '',
	Duration: '',
};

class Card extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}
	changeimage(e: any) {
		FormData.Title = e?.target?.value;
	}
	changeTitle(e: any) {
		FormData.image = e?.target?.value;
	}
	changeAuthor(e: any) {
		FormData.Author = e?.target?.value;
	}
	changeAlbum(e: any) {
		FormData.Album = e?.target?.value;
	}
	changeDateAdded(e: any) {
		FormData.DateAdded = e?.target?.value;
	}
	changeDuration(e: any) {
		FormData.Duration = e?.target?.value;
	}

	submitForm() {
		addMusic(FormData);
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;

			const css = this.ownerDocument.createElement('style');
			css.innerHTML = styles;
			this.shadowRoot?.appendChild(css);

			const title = this.ownerDocument.createElement('h1');
			title.innerText = 'Añade una cancion';
			this.shadowRoot?.appendChild(title);

			const image = this.ownerDocument.createElement('input');
			image.type = 'file';
			image.addEventListener('change', this.changeimage);
			this.shadowRoot?.appendChild(image);

			const Title = this.ownerDocument.createElement('input');
			Title.placeholder = 'Title';
			Title.addEventListener('change', this.changeTitle);
			this.shadowRoot?.appendChild(Title);

			const Author = this.ownerDocument.createElement('input');
			Author.placeholder = 'Author';
			Author.addEventListener('change', this.changeAuthor);
			this.shadowRoot?.appendChild(Author);

			const Album = this.ownerDocument.createElement('input');
			Album.placeholder = 'Album';
			Album.addEventListener('change', this.changeAlbum);
			this.shadowRoot?.appendChild(Album);

			const DateAdded = this.ownerDocument.createElement('input');
			DateAdded.placeholder = 'Date added';
			DateAdded.addEventListener('change', this.changeDateAdded);
			this.shadowRoot?.appendChild(DateAdded);

			const Duration = this.ownerDocument.createElement('input');
			Duration.placeholder = 'Duration';
			Duration.addEventListener('change', this.changeDuration);
			this.shadowRoot?.appendChild(Duration);

			const save = this.ownerDocument.createElement('button');
			save.innerText = 'ADD';
			save.addEventListener('click', this.submitForm);
			this.shadowRoot?.appendChild(save);

			const songs = this.ownerDocument.createElement('custom-songs');
			this.shadowRoot?.appendChild(songs);
		}
	}
}

customElements.define('card-container', Card);
export default Card;
