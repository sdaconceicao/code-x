import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { Button } from '@code-x/button';
import { Checkbox } from '@code-x/checkbox';
import { Input, InputComponent } from '@code-x/input';
import { FormElementWrapper } from '@code-x/form-element';
import { Radio, RadioGroup } from '@code-x/radio';
import { Select } from '@code-x/select';
import { Textarea } from '@code-x/textarea';
import { RichTextEditor } from '@code-x/rich-text-editor';
import { Form } from './Form';

export default {
  component: Form
};

export const FullExample = () => {
  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState(null);
  const [searchValue, setSearchValue] = useState('lorem');
  const handleSubmit = (response) => {
    setResults(response.errors.length === 0 ? response.result : null);
    setErrors(response.errors);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="input"
        id="input"
        label="Input"
        type="text"
        value="Lorem Exampum"
        onChange={action('Input changed')}
        required
      />
      <FormElementWrapper label="Input With Button" id="inputWithButton" flex>
        <InputComponent
          name="inputWithButton"
          id="inputWithButton"
          type="text"
          value={searchValue}
          withButton
        />
        <Button
          withInput
          display="inlineBlock"
          onClick={() => setSearchValue(`${searchValue} searched`)}
        >
          Search
        </Button>
      </FormElementWrapper>
      <Textarea name="textarea" id="textarea" value="Lorem Ipsum" required label="Textarea" />
      <RichTextEditor
        name="richTextEditor"
        value="<p>Lorem Ipsum</p>"
        required
        label="Rich Text Editor"
      />
      <Select
        name="singleSelect"
        label="Select"
        type="text"
        value="ipsum"
        onChange={action('value changed')}
        options={[
          { displayName: 'Lorem', value: 'lorem' },
          { displayName: 'Ipsum', value: 'ipsum' }
        ]}
      />
      <Checkbox
        name="checkboxEx"
        id="checkboxEx1"
        label="Lorem Checkum"
        value="Lorem Checkum"
        inline
      />
      <Checkbox
        name="checkboxEx"
        id="checkboxEx2"
        label="Ipsum Checkum"
        value="Ipsum Checkum"
        inline
      />
      <RadioGroup label="Radio Groups" required name="radioEx">
        <Radio name="radioEx" id="radioEx1" label="Lorem Radio" value="Lorem Radio" inline />
        <Radio name="radioEx" id="radioEx2" label="Ipsum Radio" value="Ipsum Radio" inline />
      </RadioGroup>
      <Button type="submit">Submit</Button>
      {results && (
        <div>
          <h2>Form Output</h2>
          <ul>
            {Object.keys(results).map((name) => (
              <li key={name}>
                {name} - {results[name].value}
              </li>
            ))}
          </ul>
        </div>
      )}
      {errors && errors.length > 0 && (
        <div>
          <h2>Errors</h2>
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </Form>
  );
};
