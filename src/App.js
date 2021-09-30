import React from 'react'
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Card, CardGroup, Button } from 'react-bootstrap';
import splash from './PBSplash.jpeg'
import preview from './preview.png'
import { Twitter, Discord } from 'react-bootstrap-icons';
import Opensea from './opensea.svg'
import Bastard1 from './4.png'
import Bastard2 from './19.png'
import Bastard3 from './14.png'

import './App.css';

function App() {
  return (
    <div>
        <Navbar className='border-bottom text-center border-dark' style={{backgroundColor:'#8bc4bb'}}>
            <Navbar.Brand>Pretentious Bastards Under Construction!</Navbar.Brand>
            <Container style={{justifyContent:'flex-end'}}>
            <a href='https://twitter.com/bastardsnft' target = "_blank" rel = "noopener noreferrer" style={{paddingRight:'10px'}}>
              <Twitter size='25'/>
            </a>
            <a href='https://discord.com/invite/URBYndatVf' target = "_blank" rel = "noopener noreferrer" style={{paddingRight:'10px'}}>
            <Discord size='25'/>
            </a>
            <img src={Opensea} style={{height:'25px', width:'25px'}}/>
            </Container>
        </Navbar>
        <img src={splash} alt=''/>
        <Card className='pt-4'> 
        <h2 className='text-center'>Who are We?</h2>
        <h4 className='pt-4 text-center'>Pretentious Bastards is a collection of 10,000+ computer generated Bastards, fitted with nonsensical attire only they could approve of.</h4>
        <p className='pt-2 text-center'>Listen, we're all pretentious bastards. You just need to admit you're one.</p>
      </Card>
      <CardGroup >
        <Card className='mx-2 border-0' style={{padding:'20px'}}>
          <Card.Img  src={Bastard1} alt=''/>
        </Card>
        <Card className='mx-2 border-0' style={{padding:'20px'}}>
          <Card.Img src={Bastard2} alt=''/>
        </Card>
        <Card className='mx-2 border-0' style={{padding:'20px'}}>
          <Card.Img src={Bastard3} alt=''/>
        </Card>
      </CardGroup>
      <Container className='text-center pb-4'> 
        Like a real pretentious bastard, we're taking our time to look good for all you bastards. Follow us on twitter and join our discord for more updates.
      </Container>
      <div className='text-center py-4' style={{backgroundColor:'#5b5148'}}>
      <a href='https://twitter.com/bastardsnft' target = "_blank" rel = "noopener noreferrer" style={{paddingRight:'10px'}}>
              <Twitter size='25'/>
            </a>
            <a href='https://discord.com/invite/URBYndatVf' target = "_blank" rel = "noopener noreferrer" style={{paddingRight:'10px'}}>
            <Discord size='25'/>
            </a>
            <img src={Opensea} style={{height:'25px', width:'25px'}}/>
    </div>
    </div>
  );
}

export default App;
