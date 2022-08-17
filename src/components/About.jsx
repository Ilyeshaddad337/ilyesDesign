

function About() {
  return (
    <div id="About">
        <div className="container">
            <div className="text">
                <h1 className="comic-bold red" >About</h1>
                <h4 className="comic-bold">Hello there ! I am Ilyes Haddad a <span className="green">freelance</span> web designer or developer if you want.. </h4>
                <p className="comic-thin">i am from Algeria , A student at <a className="red" href="https://www.esi-sba.dz/">ESI SBA</a> (Ecole superieur en Informatique ), Here is what I am good at : (in addition to satisfying your needs :) ) </p>
            </div>
            
                <div className="tabs">
                  <button className="tablink active">Web Design</button>
                  <button className="tablink">Coding</button>
                </div>
        
                <div id="web-design" className="tabcontent">
                  <div className="card">
                    <img src="./images/html.png" alt="" />
                    <h2>HTML5</h2>
                  </div>
                  <div className="card">
                    <img src="./images/css-3(1).png" alt="" />
                    <h2>CSS3</h2>
                  </div>
                  <div className="card">
                    <img src="./images/js.png" alt="" />
                    <h2>JavaScript</h2>
                  </div>
                  <div className="card">
                    <img src="./images/physics.png" alt="" />
                    <h2>React Js</h2>
                  </div>
                  <div className="card">
                    <img src="./images/firebase.png" alt="" />
                    <h2>Firebase</h2>
                  </div>
                  <div className="card">
                    <img src="./images/wordpress.png" alt="" />
                    <h2>Wordpress</h2>
                  </div>
                  <div className="card">
                    <img src="./images/elementor.png" alt="" />
                    <h2>Elementor</h2>
                  </div>
                  <div className="card">
                    <img src="./images/woocommerce-icon.png" alt="" />
                    <h2>commerce</h2>
                  </div>
                </div>
                <div id="web-design" className="tabcontent">
                  
                </div>


        </div>
    </div>
  )
}

export default About