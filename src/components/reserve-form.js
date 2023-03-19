import React from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'
import ReserveComplete from './reserve-complete'
import ReserveParticipant from './reserve-participant'

const ReserveForm = () => {
  const [value, setValue] = useState({ 
    menu: "マングローブカヤック",
    adalt: "1",
    anxiety: "無し",
    child: "0",
    date2: "",
    time2: "",
    date3: "",
    time3: "",
    anxietyText: "",
    stayPlace: "",
    arrival: "",
    Departure: "",
    how: "",
    howContent: "",
    reserveMessage: "",
    partList: [
      {
        id: 0,
        name: "",
        age: "",
        sex: "",
        weight: "",
        footSize: "",
        // eyeSight: "",
        // glasses: "無し",
      },
    ],
  },)
  const [serverResponse, setServerResponse] = useState(``)

  // ラジオボタン
  const [tourMenu, setTourMenu] = useState("マングローブカヤック")
  const TOUR_MENU_RADIO = ["マングローブカヤック", "ター滝アドベンチャー", "親子結プログラム", "オリジナルムイツアー", "その他 複数"]

  const [anxiety, setAnxiety] = useState("無し")
  const ANXIETY_RADIO = ["無し", "有り"]

  const [how, setHow] = useState("")
  const HOW_RADIO = ["1 YahooやGoogleなどの検索", "2 広告", "3 紹介", "4 その他"]

  // 参加者追加・削除ロジック
  const [ participants, setParticipants ] = useState(value.partList)
  const deleteParticipant = (id) => {
    const newParticipants = participants.filter((participant) => {
      return participant.id !== id
    })
    setParticipants(newParticipants)
  }
  const createParticipant = (participant) => {
    setParticipants([...participants, participant])
  }

  // フォームの入力内容をリアルタイムでリッスンし仮保存しておく関数②.
  function partListChange(e) {
    e.preventDefault()
    const num = value.partList.length - 1
    value.partList[num][e.target.id] = e.target.value
    setServerResponse(``)
    setValue({ ...value })

  }

  function handleChange(e) {
    value[e.target.id] = e.target.value
    setServerResponse(``)
    setValue({ ...value })

    // console.log(value)
  }


  // フォームが送信されたら、送信処理のために
  // 入力内容（values）をapi/send.jsに送る関数①.
  async function onSubmit(e) {
    e.preventDefault()
    const response = await window
    .fetch(`/api/reserve`, {
        method: `POST`,
        headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(value),
    })
    .then(res => res.json())
    setServerResponse(response)
    setValue(``) // フォームの入力内容をカラにする.

    console.log("送信完了")
  }


  // let partTextData = []
  // for(let i = 0; i < value.partList.length; i++) {
  //   partTextData[i] = 
  //   `
  //   <p>参加者 ${i + 1}</p>
  //   <p>お名前: ${value.partList[i].name}</p>
  //   <p>年齢: ${value.partList[i].age}歳</p>
  //   <p>性別: ${value.partList[i].sex}</p>
  //   <p>体重: ${value.partList[i].weight}Kg</p>
  //   <p>視力: ${value.partList[i].eyeSight}</p>
  //   <p>コンタク・メガネ: ${value.partList[i].glasses}</p>`
  // }

  // let body = value

  // const mailData = {
  //   from: 'hakusingo@gmail.com',
  //   to: body.formEmail,
  //   bcc: 'hakusingo@gmail.com',
  //   subject: 'ワンオーシャンへのご予約ありがとうございます。',
  //   html: 
  //   `<p>以下の内容でご予約を受け付けました。回答をお待ちください。<br>
  //   ワンオーシャン代表 徳門</p>
  //   <hr>
  //   <p>ツアー内容: ${body.menu}</p>
  //   <p>第一希望日時: ${body.date1} ${body.time1}</p>
  //   <p>第二希望日時: ${body.date2} ${body.time2}</p>
  //   <p>第三希房日時: ${body.date3} ${body.time2}</p>
  //   <p>代表者様のお名前: ${body.formName}</p>
  //   <p>フリガナ名: ${body.furigana}</p>
  //   <p>メールアドレス: ${body.formEmail}</p>
  //   <p>お電話番号: ${body.phone}</p>
  //   <p>参加人数: 大人${body.adalt}名 お子様${body.child}名</p>
  //   <br>
  //   <p>参加者一覧</p>
  //   ${partTextData.join()}
  //   <br>
  //   <p>健康面での不安: ${body.anxiety}</p>
  //   <p>健康面の不安内容: ${body.anxietyText}</p>
  //   <p>宿泊先: ${body.stayPlace}</p>
  //   <p>沖縄到着日: ${body.arrival}</p>
  //   <p>沖縄からお帰りなる日: ${body.Departure}</p>
  //   <p>ワンオーシャンをお知りになった媒体: ${body.how}</p>
  //   <p>媒体の内容: ${body.howContent}</p>
  //   <p style="white-space: pre-wrap;">お問合わせ内容： ${body.reserveMessage}</p>`,
  // }

  // console.log(mailData.html)

  return (
    <div className="pt-12 md:pt-[8rem]">
      <div className="max-w-screen-2xl mx-auto">
        {/* text - start */}
        <div className="mb-10 md:mb-16 w-[80%] mx-auto max-w-xl">
          <h2 className="text-main-blue text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">ご予約フォーム</h2>
          <p className='max-w-[400px] mx-auto leading-[1.6rem]'>
            お急ぎの場合はお手数ですがお電話にてお問い合わせください。<br />
            なお、ツアー催行中などで電話に出られない場合は、こちらから折り返しご連絡させていただきます。
            <span className="max-w-screen-md text-gray-500 mx-auto block">*は記入必須です。</span>
          </p>
          <p className="text-gray-400 text-xs mt-4 text-center pb-2">当サイトのプライバシーポリシー 
            <Link to="/policy" className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100">Privacy Policy</Link>.
          </p>
        </div>
        {/* text - end */}

        {/* form - start */}
        <div className="bg-white border-4 border-main-blue rounded-lg mt-12 items-start max-w-[800px] mx-auto">

          { serverResponse ? <ReserveComplete/> : (
            <form onSubmit={onSubmit}  method="POST" action="/api/send" name="contact" className="max-w-screen-md mx-auto px-4 xl:px-8">
              <div className='mt-8'>
                <div className=''>
                  <p className='text-[14px] text-gray-600 max-w-[500px] mx-auto text-center'>
                    はじめに、下記のリンク先の注意事項ページの項目を読んで頂き、<br className='hidden lg:block'/>同意する場合はチェックを入れ先に進んで下さい。
                  </p>
                  <div className='mt-2 flex justify-center'>
                    <Link
                      to="/notes"
                      className='border-b-2 border-main-blue text-main-blue'
                    >
                      注意事項ページへ
                    </Link>
                  </div>
                  <div className="mt-2 flex justify-center">
                    <label htmlFor="">
                      <input 
                        type="checkbox"
                        required
                      />
                      　申込みに関する注意事項に同意する
                    </label>
                  </div>
                </div>
                <h3 className='inline-block mb-4 font-semibold text-main-blue text-[1.2rem] md:text-[1.6rem] mt-12'>1. ご希望のコース</h3>
                <div className="mb-2">
                  <p className="inline-block mb-2">ご希望コース<span className='text-pink'>*</span></p>
                  {
                    TOUR_MENU_RADIO.map((menu) => {
                      return (
                        <label
                          className='block text-center py-1 px-2'
                          key={menu}
                        >
                          <input
                            id="menu"
                            type="radio"
                            value={menu}
                            name={menu}
                            checked={tourMenu === menu}
                            onChange={ 
                              function(e) {
                                setTourMenu(e.target.value)
                                handleChange(e)
                              }
                            } 
                          />
                          {menu}
                        </label>
                      )
                    })
                  }
                </div>
                <div className="mb-2">
                  <label htmlFor='date1' className='mb-2 col-span-1'>希望日時1<span className='text-pink'>*</span></label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      required
                      id="date1"
                      type="date"
                      name="date1" 
                      value={value['date1'] || ``}
                      onChange={handleChange}
                      className=' col-span-1 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2'  
                    />
                    <input
                      required
                      id="time1"
                      name="time1"
                      value={value['time1'] || ``}
                      type="time"
                      onChange={handleChange}
                      className=' col-span-1 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2'
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <p htmlFor='date2' className='mb-2 col-span-1'>希望日時2</p>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      id="date2"
                      type="date"
                      name="date2" 
                      value={value['date2'] || ``}
                      onChange={handleChange}
                      className=' col-span-1 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2'  
                    />
                    <input
                      id="time2"
                      name="time2"
                      value={value['time2'] || ``}
                      onChange={handleChange}
                      type="time"
                      className=' col-span-1 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2'
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <p htmlFor='date3' className='mb-2 col-span-1'>希望日時3</p>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      id="date3"
                      type="date"
                      name="date3" 
                      value={value['date3'] || ``}
                      onChange={handleChange}
                      className=' col-span-1 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2'  
                    />
                    <input
                      id="time3"
                      name="time3"
                      value={value['time3'] || ``}
                      type="time"
                      onChange={handleChange}
                      className=' col-span-1 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2'
                    />
                  </div>
                </div>
                <h3 className='mt-8 inline-block mb-4 font-semibold text-main-blue text-[1.2rem] md:text-[1.6rem]'>2. 代表者情報</h3>
                <div className="mb-2">
                  <label htmlFor="formName" className="inline-block mb-2">お名前<span className='text-pink'>*</span></label>
                  <input
                    required
                    type="text"
                    name="formName" 
                    id="formName" 
                    placeholder="例)徳門 正尚"
                    value={value['formName'] || ``}
                    onChange={handleChange}
                    className="w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
                </div>
                <div className="mb-2">
                  <label htmlFor="formName" className="inline-block mb-2">フリガナ<span className='text-pink'>*</span></label>
                  <input
                    required
                    type="text"
                    name="furigana" 
                    id="furigana" 
                    placeholder="トクジョウ マサナオ"
                    value={value['furigana'] || ``}
                    onChange={handleChange}
                    className="w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
                </div>
                <div className="mb-2">
                  <label htmlFor="formEmail" className="inline-block mb-2">メールアドレス<span className='text-pink'>*</span></label>
                  <input
                    required
                    type="email"
                    name="formEmail" 
                    id="formEmail"
                    placeholder='example@mail.com' 
                    value={value['formEmail'] || ``}
                    onChange={handleChange}
                    className="w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="formEmailConfirm" className="inline-block mb-2">確認用メールアドレス<span className='text-pink'>*</span></label>
                  <input
                    required
                    type="email"
                    id="formEmailConfirm"
                    placeholder='example@mail.com' 
                    value={value['formEmailConfirm'] || ``}
                    onChange={handleChange}
                    name="email" 
                    className="w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
                </div>
                <div className="mb-2">
                  <label htmlFor="phone" className="inline-block mb-2">電話番号<span className='text-pink'>*</span></label>
                  <input
                    required
                    type="tel"
                    name="phone" 
                    id="phone"
                    placeholder='080-01234-5678'
                    value={value['phone'] || ``}
                    onChange={handleChange}
                    className="w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" 
                  />
                </div>
                <h3 className='mt-8 inline-block mb-4 font-semibold text-main-blue text-[1.2rem] md:text-[1.6rem]'>3. 参加者情報</h3>
                <div className="mb-2">
                  <p>
                    参加人数<span className='text-pink'>*</span>
                  </p>
                  <div className="mb-2">
                    <label htmlFor='adalt' className="block mb-2 text-right">大人</label>
                    <select
                      required
                      value={value['adalt'] || ``}
                      onChange={handleChange}
                      name="adalt" 
                      id="adalt" 
                      className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10名以上">10名以上</option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <label htmlFor='child' className="block mb-2 text-right">子供</label>
                    <select
                      value={value['child'] || ``}
                      onChange={handleChange}
                      name="child" 
                      id="child" 
                      className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10名以上">10名以上</option>
                    </select>
                  </div>
                </div>
                <div className="mb-2">
                  <p className='mb-2'>
                    参加者情報
                  </p>
                  <p className='text-[14px] text-gray-800'>
                    ※記入欄を追加したい場合は下記のボタンをクリックして下さい。<br/>身長、体重、足のサイズ等、前日の電話で対応可能です。
                  </p>
                  <div className="" id="participant">
                    <ReserveParticipant
                      participants={participants}
                      createParticipant={createParticipant}
                      deleteParticipant={deleteParticipant}
                      handleChange={handleChange}
                      value={value}
                      setValue={setValue}
                      partListChange={partListChange}
                    />
                  </div>
                </div>
                <div className='mb-2'>
                  <p className='mb-2'>健康面での不安<span className='text-pink'>*</span></p>
                  <div className="flex justify-around">
                    {
                      ANXIETY_RADIO.map((anxiet) => {
                        return (
                          <label
                            className='text-center py-1 px-2'
                            key={anxiet}
                          >
                            <input
                              id="anxiety"
                              type="radio"
                              value={anxiet}
                              name={anxiet}
                              checked={anxiety === anxiet}
                              onChange={ 
                                function(e) {
                                  setAnxiety(e.target.value)
                                  handleChange(e)
                                }
                              } 
                            />
                            {anxiet}
                          </label>
                        )
                      })
                    }
                  </div>
                </div>
                <div className="mb-2">
                  <label htmlFor='anxiety' className=''>
                    有りの場合は健康面での不安をご記入ください
                    <textarea
                      id="anxietyText"
                      value={value['anxietyText'] || ``}
                      onChange={handleChange}
                      name="anxietyText" 
                      className="h-[300px] mt-2 w-full bg-white border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" 
                      placeholder='こちらにご記入ください。'
                    />
                  </label>
                </div>
                <div className="mb-2">
                  <label htmlFor="">
                    宿泊先
                    <input
                      type="text"
                      name="stayPlace" 
                      id="stayPlace" 
                      value={value['stayPlace'] || ``}
                      onChange={handleChange}
                      className="mt-2 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                    />
                  </label>
                </div>
                <div className='mb-2'>
                  <label htmlFor="">
                    沖縄ご到着日
                    <input 
                      className=' mt-2 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2'
                      id="arrival" 
                      name="arrival"
                      type="date"
                      value={value['arrival'] || ``}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div className='mb-2'>
                  <label htmlFor="">
                    沖縄からお帰りになる日
                    <input 
                      className=' mt-2 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2'
                      id="Departure"
                      name="Departure"
                      type="date"
                      value={value['Departure'] || ``}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>
              <h3 className='mt-8 inline-block mb-4 font-semibold text-main-blue text-[1.2rem] md:text-[1.6rem]'>4. ワンオーシャンについて</h3>
              <div className='mb-2'>
                <p>
                  当サイトを何でお知りになりましたか？  
                </p>
                <div className="mx-4 mt-4 my-4">
                  {
                    HOW_RADIO.map((howTo, i) => {
                      return (
                        <div
                          key={i}
                          >
                          <label
                            className='text-center py-1 px-2'
                          >
                            <input
                              id="how"
                              type="radio"
                              value={howTo}
                              name={howTo}
                              checked={how === howTo}
                              onChange={ 
                                function(e) {
                                  setHow(e.target.value)
                                  handleChange(e)
                                }
                              } 
                            />
                            {howTo}
                          </label>
                        </div>
                      )
                    })
                  }
                </div>
                <label htmlFor="">
                  2.3.4を選択の場合は広告紙名、紹介者名、その他理由をご記入ください
                  <input
                    id="howContent"
                    name="howContent"
                    value={value['howContent'] || ``}
                    onChange={handleChange}
                    className="mt-2 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  />
                </label>
              </div>
              <h3 className='mt-8 inline-block mb-4 font-semibold text-main-blue text-[1.2rem] md:text-[1.6rem]'>5. ご予約に関するご質問・お問い合わせ</h3>
              <div>
                <label htmlFor="">ご予約に関するご質問・お問合わせ
                  <textarea
                    id="reserveMessage"
                    value={value['reserveMessage'] || ``}
                    onChange={handleChange}
                    name="reserveMessage" 
                    className="h-[300px] mt-2 w-full bg-white border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" 
                    placeholder='こちらにご記入ください。'
                  />
                </label>
              </div>
              <h3 className='mt-8 inline-block mb-4 font-semibold text-main-blue text-[1.2rem] md:text-[1.6rem]'>6. お読みください</h3>
              <div className="">
                <div className="col-span-8">
                  <div className="bg-gray-100 mb-4 p-4 rounded-lg">
                    携帯メールアドレスのお客様へ
                    ○メール受信制限設定をされている方は「@one-ocean-toku.com」の受信許可をお願いいたします。
                    予約フォーム送信完了後、送信確認のための自動返信メールを送信しています。
                  </div>
                </div>
              </div>
              {/* お読み下さい */}
              <div className="mt-8">
                <h3 htmlFor="course" className="inline-block mb-4 font-semibold text-main-blue">ご確認</h3>
                <div className="">
                  <input
                    required
                    id="course"
                    className='mr-2' 
                    type="checkbox"
                  />
                  <label htmlFor='course'>
                    お問い合わせの内容はこちらでよろしいですか？<br/>
                    よろしければチェックを入れて送信ボタンをクリックしてください。
                  </label>
                </div>
              </div>
              <hr className='my-4'/>
              <div className="flex justify-center mb-8">
                <button
                  aria-label="submit"
                  type="submit"
                  className='inline-block border font-semibold bg-main-blue text-white py-1 px-4 rounded'
                >
                  送信する
                </button>
              </div>
              {/* <p className="text-gray-400 text-xs mt-12 text-center pb-2">当サイトのプライバシーポリシー 
                <Link to="/policy" className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100">Privacy Policy</Link>.
              </p> */}
            </form>
          ) }
          
        </div>
      </div>
    </div>
  )
}

export default ReserveForm