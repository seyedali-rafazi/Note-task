interface TextFieldType {
  className?: string;
  placeholder?: string;
  name: string;
  type?: string;
  value?: string;
  label?: string;
  onChange?: (e: any) => void;
}
const TextField: React.FC<TextFieldType> = ({
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  className,
  label,
  ...rest
}) => {
  return (
    <div className="space-y-2 w-full">
      <span className="mb-2 block text-secondery-700">{label}</span>

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
