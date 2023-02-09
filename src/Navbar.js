import React from 'react'

const Navbar = () => {
  return (
    <div>

<nav>
<img class="logo" src="logo.png" alt="Logo" />
<input type="checkbox" id="new-toggle" />
<label for="new-toggle" class="icon-burger">
<div class="line"></div> 
<div class="line"></div> 
<div class="line"></div>
</label>

 <ul class="navlist"> 
     <li class="navlink"><a href="">Home &#9662;</a>
     </li>
 
     <li class="navlink"><a href="">Pages &#9662;</a>
         <ul class="dropdown">
             <li><a href="#">About Us &#9662;</a></li>
             <li><a href="#">Services &#9662;</a></li>
             <li><a href="#">Pricing &#9662;</a></li>
             <li><a href="#">Mission &#9662;</a></li>
             <li><a href="#">Team &#9662;</a></li>
             <li><a href="#">Awards &#9662;</a></li>
             <li><a href="#">Why choosen Us &#9662;</a></li>
             <li><a href="#">Comming soon &#9662;</a></li>
             <li><a href="#">Tetimonials &#9662;</a></li>
             <li><a href="#">404 &#9662;</a></li>
             <li><a href="#">F.A.Q &#9662;</a></li>
             <li><a href="#">Other &#9662;</a></li>
         </ul>
     </li>
     <li class="navlink"><a href="">Projects &#9662;</a>
         <ul class="dropdown">
             <li><a href="#">Portfolio List Metro</a></li>
             <li><a href="#">Portfolio List Masonry</a></li>
             <li><a href="#">Portfolio List Grid</a></li>
             <li><a href="#">Portfolio List Mosaic</a></li>
             <li><a href="#">Portfolio Details &#9662;</a></li>
             <li><a href="#">Case Studies &#9662;</a></li>
         </ul>
     </li>
     <li class="navlink"><a href="">Blog &#9662;</a>
         <ul class="dropdown">
             <li><a href="#">Blog Centered </a></li>
             <li><a href="#">Blog Grid </a></li>
             <li><a href="#">Blog Metro </a></li>
             <li><a href="#">Blog Classic </a></li>
             <li><a href="#">Post Details </a></li>
            
         </ul></li>
     <li class="navlink"><a href="">Contact &#9662;</a>
         <ul class="dropdown">
             <li><a href="#">Contact Multi Locations</a></li>
             <li><a href="#">Contact Simple</a></li>
             <li><a href="#">Contact Sidebar</a></li>
             <li><a href="#">Contact Modern</a></li>
             <li><a href="#">Contact Modern</a></li>
           
         </ul></li>
     <li class="navlink"><button class="btn-get"><a href="">Get Started</a></button></li>
 </ul>
 
 
</nav>


    </div>
  )
}

export default Navbar