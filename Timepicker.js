import React from 'react';
import { DatePicker } from 'x-date-pickers';
import { FormControl, FormHelperText } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

function CustomDatePicker({ name, label, defaultValue, rules, ...rest }) {
  const { control, formState: { errors } } = useFormContext();

  return (
    <FormControl error={!!errors[name]} fullWidth>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field }) => (
          <DatePicker
            {...field}
            label={label}
            onChange={(date) => field.onChange(date)}
            {...rest}
          />
        )}
      />
      {errors[name] && <FormHelperText>{errors[name].message}</FormHelperText>}
    </FormControl>
  );
}

export default CustomDatePicker;
<CustomDatePicker
        name="date"
        label="Select Date"
        defaultValue={null}
        control={control}
        rules={{ required: 'Date is required' }}
        fullWidth
        // Additional props if needed
      />
      {errors.date && <span>{errors.date.message}</span>}
