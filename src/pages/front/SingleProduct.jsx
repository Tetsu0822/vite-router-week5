import { useParams } from "react-router";

function SingleProduct() {
    const params = useParams();
    const { id } = params;
    console.log(id);
    return (
        <>
        <h2>單一產品頁面</h2>
        </>
    )
}

export default SingleProduct;