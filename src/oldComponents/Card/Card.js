import React from "react";
import './Card.css';

const Card = () => {
    return (
        <div class="card shadow">
            <img
              class="card-img-top"
              src="card1.png"
            />
            <div class="card-body">
              <h5 class="card-title">Front-End Technologies</h5>
              <p class="card-text">
              HTML5, CSS3, JavaScript and ReactJs in my best practice technologies to develop front-end.
              </p>
              <a className="link" /*href="#"*/>
                Read More
              </a>
            </div>
          </div>
    );
};

export default Card;