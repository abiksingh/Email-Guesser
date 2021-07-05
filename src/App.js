import React,{useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import FormContainer from './components/FormContainer';
import {Button, Form, ListGroup} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {listEmail, addEmail} from './redux/actions/emailActions';
import Loader  from './components/Loader';



const App = () => {

  const dispatch = useDispatch();

  

  const emailList = useSelector(state => state.emailList);
    const {email, loading} = emailList;

  const addEmailInfo = useSelector(state => state.addEmailInfo)
    const {emailInfo} = addEmailInfo;


  

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [domain, setDomain] = useState("");



  const submitHandler = (e) => {
    e.preventDefault();
   dispatch(addEmail(domain.startsWith('@babbel') ? firstName.split('').slice(0, 1).join().toLowerCase() : firstName.toLowerCase(), lastName.toLowerCase(), domain.toLowerCase()))
   setFirstName('')
   setLastName('')
   setDomain('')
};

useEffect(()=>{
  dispatch(listEmail());

},[dispatch])


  return (
  
     <main className="py-3">
        <Container>
       <h1> Email Guesser </h1>
       <FormContainer>
          
          
   
           <Form onSubmit={submitHandler} >

         
              
              <Form.Group controlId="first">
                <Form.Label>
                    First name
                </Form.Label>
                <Form.Control type="text" placeholder="Enter First Name " value={firstName} onChange={e => setFirstName( e.target.value)}>

                </Form.Control>
               </Form.Group>

               <Form.Group controlId="last">
                <Form.Label>
                    Last name
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name " value={lastName} onChange={e => setLastName( e.target.value)}>

                </Form.Control>
               </Form.Group>

               <Form.Group controlId="domain">
                <Form.Label>
                    Domain address (example @babbel.com)
                </Form.Label>
                <Form.Control type="text" placeholder="Enter domain address" value={domain} onChange={e => setDomain( e.target.value)}>

                </Form.Control>
               </Form.Group>

              

               <Button type="submit" variant="primary">
                   Submit

               </Button>
               
               </Form> 

            


        </FormContainer>

        <br/>
        <br/>

       

          {loading ? <Loader /> : email.map(e => (
             <ListGroup as="ul" key={e._id}>
             <ListGroup.Item as="li">{e.firstName}{e.lastName}{e.domainAddress}</ListGroup.Item>
            </ListGroup>
          ))} 

   
          
  



        </Container>
        </main>
    
  
  );
}

export default App;
