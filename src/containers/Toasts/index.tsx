import { Toasty } from "@/components/Toasty";
import { useToasts } from "@/providers/ToastProvider";

interface Props {}

const Toasts: React.FC<Props> = () => {
  const { toasts, clearAll } = useToasts();
  return (
    <div className="fixed bottom-0 left-0 right-0" onClick={clearAll}>
      {toasts.map((t) => (
        <Toasty toast={t} key={t.id} />
      ))}
    </div>
  );
};

export { Toasts };
