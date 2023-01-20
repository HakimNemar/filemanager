import { useState } from "react";
import Modal from "./Modal/Modal";
import ListeOfFile from "./ListOfFiles/ListeOfFile";

interface IFakeFile {
	name: string,
	uploadDate: number,
	size: number,
	status: number,
	favorite: boolean,
}

export default function FileManager() {
	const [toggleModal, setToggleModal] = useState(false);
	const [fakeFiles, setFakeFiles] = useState<Array<IFakeFile>>([
		{
			name: "Photoshop.psd",
			uploadDate: Date.now(),
			size: 32,
			status: 200,
			favorite: true
		}, {
			name: "Illustrator.ai",
			uploadDate: Date.now(),
			size: 32,
			status: 200,
			favorite: true
		}
	]);

	const handleClick = () => {
		let modal = document.getElementById("modal") as HTMLElement;
		modal.style.maxHeight = toggleModal ? "0px" : "400px";
		modal.style.padding = toggleModal ? "0 50px" : "50px";
		setToggleModal(!toggleModal);
	}

	return (
		<section className='file-content'>
			<div className="head">
				<h3>File manager</h3>

				<div className="panel">
					<button className="btn-plus" onClick={handleClick}><p></p></button>

					<select name="sort-by" id="sort-by">
						<option value="">Sort by ...</option>
						<option value="parrot">Photoshop</option>
						<option value="spider">Figma</option>
						<option value="goldfish">Sketch</option>
					</select>

					<input type="date" name="date" id="" />

					<Modal fakeFiles={fakeFiles} setFakeFiles={setFakeFiles} handleClick={handleClick} />
				</div>
			</div>

			<ListeOfFile fakeFiles={fakeFiles} />

		</section>
	)
}
