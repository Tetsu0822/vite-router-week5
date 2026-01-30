import useProducts from "../../hooks/useProjects";


function Home() {
    const { products, loading, error } = useProducts();

    return (
        <>
        <h2>首頁</h2>
        {loading && <p>載入中...</p>}
        {error && <p>發生錯誤：{error.message}</p>}
        {!loading && !error && (<ul>
            {products.map(product => (
                <li key={product.id}>{product.title} - ${product.price}</li>
            ))}
        </ul>)}
        </>
    )
}

export default Home