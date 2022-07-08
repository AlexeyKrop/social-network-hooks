import React, {ChangeEvent, useCallback, useState} from "react";
import {TextField} from "@mui/material";

type EditableSpanType = {
  callBack: (value: string) => void
  title: string
}

export const EditableSpan = React.memo((props: EditableSpanType) => {
  let [editMode, setEditMode] = useState(false)
  let [inputValue, setInputValue] = useState(props.title)
  const onClickDoubleHandler = () => {
    setEditMode(!editMode)
  }
  const changeTaskValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
    props.callBack(e.currentTarget.value)
  },[props])
  return (
    <>
      {!editMode ? <h3 onDoubleClick={onClickDoubleHandler}>{props.title ? props.title : 'status'}</h3> : <TextField  onChange={changeTaskValue} label={props.title} variant="standard" value={inputValue} onBlur={onClickDoubleHandler} autoFocus type="text"/>}
    </>
  )
})