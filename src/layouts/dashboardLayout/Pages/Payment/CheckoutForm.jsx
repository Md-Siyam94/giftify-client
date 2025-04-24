import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../../context/AuthContext/AuthContext";
import useCart from "../../../../hooks/useCart";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const [cart, refetch] = useCart();
    const navigate = useNavigate();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        if (totalPrice > 0) {
            axiosPublic.post('/create-payment-intent', { price: totalPrice })
                .then(res => {

                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosPublic, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            // console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod);
            setError('');
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error');
        }
        else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Payment Successful",
                    // showConfirmButton: false,
                    // timer: 1000
                });


                // TODO
                // // saving the payment in the database
                // const payment = {
                //     email: user.email,
                //     price: totalPrice,
                //     transactionId: paymentIntent.id,
                //     date: new Date(), // utc date convert. use moment js to 
                //     cartIds: cart.map(item => item._id),
                //     medicineIds: cart.map(item => item.medicineId),
                //     status: 'pending'
                // }

                // const res = await axiosPublic.post('/payments', payment);
                // // console.log('payment saved', res.data);
                refetch();
                // if (res.data?.paymentResult?.insertedId) {
                //     Swal.fire({
                //         position: "top",
                //         icon: "success",
                //         title: "payment successful",
                //         showConfirmButton: false,
                //         timer: 1500
                //     });
                //     navigate('/invoice');
                // }

            }
        }

    }

    return (
        <>
            <div className="w-9/12 mx-auto mt-16">
                <form onSubmit={handleSubmit}>

                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button className="btn btn-wide btn-outline my-6" type="submit" disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                    <p className="text-red-600 text-lg">{error}</p>
                    {transactionId && <p className="text-s text-xl"> Your transaction id: {transactionId}</p>}
                </form>
            </div>
        </>
    );
};

export default CheckoutForm;