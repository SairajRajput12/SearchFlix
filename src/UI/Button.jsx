import React from 'react'

export default function Button({className,onClick,children,style}) {
  return (
    <button style={style} onClick={onClick} className={className}>{children}</button>
  )
}
