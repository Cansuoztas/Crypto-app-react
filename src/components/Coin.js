import axios from "axios";
import React, { memo, useEffect, useMemo, useState } from "react";
import Main from "./Main";
import Loader from "./Loader";


const Coin = () => {
  const [coin, setCoin] = useState([]);
  const [search, setSearch] = useState("");
  const [text, setText] = useState("");
  const [toggle, setToggle] = useState("")
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const getApi = async () => {
    try {
      const { data } = await axios(url);
      setCoin(data);
    } catch (error) {
      alert(error.message);
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(text);
  };

  useEffect(() => {
    getApi();
  }, []);
  const filtredSearch = useMemo(() => {
    return coin?.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [coin, search]);
  //   setInterval(() => {
  //     getApi();
  //   }, 10000);
  console.log(toggle);
 
  return (

    <div className= {toggle ? "dark" : "light"} >
        
      <form   onSubmit={handleSearch} style={{backgroundColor:"rgba(0, 0, 0, 0.553)"}}>
         <h1 className="fs-1 fw-bold" style={{fontSize:"3rem" ,textAlign:"center"}}> Crypto APP </h1>
        <input
          type="search"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            backgroundColor:"rgba(241, 237, 233, 0.884)",
            marginTop:"auto",
            borderRadius:"10px",
            padding:"1rem 2rem",
            fontWeight:"bold",
            margin:"1rem",
           
          }}
        />
     
        <button className=" btn btn-danger p-3" type="submit" style={{  borderRadius:"10px",
            padding:"1rem 2rem",backgroundColor:"rgba(228, 29, 29, 0.911)",fontWeight:"bold",fontSize:"13px"}}>Search</button>
            <div>
        <button className={toggle ? "darkbtn" : "lightbtn"} onClick={()=>setToggle(!toggle)}>{toggle ? "Light":"Dark"  }</button>
        </div>
      </form>
      <div className="d-flex  justify-content-center align-items-center gap-2 flex-wrap "
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2rem",
          
        }}
      >
        <Main data={filtredSearch} key={filtredSearch.id} />
      </div>
    </div>
  );
};

export default Coin;