import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../store/authSlice";
import { useEffect } from "react";
import { getCart } from "../../services/cartService";
import { setCartCount } from "../../store/cartSlice";

function Navbar() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());

    navigate("/login");
  };
  const cartCount = useSelector((state) => state.cart.cartCount);

  useEffect(() => {
    const loadCartCount = async () => {
      try {
        const data = await getCart();

        dispatch(setCartCount(data.cart?.items?.length || 0));
      } catch (error) {
        console.log(error);
      }
    };

    if (user?.role === "customer") {
      loadCartCount();
    }
  }, [user, dispatch]);
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MultiStore
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex gap-6">
          <Link to="/">Home</Link>

          <Link to="/products">Products</Link>
        </div>

        {/* Search */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search Products..."
            className="border rounded-lg px-3 py-2"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart size={22} />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {!user && (
            <>
              <Link to="/login" className="text-blue-600">
                Login
              </Link>

              <Link
                to="/register"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Register
              </Link>
            </>
          )}

          {user && (
            <div className="flex items-center gap-4">
              {/* Customer */}
              {user.role === "customer" && <Link to="/profile">Profile</Link>}

              {/* Vendor */}
              {user.role === "vendor" && (
                <>
                  <Link to="/vendor">Dashboard</Link>

                  <Link to="/vendor/store">My Store</Link>
                </>
              )}

              {/* Admin */}
              {user.role === "admin" && (
                <>
                  <Link to="/admin">Admin Panel</Link>

                  <Link to="/admin/pending-stores">Approvals</Link>
                </>
              )}

              <span className="font-medium">{user.name}</span>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
