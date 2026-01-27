import FrontendLayout from "../layout/FrontendLayout";
import Cart from "../pages/front/Cart";
import Home from "../pages/front/Home";
import NotFound from "../pages/front/NotFound";
import Products from "../pages/front/Products";
import SingleProduct from "../pages/front/SingleProduct";

const routes = [
    {
        path: '/',
        element: <FrontendLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'product',
                element: <Products />
            },
            {
                path: 'product/:id',
                element: <SingleProduct />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
]

export default routes;
