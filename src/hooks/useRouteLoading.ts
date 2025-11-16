import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Hook to show a brief loading state on route changes
export function useRouteLoading(delayMs: number = 400) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Initial mount: show loader briefly
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), delayMs);
    return () => clearTimeout(t);
  }, [delayMs]);

  // On subsequent route changes, show loader for a short duration
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), delayMs);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return loading;
}
