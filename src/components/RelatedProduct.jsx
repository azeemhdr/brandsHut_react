import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import product_image from "../Images/product (1).webp";
import product_1 from "../Images/product (5).webp";
import product_2 from "../Images/product (6).webp";
import product_3 from "../Images/product (7).webp";
import product_4 from "../Images/product (8).webp";

export default function RelatedProduct() {
  return (
    <div>
      <div className="swiper_conatiner">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="bg-secondary p-2">
              <img src={product_1} alt="" className="img-fluid" />
              <h5>Formal Shirt For Men</h5>
              <p>Green Giza Satin Cotton Full Sleeve Formal Shirt For Men</p>
              <p className="fw-semibold">
                <span>&#8377; 1499/- </span>
                <span className="text-decoration-line-through text-danger">
                  &#8377;2999/-
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-secondary p-2">
              <img src={product_2} alt="" className="img-fluid" />
              <h5>Formal Shirt For Men</h5>
              <p>Green Giza Satin Cotton Full Sleeve Formal Shirt For Men</p>
              <p className="fw-semibold">
                <span>&#8377; 1499/- </span>
                <span className="text-decoration-line-through text-danger">
                  &#8377;2999/-
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-secondary p-2">
              <img src={product_3} alt="" className="img-fluid" />
              <h5>Formal Shirt For Men</h5>
              <p>Green Giza Satin Cotton Full Sleeve Formal Shirt For Men</p>
              <p className="fw-semibold">
                <span>&#8377; 1499/- </span>
                <span className="text-decoration-line-through text-danger">
                  &#8377;2999/-
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-secondary p-2">
              <img src={product_4} alt="" className="img-fluid" />
              <h5>Formal Shirt For Men</h5>
              <p>Green Giza Satin Cotton Full Sleeve Formal Shirt For Men</p>
              <p className="fw-semibold">
                <span>&#8377; 1499/- </span>
                <span className="text-decoration-line-through text-danger">
                  &#8377;2999/-
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-secondary p-2">
              <img src={product_image} alt="" className="img-fluid" />
              <h5>Formal Shirt For Men</h5>
              <p>Green Giza Satin Cotton Full Sleeve Formal Shirt For Men</p>
              <p className="fw-semibold">
                <span>&#8377; 1499/- </span>
                <span className="text-decoration-line-through text-danger">
                  &#8377;2999/-
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-secondary p-2">
              <img src={product_1} alt="" className="img-fluid" />
              <h5>Formal Shirt For Men</h5>
              <p>Green Giza Satin Cotton Full Sleeve Formal Shirt For Men</p>
              <p className="fw-semibold">
                <span>&#8377; 1499/- </span>
                <span className="text-decoration-line-through text-danger">
                  &#8377;2999/-
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-secondary p-2">
              <img src={product_3} alt="" className="img-fluid" />
              <h5>Formal Shirt For Men</h5>
              <p>Green Giza Satin Cotton Full Sleeve Formal Shirt For Men</p>
              <p className="fw-semibold">
                <span>&#8377; 1499/- </span>
                <span className="text-decoration-line-through text-danger">
                  &#8377;2999/-
                </span>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
