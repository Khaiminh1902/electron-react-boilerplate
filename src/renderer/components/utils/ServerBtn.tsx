import React from "react";
import { IServerBtn } from "../../shared/types";
import { Link } from "react-router-dom";

const ServerBtn = React.memo(({icon, img, title, url}: IServerBtn) => {
    return (
        <Link className="channel-btn mb-2" to={url} >
            {
                icon || <img src={img} alt="" />
            }
        </Link>
    )
})

export default ServerBtn