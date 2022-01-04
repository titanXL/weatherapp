import { createContext, useContext, useMemo, useState } from "react";

type LoadingTargets = "global" | "search";

interface Context {
  on: (target: LoadingTargets) => void;
  off: () => void;
  loading: LoadingTargets;
}

const LoadingContext = createContext<Context>(null);

const LoadingProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState<LoadingTargets>(null);
  const value = useMemo(
    () => ({
      on: (target: LoadingTargets) => setLoading(target),
      off: () => setLoading(null),
      loading,
    }),
    [loading]
  );

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};

const useLoading = () => useContext(LoadingContext);

export { LoadingProvider, useLoading };
