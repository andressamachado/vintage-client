import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image1 from "../../assets/images/1.jpeg";
import image2 from "../../assets/images/2.jpeg";
import image3 from "../../assets/images/3.jpeg";
import image4 from "../../assets/images/4.jpeg";
import image5 from "../../assets/images/5.jpeg";
import image6 from "../../assets/images/6.jpeg";
import image7 from "../../assets/images/7.jpeg";
import image8 from "../../assets/images/8.jpeg";
import image9 from "../../assets/images/9.jpeg";
import "./slide-deck.scss";

// https://react-slideshow-image.netlify.app/?path=/story/introduction--page

function Slideshow() {
  const slideImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  //Ready to get emerged? listen to our playlist! p
  return (
    <div className="slide-deck">
      <Slide>
        {slideImages.map((image, index) => {
          return (
            <div className="each-slide-effect">
              <div>
                <img src={image} alt={index} />
              </div>
            </div>
          );
        })}
      </Slide>

      <div className="slide-deck__overlay"> </div>
      <h2 className="slide-deck__text-overlay">For a better future</h2>
    </div>
  );
}

export default Slideshow;
