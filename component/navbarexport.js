let navbar=()=>{
    return `   <div id="nav1">
    <a id="logo" href="">
      <img src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg" alt="">
    </a>

  <input  type="text" placeholder="Search for intineraries, destination, hotels or activites">
</div>
<div id="nav2">
  <span id="tooltip">
      <p>Inspiration <i id="fa-solid fa-caret-down"></i></p>
      

      <div id="tooltip-popup">
         <a href="#"><p>Visit Dubai</p></a>
        <a  href="#"> <p>Beaches</p></a>
        <a  href="#"> <p>Mountains</p></a>
        <a  href="#"><p>Explore More</p></a>
      </div>
  </span>

  <span>
      <p>Forum</p>
  </span>

  <span>
      <p>Package</p>
  </span>

  <span id="tooltip">
      <p>Publish Trip <i id="fa-solid fa-caret-down"></i></p>

      <div id="tooltip-popup">
          <a href="#"><p>Create New</p></a>
        
      </div>
  </span>

  <span>
      <p>Sign in</p>
  </span>
</div>`
}
export { navbar};