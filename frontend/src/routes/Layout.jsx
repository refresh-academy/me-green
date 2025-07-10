import { Link, Outlet } from 'react-router'

const Layout = () => {
  return (
   <html lang="it">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MeGreen - Homepage</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body
    class="bg-gradient-to-b from-sky-300 to-green-100 min-h-screen flex flex-col items-center justify-center text-center font-sans text-gray-800"
  >
    
    <div class="absolute top-4 left-4 flex items-center space-x-2">
      <img src="" />
    </div>

    <a class="absolute left-12 top-10" href="#chisiamo">Chi siamo?</a>
    <Outlet/>

    <img
      src="Go Green - Wavy Tree.png"
      alt="Albero basso sinistra"
      class="h-32 md:h-40 mb-2 ml-4 opacity-60 absolute bottom-0 left-0 z-0"
    />

    <div class="absolute bottom-0 right-0 z-50">
      <img
        src="Go Green - Forest.png"
        alt="Albero basso sinistra"
        class="h-32 md:h-40 mb-0 ml-4 opacity-60"
      />
    </div>

    
    <div
      class="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-green-300 to-transparent z-0"
    >
      
    </div>

    
    
    <div class="bg-[url(terra.svg)] w-full h-20 absolute bottom-0 bg-cover z-25"></div>
  </body>
</html>
  )
}
export default Layout