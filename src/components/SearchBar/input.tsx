import { ChangeEventHandler } from "react";

interface Props {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  placeholder: string;
}

const SearchInput: React.FC<Props> = ({ onChange, placeholder, value }) => {
  return (
    <input
      className="outline-none p-[2px] pl-[6px] flex-1 rounded-sm font-light text-gray-600"
      type="text"
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export { SearchInput };
