import React, { ChangeEvent, MouseEvent } from "react";

export const User = () => {
  const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
    alert(event.currentTarget.name);
  };

  const onNameChanged = () => {
    console.log("name changed");
  };

  const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("age changed :" + event.currentTarget.value);
  };

  const focusLostHandler = () => {
    console.log("focus lost");
  };

  return (
    <div>
      {" "}
      <textarea onChange={onNameChanged} onBlur={focusLostHandler}>
        Dimych
      </textarea>
      <button name={"delete"} tabIndex={0} onClick={deleteUser}>
        delete
      </button>
      <input onChange={onAgeChanged} type={"number"} />
    </div>
  );
};
