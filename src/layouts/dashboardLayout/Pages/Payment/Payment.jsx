import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../../hooks/useCart";



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {

    const [cart] = useCart();
    // Total price now uses item.quantity directly
    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div>
            <div>
                <div className="my-8 pl-16 font-semibold text center bg-base-100 py-4 space-y-5">
                    <h3 className="text-2xl underline text-gray-600">Complete Your Purchase</h3>
                    <h4 className="text-2xl">Total: ${totalPrice.toFixed(2)}</h4>
                </div>
                <div className="">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>

                    {/* Right-aligned link under the payment input box */}
                    <div className="mt-2 pr-16 flex justify-end">
                        <a
                            href="https://docs.stripe.com/testing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm md:text-base lg:text-lg underline text-gray-500 hover:text-gray-700"
                        >
                            Demo Test Card Numbers
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;