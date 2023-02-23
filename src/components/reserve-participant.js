import React from 'react'

const ReserveParticipant = ({participants, deleteParticipant, createParticipant, value, handleChange, partListChange, setValue}) => {
  // let partNum = 1
  const addParticipant = (e) => {
    e.preventDefault()
    const newParticipant = {
      id: Math.floor(Math.random() * 1e4),
    }
    createParticipant(newParticipant)
    let num = value.partList.length
    value.partList[num] = {
      id: num,
      name: "",
      age: "",
      sex: "",
      weight: "",
      footSize: "",
      eyeSight: "",
      glasses: "無し",
    }
    setValue(value)
  }
  const deletePart = (id) => {
    deleteParticipant(id)
  }

  return (
    <ol id="decimalList" className='list-decimal'>
      {
        participants.map((part, i) => {
          return(
            <li className='ml-4 mr-4 bg-sky-100 px-2 py-2 my-2 rounded-lg' key={i}>
              <div className="py-2">
                <label className='block mb-2'>
                  名前
                  <input
                    required
                    type="text"
                    className="mt-2 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                    placeholder='お名前'
                    name="name"
                    id="name"
                    value={value.partList[i]["name"] || ``}
                    onChange={partListChange}
                    // name={`name${i}`}
                    // id={`name${i}`}
                    // value={value[`name${i}`] || ``}
                    // onChange={handleChange}
                  />
                </label>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className='py-2 col-span-1'>
                  <label className='block mb-2'>
                    年齢
                    <input
                      className="mt-2 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      type="number"
                      name="age"
                      id="age"
                      value={value.partList[i]["age"] || ``}
                      onChange={partListChange}
                    />
                  </label>
                </div>
                <div className='py-2 col-span-1'>
                  <label htmlFor="sex" className='block mb-2'>
                    性別
                  </label>
                  <select
                    className='w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2'
                    value={value.partList[i]["sex"] || ``}
                    onChange={partListChange}
                    name="sex"
                    id="sex"
                  >
                    <option value="">選択</option>
                    <option value="男性">男性</option>
                    <option value="女性">女性</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className='py-2 col-span-1'>
                  <label className='block mb-2'>
                    体重
                    <input
                      className="mt-2 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      type="number"
                      name={"weight"}
                      id={"weight"}
                      value={value.partList[i]["weight"] || ``}
                      onChange={partListChange}
                    />
                  </label>
                </div>
                <div className='py-2 col-span-1'>
                  <label htmlFor="footSize" className='block mb-2'>
                    足のサイズ
                    {/* <input
                      className="mt-2 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      type="number"
                      name={`partFoot${i}`}
                      id={`partFoot${i}`}
                      value={value[`partFoot${i}`] || ``}
                      onChange={handleChange}
                    /> */}
                  </label>
                  <select
                    className='w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2'
                    value={value.partList[i]["footSize"] || ``}
                    onChange={partListChange}
                    name="footSize"
                    id="footSize"
                  >
                    <option value="選択して下さい">選択して下さい</option>
                    <option value="13.0cm">13.0cm</option>
                    <option value="13.5cm">13.5cm</option>
                    <option value="14.0cm">14.0cm</option>
                    <option value="14.5cm">14.5cm</option>
                    <option value="15.0cm">15.0cm</option>
                    <option value="15.5cm">15.5cm</option>
                    <option value="16.0cm">16.0cm</option>
                    <option value="16.5cm">16.5cm</option>
                    <option value="17.0cm">17.0cm</option>
                    <option value="17.5cm">17.5cm</option>
                    <option value="18.0cm">18.0cm</option>
                    <option value="18.5cm">18.5cm</option>
                    <option value="19.0cm">19.0cm</option>
                    <option value="19.5cm">19.5cm</option>
                    <option value="20.0cm">20.0cm</option>
                    <option value="20.5cm">20.5cm</option>
                    <option value="21.0cm">21.0cm</option>
                    <option value="21.5cm">21.5cm</option>
                    <option value="22.0cm">22.0cm</option>
                    <option value="22.5cm">22.5cm</option>
                    <option value="23.0cm">23.0cm</option>
                    <option value="23.5cm">23.5cm</option>
                    <option value="24.0cm">24.0cm</option>
                    <option value="24.5cm">24.5cm</option>
                    <option value="25.0cm">25.0cm</option>
                    <option value="25.5cm">25.5cm</option>
                    <option value="26.0cm">26.0cm</option>
                    <option value="26.5cm">26.5cm</option>
                    <option value="27.0cm">27.0cm</option>
                    <option value="27.5cm">27.5cm</option>
                    <option value="28.0cm">28.0cm</option>
                    <option value="28.5cm">28.5cm</option>
                    <option value="29.0cm">29.0cm</option>
                    <option value="29.5cm">29.5cm</option>
                    <option value="30.0cm">30.0cm</option>
                  </select> 
                </div>
              </div>
              <div className='py-2'>
                <label 
                  htmlFor="eyeSight"
                  className='block mb-2'>
                  視力
                  {/* <input
                    className="mt-2 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                    type="number"
                    name={`partEyeSight${i}`}
                    id={`partEyeSightk${i}`}
                    value={value[`partEyeSight${i}`] || ``}
                    onChange={handleChange}
                  /> */}
                </label>
                <select
                  className='w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-2 py-2'
                  name="eyeSight"
                  id="eyeSight"
                  value={value.partList[i]["eyeSight"] || ``}
                  onChange={partListChange}
                >
                  <option value="選択してください">選択してください</option>
                  <option value="2.0">2.0</option>
                  <option value="1.5">1.5</option>
                  <option value="1.2">1.2</option>
                  <option value="1.0">1.0</option>
                  <option value="0.9">0.9</option>
                  <option value="0.8">0.8</option>
                  <option value="0.7">0.7</option>
                  <option value="0.6">0.6</option>
                  <option value="0.5">0.5</option>
                  <option value="0.4">0.4</option>
                  <option value="0.3">0.3</option>
                  <option value="0.2">0.2</option>
                  <option value="0.1">0.1</option>
                  <option value="0.1以下">0.1以下</option>
                </select>
              </div>
              <div className='py-2'>
                <label htmlFor="glasses" className='block mb-2'>
                  コンタクト・メガネ
                  {/* <input
                    className="mt-2 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                    type="number"
                    name="glasses"
                    id={`glassesk${i}`}
                    value={value[`glasses${i}`] || ``}
                    onChange={handleChange}
                  /> */}
                </label>
                <select
                  className='w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2'
                  name="glasses"
                  id="glasses"
                  value={value.partList[i]["glasses"] || ``}
                  onChange={partListChange}
                >
                  <option value="無し">無し</option>
                  <option value="コンタクトレンズ">コンタクトレンズ</option>
                  <option value="めがね">めがね</option>
                </select>
              </div>
              {
                i === 0 || (
                  <button
                    className='text-gray-600 text-[14px] font-bold text-right block ml-auto'
                    onClick={(e) => {
                      e.preventDefault()
                      deletePart(part.id)
                      value.partList.splice(i, 1)
                      setValue(value)
                    }}>削除</button>
                )
              }
            </li>
          )
        })
      }
      <div>
        <button onClick={addParticipant} className='bg-gray-100 py-2 px-4 mx-auto block my-4 border-2 rounded-lg'>入力欄を追加する</button>
      </div>
      {/* <div className="py-2">
        <label className='block mb-2'>なまえ</label>
        <input className="w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" type="text" />
      </div>
      <div className="py-2">
        <label className="block mb-2">年齢</label>
        <input className="w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" type="number" />
      </div>
      <div className="py-2">
        <label className="block mb-2">性別</label>
        <select name="" id="" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'>
          <option value="男">男</option>
          <option value="女性">女</option>
        </select>
      </div>
      <div className="py-2">
        <label className="block mb-2">身長</label>
        <input className="w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" type="number" />
      </div>
      <div className="py-2">
        <label className="block mb-2">体重</label>
        <input className="w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" type="number" />
      </div>
      <div className="py-2">
        <label className="block mb-2">足のサイズ</label>
        <input className="w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" type="number" />
      </div>
      <div className="py-2">
        <label className="block mb-2">視力</label>
        <input className="w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" type="number" />
      </div>
      <div className="py-2">
        <label className="block mb-2">コンタクト・メガネ</label>
        <input className="w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" type="number" />
      </div> */}
    </ol>
  )
}

export default ReserveParticipant
