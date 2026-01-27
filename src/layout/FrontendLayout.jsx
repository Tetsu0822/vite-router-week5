import { Outlet, Link } from "react-router-dom";

const FrontendLayout = () => {
    return  (<>
        <header>
            <nav className="mt-5">
                <Link className="mx-2" to="/">
                    首頁
                </Link>
                <Link className="mx-2" to="/product">
                    產品頁面
                </Link>
                <Link className="mx-2" to="/cart">
                    購物車頁面
                </Link>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
        <footer> &copy; 2026 愛哆啦也愛手作</footer>
    </>)
}

export default FrontendLayout;