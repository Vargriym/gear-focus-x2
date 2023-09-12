import React, { useContext } from "react";
import { IoClose, IoArrowForward, IoCartOutline } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
// stripe
import { loadStripe } from "@stripe/stripe-js";
import { request } from "../request";



const Cart = () => {
  const { setIsOpen, cart, total, clearCart } = useContext(CartContext);

  const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);
  

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await request.post("/orders", {
        cart,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  }
    return (
      <div className="w-full h-full px-4 text-white">
        <div>
          {/* close icon */}
          <div
            onClick={() => setIsOpen(false)}
            className="text-4x1 w-20 h-[98px] flex justify-start items-center
              cursor-pointer"
          >
            <IoClose />
          </div>
          <div className="flex flex-col gap-y-10 px-2">
            {cart.map((item) => {
              return <CartItem item={item} key={item.id} />;
            })}
          </div>
          {/* subtotal & total */}
          {cart.length >= 1 && (
            <div className="px-6 py-10 flex flex-col">
              {/* subtotal */}
              <div className="flex justify-between text-lg">
                <div>Subtotal</div>
                <div>$ {total}</div>
              </div>
              {/* total */}
              <div className="flex justify-between text-2x1">
                <div>Total</div>
                <div>$ {total}</div>
              </div>
            </div>
          )}
          {/* buttons */}

          <div className="px-6">
            {cart.length >= 1 ? (
              <div className="flex justify-between gap-x-4">
                <button
                  onClick={clearCart}
                  className="btn btn-accent hover:bg-accent-hover
          ☐text-primary"
                >
                  clear cart
                </button>
                <button
                  onClick={handlePayment}
                  className="btn btn-accent hover:bg-accent-hover text-primary
          flex-1 px-2 gap-x-2"
                >
                  Checkout
                  <IoArrowForward className="text-1g" />
                </button>
              </div>
            ) : (
              <div className="h-full bg-pink-200/10 absolute top-0 right-0 left-0 flex justify-center items-center -z-10 flex-col text-white/30">
                <div className="text-2x1">Your cart is empty</div>
                <div className="text-6x1">
                  <IoCartOutline />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };


export default Cart;
