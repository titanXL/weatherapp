import { Toast } from "@/components/Toast";
import { useToasts } from "@/providers/ToastProvider";

interface Props {}

const Toasts: React.FC<Props> = () => {
  const { toasts } = useToasts();
  return (
    <div>
      {toasts.map((t) => (
        <Toast key={t.id} />
      ))}
    </div>
  );
};

export { Toasts };
