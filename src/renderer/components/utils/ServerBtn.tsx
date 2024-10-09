import React from "react";
import { IServerBtn } from "../../shared/types";
import { Link } from "react-router-dom";
import '../../App.css'

const ServerBtn = React.memo(({icon, img, title, url, onClick}: IServerBtn) => {
    return (
        <div className="channel-btn mb-2" >
            {
                icon || <img src={img} alt="" />
            }
        </div>
    )
})

export default ServerBtn