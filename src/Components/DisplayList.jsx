const DisplayList = (props) => {
    const { list, deleteListItem, updateList } = props;

    const onDeleteHandler = (value) => {
        // console.log("Value in DisplayList:",value);
        deleteListItem(value);
    }

    const handleToggleComplete= (i) => {
        updateList(i);
    }

    
    return(
        <div style={{display: "inline-block", textAlign: "left"}}>
            <h1 style={{textAlign: "center"}}>To-Do List</h1>
            <ol> 
                {list.map((item, i) => {
                    
                    const toDoClasses = [] ;
                        if (item.complete) {
                            toDoClasses.push("line-through");
                        } 

                return(
                    <li 
                        className = {toDoClasses.join(" ")}
                        key = { i } > { item.text }

                        <input 
                            onClick={() => {
                                handleToggleComplete(i);
                            }} 
                            checked={item.complete} type="checkbox" />

                        <button 
                            onClick={() => onDeleteHandler(item.text)} 
                            style={{marginLeft: "10px"}}>Delete
                        </button>
                    </li>
                )})}
            </ol>
        </div>
    )
}

export default DisplayList;


// const [toDoList, setToDoList] = useState([]);

// const deleteListItem = (e,deleteId) => {
//     const filteredList = list.filter((item,i) => { 
//         return i !== deleteId;
//     })
//     setToDoList(filteredList);
// }

// {/* // when creating an <ul>, need to add the stuff in the ul in {/ */}