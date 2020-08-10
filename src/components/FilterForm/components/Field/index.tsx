import React, { InputHTMLAttributes } from 'react';

import { Label, Input, Select } from './styles';

interface FieldProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>{
    label: string;
    fieldType?: 'select' | 'input' | 'textarea';
    options?: Array<{
      value: string;
      label: string;
    }>;
}

const Field: React.FC<FieldProps> = ({ label, fieldType, options,...rest }) => {
    switch (fieldType) {
      case 'select':
        return (
          <Label>
            <span>{label}</span>
            <Select value="" {...rest}>
              <option value="" disabled hidden>Selecione uma opção</option>
              {options?.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </Select>
          </Label>
        );
      default:
        return (
          <Label>
            <span>{label}</span>
            <Input {...rest} />
          </Label>
        );
    }
}

export default Field;