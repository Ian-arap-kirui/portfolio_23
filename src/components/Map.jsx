import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-9.0, -50.0, -5],
        center: [40, -40],
        scale: 1300,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/custom.geo.json"
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[36.8167, -1.2833]}
        dx={-45}
        dy={-15}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"I am in Nairobi, Kenya"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
