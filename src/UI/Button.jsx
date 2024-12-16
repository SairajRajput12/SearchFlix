import React from 'react'

export default function Button({className,children,style}) {
  return (
    <button style={style} className={className}>{children}</button>
  )
}
