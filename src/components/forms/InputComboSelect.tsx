import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SelectProps } from '@radix-ui/react-select';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props extends SelectProps {
  name: string;
  item: { label: string; value: string }[];

  register: UseFormRegisterReturn;
  error: string | undefined;
  labelName?: string;
  isShowError?: boolean;
}

export const InputComboSelect = ({
  item,
  name,
  labelName,
  register,
  isShowError,
  error,
  ...props
}: Props) => {
  return (
    <div>
      {labelName && (
        <label htmlFor={register.name} className="inputCombo-label">
          {labelName}
        </label>
      )}

      <Select {...props} name={register.name}>
        <SelectTrigger className="w-full text-gray-700">
          <SelectValue placeholder={name} />
        </SelectTrigger>
        <SelectContent className="w-[200px]">
          {item.map((item) => (
            <SelectItem value={item.value} key={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {isShowError && <p className="inputCombo-error">{error || ''}</p>}
    </div>
  );
};
