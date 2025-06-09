import React,{ useState ,useEffect} from 'react'
import './Position.css'
import axios from 'axios';

// import { positions } from '../Data/Data';
function Positions() {
 const [positions,setPositions]= useState([]);

 useEffect(()=>{
  axios.get("http://localhost:5000/api/client/allPositions").then((res) => {
    setPositions(res.data);
  });
 },[])

  return (
    <>
      <h3 className="title">Positions {positions.length}</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          {
            positions.map((item,index)=>{
              const curValue = item.price * item.qty;
              const isProfit = curValue - item.avg * item.qty >= 0.0;
              const profitClass = isProfit ? "profit" : "loss";
              const dayClass = item.isLoss ? "loss" : "profit";


              return (
                  <tbody>
                    <tr key={index} className="">
                      <td>{item.product}</td>
                      <td>{item.name}</td>
                      <td>{item.qty}</td>
                      <td>{item.avg.toFixed(2)}</td>
                      <td>{item.price.toFixed(2)}</td>
                     
                      <td className={profitClass}>{ (curValue - item.avg * item.qty).toFixed(2)}</td>
                      <td className={dayClass}>{item.day}</td>
                    </tr>
                  </tbody>
              )
            })
              
          }
        </table>
      </div>
    </>
  );
}

export default Positions