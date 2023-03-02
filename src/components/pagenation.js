import React from 'react'
import { Link } from 'gatsby'

const Pagination = ({ totalCount, pageContext }) => {
  // console.log(pageContext)

  // const totalPage = pageContext.pageCount
  const current = pageContext.currentPage
  // const firstPage = 0
  const pre_page = pageContext.limit
  const total = pageContext.totalPosts
  
  const nav = [...Array(Math.ceil(total / pre_page))].map((_, i) => i + 1 === 1 ? '/blog/' : `/blog/${i + 1}`) // リンク生成用の配列を作成

  const current_index = current - 1
  const start = Math.max(current_index - 2, 0) // ページネーションリンクの開始index
  const end = Math.min(current_index + 2, nav.length - 1) // ページネーションリンクの終了index
  
  const start_index = end - current_index >= 2 ? start : start - (2 - (end - current_index))
  const end__index = start >= 2 ? end : end + (2 - (current_index - start))
    
  let navigation = []
  for(let i = start_index; i <= end__index; i++) {
    nav[i] !== undefined && navigation.push(nav[i])
  }
  return (
    <ul className='flex col-span-1 mx-auto'>
      {
        navigation.map((path, i) => (
          <li
            className='mx-4'
            key={i}
          >
            {current_index === path ? path === '/' ? '1' : path.slice(1) : 
            <Link 
              to={`${path}`}
              activeClassName="text-main-blue font-black border-b-2 border-main-blue text-[18px]"
              // className={current === (path === "/blog/" ? 1 : path.replace("/blog/", "")) ? "text-main-blue font-black border-b-2 border-main-blue text-[18px]" : "text-[18px]"}
              className='text-[18px]'
            >
              { path === "/blog/" ? 1 : path.replace("/blog/", "") }
            </Link>}
          </li>
        ))
      }
    </ul>
  )
}

export default Pagination
