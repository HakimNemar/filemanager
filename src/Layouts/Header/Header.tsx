import Icons from "../../Components/Icon";

export default function Header() {
    return (
        <header>
            <div className="search-bar">
                {Icons.search}
                <input type="search" name="search" id="search" placeholder="Search something here" />
            </div>
            <div>
                {Icons.cloche}

            </div>
        </header>
    )
}
