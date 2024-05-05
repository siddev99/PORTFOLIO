import Link from "next/link";


export default function Home() {


  const products = [
    {id : 1},
    {id : 2}
  ]

  return (
    <>
 <h1>Hello World</h1>
 <Link href="/blog">Blog</Link>
  {products.map((post) => (
        <li key={post.id}>
          <Link href={`/product/${post.id}`}>Product {post.id}</Link>
        </li>
      ))}
     
<h1></h1>

 </>
 
  )
}
