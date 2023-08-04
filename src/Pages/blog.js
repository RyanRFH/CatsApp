// Blog.js
import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Blog = () => {
  return (
    <div className='blogPage'>
      <div >
      <h1 style={{marginLeft:'45%', marginTop: '2%', marginTop:'2%',color:'white'}}>Blog</h1>


        <Card style = {{width: "60%",marginTop:"2%",  marginLeft: "20%",backgroundColor:'#FDA172',color:'white'}} className="text-center">
      <Card.Header>New cats in at cats4lyfe</Card.Header>
      <Card.Body>
        <Card.Title>Exciting announcement</Card.Title>
        <Card.Text>
          We can announce that some new kittens have joined the cats4lyfe family <br/>
          Look on the homepage to find out more
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>

    <Card style = {{width: "60%",marginTop:"2%", marginLeft: "20%",backgroundColor:'#FDA172',color:'white'}} className="text-center">
      <Card.Header>Customer service</Card.Header>
      <Card.Body>
        <Card.Title> "Choosing the Perfect Feline Friend - Finding Your Purrfect Match!"</Card.Title>
        <Card.Text style =  {{textAlign:'justify'}}>
        Are you ready to welcome a new feline companion into your home? Cats bring immeasurable joy and love to our lives, but finding the perfect match requires some thoughtful consideration. At [Company Name], we understand the importance of creating harmonious forever bonds between cats and their humans. Here are some tips to help you find your purrfect match:

Consider Your Lifestyle: Are you a busy professional or a laid-back homebody? Cats have unique personalities and energy levels, so choosing a cat that complements your lifestyle is crucial. Some cats thrive in active households, while others prefer a quieter, more relaxed environment.

Age Matters: Kittens are adorable bundles of energy, but they require time, patience, and lots of training. If you have a busy schedule, an adult cat might be a better fit, as they are often more independent and settled in their personalities.

Temperament and Compatibility: Spend time with potential feline friends to gauge their personalities and see how they interact with you. A good match will result in a strong connection that will bring you both joy for years to come.

Remember, adopting a cat is a lifelong commitment, and we are here to help you every step of the way. Visit Cats4Lyfe to explore our wide range of feline friends, and together, we'll find the purrfect companion to complete your family.
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted">4 days ago</Card.Footer>
    </Card> 
    <Card style = {{width: "60%", marginTop:"2%",  marginLeft: "20%",backgroundColor:'#FDA172',color:'white'}} className="text-center">
      <Card.Header>Congrats on your new cat</Card.Header>
      <Card.Body>
        <Card.Title>"Keeping Your Cat Healthy and Happy - A Guide to Cat Care"</Card.Title>
        <Card.Text style ={{textAlign:'justify'}}>
        As cat owners, it's our responsibility to ensure our feline friends lead healthy and happy lives. Proper cat care goes beyond just providing food and shelter. At Cats4Lyfe, we believe in comprehensive care for our feline companions. Here are some essential tips for keeping your cat in tip-top shape:

Regular Veterinary Check-ups: Schedule regular visits to the veterinarian to monitor your cat's health, vaccinations, and preventive care. Early detection of health issues can lead to better outcomes.

Balanced Diet: Cats require a balanced and nutritious diet to thrive. Choose high-quality cat food that meets their specific nutritional needs and avoid feeding them human food, which may be harmful.

Hydration Matters: Keep fresh water available at all times to ensure your cat stays properly hydrated, promoting kidney health and overall well-being.

Play and Bond: Spend quality time playing and bonding with your cat. Regular interaction keeps them mentally stimulated, strengthens your bond, and provides essential exercise.

Grooming: Regular grooming helps keep your cat's coat clean, reduces hairballs, and allows you to spot any skin issues or abnormalities.

At Cats4Lyfe, we offer a range of products and resources to support you in providing the best care for your beloved cat. Together, let's ensure your feline friend lives a long, happy, and healthy life!
        </Card.Text>
        
      </Card.Body>
      <Card.Footer style={{color:'white',}} className="text-muted">9 days ago</Card.Footer>
    </Card>


        {}
      </div>
      <footer style={{backgroundColor:'grey', height:'400px',color:'white'}}>
  placeholder stuff for the footer. No clue how to make one in bootstrap but that's fine
</footer>

    </div>

  );
};

export default Blog;