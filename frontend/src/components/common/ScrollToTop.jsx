import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jab bhi pathname (page route) badlega, scroll top par chala jayega
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Yeh component screen par kuch render nahi karega
}