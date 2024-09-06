import { Button } from "@mui/material";
import { IoMdHeartEmpty } from "react-icons/io";
import { SlSizeFullscreen } from "react-icons/sl";

import "swiper/css";
import "swiper/css/navigation";

import Rating from "@mui/material/Rating";

const ProductItem = () => {
  return (
    <div className="item productItem">
      <div className="imgWrapper">
        <img
          src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
          className="w-100"
        />

        <span className="badge badge-primary">20%</span>
        <div className="actions">
          <Button>
            <SlSizeFullscreen />
          </Button>

          <Button>
            <IoMdHeartEmpty style={{ fontSize: "20px" }} />
          </Button>
        </div>
      </div>

      <div className="info">
        <h4>All Natural Italian-Style Chicken Meatballs</h4>
        <span className="text-success d-block">In Stock</span>
        <Rating
          className="mt-2 mb-2"
          name="read-only"
          value={3}
          readOnly
          size="small"
          precision={0.5}
        />
        <div className="d-flex">
          <span className="oldPrice">$20.00</span>
          <span className="newPrice text-danger ml-2">$14.97</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
