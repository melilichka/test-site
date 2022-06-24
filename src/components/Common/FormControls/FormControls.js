import React from 'react';
import style from './FormControls.module.css'

const FormControl = ({input, meta, ...restProps}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={style.formControl + ' ' + (hasError? style.error : '')}>
      {restProps.children}
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Textarea = (props) => {
  const {input, meta, ...restProps} = props;
  return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const  Input = (props) => {
  const {input, meta, ...restProps} = props;
  return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

      