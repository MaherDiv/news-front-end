import React from 'react';
import Navbar from '../navbar'
import '../Pages/home.css'

function Home() {
  return (
<div>
<Navbar/>
<div class="navbars">
       <div class="menu">
         <h3 class="logo">الجزيرة<span>نت</span></h3>
       </div>
</div>
<div class="container">
     

     <div class="main-container">
       <div class="main">
         <header>
           <div class="overlay">
             <div class="inner">
               <h2 class="title"> تصفح أخر الأخبار العاجلة</h2>
               <p>
                 الجزيرة هي سبكة لنقل الخبار العاجلة و نيسةب يمنبةسيب سيبمنةيسب  سيبمنةيسب يب
               </p>
               <button class="btn">تصفح الأخر </button>
             </div>
           </div>
         </header>
       </div>

       <div class="shadow one"></div>
       <div class="shadow two"></div>
     </div>

     
   </div>
</div>
  );

}

export default Home;