import React from 'react';

export const FormPart = ({dataList, title, value, ...update}) => {
  const onChangeRadioButton = (event) => {
    switch(event.target.name) {
      case 'Language': return update.onUpdateLanguage(event);
      case 'Category': return update.onUpdateCategory(event);
      default: return null;
    }
  }

  return (
    <fieldset>
      <legend htmlFor={title}>{title}</legend>
      {dataList.map((item) => {
        return (
          <div key={item} className='fieldsetContent'>
            <label htmlFor={item}>{item}</label>
            <input
              type='radio'
              name={title}
              id={item}
              value={item}
              checked={item === value}
              onChange={onChangeRadioButton}
            />
          </div>
        );
      })}
    </fieldset>
  )
};
