import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { DatePicker } from '@mui/lab';
import { TextField, Button } from '@mui/material';

function App() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="date"
        control={control}
        defaultValue={null}
        rules={{ required: true }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <DatePicker
            label="Date"
            value={value}
            onChange={onChange}
            renderInput={(params) => (
              <TextField {...params} fullWidth error={!!error} helperText={error ? error.message : null} />
            )}
          />
        )}
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Submit
      </Button>
    </form>
  );
}

export default App;
