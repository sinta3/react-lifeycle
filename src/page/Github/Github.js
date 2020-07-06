import React,{useState, useEffect} from 'react'
import styled from "styled-components";

const Header = styled.div`
display:flex;
flex-direction:column;
margin:auto`;

const Div = styled.div`
width:auto;
text-align:center;
font-family: 'Open Sans', sans-serif;
`;

const Form = styled.form`
    width:300px;
    margin:auto;
    margin-top:50px;
    margin-bottom:50px;
`;

const Input = styled.input`
    width:260px;
    height:50px;
    margin:10px;
`;


function Github() {
    const [name,setName] = useState('');
    const [data,setData] = useState('');
 
    function handleChange(event){
       setName(event.target.value)
    
    }

    const handleSubmit = async (event) => {
            event.preventDefault();
            const url = `https://api.github.com/users/` + name;

            const response = await fetch(url);
            const result = await response.json();
    
            setData(result);
            console.log(data);
           
        }

    useEffect(() => {
            if(data !== ''){

            document.getElementById('content').innerHTML = 
            `   <div>
                    <img 
                    src=${data.avatar_url} 
                    alt="avatar" 
                    style='width:100px; 
                    border-radius:100%;' />
            
                    <h3>${data.login.toUpperCase()}</h3>
                    <p>${data.bio}</p>
                    <div 
                        style=
                        "margin:auto;
                        margin-top:20px;
                        border:1px solid black;
                        display:flex;
                        justify-content:space-evenly;">
                    <div>
                        <h5>${data.followers}
                        <br/>Followers
                        </h5>
                    </div>
            
                    <div>
                        <h5>${data.public_repos}
                        <br/>Repository</h5>
                    </div>
            
                    <div>
                        <h5>${data.following}
                        <br/>Following</h5>
                    </div>
                    </div>
                 </div>`
        }
    });
 
    return (
        <Div>
            <Form onSubmit={handleSubmit}>

            <Input 
            type="text" 
            name="name" 
            id="name" 
            value={name}
            onChange={handleChange}
            placeholder="Type github username and press enter"/>
            </Form>

            <Header id="content">
           </Header>
        </Div> 
    )
}

export default Github
