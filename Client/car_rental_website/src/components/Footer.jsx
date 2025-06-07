import {useState} from 'react';


const faqs = [
  { question: 'How to rent a car online?', answer: 'You can rent a car online by visiting our website and following the booking process.' },
  { question: 'Can I cancel my booking?', answer: 'Yes, you can cancel your booking from your account dashboard.' },
  { question: 'How do I rent a car?', answer: 'Choose a car, select your dates, and complete the booking form.' },
  { question: 'What are the popular types of cars available for rent in Chennai, and how much do their features vary?', answer: 'Sedans, SUVs, and hatchbacks are available with varying features like GPS and air conditioning.' },
  { question: 'Is renting a car cheaper than buying?', answer: 'Renting can be more economical if you only need a car occasionally.' },
];

export const FAQ= () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
<div className="max-w-2xl mx-auto p-4  flex flex-col items-center bg-blue-100">
<h1 className="h1 font-bold text-center mt-4 mb-2"style={{color: "green" }}>••• Frequently Asked Questions •••</h1>
{faqs.map((faq, index) => (
  <div key={index} className="border-b border-gray-300 w-full">
    <button
      onClick={() => toggleFAQ(index)}
      className="w-3/4 p-2 m-1 flex justify-between items-center text-white bg-green-500 hover:bg-green-700 rounded-md"
    >
      <span>Q{index + 1}. {faq.question}</span>
      <span className="ml-2">{activeIndex === index ? '▲' : '▼'}</span>
    </button>
    {activeIndex === index && (
      <div className="p-4 bg-blue-50 text-gray-600">
        {faq.answer}
      </div>
    )}
  </div>
))}
</div>
);
};



const Footer = () => {
  return (
    <div className="footer " style={{alignItems:"flex-start",backgroundColor:"#444",color:"whitesmoke"}}>
  <div className="footer-section mt-3 mb-2" style={{textAlign:"center"}}>
    <h3>CAR RENTAL SERVICES IN INDIA</h3>
    <p>Bangalore</p>
    <p>Mumbai</p>
    <p>Coimbatore</p>
    <p>Goa</p>
    <p>Agra</p>
    <p>Chennai</p>
  </div>
  
  <div className="footer-section mt-3" style={{textAlign:"center"}}>
    <h3>Quick Links</h3>
    <a href="#">Home</a><br/>
    <a href="#">Locations</a><br/>
    <a href="#">Reservations</a><br/>
    <a href="#">Parking</a><br/>
    <a href="#">About Us</a><br/>
    <a href="#">Terms and Conditions</a>
  </div>
  
  <div className="footer-section mt-3"style={{textAlign:"center"}}>
    <h3>How we can Help you?</h3>
    <p>Phone No: +359 546 364 827</p>
    <p>Email: car@abitours.net</p>
    </div>
   
    
           
            <div className="mt-5 text-center border-t border-gray-700 pt-4">
            <h3 className="text-lg font-bold mt-30 mb-0">Subscribe</h3> 
            <p>Simply enter your email below:</p>
             <input type="email" placeholder="placeholder" className="p-2 rounded text-black" />
             <button className="ml-2 p-2 bg-black text-white rounded">Subscribe</button>
             <p className="text-sm mt-2">By subscribing, you agree to receive emails from us and acknowledge our Privacy Policy.</p>
              </div>
               <div className="social-icons" >
                   <h3 className="text-lg mt-5 font-bold">Let's Keep in touch</h3>
                   
                    <i className="bi bi-twitter" style={{ margin:" 0 8px",fontSize: "24px"}}></i>
                    <i className="bi bi-facebook"style={{ margin:" 0 8px",fontSize: "24px"}}></i>
                    <i className="bi bi-instagram"style={{ margin:" 0 8px",fontSize: "24px"}}></i>
                      </div>

                      <hr className="after-subscribe-line" style={{ width: "100%",
    border: "1px solid white", 
    margin: "0" }}/>

    <footer className="footer" style={{ display: "flex",
    justifyContent: "center",
    gap: "15rem",
    backgroundColor: "#444",
    width:"100%",
        color: "#fff",
    padding: "1rem"}}>
    <p>© 2025 Your Website. All rights reserved.</p>
    <a href="#" style={{color: "#fff",
    textDecoration: "underline"}}>Privacy Policy</a>
    <a href="#" style={{color: "#fff",
    textDecoration: "underline"}}>Terms of Service</a>
</footer>

    </div>
  );
};

export default Footer;