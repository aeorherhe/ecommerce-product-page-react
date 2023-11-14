/* eslint-disable react-refresh/only-export-components */
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  closeSlide,
  nextSlide,
  prevSlide,
  setSlide,
} from "../../features/displayImgSlice";
import CloseIcon from "./CloseIcon";
import LoadingSpinner from "./LoadingSpinner";

function SlideShow() {
  const { images, currentSlide } = useSelector((state) => state.displayImg);
  const dispatch = useDispatch();
  return (
    <StyledSlides className="slides full-width">
      <div className="item-img">
        <div className="close-icon" onClick={() => dispatch(closeSlide())}>
          <CloseIcon color={"#fff"} />
        </div>
        {images.map((image) => {
          if (!image.id) return <LoadingSpinner key={image.id} />;
          if (image.id === currentSlide) {
            return (
              <img
                className="slide"
                src={image.img}
                alt="image"
                key={image.id}
              />
            );
          }
        })}
        <button className="btn prev" onClick={() => dispatch(prevSlide())}>
          <img src="/images/icon-previous.svg" alt="prev" />
        </button>
        <button className="btn next" onClick={() => dispatch(nextSlide())}>
          <img src="/images/icon-next.svg" alt="next" />
        </button>
      </div>
      <div className="thumbnails">
        {images.map((image) => {
          return (
            <img
              src={image.thumbNail}
              alt="thumbnail"
              key={image.id}
              onClick={() => dispatch(setSlide(image.id))}
            />
          );
        })}
      </div>
    </StyledSlides>
  );
}

export default SlideShow;

/****************** styled component ***************/
/****************** styled component ***************/

export const StyledSlides = styled.div`
  /* border: 4px solid red; */

  .item-img {
    position: relative;
  }

  .next,
  .prev {
    padding: 0.75rem 1rem;
    font-size: 1.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--White);
    cursor: pointer;
  }

  .prev {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
  }

  .next {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
  }

  img {
    display: block;
    width: 100%;
  }

  .close-icon {
    display: none;
  }

  .thumbnails {
    display: none;
  }

  @media (min-width: 768px) {
    .thumbnails {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(4, 1fr);
      padding: 1rem;
    }
    .next,
    .prev {
      display: none;
    }

    img {
      border-radius: var(--border-radius);
    }
  }
`;
