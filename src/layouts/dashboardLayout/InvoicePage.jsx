// src/components/InvoicePage.js
import { useContext } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useQuery } from "@tanstack/react-query";
import logo from "../../assets/logo.png";

const InvoicePage = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/giftify/payments/${user.email}`);
            return res.data;
        }
    });


    // Defining a print handler that opens the browser's Print dialog
    const handlePrint = () => {
        window.print();   // Calls browser print (→ PDF)
    };



    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 px-4 pt-4 pb-20">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold my-3">Invoice</h2>

                {/* This is the only section that will actually be printed */}
                <div id="invoice" className="w-full max-w-3xl bg-white shadow-xl rounded-lg p-8">
                    {payments.map((payment) => (
                        <div key={payment._id}>
                            <div className="flex flex-col md:flex-row justify-between items-center border-b pb-4 mb-6">
                                <img src={logo} alt="Website Logo" className="h-16" />
                                <div className="text-center">
                                    <p className="text-sm text-gray-900">
                                        Transaction ID: {payment.transactionId}
                                    </p>
                                </div>
                            </div>

                            {/* User Information */}
                            <div className="mb-6 flex flex-col md:flex-row items-center space-x-4">
                                <img
                                    src={user.photoURL}
                                    alt={`${user.displayName}'s photo`}
                                    className="w-16 h-16 rounded-full border"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">Customer Information</h3>
                                    <p className="text-sm text-gray-600">Name: {user.displayName}</p>
                                    <p className="text-sm text-gray-600">Email: {user.email}</p>
                                </div>
                            </div>

                            {/* Payment Information */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold">Purchase Details</h3>
                                <p className="text-sm text-gray-600">
                                    Transaction Date: {new Date(payment.date).toLocaleString()}
                                </p>
                                <p className="text-sm text-gray-600">Total Price: ${payment.price.toFixed(2)}</p>
                                <p className="text-sm text-gray-600">
                                    Payment Received successfully
                                </p>
                            </div>

                            {/* Footer */}
                            <div className="text-center border-t pt-4 mt-6 text-sm text-gray-800">
                                <p>Thank you for your purchase!</p>
                                <p>Giftify Company Limited | https://giftify-pro.netlify.app/</p>
                            </div>
                            <br />
                            <hr />
                        </div>
                    ))}
                </div>

                {/* Wiring the button to print handler */}
                <button
                    onClick={handlePrint}
                    className="mt-6 btn btn-neutral"
                >
                    Download PDF
                </button>
            </div>
        </>
    );
};

export default InvoicePage;
