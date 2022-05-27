<template>
  <div id="app">
      <!--<link rel="stylesheet" href="https://unpkg.com/handsfree@8.5.1/build/lib/assets/handsfree.css"/>-->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Goblin+One&display=swap" rel="stylesheet">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;800&display=swap" rel="stylesheet">
      <div class="mycursor"></div>
    <!--
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    -->
    <transition name='router-anim'>
      <router-view/>
    </transition>

  </div>
</template>

<script>
  let mycursor = document.getElementsByClassName('mycursor')
  let mylink = document.getElementsByClassName('mylink')

  function myCursorFunc(event) {
    if (mycursor[0]){
      mycursor[0].style.marginTop = event.clientY + "px"
      mycursor[0].style.marginLeft = event.clientX + "px"
    }    
  }
  window.addEventListener ("mousemove", myCursorFunc, false)


  function myCursorChangeOn(){
    mycursor[0].classList.add('mycursorhover')
  }

  function myCursorChangeOff(){
    mycursor[0].classList.remove('mycursorhover')
  }

  function getAlllinks(){
    for(let i=0; i<mylink.length;i++){
      mylink[i].addEventListener("mouseover", myCursorChangeOn, false)
      mylink[i].addEventListener("mouseout", myCursorChangeOff, false)
      mylink[i].addEventListener('click', myCursorChangeOff, false)
    }
  }

  document.onreadystatechange = function(){
     if(document.readyState === 'complete'){
        getAlllinks();
     }
  }
  


</script>

<style>
  :root {
    --main-page-pad: 0px 45px 40px 125px;
    --color-accent:  #F5B40D;
    --main-page-pad-mob: 0px 10px 10px 55px;
  }
  body{
    background-color: #110F1A;
    padding: 0px;
    margin: 0px;
    cursor: none;
  }
  a{
    cursor: none;
  }

  .fadeel{
    transition: all 0.8s;
  }
  .handsfree-debugger{
    display: none;
  }
  .router-anim-enter-active{
    animation: coming 1.5s;
    animation-delay: 1.5s;
    opacity: 0;
    transform: scale(0.9);
  }
  .router-anim-leave-active{
    animation: going 0.5s;
  }

  @keyframes going {
    from {
      transform: scale(1);
    }
    to{
      opacity: 0;
      transform: scale(0.9);
    }
  }

  @keyframes coming {
    from {
      opacity: 1;
      transform: scale(0.9);
    }
    to{
      transform: translateX(0px);
      opacity: 1;
      transform: scale(1);
    }
  }

  /* Mycursor */
  .mycursor{
    width: 10px;
    height: 10px;
    position: fixed;
    margin-left: 0px;
    margin-top: 0px;
    background-color: var(--color-accent);
    border-radius: 50%;
    z-index: 999;
    transition: transform 0.5s;
    pointer-events: none;
  }

  .mycursorhover{
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: stretch;
    animation-play-state: running;
  }

  @keyframes stretch {
    0% {
      transform: scale(.7);
    }
    100% {
      transform: scale(2.5);
    }
  }
</style>
