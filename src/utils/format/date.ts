import format from "date-fns/format";
import parseJSON from "date-fns/parseJSON";

const formatDate = (date: number) => format(date, "MMM dd");
export { formatDate };
