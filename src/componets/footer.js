import React from "react";

export default function FooterSection() {
  return (
    <div>
      <div className='block'>
        <div className='box'>
          <footer className='footer'>
            <section className='hero is-info'>
              <div className='content has-text-centered'>
                <p>
                  {" "}
                  <a href='http://localhost:3000/'><strong>Alpharay Technologies</strong></a>. The source
                  code is licensed
                  <a href='http://opensource.org/licenses/mit-license.php'>
                    {" "}
                    MIT
                  </a>
                  . The website content is licensed{" "}
                  <a href='http://localhost:1975/'>by Alpharay Technologies</a>.
                </p>
              </div>
            </section>
          </footer>
        </div>
      </div>
    </div>
  );
}
