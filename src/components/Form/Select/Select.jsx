import '../Input/Input.scss'
import React from 'react';

const Select = React.forwardRef(
    (
        {
            id,
            name,
            options = [],
            placeholder = '',
            label = false,
            required = false,
            error = '',
            isEmpty = false,
            ...rest
        },
        ref
    ) => {
        return (
            <div className={`form-group ${error || isEmpty ? 'has-error' : ''}`}>
                <select
                    id={id}
                    name={name}
                    required={required}
                    ref={ref}
                    className={`select-field ${error ? 'input-error' : 'input-valid'} ${isEmpty ? 'input-empty' : ''}`}
                    {...rest}
                >
                    <option value="">{placeholder || 'Please select an option'}</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {error && <span className="error-message">{error}</span>}
                {isEmpty && <img src={'/images/error-icon.svg'} alt="Error Icon" className="empty-icon" />}
            </div>
        );
    }
);
export default Select