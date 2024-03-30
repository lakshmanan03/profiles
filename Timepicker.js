import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

function DynamicTextFieldForm() {
  const { control, handleSubmit } = useForm();
  const [additionalFields, setAdditionalFields] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
  };

  const addField = (label, name) => {
    setAdditionalFields([...additionalFields, { label, name }]);
  };

  const removeField = (index) => {
    const newFields = [...additionalFields];
    newFields.splice(index, 1);
    setAdditionalFields(newFields);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="textField1"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Text Field 1"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        )}
      />
      <Controller
        name="textField2"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Text Field 2"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        )}
      />
      <Controller
        name="selectField"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            select
            {...field}
            label="Select Field"
            variant="outlined"
            fullWidth
            margin="normal"
          >
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </TextField>
        )}
      />
      {additionalFields.map((field, index) => (
        <Controller
          key={index}
          name={field.name}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label={field.label}
              variant="outlined"
              fullWidth
              margin="normal"
            />
          )}
        />
      ))}
      <div>
        <TextField
          label="Label"
          variant="outlined"
          onChange={(e) => setLabel(e.target.value)}
          value={label}
        />
        <TextField
          label="Name"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Button onClick={() => addField(label, name)} variant="contained" color="primary">
          Add Text Field
        </Button>
      </div>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

export default DynamicTextFieldForm;
