import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ArticleList = () => {
  return (
    <div>
      <article>
        <Link href="#">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=2"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div>
          <Link href="#">Technology</Link>
          <Link href="">Next.jsの勉強中</Link>
          <p>By shotacode Published on 2023/10/29</p>
          <Link href="#">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quisquam tempore animi pariatur repellendus ex suscipit beatae fuga? Voluptate repellat dolore eveniet rerum, aut aspernatur officia ut repellendus voluptatibus eaque.
          </Link>
          <Link href="#">続きを読む</Link>
        </div>
      </article>
    </div>
  )
}

export default ArticleList
