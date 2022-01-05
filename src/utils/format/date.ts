import format from "date-fns/format";
import parseJSON from "date-fns/parseJSON";

const formatDate = (date: string) => format(parseJSON(date), "MMM dd");
export { formatDate };
