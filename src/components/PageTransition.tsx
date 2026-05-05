import { useEffect, useRef, type PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";

function PageTransition({ children }: PropsWithChildren) {
  const location = useLocation();
  const isMounted = useRef(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, [location.pathname]);

  return <>{children}</>;
}

export default PageTransition;
