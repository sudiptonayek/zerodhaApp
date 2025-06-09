import React,{ useState ,useEffect} from 'react'
import "./Holding.css";
import axios from 'axios';
import { VerticalGraph } from './VerticalGraph';


function Holdings() {
  const [holdings, setHoldings] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/api/client/allHoldings",{withCredentials:true}).then((res)=>{
      
      setHoldings(res.data);
    });
  },[])


  const labels= holdings.map((subArray)=>subArray["name"]);
  const data = {
     labels,
     datasets :[
      {
        label: "Stock price",
        data : holdings.map((stock)=>stock.price),
        backgroundColor: "rgba(235, 46, 87, 0.63)",
      }
     ]
  }

  return (
    <>
      <h3 className="title">Holdings {holdings.length} </h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {
            holdings.map((item,index)=>{
              const currentValue = item.qty * item.price;
              const isProfit = currentValue -item.avg*item.qty>=0.0;
              const profitClass = isProfit ? "profit" : "loss";
              const dayClass=item.isLoss ? "loss" : "profit";

              return (
                <tr key={index} className="">
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{item.avg.toFixed(2)}</td>
                  <td>{item.price.toFixed(2)}</td>
                  <td>{currentValue.toFixed(2)}</td>
                  <td className={profitClass}>
                    {(currentValue - item.avg * item.qty).toFixed(2)}
                  </td>
                  <td className={profitClass}>{item.net}</td>
                  <td className={dayClass}>{item.day}</td>
                  <td></td>
                  <td></td>
                </tr>
              );
            })
          }
        
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph  data={data}/>
    </>
  );
}

export default Holdings