import React from "react";
import Fade from "react-reveal/Fade";

export default function Advantages() {
  return (
    <section className="container pt-5 pb-5">
      <Fade bottom>
        <div className="row text-center mb-5">
          <div className="col-12">
            <h4 className="font-weight-bold mb-3">Why Choose Us</h4>
            <p className="text-gray-500">We offer the best experience for your staycation</p>
          </div>
        </div>
        <div className="row">
          <Fade bottom delay={200}>
            <div className="col-md-4 text-center mb-4">
              <div className="card p-4 shadow-sm border-0" style={{ borderRadius: 15, transition: '0.3s' }}>
                <div className="icon mb-3">
                  {/* Shield SVG */}
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#F43F5E" }}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h5 className="font-weight-bold">Secure Booking</h5>
                <p className="text-gray-500 mt-2">Your payment and personal data are safe with our secure system.</p>
              </div>
            </div>
          </Fade>
          <Fade bottom delay={400}>
            <div className="col-md-4 text-center mb-4">
              <div className="card p-4 shadow-sm border-0" style={{ borderRadius: 15, transition: '0.3s' }}>
                <div className="icon mb-3">
                  {/* Tag SVG */}
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#F43F5E" }}>
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                    <line x1="7" y1="7" x2="7.01" y2="7"></line>
                  </svg>
                </div>
                <h5 className="font-weight-bold">Best Price Guarantee</h5>
                <p className="text-gray-500 mt-2">Find a lower price? We will match it and give you extra discount.</p>
              </div>
            </div>
          </Fade>
          <Fade bottom delay={600}>
            <div className="col-md-4 text-center mb-4">
              <div className="card p-4 shadow-sm border-0" style={{ borderRadius: 15, transition: '0.3s' }}>
                <div className="icon mb-3">
                  {/* Headset SVG */}
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#F43F5E" }}>
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                  </svg>
                </div>
                <h5 className="font-weight-bold">24/7 Support</h5>
                <p className="text-gray-500 mt-2">Our customer service team is always ready to help you anytime.</p>
              </div>
            </div>
          </Fade>
        </div>
      </Fade>
    </section>
  );
}
