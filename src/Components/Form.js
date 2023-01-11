import { useState } from 'react';

const Form = ({ addToList }) => {
    // const initialFormData = {
    //     toDoItem: "",
    // };

    const [formData, setFormData] = useState();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (formData.length === 0) {
            return;
        } 

        console.log("Submit:", formData);
        addToList(formData);
        setFormData("");
    }

    // const onChangeHandler = (e) => {
    //     setFormData({...formData, [e.target.name]: e.target.value})
    // }

    return (
    <>
        <form onSubmit = {onSubmitHandler}>
            <div className="mb-3" style={{marginTop: "20px"}} >
                <label className="form-label" >Add Item to To-Do List</label>
                <input 
                    name = "toDoItem"
                    type="text" 
                    class="form-control"
                    // IF YOU WANT THE INPUT TO DELETE AFTER SUBMITTING, YOU NEED TO ADD VALUE
                    value={formData}
                    // as teh text you type changes, that's where onChange comes in
                    // gets added to the list in real time one by one in state.
                    onChange = {(e) => setFormData(e.target.value)}
                />
            </div>
            
            <button type="submit" class="btn btn-primary">Add</button>
        </form>
    </>
    )


};

export default Form;
