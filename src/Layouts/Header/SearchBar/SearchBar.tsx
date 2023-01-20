import Icons from "../../../Components/Icon";

export default function SearchBar() {
    return (
        <div className="search-bar">
            {Icons.search}
            <input type="search" name="search" id="search" placeholder="Search something here" />
        </div>
    )
}
