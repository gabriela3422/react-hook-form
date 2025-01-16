import './Input.scss';
import React from 'react';

const Input = React.forwardRef(
    (
        {
            type,
            id,
            name,
            placeholder,
            text = '',
            label = false,
            required = false,
            checked,
            error = '',
            isEmpty,
            ...rest
        }, ref
    ) => {

        const showErrorImage = isEmpty && type !== 'radio' && type !== 'checkbox';
        const showCheckImage = !isEmpty && type !== 'radio' && type !== 'checkbox';

        return (
            <div className={`form-group ${isEmpty && required ? 'input-error' : ''} ${type === 'radio' || type === 'checkbox' ? 'custom-form-group' : ''} `}>
                <input type={type}
                       id={id}
                       name={name}
                       placeholder={placeholder}
                       required={required}
                       checked={checked}
                       ref={ref}
                       className={`input-field ${error ? 'input-error' : ''} ${isEmpty ? 'input-empty' : 'input-valid'}`}
                       {...rest}
                />
                {label && <label className="label-control" htmlFor={id}>{text}</label>}
                {error && <span className="error-message block">{error}</span>}
                {showErrorImage && <img src={'/images/error-icon.svg'} className="empty-icon"/>}
                {showCheckImage && <img src={'/images/check-icon.svg'} className="empty-icon"/>}
            </div>
        )
    }
);
export default Input