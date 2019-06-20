import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Location = ({location, showModal, closeModal}) => {  
    
    const {street, city, state, postcode} = location;
    const [modal, setModal] = useState(false);     

    const onClose = () => {        
        setModal(!modal)   
        closeModal()             
    }

    return (
        <React.Fragment>
            {/* <Button color="success" onClick={() => setModal(!modal)}>React Modal</Button> */}
            <Modal isOpen={!modal && showModal}>        
            <ModalHeader>Location</ModalHeader>
            <ModalBody>
            <div className="card">
                <div className="card-body">
                    <p>Street: {street} </p>
                    <p>City: {city} </p>
                    <p>State: {state} </p>
                    <p>PostCode: { postcode } </p>                        
                </div>
            </div>
            </ModalBody>
            <ModalFooter>            
                <Button color="danger" onClick={onClose}>Cancel</Button>
            </ModalFooter>
            
            </Modal>
        </React.Fragment>           
      
    )
}

export default Location;