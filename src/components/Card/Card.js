import React from "react";
import './Card.css';

const Card = () => {
    return (
        <div class="card shadow">
            <img
              class="card-img-top"
              src="https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
            <div class="card-body">
              <h5 class="card-title">Management Consulting Services</h5>
              <p class="card-text">
              We practice a methodology that we have developed over 10 years, based global best practices
              </p>
              <a className="link" href="#">
                View All Services
              </a>
            </div>
          </div>
    );
};

export default Card;