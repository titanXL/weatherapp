import { ChangeEventHandler } from "react";

interface Props {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  placeholder: string;
}

const SearchInput: React.FC<Props> = ({ onChange, placeholder, value }) => {
  return (
    <input
      className="outline-none p-1 pl-[6px] flex-1 rounded-tl-sm rounded-bl-sm font-light text-gray-600"
      type="text"
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export { SearchInput };
