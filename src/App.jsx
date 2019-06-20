import React,{useState} from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFindUser = async ({gender,results}) => {
    setUsers([]);
    setIsLoading(true);
    const response = await axios.get("https://randomuser.me/api/",{
      params: {
        gender,
        results
      }
    });
    setIsLoading(false);
    const data = response.data.results;
    setUsers(data);
  }

  return (
    <div className="jumbotron">
      <Form findUser={handleFindUser}/>      
      <List users={users}
        isLoading={isLoading}
      />      
    </div>    
  );
}

export default App;


