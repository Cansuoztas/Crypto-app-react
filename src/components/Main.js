import React, { memo } from "react";
import Down from "../icons/Down";
import Up from "../icons/Up";
const Main = ({ data }) => {
  console.log(data);
  return (
    <div
      className="container "
      style={{
        margin:"auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      {data.map((data) => {
        return (
          <div
            className="card"
            key={data.id}
            style={{
              marginTop:"1rem",
              hover:"bg-gray-300",
              display: "flex",
              padding: "20px 10px",
              flexDirection: "column",
              borderRadius:"20px",
              gap: "3rem",
              width: "250px",
              height: "350px",
            }}
          >
            <div >
              <img
                src={data.image}
                width="70px"
                height="70px"
                alignItems="center"
                alt={data.symbol}
              />
              <h1 className="text-2xl font-semibold">{data.name}</h1>
            </div>

            <div  style={{
                  textAlign: "center",
                  gap:"3"
                }}>
              <div>
                <span className="mr-3">Price: </span>
                <span>
                  $
                  {data.current_price
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </span>
              </div>

              <div  
              style={{
                textAlign: "center",
              }}>
                24 Hour Volume:
                {data?.price_change_percentage_24h < 0 ? (
                  <p
                   
                    style={{
                      color: "red",
                      gap:"2",
                      alignItems:"center"
                    
                    }}
                  >
                    {data?.price_change_percentage_24h.toFixed(2)}%{<Down />}
                  </p>
                ) : (
                  <p
                   
                    style={{
                      color: "green",
                      alignItems:"center",
                      gap:"2"
                    }}
                  >
                    {data?.price_change_percentage_24h.toFixed(2)}
                    {<Up />}
                  </p>
                )}
                {/* <Up />
                 */}
              </div>
              <p
                style={{
                  textAlign: "center",
                }}
              >
                <span className="font-semibold text-lg">Market Cap </span>{" "}
                <br />
                <span className="text-lg">
                  ${" "}
                  {data.market_cap
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  ,00
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};


export default memo(Main);