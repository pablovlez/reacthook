import React, {useState} from 'react'

const initialState = {
    gender:'',
    results: ''
}
const Form = ({findUser}) => {
    
    const [state,setState] = useState(initialState);

    const handleSubmit = e => {
        e.preventDefault();
        findUser(state);
    }   

    const handleChange = e => {
        setState({
            ...state, 
            [e.target.name]: e.target.value
        })
    }        

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Gender</label>
                <input type="text" className="form-control"                     
                    placeholder="Enter gender"
                    name="gender"
                    onChange={handleChange}
                />                
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Results</label>
                <input type="text" className="form-control"                      
                    placeholder="Enter results"
                    name="results"
                    onChange={handleChange}
                />                
            </div>                         
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    )
}

export default Form
