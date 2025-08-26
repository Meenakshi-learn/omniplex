import styles from "@/styles/Home.module.css";
import AuthWrapper from "./AuthWrapper";
import MainPrompt from "../components/MainPrompt/MainPrompt";
import StripeButton from "../components/StripeButton"; // import Stripe button

const Home = () => {
  return (
    <AuthWrapper>
      <div className="flex flex-col min-h-screen">
        {/* Main content */}
        <div className={`${styles.main} flex-grow`}>
          <MainPrompt />
        </div>

        {/* Floating Checkout at bottom */}
         <div className={styles.checkoutButton}>
          <StripeButton />
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Home;
