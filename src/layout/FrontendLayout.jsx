import { Outlet, Link } from "react-router-dom";
import logo from "../assets/Handmade_Bow.png";

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
                            手作小教室
                        </Link>
                        <Link className="nav-link px-4 py-2" to="/product">
                            客製化專區
                        </Link>
                        <div className="dropdown">
                            <button className="nav-link px-4 py-2 dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                商品分類
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/product">全部產品</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">分類 1</a></li>
                                <li><a className="dropdown-item" href="#">分類 2</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* 右側：購物車 + 用戶 */}
                    <div className="d-flex align-items-center gap-3">
                        <Link className="nav-link px-4 py-2" to="/cart">
                            <i className="bi bi-cart"></i>
                        </Link>
                        <button className="nav-link px-4 py-2 dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            <i className="bi bi-person-circle"></i>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
        <footer> &copy; 2026 愛哆啦也愛手作</footer>
    </>)
}

export default FrontendLayout;