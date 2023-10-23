import BLOG from '@/blog.config'
import Link from 'next/link'
import React from 'react'

const Logo = props => {
  const { siteInfo } = props
  const formattedTitle = siteInfo?.title?.replace(' ', '\n')
return (
    <Link href='/' passHref>
      <a className='flex flex-col justify-center items-center cursor-pointer'>
        <img
          src="/jxlogo2.png" // 替换成您的Logo图片路径
          alt={formattedTitle || BLOG.TITLE}
          className='w-110 h-33' // 根据需要设置Logo图片的宽度和高度
        />
      </a>
    </Link>
  )
}
export default Logo
//siteInfo?.title
