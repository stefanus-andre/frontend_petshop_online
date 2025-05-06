import Navbar from "../../user/utility/Navbar.jsx";


export default function Dashboard() {

    const products = [
        {
            id: 1,
            title: "Wireless Headphones",
            price: "$59.99",
            image: "https://via.placeholder.com/300x200.png?text=Headphones",
            rating: 4,
        },
        {
            id: 2,
            title: "Smart Watch",
            price: "$129.99",
            image: "https://via.placeholder.com/300x200.png?text=Smart+Watch",
            rating: 5,
        },
        {
            id: 3,
            title: "Bluetooth Speaker",
            price: "$39.99",
            image: "https://via.placeholder.com/300x200.png?text=Speaker",
            rating: 3,
        },
    ]


    function ProductCard({ product }) {
        return (
            <div className="bg-white rounded-lg shadow-sm dark:bg-gray-800">
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover object-center" />
                <div className="p-4">
                    <h2 className="text-lg font-semibold dark:text-white">{product.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300">{product.price}</p>
                    <RatingStars rating={product.rating} />
                </div>
            </div>
        );
    }

    function RatingStars({ rating }) {
        const totalStars = 5;
        return (
            <div className="flex mt-2">
                {[...Array(totalStars)].map((_, index) => (
                    <svg
                    key={index}
                    className={`w-5 h-5 ${index < rating ? "text-yellow-500" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.05 3.234a1 1 0 00.95.69h3.397c.969 0 1.371 1.24.588 1.81l-2.748 1.99a1 1 0 00-.364 1.118l1.05 3.234c.3.921-.755 1.688-1.54 1.118l-2.748-1.99a1 1 0 00-1.176 0l-2.748 1.99c-.784.57-1.838-.197-1.539-1.118l1.05-3.234a1 1 0 00-.364-1.118L2.465 8.66c-.783-.57-.38-1.81.588-1.81h3.397a1 1 0 00.95-.69l1.05-3.234z"></path>
                    </svg>
                ))}
            </div>
        )
    }


    return(
        <>
        <Navbar/>

            <div className="max-w-screen-xl mx-auto p-4">
                <h1 className="text-2xl font-bold mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                        {products.map((products) => (
                            <ProductCard key={products.id} product={products} />
                        ))}
                    </div>
                </h1>
            </div>
        </>
    )
}


