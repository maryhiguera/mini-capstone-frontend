import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header({ isLoggedIn, setIsLoggedIn }) {
  return (
    <header>
      <nav>
        <div>
          <Link to="/">Mini Capstone</Link> |
            {isLoggedIn ? (
              <>
                <Link to="/cart"> Cart</Link> | <Link to="/orders">Orders</Link> |
                <Link to="/productnew"> Create New Products</Link> |
                <LogoutLink setIsLoggedIn={setIsLoggedIn} />
              </>
            ) : (
              <>
                <Link to="/signup">Sign Up</Link> | <Link to="/login">Login</Link>
              </>
            )}
          
        </div>
      </nav>
    </header>
  );
}