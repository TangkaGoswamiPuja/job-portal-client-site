import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import { PaymentContext } from "../../Authfile/PaymentContext";
import { useContext } from "react";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { completePayment } = useContext(PaymentContext); // Get the completePayment function

   
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('payment error', error)
        }
        else {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "PAID",
                showConfirmButton: false,
                timer: 1500
              });
            console.log('payment', paymentMethod);
            completePayment();
        }
    }

   

    return (
        <div>
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
                <button type="submit" className="btn btn-primary mt-2"  disabled={!stripe}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;