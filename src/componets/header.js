import "bulma/css/bulma.css"; // install bulma css package with npm install bulma
import React from "react";

export default function HeaderSection() {
  return (
    <div className='block'>
      <div className='box'>
        <div>
          <section className='hero is-primary'>
            <div className='hero-body'>
              <p className='title'>Create Book List from Digital Assistant</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
