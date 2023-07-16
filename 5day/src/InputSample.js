import React, { useState } from 'react'

export default function InputSample() {
    // const [text, setText] = useState('');

    const [inputs, setInputs] = useState({
        name:'',
        nickname:''
    });

    const nameInput=useRef()
    console.log(nameInput);

    const {name,nickname} =inputs
    const onChange = (e) => {
        // console.log(e)
        // setText(e.target.value)
        // console.log(e.target.name);
        // console.log(e.target.value);

        const {value, name}=e.target
        setInputs({...inputs, [name]: value })
    };
    const onReset = () => {
        // setText('')
        setInputs({name:"", nickname:""});
        nameInput.current.focus()
    };
  return (
    <div>
        {/* <input type='text' onChange={onChange} value={text}/> */}
        <input placeholder='이름' name='name'onChange={onChange} ref={nameInput}/>
        <input placeholder='닉네임' name='nickname' onChange={onChange}/>
        <button onClick={onReset}>초기화</button>
        <p><b>값:</b>{name}({nickname})</p>
    </div>
  );
}
