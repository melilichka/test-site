

export const required = value => {
  if (value && value.length>0)  return undefined;
  return 'Field is required';
}

export const maxLength = (max) => (value) => {
  if (value && value.length > max) return `Max length is ${max}`
  return undefined;
}

export const minLength = (min) => (value) => {
  if (value && value.length < min) return `Min length is ${min}`
  return undefined;
}

export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

export const minValue = min => value => value && value < min ? `Must be at least ${min}` : undefined;
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined;