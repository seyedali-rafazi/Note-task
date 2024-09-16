interface TextFieldType {
  className?: string;
  placeholder?: string;
  name: string;
  type?: string;
  value?: string;
  onChange?: (e: any) => void;
}
const TextField: React.FC<TextFieldType> = ({
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  className,
  ...rest
}) => {
  return (
    <div className="space-y-2 w-full">
      <input
        className={className}
        id={name}
        autoComplete="off"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default TextField;
