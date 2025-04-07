import { useState } from "react";
import Search from "../../../assets/icons/search";
import "./index.css";
import ModalWrapper from "../../../components/ModalWrapper";
import FileUpload from "../../../components/FileUpload/FileUpload";

const FarmerInventory: React.FC = () => {
    const [showProductModal, setShowProductModal] = useState<boolean>(false);

    const handleProductModal = () => {
        setShowProductModal((prev) => !prev);
    };

    const products = [
        {
            name: "Macbook Pro",
            code: "#0001",
            type: "Laptop",
            price: "$1,241",
            quantity: 44,
        },
        {
            name: "iPhone 14 pro",
            code: "#0002",
            type: "Phone",
            price: "$1,499",
            quantity: 23,
        },
        {
            name: "Zoom75",
            code: "#0003",
            type: "Keyboard",
            price: "$215",
            quantity: 23,
        },
        {
            name: "Airpods Pro",
            code: "#0004",
            type: "Earphones",
            price: "$249",
            quantity: 23,
        },
        {
            name: "Samsung Galaxy Fold",
            code: "#0005",
            type: "Phone",
            price: "$1,199",
            quantity: 23,
        },
        {
            name: "Samsung Odyssey",
            code: "#0006",
            type: "Displays",
            price: "$500",
            quantity: 23,
        },
        {
            name: "Logitech Superlight",
            code: "#0006",
            type: "Displays",
            price: "$500",
            quantity: 23,
        },
    ];

    return (
        <div className="farmer-inventory-page">
            <div className="inventory-header">
                <h2 className="inventory-title">Inventory</h2>

                <div className="inventory-search">
                    <span className="search-icon">
                        <Search />
                    </span>
                    <input
                        type="text"
                        placeholder="Search"
                        className="search-input"
                    />
                </div>

                <button
                    onClick={handleProductModal}
                    className="add-product-btn"
                >
                    <span className="plus-icon">+</span> Add New Product
                </button>
            </div>
            <div className="body-section">
                <div className="product-list-container">
                    <h2 className="table-title">Product List</h2>
                    <table className="product-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Code</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.code}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        <img
                                            src="/src/assets/images/apple.png"
                                            alt={item.name}
                                            className="table-product-img"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {showProductModal && (
                <ModalWrapper onClose={handleProductModal}>
                    <NewProductForm />
                </ModalWrapper>
            )}
        </div>
    );
};

export default FarmerInventory;

const productTypes = ["Laptop", "Phone", "Keyboard", "Earphones", "Displays"];

const NewProductForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        code: "",
        type: "",
        price: "",
        quantity: "",
    });

    const [image, setImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted:", formData);
        console.log("Image:", image);
        // TODO: Upload logic here (send formData + image to API)
    };

    return (
        <form className="new-product-form" onSubmit={handleSubmit}>
            <h2>Add New Product</h2>

            <label>
                Name
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Code
                <input
                    type="text"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Type
                <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select type</option>
                    {productTypes.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Price
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Quantity
                <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Image Upload
                <FileUpload />
            </label>

            {previewUrl && (
                <div className="image-preview">
                    <img src={previewUrl} alt="Preview" />
                </div>
            )}

            <button type="submit">Submit</button>
        </form>
    );
};
