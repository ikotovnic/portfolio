<template>
  <div class="about">
    <div class="content">
      <div class="raw1">
        <div class="img face1" id="face1"></div>
        <div class="img face2" id="face2"></div>
        <div class="img face3" id="face3"></div>
        <div class="img face4" id="face4"></div>
        <div class="img face5" id="face5"></div>
      </div> 
      <div class="raw2 fadeel">
        <div class="subtitle "><p>About</p></div>
        <div class="title">
          <div class="cityimg scaleimage"></div>
          <p>My name is Ilya and I’am a web-designer from Saint-Petersburg with 10 plus years experience</p>
        </div>
        <div class="text">
          <div class="linkcv customhover"><a href=""> Open CV</a></div>
          <div class="small "><p>my tools are also is protyping, cgi, print design, typography, css, html, javaScript</p></div>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
  export default {
    name: 'AboutMe',
    props: {
    },
    methods:{
      facemain: function(){
        let face1 = document.getElementById('face1')
        let face2 = document.getElementById('face2')
        let face3 = document.getElementById('face3')
        let face4 = document.getElementById('face4')
        let face5 = document.getElementById('face5')
        let scaleimage = document.getElementsByClassName('scaleimage')
        let fadeel = document.getElementsByClassName('fadeel')

        var onScrollHandler = function() {
          let myimage = document.getElementById('face1')
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          let hi = window.innerHeight

          /*
          let contDiv = document.getElementsByClassName('contact')
          let container = document.getElementById('container')  
          function blurEl(){
            if (scrollTop>hi&& scrollTop<(contDiv[0].offsetTop-contDiv[0].clientHeight/2)){
                container.style.webkitFilter = "blur(10px)"
            } else {container.style.webkitFilter = "blur(0px)"}
          }
          blurEl()
          */

          function scaleel(){
            for (let i=0; i<scaleimage.length; i++){
              let pos = scaleimage[i].getBoundingClientRect()
              let scale = 1 - (pos.height/2 + pos.top ) * 0.001;
              scaleimage[i].style.transition = "all 1s"
              if (scale>0.15&&scale<0.85){
                scaleimage[i].style.clipPath = 'circle(50% at 50% 50%)'
              } else{scaleimage[i].style.clipPath = 'circle(0% at 50% 50%)'}
            }
          }

          function fadeelfunc(){
            for (let i=0; i<fadeel.length; i++){
              let pos = fadeel[i].getBoundingClientRect()
                            
              if ( ( pos.top>(hi*0.2)||pos.bottom>(hi*0.2) ) && ( pos.top<(hi*0.8) || pos.bottom<(hi*0.8) ) ) {
                fadeel[i].style.opacity = '1'
              } else{fadeel[i].style.opacity = '0'}
            }
          }

          function changebg(){
            if(myimage){
              if (scrollTop < myimage.offsetTop-200) {
                 face1.style.opacity = 1;
                 face2.style.opacity = 0;
                 face3.style.opacity = 0;
                 face4.style.opacity = 0;
                 face5.style.opacity = 0;
              }
              if (scrollTop > myimage.offsetTop-200) {
                 face1.style.opacity = 0;
                 face2.style.opacity = 1;
                 face3.style.opacity = 0;
                 face4.style.opacity = 0;
                 face5.style.opacity = 0;
              }
              if (scrollTop > myimage.offsetTop-100) {
                 face1.style.opacity = 0;
                 face2.style.opacity = 0;
                 face3.style.opacity = 1;
                 face4.style.opacity = 0;
                 face5.style.opacity = 0;
              }
              if (scrollTop > myimage.offsetTop) {
                 face1.style.opacity = 0;
                 face2.style.opacity = 0;
                 face3.style.opacity = 0;
                 face4.style.opacity = 1;
                 face5.style.opacity = 0;
              }
              if (scrollTop > myimage.offsetTop+100) {
                 face1.style.opacity = 0;
                 face2.style.opacity = 0;
                 face3.style.opacity = 0;
                 face4.style.opacity = 0;
                 face5.style.opacity = 1;
              }
            }
          }
          changebg()
          scaleel()
          fadeelfunc()

        }
        window.addEventListener ("scroll", onScrollHandler)
      }
    },
    mounted () {
      this.facemain()
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .about{
    display: flex;
    flex-direction: column;
    margin: 200px 12% 0px 0px;
  }

.about a{
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #F5B40D;
  text-decoration: none;
}

.about .raw2 .subtitle{
  font-family: Montserrat;
  font-style: normal;
  font-weight: lighter;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
  margin: 0px 0px 100px 0px;
}

.about .content{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
 .raw1, .raw2, .raw3 { 
  margin: 25px;
}

.about .raw1{
  z-index: -1;
  height: 82vh;
}
.about .raw2{
  margin-top: 0px;
  width: 55%;
}

.about .text{
  display: flex;
  flex-direction: row;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 160%;
  color: #FFFFFF;
  justify-content: space-between;
  margin-top: 100px;
  z-index: 1;
  position: relative;
}

.about .text .small{
  width: 300px;
}

.about .content .img{
  width: 44vh;
  height: 100vh;
  background-size: cover;
  position: absolute;
}

.about .content .face1{
  background-image: url(../assets/textures/face/1.jpg);
}
.about .content .face2{
  background-image: url(../assets/textures/face/2.jpg);
}
.about .content .face3{
  background-image: url(../assets/textures/face/3.jpg);
}
.about .content .face4{
  background-image: url(../assets/textures/face/4.jpg);
}
.about .content .face5{
  background-image: url(../assets/textures/face/5.jpg);
}

.about .content .raw2 .title p{
  font-family: Goblin One;
  font-style: normal;
  font-weight: normal;
  font-size: 6vw;
  line-height: 8vw;
  color: #fff;
  position: relative;
}
.cityimg{
  width: 15vw;
  height: 15vw;
  background: url(../assets/textures/city/city-1.jpg);
  background-size: cover;
  border-radius:50%;
  position: absolute;
  margin-top: 41%;
  margin-left: 31%;
}

</style>
