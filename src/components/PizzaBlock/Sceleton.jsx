import React from "react";
import ContentLoader from "react-content-loader";

const Sceleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#e1dbdb"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="133" cy="131" r="115" />
    <rect x="9" y="258" rx="10" ry="10" width="255" height="22" />
    <rect x="6" y="298" rx="10" ry="10" width="263" height="77" />
    <rect x="6" y="391" rx="10" ry="10" width="95" height="30" />
    <rect x="116" y="384" rx="30" ry="30" width="152" height="45" />
    <rect x="239" y="445" rx="0" ry="0" width="1" height="4" />
  </ContentLoader>
);

export default Sceleton;
