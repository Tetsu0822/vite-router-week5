import { Outlet, Link } from "react-router-dom";
import { ShoppingCart, Copyright } from "lucide-react";
import logo from "../assets/Handmade_Bow.png";
import fb from "../assets/fb.png";
import line from "../assets/line.png";
import ig from "../assets/ig.png";
import Footer from "../components/Footer";

const FrontendLayout = () => {
    return  (<>
        <header>
            <nav className="navbar bg-white py-4">
                <div className="container-fluid d-flex align-items-center justify-content-between">
                    {/* 左側：Logo */}
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <img src={logo} alt="Logo" width="36" height="20" className="me-2"/>
                        <span className="h6 mb-0">愛哆啦也愛<span className="text-primary-700">手作</span></span>
                    </a>

                    {/* 中間：菜單 */}
                    <div className="d-flex gap-4">
                        <Link className="nav-link px-4 py-2" to="/">
                            首頁
                        </Link>
                        <Link className="nav-link px-4 py-2" to="/product">
                            產品列表
                        </Link>
                        <Link className="nav-link px-4 py-2" to="/cart">
                            <ShoppingCart />
                        </Link>
                    </div>

                    {/* 右側：購物車 + 用戶 */}
                    {/* <div className="d-flex justify-content-end align-items-center gap-3">
                        <Link className="nav-link px-4 py-2" to="/cart">
                            <ShoppingCart />
                        </Link>
                        <a className="nav-link px-4 py-2" href="#">
                            <User />
                        </a>
                    </div> */}
                </div>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
        <Footer />
    </>)
}

export default FrontendLayout;