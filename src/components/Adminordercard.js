import React from 'react';
import {Link} from 'react-router-dom';

const Adminordercard = () =>{
    return(
        <div>
            <div className="admincard-title">
                ORDER
            </div>
            <div className="activity-tab">
                <ul>
                    <Link to="/admin/order" style={{textDecoration:'none',color:'black'}}><li className="admincard-pil">Belum diverifikasi</li></Link>
                    <Link to="/admin/order/done" style={{textDecoration:'none',color:'black'}}><li className="admincard-pil">Sudah diverifikasi</li></Link>
                    <Link to="/admin/order/all" style={{textDecoration:'none',color:'black'}}><li className="admincard-pil">Semua</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Adminordercard