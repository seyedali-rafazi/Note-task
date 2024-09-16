import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";
import { Dispatch, SetStateAction } from "react";

interface DatePickerFieldType {
  label: string;
  data: Date | null;
  setDate: Dispatch<SetStateAction<Date>>;
}

const DatePickerField: React.FC<DatePickerFieldType> = ({
  label,
  data,
  setDate,
}) => {
  const handleChange = (date: DateObject | null) => {
    if (date) {
      setDate(new Date(date.toDate()));
    }
  };

  return (
    <div className="w-full">
      <span className="mb-2 block text-secondery-700">{label}</span>

      <DatePicker
        containerClassName="w-full "
        inputClass="textField__input"
        calendarPosition="bottom-center"
        value={data}
        onChange={handleChange}
        format="YYYY-MM-DD"
        calendar={persian}
        locale={persian_fa}
      />
    </div>
  );
};

export default DatePickerField;
