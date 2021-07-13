import React, { useState } from 'react'
// import style from './index.css'
// className={style.box}

export default () => {
  const loginTitleClick = () => {
    console.log('loginTitleClick')
    // alert('loginTitleClick')
    setCount((c) => c + 1)
  }

  const [count, setCount] = useState(1)

  return (
    <div>
      <h1 onClick={loginTitleClick}>hellox</h1>
      <p>{count}</p>
    </div>
  )
}
