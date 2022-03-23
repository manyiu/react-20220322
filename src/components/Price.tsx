import axios from "axios";
import { useEffect, useState } from "react";

const Price = () => {
  const [price, setPrice] = useState(0);
  const [updated, setUpdated] = useState("");

  useEffect(() => {
    const getRequest = async () => {
      const response = await axios.get(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );

      setPrice(response.data.bpi.EUR.rate_float);
      setUpdated(response.data.time.updated);
    };

    getRequest();
  }, []);

  return (
    <div>
      <h1>Price</h1>
      <div>{price}</div>
      <div>{updated}</div>
    </div>
  );
};

export default Price;
