import { Toast } from "@/helpers/toast";
import { useToasts } from "@/providers/ToastProvider";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

interface Props {
  toast: Toast;
}

const Toasty: React.FC<Props> = ({ toast }) => {
  const { clearToast } = useToasts();

  // TODO move this to the helper class and use custom events to trigger clearing
  useEffect(() => {
    const timeout = setTimeout(() => {
      clearToast(toast);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="backdrop-blur-sm bg-slate-700 py-2 px-1 animate-slide-in flex items-center justify-between">
      <span className="text-red-300 text-sm font-medium first-letter:capitalize">
        {toast.message}
      </span>
      <span className="cursor-pointer mr-2" onClick={() => clearToast(toast)}>
        <FontAwesomeIcon icon={faTimesCircle} className="text-white" />
      </span>
    </div>
  );
};

export { Toasty };
