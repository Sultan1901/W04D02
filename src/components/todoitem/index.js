import React from 'react'

export default function Todoitem(props) {
  return (
    <>
      <li>{props.item.name}<button onClick = {()=> props.rm(props.item.id)}>Delete</button><button onClick = {()=> props.edit(props.item.id)}>edit</button></li>
    </>
  )
}
