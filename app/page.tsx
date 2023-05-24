import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className='flex border border-blue-500'>
        <div className='basis-3/4'>
        Main Content
        </div>
        <div className='basis-1/4'>
          SideBar
        </div>
      </div>
      <div className= "w-50">
      <div className="flex min-h-screen space-x-56">
      <div className = "bg-red-500 m-1 w-1/5">
        <div className='bg-blue-500 p-1'>Hello</div>
      </div>

      <div className ="w-3/5 bg-red-100">
        <h1 className = "text-4xl italic underline underline-offset-4 decoration-blue-800 decoration-double ">Learning typography</h1> 
        Overidded the tw text-2xl with custom css in config file(extend theme)
        <h1 className = "text-2xl underline decoration-wavy underline-offset-4 leading-normal">Title 1</h1>
        <h2 className = "text-3xl line-through">Title 2</h2>
        <h3 className = "text-xl">Title 3</h3>
        <p className = "text-base uppercase">A regular paragraph</p>
        <p className = "text-sm truncate">Stormi is a dog. She is dark grey and has long legs. Her eyes are expressive and are able to let her humans know what she is thinking. Her tongue is long, pink, and wet. Her long legs allow her to sprint after other dogs, people or bunnies. She can be a good dog, but also very bad. Her tail wags when happy or excited and hides between her back legs when she is bad. Stormi is a dog I love.</p>
        <p className="text-xs" > A little note</p>
        <p className = "whitespace-nowrap">Stormi is a dog. She is dark grey and has long legs. Her eyes are expressive and are able to let her humans know what she is thinking. Her tongue is long, pink, and wet. Her long legs allow her to sprint after other dogs, people or bunnies. She can be a good dog, but also very bad. Her tail wags when happy or excited and hides between her back legs when she is bad. Stormi is a dog I love.</p>

        <p className='break-words'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        
      </div>
    </div>
    </div>


    </main>
    

  )
}
