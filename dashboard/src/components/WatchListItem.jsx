import React,{useState} from 'react'
import './WatchListItem.css'
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WatchListAction from './WatchListAction';
function WatchListItem({item}) {
    // eslint-disable-next-line no-unused-vars
    const [showWatchListActions, setShowWatchListActions] = useState(false);
    const handelMouseEnter = () => {
        setShowWatchListActions(true);
    }
    const handelMouseExit = () => {
      setShowWatchListActions(false);
    };
  return (
    <li onMouseEnter={handelMouseEnter} onMouseLeave={handelMouseExit}>
      <div className="item">
        <p className={item.isDown ? "down" : "up"}>{item.name}</p>
        <div className="itemInfo">
          <span className="percent">{item.percent}</span>
          {item.isDown ? (
            <KeyboardArrowDownIcon className="down" />
          ) : (
            <KeyboardArrowUpIcon className="up" />
          )}
          <span className="percent">{item.price}</span>
        </div>
      </div>
      {
        showWatchListActions && <WatchListAction uid={item.name} />
      }
    </li>
  );
}

export default WatchListItem