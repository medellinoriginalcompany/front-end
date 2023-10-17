import { useLocation } from "react-router-dom";
import { useEffect } from 'react'

const ScrollToTop = (): JSX.Element => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <></>; // Placeholder JSX since this component doesn't render anything
}

export default ScrollToTop;
