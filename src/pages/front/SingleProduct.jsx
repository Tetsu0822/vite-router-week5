import { useParams } from "react-router";
import useProducts from "../../hooks/useProjects";

function SingleProduct() {
    const params = useParams();
    const { id } = params;
    const { products, loading, error } = useProducts();
    return (
        <>
        <div className="container">
            {
            loading &&
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">載入中...</span>
            </div>
            }
            {!loading && !error && (
                <>
                                {/* 麵包屑導航 首頁 / 父分類 / 子分類 / 商品名稱 */}
                                <nav aria-label="breadcrumb" className="mb-3">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">首頁</a></li>
                                        {/* 假設有父分類與子分類，這裡以假資料顯示，可根據實際資料結構調整 */}
                                        <li className="breadcrumb-item"><a href="#">父分類</a></li>
                                        <li className="breadcrumb-item"><a href="#">子分類</a></li>
                                        {products.filter(product => product.id === id).map(filteredProduct => (
                                            <li className="breadcrumb-item active" aria-current="page" key={filteredProduct.id}>{filteredProduct.title}</li>
                                        ))}
                                    </ol>
                                </nav>

                {products.filter(product => product.id === id).map(filteredProduct => (
                    <div key={filteredProduct.id}>
                        <div className="row">
                            <div className="col-md-6">
                                <img src={filteredProduct.imageUrl} alt={filteredProduct.title} className="img-fluid"
                                style={{
                                    width: "100%",
                                    maxHeight: "420px",
                                    borderRadius: "16px"
                                }}
                            />
                            </div>
                            <div className="col-md-6">
                                <h2 className="h3">{filteredProduct.title}</h2>
                                <p>{filteredProduct.description}</p>
                                <h4>${filteredProduct.price}</h4>
                                <button className="btn btn-primary">加入購物車</button>
                            </div>
                        </div>
                    </div>
                ))}
                </>
            )}
        </div>
        </>
    )
}

export default SingleProduct;