import React from 'react'
import { useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { RxCrossCircled } from "react-icons/rx"
import "../../pages/index.scss"

const Modal = ( props ) => {

  let modal = props.modal
  let modalState = props.modalState

  // function disableScroll(event) {
  //   event.preventDefault();
  // }
  
  useEffect(() => {
    document.querySelector("body").classList.add("overflow-hidden")
    // document.addEventListener('touchmove', disableScroll, { passive: false });
    return () => {
      document.querySelector("body").classList.remove("overflow-hidden")
      // document.addEventListener('touchmove', disableScroll, { passive: true });
    }
  }, [])

  return (
    modal ? (
      null
    ) : (
      // モーダル表示
      <div id="stuff-modal" className='absolute top-0 bottom-0 left-0 right-0 z-20'>
        <div 
          role="presentation"
          onClick={(() => {
            modalState(true)
            document.querySelector("body").classList.remove("overflow-hidden")
          })} 
          className='absolute top-0 left-0 right-0 bottom-0 bg-yellow opacity-40'
        >
        </div>
        
        <div className="modal-animation pb-8 lg:pb-16 w-[90%] md:w-[80%] h-auto bg-white left-[50%] top-[50%] -translate-x-[50%] -translate-y-[46%] fixed z-30 rounded-lg xl:max-w-[1000px] overflow-hidden">
          <button 
            onClick={(() => {
              modalState(true)
              document.querySelector("body").classList.remove("overflow-hidden")
              // document.addEventListener('touchmove', disableScroll, { passive: true })
            })}
            className="top-[2rem] sm:top-[2rem] sm:left-[2rem] left-[1rem] lg:top-[3rem] lg:left-[3rem] absolute"
          >
            <RxCrossCircled className='text-main-blue w-8 h-8' />
          </button>
          
          <div className="pt-8 xl:pt-24 flex justify-center">
            <div className="w-[75%] xl:w-[90%] h-full xl:max-w-[800px]">
              <svg 
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.74 23.01"
                className='w-[70%] h-auto mx-auto max-w-[300px]'
              >
                <defs>
                  <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:#249bd8;}.cls-2{fill:none;stroke:#249bd8;stroke-miterlimit:10;stroke-width:2.39px;}" }} /></defs><g id="_レイヤー1"><g><g><circle className="cls-2" cx="8.27" cy="8.27" r="7.07" /><circle className="cls-2" cx="41.03" cy="8.27" r="7.07" /><g><path className="cls-1" d="M19.36,.87l3.84,9.46V3.77c0-.91-.07-1.53-.2-1.86-.18-.43-.49-.65-.93-.63v-.42h2.57v.42c-.33,.08-.55,.19-.66,.32-.11,.13-.2,.34-.26,.64-.06,.3-.09,.8-.09,1.52v12.7h-.2L18.16,3.77V13.47c0,.88,.1,1.47,.31,1.78,.2,.31,.44,.46,.7,.46h.18v.42h-2.76v-.42c.43,0,.73-.18,.9-.52s.25-.91,.25-1.72V2.7l-.17-.41c-.17-.4-.31-.67-.44-.8s-.31-.2-.55-.21v-.42h2.76Z" /><path className="cls-1" d="M28.13,1.75V7.96h.15c.49,0,.85-.3,1.07-.91s.36-1.5,.43-2.69h.22v7.99h-.22c-.05-.87-.14-1.58-.29-2.14-.15-.55-.32-.93-.51-1.12-.2-.19-.48-.29-.85-.29v4.3c0,.84,.02,1.35,.05,1.54,.04,.19,.1,.34,.2,.46,.1,.12,.26,.18,.48,.18h.47c.73,0,1.31-.33,1.75-.99,.44-.66,.75-1.67,.95-3.01h.21l-.35,4.85h-6.73v-.42h.26c.23,0,.41-.08,.55-.24,.1-.1,.18-.29,.23-.54,.04-.18,.06-.65,.06-1.42V3.48c0-.69,0-1.11-.03-1.27-.04-.26-.11-.46-.21-.61-.15-.21-.34-.31-.6-.31h-.26v-.42h6.52V5.38h-.22c-.11-1.1-.27-1.89-.47-2.37s-.49-.83-.85-1.06c-.21-.13-.62-.2-1.21-.2h-.8Z" /></g><g><path className="cls-1" d="M57.64,.88V6.17h-.22c-.17-1.38-.48-2.44-.94-3.17-.46-.74-.98-1.1-1.56-1.1-.49,0-.93,.27-1.34,.82-.41,.55-.7,1.26-.89,2.15-.24,1.13-.36,2.39-.36,3.78s.09,2.61,.26,3.73c.18,1.12,.45,1.97,.83,2.54,.38,.57,.86,.86,1.46,.86,.49,0,.94-.21,1.35-.63,.41-.42,.84-1.14,1.29-2.17v1.32c-.44,.89-.89,1.54-1.36,1.94-.47,.4-1.03,.6-1.66,.6-.83,0-1.57-.33-2.21-.98s-1.14-1.59-1.49-2.81c-.35-1.22-.53-2.52-.53-3.9,0-1.45,.19-2.83,.58-4.14,.39-1.3,.91-2.32,1.57-3.04s1.36-1.08,2.11-1.08c.55,0,1.13,.23,1.74,.7,.35,.27,.58,.4,.67,.4,.12,0,.23-.09,.32-.26,.09-.18,.15-.46,.18-.84h.22Z" /><path className="cls-1" d="M67.38,2.11v6.21h.16c.49,0,.85-.3,1.07-.91,.22-.61,.36-1.5,.43-2.69h.22v7.99h-.22c-.05-.87-.14-1.58-.29-2.14-.15-.55-.32-.93-.51-1.12-.2-.19-.48-.29-.85-.29v4.3c0,.84,.02,1.35,.05,1.54s.1,.34,.2,.46c.1,.12,.26,.18,.48,.18h.47c.73,0,1.31-.33,1.75-.99,.44-.66,.75-1.67,.95-3.01h.21l-.35,4.85h-6.73v-.42h.26c.23,0,.41-.08,.55-.24,.1-.1,.18-.29,.23-.54,.04-.18,.06-.65,.06-1.42V3.84c0-.69,0-1.11-.03-1.27-.04-.26-.11-.46-.21-.61-.15-.21-.34-.31-.6-.31h-.26v-.42h6.52V5.74h-.22c-.11-1.1-.27-1.89-.47-2.37-.2-.48-.49-.83-.85-1.06-.21-.13-.62-.2-1.21-.2h-.8Z" /><path className="cls-1" d="M76.92,12.14h-2.75l-.33,1.48c-.11,.5-.16,.9-.16,1.23,0,.43,.09,.74,.26,.94,.1,.12,.36,.21,.76,.27v.42h-2.59v-.42c.28-.08,.51-.31,.69-.68,.18-.37,.4-1.14,.67-2.3l2.79-12.17h.11l2.81,12.51c.27,1.19,.49,1.93,.66,2.24,.13,.23,.31,.37,.55,.41v.42h-3.77v-.42h.16c.3,0,.52-.08,.64-.25,.08-.12,.13-.29,.13-.52,0-.13-.01-.27-.04-.42,0-.07-.06-.35-.17-.84l-.41-1.9Zm-.2-.83l-1.16-5.25-1.2,5.25h2.36Z" /><path className="cls-1" d="M83.45,1.23l3.84,9.46V4.13c0-.91-.07-1.53-.2-1.86-.18-.43-.49-.65-.92-.63v-.42h2.57v.42c-.33,.08-.55,.19-.66,.32-.11,.13-.2,.34-.26,.64-.06,.3-.09,.8-.09,1.52v12.7h-.2l-5.27-12.7V13.83c0,.88,.1,1.47,.31,1.78s.44,.46,.7,.46h.18v.42h-2.76v-.42c.43,0,.73-.18,.9-.52,.17-.34,.25-.91,.25-1.72V3.07l-.17-.41c-.17-.4-.31-.67-.44-.8-.13-.13-.31-.2-.55-.21v-.42h2.76Z" /></g><circle className="cls-1" cx="61.56" cy="3.89" r="3.04" /><circle className="cls-1" cx="58.52" cy="9.98" r="2.22" /><circle className="cls-1" cx="55.33" cy="13.66" r="1.02" /></g><g><path className="cls-1" d="M52,18.65c.78-.07,2.15-.19,2.43-.22,.16-.02,.34-.17,.48-.17,.18,0,.6,.32,.52,.49-.05,.12-.41,.34-.65,.61-1.47,1.66-3.03,2.73-5.18,3.44-.21,.07-.21-.17,0-.26,2.19-.92,3.75-2.11,4.88-3.61,.08-.11,.06-.12-.04-.12-.6,0-1.77,.13-2.54,.28-.14,.53-.4,1.4-.48,1.6-.06,.14-.19,.25-.34,.25-.24,0-.24-.33-.17-.51,.06-.17,.25-.54,.31-.74,.14-.45,.14-.8-.06-1.08-.08-.1,0-.17,.18-.19,.17-.01,.66,.02,.67,.24Z" /><path className="cls-1" d="M61.23,18.96c-1.27,1.13-3.18,2.33-4.75,3.09-.3,.14-.59,.32-.8,.32-.3,0-.61-.38-.5-.77,.04-.15,.21-.23,.29-.17,.1,.07,.18,.17,.28,.23,.12,.07,.32,.06,.62-.07,1.57-.68,3.42-1.82,4.73-2.8,.18-.14,.32,.02,.14,.17Zm-4.36-.45c.65,.08,1.3,.39,1.09,.88-.09,.2-.28,.34-.47,.34-.09,0-.17-.05-.21-.15-.16-.36-.33-.54-.59-.85-.08-.09,.05-.24,.19-.22h0Z" /><path className="cls-1" d="M63.52,19.89c-.02-.14,.09-.24,.27-.2,.24,.05,.38,.24,.33,.37-.05,.12-.15,.23-.42,.43-.73,.56-1.89,1.38-3.36,1.9-.25,.09-.25-.14-.05-.24,1.57-.73,2.73-1.64,3.06-1.95,.16-.15,.19-.21,.17-.32h0Zm-.08,2.17c.13,0,.21-.03,.27-.17,.13-.31,.71-1.73,.99-2.38-.66,.08-1.45,.24-1.88,.33-.28,.06-.49,.13-.68,.13-.27,0-.43-.36-.32-.68,.04-.12,.17-.17,.24-.11,.14,.12,.29,.2,.48,.2,.32,0,1.47-.15,2.33-.25,.14-.31,.29-.65,.35-.83,.04-.13,.02-.17-.12-.23-.15-.07-.21-.11-.18-.17,.05-.11,.3-.2,.49-.2,.29,0,.66,.13,.58,.3-.1,.22-.3,.39-.65,1.08,.08,0,.16-.02,.23-.03,.35-.04,.57-.13,.69-.13,.31,0,.62,.2,.53,.41-.07,.15-.18,.21-.34,.21-.17,0-.6-.07-.98-.07-.11,0-.22,0-.33,.01-.29,.64-.65,1.51-.83,1.98-.12,.3-.19,.61-.27,.8-.13,.29-.56,.6-.8,.6-.2,0-.06-.28-.42-.63-.08-.08,.03-.22,.18-.2,.11,.02,.3,.05,.43,.05Z" /><path className="cls-1" d="M66.88,19.99c.12,.1,.24,.24,.47,.25,.56,.04,2.15-.08,2.64-.12,.6-.05,.79-.11,1.06-.11s.62,.16,.5,.45c-.04,.1-.15,.18-.36,.18s-.4-.05-.81-.05c-.8,0-2.16,.11-2.65,.17-.32,.04-.56,.08-.78,.08-.29,0-.43-.44-.29-.76,.05-.12,.15-.16,.23-.09Z" /><path className="cls-1" d="M73,19.66c-.09-.1,0-.22,.17-.23,.56-.02,1.13,.28,.92,.77-.07,.17-.24,.3-.39,.29-.13,0-.17-.09-.24-.23-.11-.23-.29-.42-.46-.61h0Zm5.08-.84c.17-.15,.34,0,.17,.16-1.26,1.21-3.1,2.44-4.78,3.32-.29,.15-.57,.3-.76,.3-.3,0-.59-.34-.51-.73,.03-.14,.21-.22,.28-.17,.11,.08,.18,.17,.28,.23,.11,.07,.27,.06,.57-.07,1.34-.6,3.4-1.93,4.75-3.05h0Zm-3.53-.35c-.09-.09,0-.22,.17-.23,.54-.03,1.16,.24,.97,.73-.07,.17-.23,.3-.39,.3-.13,0-.18-.08-.25-.21-.11-.23-.31-.41-.49-.58h0Z" /><path className="cls-1" d="M79.3,19.36c.05-.11,.28-.2,.47-.2,.31,0,.52,.1,.48,.25-.04,.12-.11,.26-.15,.41-.03,.1-.06,.23-.1,.37,.48-.11,.94-.22,1.13-.28,.24-.07,.5-.19,.59-.19,.18,0,.49,.27,.4,.47-.06,.14-.39,.26-.53,.36-.28,.2-.81,.55-1.16,.74-.23,.13-.31-.04-.1-.2,.28-.2,.73-.59,.91-.77,.13-.12,.12-.14-.03-.11-.25,.05-.77,.19-1.28,.34-.11,.54-.22,1.17-.25,1.46-.02,.15-.06,.64-.11,.74-.06,.14-.19,.24-.33,.24-.16,0-.23-.14-.2-.37,.02-.11,.1-.34,.14-.52,.07-.29,.19-.91,.29-1.43-.29,.09-.55,.16-.7,.21-.25,.08-.43,.16-.59,.16-.21,0-.38-.26-.35-.52,.01-.11,.16-.2,.25-.14h0c.12,.07,.21,.11,.36,.11,.11,0,.58-.09,1.1-.21,.04-.23,.06-.39,.07-.48,.01-.16-.01-.21-.12-.26-.15-.07-.22-.1-.18-.19Z" /><path className="cls-1" d="M88.65,18.96c-1.27,1.13-3.18,2.33-4.75,3.09-.3,.14-.59,.32-.8,.32-.3,0-.61-.38-.5-.77,.04-.15,.21-.23,.29-.17,.1,.07,.18,.17,.28,.23,.12,.07,.32,.06,.62-.07,1.57-.68,3.42-1.82,4.73-2.8,.18-.14,.32,.02,.14,.17Zm-4.36-.45c.65,.08,1.3,.39,1.09,.88-.09,.2-.28,.34-.47,.34-.09,0-.17-.05-.21-.15-.16-.36-.33-.54-.59-.85-.08-.09,.05-.24,.19-.22h0Z" /></g></g>
                </g>
              </svg>
              <div className="lg:flex w-full justify-between gap-8">
                <StaticImage
                  className="aspect-video lg:aspect-auto mt-2 w-[60%] block mx-auto rounded flex-1 xl:max-w-[300px]"
                  src="../../images/modal/modal-stuff-pic.jpg"
                  alt="徳門 正尚"
                />
                <div className="w-[80%] mx-auto mt-4 text-main-blue flex-1">
                  <h2 className='text-[18px] text-center xl:text-[24px] pb-1 font-bold'>
                    Profile: <span>徳門 正尚</span>
                  </h2>
                  <hr />
                  <h3 className='pt-2 text-center xl:text-[18px]'>
                    【資格】
                  </h3>
                  <ul className='xl:text-center'>
                    <li>
                      ◎ PADIオープンウォーターダイバーインストラクター
                    </li>
                    <li>
                      ◎ DAN酸素インストラクター
                    </li>
                    <li>
                      ◎ EFRインストラクター
                    </li>
                    <li>
                      ◎ CONE野外活動指導員
                    </li>
                    <li>
                      ◎ 潜水士 （国家資格）
                    </li>
                  </ul>
                  <h4 className='pt-2 text-center xl:text-[18px]'>
                    【趣味】
                  </h4>
                  <p className='xl:text-center'>
                    歴史書の読書・遺跡巡り・サーフィン・猫遊び
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  )
}

export default Modal
