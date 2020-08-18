import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import pic1 from "./images/alfred-rowe-FVWTUOIUZd8-unsplash.jpg";
import pic2 from "./images/alfred-rowe-w2dWzKL_t5E-unsplash.jpg";
import pic3 from "./images/hello-lightbulb-QqMy7OBBJjE-unsplash.jpg";
import pic4 from "./images/reuben-hayfron-RjkZHESUuPw-unsplash.jpg";
import pic5 from "./images/seyiram-kweku-I9YlJppV_TQ-unsplash.jpg";
import pic6 from "./images/yoel-winkler-bSkAO5691MA-unsplash.jpg";
import pic7 from "./images/zac-wolff-30p3lM7OKzU-unsplash.jpg";
import pic8 from "./images/zac-wolff-7vU0nE1iwZ4-unsplash.jpg";

const Person = ({ img, name, job, children }) => {
  //using template litrals
  // const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
      {/* <img src={url}></img> */}
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

//now to create a component
const PersonList = () => {
  return (
    <div>
      <section className="person-list">
        <Person img="" name="spider" job="web developer">
          <img src={pic1} alt=""></img>
        </Person>
        <Person img="" name="seth" job="designer">
          <img src={pic2} alt=""></img>
        </Person>
        <Person img="" name="kofi" job="boss">
          <img src={pic3} alt=""></img>
          <p>
            Lorem20 isrw akjmfkhg;l wkkkv vkw;krgk eka;lkj ekrg;lko wlkjkjhk
            uaejruhgegrgaeegasgw
          </p>
        </Person>
      </section>
      <section className="person-list">
        <Person img="" name="spider" job="web developer">
          <img src={pic4} alt=""></img>
        </Person>
        <Person img="" name="seth" job="designer">
          <img src={pic5} alt=""></img>
        </Person>
        <Person img="" name="kofi" job="boss">
          <img src={pic6} alt=""></img>
          <p>
            Lorem20 isrw akjmfkhg;l wkkkv vkw;krgk eka;lkj ekrg;lko wlkjkjhk
            uaejruhgegrgaeegasgw
          </p>
        </Person>
      </section>

      <section className="person-list">
        <Person img="" name="spider" job="web developer">
          <img src={pic7} alt=""></img>
        </Person>
        <Person img="" name="seth" job="designer">
          <img src={pic8} alt=""></img>
        </Person>
        <Person img="86" name="kofi" job="boss">
          <p>
            Lorem20 isrw akjmfkhg;l wkkkv vkw;krgk eka;lkj ekrg;lko wlkjkjhk
            uaejruhgegrgaeegasgw
          </p>
        </Person>
      </section>

      <section className="person-list">
        <Person img="63" name="spider" job="web developer"></Person>
        <Person img="47" name="seth" job="designer"></Person>
        <Person img="56" name="kofi" job="boss">
          <p>
            Lorem20 isrw akjmfkhg;l wkkkv vkw;krgk eka;lkj ekrg;lko wlkjkjhk
            uaejruhgegrgaeegasgw
          </p>
        </Person>
      </section>
    </div>
  );
};

ReactDOM.render(<PersonList></PersonList>, document.getElementById("root"));
