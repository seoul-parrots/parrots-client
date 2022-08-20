import { ChangeEvent, useCallback, useState } from 'react';

const useInputProps = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback(
    (
      event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => {
      setValue(event.target.value);
    },
    []
  );

  return {
    value,
    setValue,
    onChange,
  };
};

export default useInputProps;
