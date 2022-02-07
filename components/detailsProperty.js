import React from "react";
import { priceFormatted } from "../helpers/helpers";
import Moment from "react-moment";
import Collapse from "./collapse";

const DetailsProperty = ({ property }) => {
  return (
    <div classNameName="mt-4">
      <div className="globalColor">{property?.title}</div>
      <hr className="my-3" />
      <div>{property?.category.name}</div>
      <div>{property?.address}</div>
      <hr className="my-2" />
      <div className="description mt4 mb-3">{property?.description}</div>
      <Collapse title="¨Property Address">
        <div class="mt-3 pl-3">
          <div>
            <span class="font-weight-bolder">Town</span>: {property?.city}
          </div>
          <div>
            <span class="font-weight-bolder">Address</span>: {property?.address}
          </div>
          <div>
            <span class="font-weight-bolder">Region</span>: Monde
          </div>
        </div>
      </Collapse>
      <Collapse title="Details Property">
        <div class="mt-3 pl-3">
          <div>
            <span class="font-weight-bolder">Surface</span>: {property?.surface}
          </div>
          <div>
            <span class="font-weight-bolder">Price</span>:{" "}
            {priceFormatted(property?.price)}
          </div>
          <div>
            <span class="font-weight-bolder">Rooms</span>: {property?.bedrooms}
          </div>
          <div>
            <span class="font-weight-bolder">Category</span>:
            {property?.category.name}
          </div>
          <div>
            <span class="font-weight-bolder">Created at</span>:
            <Moment format="MM/DD/YYY to HH:mm">{property?.createdAt}</Moment>
          </div>
        </div>
      </Collapse>
      <style jsx>
        {`
          .description {
            whtite-space: pre-line;
          }
        `}
      </style>
    </div>
  );
};

export default DetailsProperty;
