import React, { FC } from 'react';
import Image from '../star2.png';

const Card: FC = () => {
  return (
    <div>
        <div className="row">
            <div className="col-md-3">
                <img src={Image} alt="Starglem" />
            </div>
            {/* <div className="col-md-5">
                <h1>WHO WE ARE</h1>
                We are from STAR GLEAM EDUCATION, a team of tutors, parents, teachers, IT professionals and students who came with these motivational ideas of creative products that will immensely help children in their current journey in competitive exams.

                Our research and feedback from innumerable parents and teachers brought these products to LIVE with active participation and feedback from various tutors, teachers and parents to ease children’s preparation to some extent in a pragmatic way.

                Our innovative ideas behind these products and building blocks will enhance the ways of learning in a more friendly and fun way which encourage children to achieve their goals.
            </div> */}
        </div>
    </div>
  );
}

export default Card;
