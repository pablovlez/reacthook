import React,{useState} from 'react'
import Location from './Location';

const List = ({users, isLoading}) => {
    
    const [showLocation, setShowLocation] = useState(false);    
    const [location, setLocation] = useState([]);

    const handleClick = (location) => {
        setShowLocation(true);
        setLocation(location);
    }

    const closeModal = () => {
        setShowLocation(false);
    }

    return (
        <div className="container mt-4">
            {
                isLoading && 
                <Loading />
            }
            {
                showLocation &&
                <Location location={location} showModal={showLocation} closeModal={closeModal}/>
            }
            
            <ul className="list-group">
                { 
                    users.map((user, index) => {
                        return (
                            <li className="list-group-item"
                            key={index}
                            >{`${user.name.first} ${user.name.last}`}
                            <button className="btn btn-info"
                                onClick={() => handleClick(user.location)}    
                            >Location
                            </button></li> 
                        )
                    })                    
                }
                
            </ul>
        </div>        
    )
}

function Loading (){
    return (
        <div className="text-center">
            <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
  }

export default List
