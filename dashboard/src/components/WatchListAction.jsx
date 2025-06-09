import { Tooltip,Grow } from '@mui/material'
import React from 'react'
import './WatchListAction.css'
import BarChartIcon from "@mui/icons-material/BarChart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function WatchListAction({uid}) {
  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          enterDelay={500}
          leaveDelay={200}
        >
          <button className="buy">Buy</button>
        </Tooltip>

        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          enterDelay={500}
          leaveDelay={200}
        >
          <button className="sell">Sell</button>
        </Tooltip>

        <Tooltip
          title="Analytic (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          enterDelay={500}
          leaveDelay={200}
        >
          <button className="analytic">
            <BarChartIcon className="icon" />
          </button>
        </Tooltip>

        <Tooltip
          title="More"
          placement="top"
          arrow
          TransitionComponent={Grow}
          enterDelay={500}
          leaveDelay={200}
        >
          <button className="more-btn">
            <MoreHorizIcon className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
}

export default WatchListAction