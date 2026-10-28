import React from 'react'
import puppy1 from './images/puppy-1.jpg';
import puppy2 from './images/puppy-2.jpg';
function Puppies() {
  return (
    <section className="puppies">
      <div className="puppy-1">
        <img src={puppy1} alt="Puppy 1" />
      </div>

      <div className="missingPuppy">
        <div>
          <p>Puppy missing here!!</p>
        </div>
      </div>

      <div className="puppy-2">
        <img src={puppy2} alt="Puppy 2" />
      </div>
    </section>
  );
}

export default Puppies;