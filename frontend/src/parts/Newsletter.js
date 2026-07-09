import React from "react";
import Fade from "react-reveal/Fade";
import Button from "elements/Button";

export default function Newsletter() {
  return (
    <section className="container mt-5 mb-5">
      <Fade bottom>
        <div className="row justify-content-center">
          <div className="col-10 col-lg-8">
            <div 
              className="card border-0 p-5 text-center text-white" 
              style={{ 
                borderRadius: 20, 
                background: "linear-gradient(135deg, #F43F5E 0%, #FF7A8A 100%)",
                boxShadow: "0 10px 30px rgba(244, 63, 94, 0.3)" 
              }}
            >
              <h3 className="font-weight-bold mb-3">Get Special Offers!</h3>
              <p className="mb-4 text-light">Subscribe to our newsletter and get exclusive discounts for your next staycation.</p>
              
              <div className="d-flex justify-content-center align-items-center flex-column flex-md-row">
                <input 
                  type="email" 
                  className="form-control mb-3 mb-md-0 mr-md-3" 
                  placeholder="Enter your email address" 
                  style={{ 
                    maxWidth: 400, 
                    borderRadius: 50, 
                    padding: "15px 25px", 
                    border: "none" 
                  }} 
                />
                <Button 
                  className="btn" 
                  hasShadow 
                  isPrimary
                  style={{ 
                    borderRadius: 50, 
                    padding: "12px 30px",
                    background: "#0F172A",
                    borderColor: "#0F172A",
                    color: "white"
                  }}
                  onClick={() => alert("Subscribed!")}
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
