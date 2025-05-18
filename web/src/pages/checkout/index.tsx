import "./index.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Cart from "../../api/Cart";
import { Link, useNavigate } from "@tanstack/react-router";

const CheckoutPage: React.FC = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { data, isLoadding, error } = useQuery<CartResponse>({
        queryKey: ["cart content"],
        queryFn: Cart.getCartContent,
    });

    const updateCartMutation = useMutation({
        mutationFn: Cart.updateCartItem,
        onMutate: async ({ id, quantity }) => {
            await queryClient.cancelQueries({ queryKey: ["cart content"] });

            // ✅ Optimistically update the UI
            const previousCart = queryClient.getQueryData<CartResponse>([
                "cart content",
            ]);
            queryClient.setQueryData<CartResponse>(["cart content"], (old) => ({
                ...old!,
                cart_items:
                    old?.cart_items.map((item) =>
                        item.id === id ? { ...item, quantity } : item,
                    ) || [],
            }));

            return { previousCart };
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["cart content"] });
            queryClient.refetchQueries({ queryKey: ["cart summary"] });
        },
        onError: (context) => {
            queryClient.setQueryData(["cart content"], context?.previousCart);
        },
    });

    const deleteItemMutation = useMutation({
        mutationFn: Cart.removeCartItem,
        onSuccess: () => {
            queryClient.refetchQueries({ queryKey: ["cart summary"] });
        },
        onError: () => {},
    });

    // ✅ Increase quantity
    const handleIncrease = (id: number) => {
        const updatedItem = data?.cart_items.find((item) => item.id === id);
        if (updatedItem) {
            updateCartMutation.mutate({
                id,
                quantity: updatedItem.quantity + 1,
            });
        }
    };

    // ✅ Decrease quantity (remove item if 0)
    const handleDecrease = (id: number) => {
        const updatedItem = data?.cart_items.find((item) => item.id === id);
        updateCartMutation.mutate({
            id,
            quantity: updatedItem.quantity - 1,
        });
    };

    // ✅ Remove item from cart
    const handleRemove = (id: number) => {
        deleteItemMutation.mutate({ id: id });
    };

    const handleNavigate = (routename: string) => navigate({ to: routename });

    return (
        <div className="checkout-page">
            <div className="checkout-title">
                <h2>My Shopping Cart</h2>
            </div>
            <div className="checkout section">
                <div className="cart-list">
                    <div className="cart">
                        <div className="cart-header">
                            <span>Product</span>
                            <span>Price</span>
                            <span>Quantity</span>
                            <span>Subtotal</span>
                            <span></span>
                        </div>
                        {data?.cart_items.map((item) => {
                            if (item.quantity <= 0) return null;

                            return (
                                <div className="cart-item" key={item.id}>
                                    <img
                                        src={item.produce.image}
                                        alt={item.produce.name}
                                    />
                                    <div className="cart-item-details">
                                        <div className="cart-item-title">
                                            {item.produce.name}
                                        </div>
                                        <div className="cart-item-price">
                                            Ksh
                                            {parseFloat(item.price).toFixed(2)}
                                        </div>
                                    </div>
                                    <div className="cart-quantity">
                                        <button
                                            disabled={
                                                updateCartMutation.isLoading
                                            }
                                            onClick={() =>
                                                handleDecrease(item.id)
                                            }
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            disabled={
                                                updateCartMutation.isLoading
                                            }
                                            onClick={() =>
                                                handleIncrease(item.id)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className="cart-subtotal">
                                        Ksh
                                        {parseFloat(item.price) * item.quantity}
                                    </div>
                                    <button
                                        className="cart-remove"
                                        disabled={deleteItemMutation.isLoading}
                                        onClick={() => handleRemove(item.id)}
                                    >
                                        ×
                                    </button>
                                </div>
                            );
                        })}

                        <div className="extra-buttons">
                            <button onClick={() => handleNavigate("/shop")}>
                                Return to shop
                            </button>
                            <button className="clear-button">Clear cart</button>
                        </div>
                    </div>
                    <div className="checkout-total">
                        <h2>Cart Total</h2>
                        <div className="checkout-section">
                            <label>Subtotal:</label>
                            <span>
                                Ksh
                                {data?.cart_items
                                    .reduce(
                                        (acc, item) =>
                                            acc +
                                            item.quantity *
                                                parseFloat(item.price),
                                        0,
                                    )
                                    .toFixed(2)}
                            </span>
                        </div>
                        <div className="checkout-section">
                            <label>Shipping:</label>
                            <span>Ksh84.00</span>
                        </div>
                        <div className="checkout-section">
                            <label>Total:</label>
                            <span>Ksh84.00</span>
                        </div>
                        <Link to="/checkout/pay">
                            <button>Proceed to checkout</button>
                        </Link>
                    </div>
                </div>
                <div className="bill-section"></div>
            </div>
        </div>
    );
};

export default CheckoutPage;

interface CartResponse {
    cart_items: {
        id: number;
        produce_id: number;
        quantity: number;
        price: string;
        produce: {
            name: string;
            out_of_stock: number;
            image: string;
        };
    }[];
}
