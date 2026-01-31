import axios from "axios";
import { useState, useEffect } from "react";
const VITE_API_BASE = import.meta.env.VITE_API_BASE;
const VITE_API_PATH = import.meta.env.VITE_API_PATH;
function Cart() {
    const [ cartData, setCartData ] = useState([]);
    // API 取得購物車資料顯示在此
    useEffect(() => {
        const fetchCartData = async () => {
            // Fetch cart data from API
            const response = await axios.get(`${VITE_API_BASE}/api/${VITE_API_PATH}/cart`);
            console.log(response.data);
            setCartData(response.data.data.carts);
        }
        fetchCartData();
    }, []);
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <div style={{paddingTop: "60px",paddingBottom: "60px"}}>
                        <h2 className="h6 text-gray-900">購物車</h2>
                        <div className="d-none d-md-block">
                            <div className="card">
                                <div className="table-responsive">
                                    <table className="table align-middle mb-0">
                                    <thead>
                                        <tr>
                                        <th style={{background: "#EAE1E3"}} scope="col">商品</th>
                                        <th style={{background: "#EAE1E3"}} scope="col">單價</th>
                                        <th style={{background: "#EAE1E3"}} scope="col">數量</th>
                                        <th style={{background: "#EAE1E3"}} scope="col">小計</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartData.map(item => (
                                        <tr key={item.id}>
                                            <td>
                                            <img src={item.product.imageUrl} alt={item.product.title} style={{width: 40, height: 40, objectFit: 'cover', borderRadius: '50%', marginRight: 8}} />
                                            {item.product.title}
                                            </td>
                                            <td>${item.product.price}</td>
                                            <td>{item.qty}</td>
                                            <td>${item.total}</td>
                                        </tr>
                                        ))}
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* 手機版購物車顯示 */}
                        <div className="d-md-none">
                            <div className="card">
                                <div className="fw-bold mb-2" style={{background: "#ede6e8", color: "#8f7e82", borderRadius: "8px 8px 0 0", padding: "8px 12px"}}>商品明細</div>
                                {cartData.map(item => (
                                <div key={item.id} className="d-flex justify-content-between align-items-start py-2 border-bottom">
                                    <div>
                                    <div className="fw-bold" style={{fontSize: "1.1rem"}}>{item.product.title}</div>
                                    <div className="text-secondary" style={{fontSize: "0.95rem"}}>單價 ${item.product.price} / 數量 {item.qty}</div>
                                    </div>
                                    <div className="fw-bold" style={{fontSize: "1.1rem"}}>${item.total}</div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div style={{paddingTop: "60px",paddingBottom: "60px"}}>
                        <h2 className="h6 text-gray-900">結帳明細</h2>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cart;