import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Catimage from '../Resources/Hero Pedigree Cats.jpg'



const About = () => {
  return (
    <div className='aboutPage'>
      <div>
        <h1 style={{marginLeft:'45%', marginTop: '2%', marginTop:'2%',color:'white'}}>About Us</h1>
        
      
   




<Card style={{ width: '75%',marginLeft: '10%', marginTop:'4%',backgroundColor:'#FDA172',color:'white' }}>
      <Card.Img style={{ width: '35%',marginLeft:'30%'}} variant="top" src={Catimage} />
      <Card.Body>
        <Card.Title><h1> Welcome to Cats4Lyfe - Your Ultimate Destination for All Things Cat!</h1></Card.Title>
        <Card.Text>
        At Cats4Lyfe, we celebrate the extraordinary bond between cats and their human companions. Our passion for feline friends drives us to provide you with a purr-fect online platform where you can find everything you need to give your beloved cats a life of luxury and happiness.

Our Story:
Cats4Lyfe was born from a deep-rooted love for cats and a desire to create a haven for cat enthusiasts like ourselves. Our team consists of dedicated feline lovers who understand the magic that cats bring into our lives. We wanted to curate a unique shopping experience that caters exclusively to the needs and desires of cats and their devoted owners.

Our Mission:
Our mission is to be your go-to destination for all things cat-related. We strive to offer an unparalleled selection of premium cat products that combine functionality, style, and sustainability. Whether it's high-quality cat food, designer accessories, comfortable beds, interactive toys, or essential health products, we are committed to bringing you the best of the best.
</Card.Text>
        
      </Card.Body>
    </Card>




    <Card style={{ width: '75%',marginLeft: '10%', marginTop:'4%',backgroundColor:'#FDA172',color:'white' }}>
      <Card.Img style={{ width: '35%',marginLeft:"30%"}} variant="top" src={Catimage} />
      <Card.Body>
        <Card.Title><h1>Why choose cats4lyfe?</h1></Card.Title>
        <Card.Text>
        Why Choose Cats4Lyfe?

Exclusive Cat-Centric Collection: Our team scours the globe to handpick products that are specially designed with cats in mind. Each item in our collection is chosen to enhance the well-being and happiness of your feline companions.

Impeccable Quality: We believe that cats deserve only the finest, and we never compromise on quality.
 
 
 Every product at Cats4Lyfe undergoes rigorous testing to ensure it meets our high standards.

Expert Guidance: Our team of cat care specialists and veterinarians are passionate about providing you with expert advice and tips. Whether you have questions about grooming, behavior, or nutrition, we're here to help.

Outstanding Customer Service: We take pride in delivering top-notch customer service. Your satisfaction is our priority, and we are dedicated to making your shopping experience with us enjoyable and stress-free.

A Community of Cat Lovers: Cats4Lyfe is more than just a store; it's a community of like-minded cat lovers. We invite you to join us on our blog and social media platforms, where we share heartwarming stories, helpful information, and tips to strengthen the bond with your feline companions.

Giving Back: We believe in making a positive impact on the lives of all cats. As part of our commitment, a portion of every purchase goes towards supporting animal shelters and rescue organizations, helping to improve the lives of cats in need.
</Card.Text>
        
      </Card.Body>
    </Card>









    <Card style={{ width: '75%',marginLeft: '10%', marginTop:'4%', marginBottom:'20px', backgroundColor:'#FDA172',color:'white' }}>
      <Card.Img style={{ width: '35%',marginLeft:'30%'}} variant="top" src={Catimage} />
      <Card.Body>
        <Card.Title> <h1> Become a Part of the Cats4Lyfe Family:</h1></Card.Title>
        <Card.Text>
        Whether you're a new cat owner or have shared a lifetime with these majestic creatures, Cats4Lyfe is here to enhance your feline experience. Explore our website, and you'll find a treasure trove of cat-approved products that will bring endless joy to your cats and enrich your life together.

Thank you for choosing Cats4Lyfe, where the love for cats is our way of life!
</Card.Text>
        
      </Card.Body>
    </Card>






  
    
    </div>


<footer style={{backgroundColor:'grey', height:'200px',color:'white'}}>
  placeholder stuff for the footer. No clue how to make one in bootstrap but that's fine
</footer>



    
 </div>


  );
};







export default About;