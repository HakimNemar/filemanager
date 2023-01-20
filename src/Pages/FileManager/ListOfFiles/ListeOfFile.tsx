import IconPsd from "../../../Assets/Image/Icon-application/Photoshop.png";
import IconAi from "../../../Assets/Image/Icon-application/Illustrator.png";

interface IFakeFile {
    name: string,
    uploadDate: number,
    size: number,
    status: number,
    favorite: boolean,
}

interface ListeOfFileProps {
    fakeFiles: IFakeFile[];
}

export default function ListeOfFile({ fakeFiles }: ListeOfFileProps) {
    return (
        <ul>
            <li>
                <p>Files</p>
                <p>Date</p>
                <p>Size</p>
                <p>Status</p>
            </li>
            {fakeFiles.map((e: IFakeFile, key: number) => {
                let date = new Date(e.uploadDate),
                    month = date.toLocaleString('default', { month: 'short' }),
                    split = e.name.split("."),
                    extension = split[split.length - 1],
                    iconUrl = extension === "psd" ? IconPsd : IconAi;

                return (
                    <li key={key}>
                        <p>
                            <img src={iconUrl} alt={extension} />
                            {e.name}
                        </p>
                        <p>{month + " " + date.getDate() + ", " + date.getFullYear()}</p>
                        <p>{e.size}</p>
                        <p>Status</p>
                    </li>
                )
            })}
        </ul>
    )
}
