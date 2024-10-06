import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);

const Payment = ({onPaymentSuccess}) => {
    const handlePayment = () => {
        onPaymentSuccess();
    }
    return (
        <div>
            <h2 className="text-xl font-bold bg-indigo-300 text-center rounded-sm" >Pay the service charge</h2>
           
           <div className="mt-3"> <Elements stripe={stripePromise} >
     <CheckoutForm onClick={handlePayment} />     
         </Elements></div>
        </div>
    );
};

export default Payment;