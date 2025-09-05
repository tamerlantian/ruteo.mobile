import React from 'react';
import { Control, Controller, FieldError, FieldPath, FieldValues } from 'react-hook-form';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { loginStyles } from '../../../../modules/auth/styles/login.style';

interface FormInputControllerProps<T extends FieldValues>
  extends Omit<TextInputProps, 'value' | 'onChangeText'> {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  error?: FieldError;
  rules?: Record<string, any>;
}

export const FormInputController = <T extends FieldValues>({
  control,
  name,
  label,
  error,
  rules,
  ...props
}: FormInputControllerProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <View style={loginStyles.inputContainer}>
          <Text style={loginStyles.inputLabel}>{label}</Text>
          <TextInput
            style={[loginStyles.input, error ? loginStyles.inputError : null]}
            placeholderTextColor="#999"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            {...props}
          />
          {error ? <Text style={loginStyles.errorText}>{error.message}</Text> : null}
        </View>
      )}
    />
  );
};
