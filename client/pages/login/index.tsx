import React from 'react'
// import style from './index.css'
// className={style.box}

export default () => {
  const loginTitleClick = () => {
    console.log('loginTitleClick')
    alert('loginTitleClick')
  }
  return (
    <div>
      <h1 onClick={loginTitleClick}>login</h1>
    </div>
  )
}
