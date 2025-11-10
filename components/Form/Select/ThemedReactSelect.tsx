/* eslint-disable @typescript-eslint/no-restricted-imports */
import type { Props as ReactSelectProps } from 'react-select';
import ReactSelect from 'react-select'; // the only spot this import is allowed

const colors = {
  primary: '#3ed6f0',
  rgbValuesPrimary: '62, 214, 240',
  rgbValuesSecondary: '37, 46, 62',
  successDeep: 'hsl(132, 60%, 23%, 1)',
  errorDeep: 'hsl(355, 63%, 34%, 1)',
};

export interface OptionType {
  label: RenderableChild;
  value: string;
}

export interface ThemedReactSelectProps<TMulti extends boolean>
  extends ReactSelectProps<OptionType, TMulti> {
  name: string; // name?: string is on ReactSelectProps, but we're gonna require it.
  hasErrors?: boolean;
  hasValidationStyling?: boolean;
  id?: string;

  // TODO: Resolve why multiselects can end up with touched: { key: array }
  // see ThemedReactSelect as well
  // isTouched: bool,
  isTouched?: boolean | boolean[];
}

export function ThemedReactSelect<TMulti extends boolean>({
  isDisabled = false,
  hasErrors = false,
  hasValidationStyling = true,
  isMulti,
  isSearchable = true,
  isTouched = false,
  name,
  ...props
}: ThemedReactSelectProps<TMulti>) {
  const outerColor = hasErrors ? colors.errorDeep : colors.successDeep;

  return (
    <ReactSelect
      {...props}
      inputId={name}
      instanceId={name}
      name={name}
      isDisabled={isDisabled}
      closeMenuOnSelect={!isMulti}
      isMulti={isMulti}
      isSearchable={isSearchable}
      blurInputOnSelect={isMulti && !isTouched} // this is ideal UX for seeing-eye users
      styles={{
        control: base => {
          return {
            ...base,
            backgroundColor: isDisabled ? 'transparent' : 'white',
            borderColor:
              isTouched && hasValidationStyling
                ? outerColor
                : `rgba(${colors.rgbValuesSecondary}, 0.5)`,
            boxShadow: isTouched && hasValidationStyling ? `0 0 1px 1px ${outerColor}` : 'none',
            fontSize: '1.125rem',
            marginTop: '0',
            marginBottom: '0',
            padding: '0.25rem',
            opacity: isDisabled ? '0.5' : '1',
            outline: 'none',
            '&:hover': {
              cursor: isDisabled ? 'not-allowed' : 'text',
            },
          };
        },
        clearIndicator: base => {
          return {
            ...base,
            '&:hover': {
              cursor: isDisabled ? 'not-allowed' : 'pointer',
            },
          };
        },
        dropdownIndicator: base => {
          return {
            ...base,
            '&:hover': {
              cursor: isDisabled ? 'not-allowed' : 'pointer',
            },
          };
        },
        indicatorSeparator: base => {
          if (!isSearchable) return {};

          return base;
        },
        menu: base => {
          return {
            ...base,
            zIndex: 2,
          };
        },
        multiValueRemove: base => {
          return {
            ...base,
            '&:hover': {
              cursor: isDisabled ? 'not-allowed' : 'pointer',
            },
          };
        },
      }}
      theme={theme => {
        return {
          ...theme,
          borderRadius: 3,
          colors: {
            ...theme.colors,
            primary: colors.primary,
            primary75: `rgba(${colors.rgbValuesPrimary}, 0.75)`,
            primary50: `rgba(${colors.rgbValuesPrimary}, 0.50)`,
            primary25: `rgba(${colors.rgbValuesPrimary}, 0.25)`,
          },
        };
      }}
    />
  );
}

export const getReactSelectInput = (domElement: HTMLElement, fieldName: string) =>
  domElement.querySelector(`[id^=${fieldName}]`);
