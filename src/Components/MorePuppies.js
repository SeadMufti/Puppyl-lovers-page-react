import React from 'react'
import puppy3 from './images/puppy-3.jpg';
import puppy4 from './images/puppy-4.jpg';              
function MorePuppies() {
  return (
    <div>
      <h2>More Puppies</h2>

      <section className="puppies">
        <div>
          <img src={puppy3} alt="Puppy 3" />
        </div>

        <div>
          <img src={puppy4} alt="Puppy 4" />
        </div>
              </section>
    </div>
  );
}

export default MorePuppies