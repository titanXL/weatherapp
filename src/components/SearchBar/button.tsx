import { useLoading } from "@/providers/Loading";
import { Spinner } from "../Spinner";

interface Props {
  disabled: boolean;
}

const SeachButton: React.FC<Props> = ({ disabled }) => {
  const { loading } = useLoading();
  const isLoading = loading === "search";
  return (
    <button
      className="bg-gray-600 text-white px-4 py-[2px] rounded-tr-sm rounded-br-sm font-light disabled:cursor-not-allowed disabled:text-gray-300"
      type="submit"
      disabled={disabled || isLoading}
    >
      <span className="flex items-center">
        {isLoading && (
          <span className="mr-2">
            <Spinner />
          </span>
        )}
        Search
      </span>
    </button>
  );
};

export { SeachButton };
