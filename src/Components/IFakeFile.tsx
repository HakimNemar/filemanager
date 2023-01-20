interface IFakeFIle {
    name: string;
    uploadDate: number;
    size: number;
    status: number;
    favorite: boolean;
}

export function FakeFile(file: IFakeFIle) {
    localStorage.setItem(file.name, JSON.stringify(file))
    return console.log(localStorage.getItem("element"))
}