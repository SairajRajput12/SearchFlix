import React from 'react'

export default function Input({className,value,placeholder,onChange}) {
  return (
    <input type='text' value={value} onChange={onChange} className={className} placeholder={placeholder} required/>
  )
}
