import { Toast } from "@/helpers/toast";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface Context {
  toasts: Array<Toast>;
  setToast: (message: string) => void;
  clearToast: (notification: Toast) => void;
  clearAll: () => void;
}

const ToastsContext = createContext<Context>(null);

const ToastsProvider: React.FC = ({ children }) => {
  const [toasts, setToasts] = useState<Array<Toast>>([]);
  const clearToast = useCallback((notification: Toast) => {
    const toastIndex = toasts.findIndex((n) => n.id === notification.id);
    setToasts((nfs) => [
      ...nfs.splice(toastIndex, 1),
      ...nfs.splice(toastIndex + 1),
    ]);
  }, []);

  const clearAll = useCallback(() => setToasts([]), []);

  const setToast = useCallback((message: string) => {
    setToasts((nfs) => [new Toast(message), ...nfs]);
  }, []);
  const value = useMemo(
    () => ({ toasts, setToast, clearToast, clearAll }),
    [clearAll, clearToast, setToast, toasts]
  );

  return (
    <ToastsContext.Provider value={value}>{children}</ToastsContext.Provider>
  );
};

const useToasts = () => useContext(ToastsContext);

export { ToastsProvider, useToasts };
