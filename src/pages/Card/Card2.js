import React from "react";
import './Card.scss';
import { card2 } from "../../images";

const Card2 = () => {
    return (
        <div class="card shadow">
            <img
              class="card-img-top"
              src={card2}
              alt="card image"
            />
            <div class="card-body">
              <h5 class="card-title">Backend and Framework</h5>
              <p class="card-text">
                In backend I've basic practice of C# and I've experience of Bootstrap and .Net 4.6 framework
              </p>
              <a className="link" /*href="#"*/>
                Read More
              </a>
            </div>
          </div>
    );
};

export default Card2;