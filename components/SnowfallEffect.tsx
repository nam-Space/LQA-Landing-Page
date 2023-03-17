import React from "react";
import Snowfall from "react-snowfall";

const SnowfallEffect = () => {
    return (
        <div className="relative top-0 left-0 right-0 bottom-0 z-[9999]">
            <Snowfall
                // Changes the snowflake color
                color="#f2f2f2"
                // Applied to the canvas element
                style={{
                    position: "fixed",
                    width: "100vw",
                    height: "100vh",
                }}
                // Controls the number of snowflakes that are created (default 150)
                snowflakeCount={200}
            />
        </div>
    );
};

export default SnowfallEffect;
