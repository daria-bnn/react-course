export const Text1 = () => <div>текст1</div>

export const Text2 = () => {
  const text = 'текст2'
  return <div>{text}</div>
}

export const Text3 = () => {
  const text = <p>текст3</p>
  return <div>{text}</div>
}

export const Text4 = () => {
  const text1 = <p>текст1</p>
  const text2 = <p>текст2</p>

  return (
    <div>
      {text1}
      <p>!!!</p>
      {text2}
    </div>
  )
}

export const Text5 = () => {
  const attr = 'block'

  return <div id={attr}>текст5</div>
}

export const Text6 = () => {
  const str = 'block'

  return <div className={str}>текст6</div>
}

export const Text7 = () => {
  const objStyle = {
    backgroundColor: 'green',
    borderRadius: '50px',
    border: '1px solid red',
  }

  return <div style={objStyle}>текст7</div>
}

export const Text8 = () => {
  const show = true

  return <div>{show ? 'текст1-true' : 'текст2-false'} </div>
}

export const Text9 = () => {
  const array = ['a', 'b', 'c', 'd', 'e']

  return (
    <ul>
      {array.map((letter) => (
        <li key={letter}>{letter}</li>
      ))}
    </ul>
  )
}
