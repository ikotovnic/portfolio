<template>
  <div>
    <div class="maintitle" id="TitleList">
      <div>
        <div class="text two" id="maintitle2">
          <p><br>Good<br>Please,<br>allow<br>camera<br>access</p>
        </div>
        <div class="text three" id="maintitle3">
          <p>Control<br>balloon<br>with<br>your<br>head,<br><a href="#" v-on:click="handsfree.stop()">to stop</a><br>click here</p>
        </div>
        <div class="text one" id="maintitle4">
          <p>Oops!<br>something<br>went<br>wrong<br>to refresh<br>page<br><a href="#">click here</a></p>
        </div>
        <div class="text one" id="maintitle1">
          <p>Hello!<br>please<br> <a href="#" v-on:click="handcam()">click here</a> <br>to explore<br>balloon<br>camera<br>control</p>
        </div>
      </div>
      <div class="scroll1container">
        <div class="scroll1"></div>
      </div>
    </div>

    <div id="container" class="container"></div>
    <div class="textureface" ></div>
  </div>
</template>

<script>
  import * as Three from 'three'
  import Handsfree from 'handsfree'
  import { TweenMax } from "gsap"

  export default {
    name: 'FirstScreen',
    data () {
      return {
        camera: null,
        scene: null,
        renderer: null,
        mesh: null,
        meshBaloon: null,
        loader: null,
        mouseX: 0,
        mouseY: 0,
        rot:0,
        handsfree: null,
        movex: 0,
        movey: 0,
        x:true,
        maintitle1: null,
        maintitle2: null,
        maintitle3: null,
        maintitle4: null,
        titleList: null,
        move: null,
        scrollTop: null,
        contDiv: null
      }
    },

    methods: {

      changeTitle: function(a,b,c,d){
        this.titleList = document.getElementById('TitleList')
        this.maintitle1 = document.getElementById('maintitle1')
        this.maintitle2 = document.getElementById('maintitle2')
        this.maintitle3 = document.getElementById('maintitle3')
        this.maintitle4 = document.getElementById('maintitle4')
        this.maintitle1.style.opacity = a + ""
        this.maintitle2.style.opacity = b + ""
        this.maintitle3.style.opacity = c + ""
        this.maintitle4.style.opacity = d + ""
        if(a==1){
          setTimeout(() => this.titleList.appendChild(this.maintitle1), 1000)
        }
        if(b==1){
          setTimeout(() => this.titleList.appendChild(this.maintitle2), 1000)
        }
        if(c==1){
          setTimeout(() => this.titleList.appendChild(this.maintitle3), 1000)
        }
        if(d==1){
          setTimeout(() => this.titleList.appendChild(this.maintitle4), 1000)
        }
      },
      init: function () {
        this.contDiv = document.getElementsByClassName('contact')
        
        let container = document.getElementById('container')  
        this.camera = new Three.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 14)
        this.camera.position.z = 11;
        this.scene = new Three.Scene()
        this.scene.fog = new Three.Fog( 0x110F1A, 11, 12 );

        var lightA = new Three.AmbientLight( 0xeaeaea ); // soft white light
        this.scene.add( lightA )

        var light1 = new Three.DirectionalLight( 0xF2453A, 0.75 )
        light1.position.set( 500, 0, 0 )
        this.scene.add( light1 )

        //var light2 = new Three.DirectionalLight( 0x229AF1, 0.25 )
        //light2.position.set( -500, 0, 0 )
        //this.scene.add( light2 )

        let geometry = new Three.SphereGeometry(1, 32, 16)
        
        const texture = new Three.TextureLoader().load( 'img/smile.98038d7b.jpg' );
        // immediately use the texture for material creation
        const material = new Three.MeshStandardMaterial( { map: texture } )
        material.roughness = 0.3
        material.metalness = 0.3

        this.mesh = new Three.Mesh(geometry, material)
        this.mesh.rotation.y = 4
        this.mesh.position.x = 0
        this.mesh.position.y = 0
        this.mesh.position.z = 0
        this.mesh.rotation.x=0
        this.mesh.rotation.y=5
        this.mesh.rotation.z=0
        this.mesh.scale.x=1
        this.mesh.scale.y=1
        this.mesh.scale.x=1
        this.scene.add(this.mesh)

        this.renderer = new Three.WebGLRenderer({antialias: false, alpha: true })
        this.renderer.setSize(window.innerWidth/2, window.innerHeight/2, false)

        this.renderer.autoClear = false;
        this.renderer.setClearColor(0x000000, 0.0)
        container.appendChild(this.renderer.domElement)
        this.renderer.domElement.style.width = 100 + '%'
        this.renderer.domElement.style.height = 100 + '%'
        window.addEventListener( 'resize', onWindowResize, false )

        let a = this.camera
        let b = this.renderer
        function onWindowResize() {
          a.aspect = window.innerWidth / window.innerHeight
          a.updateProjectionMatrix()
          b.setSize( window.innerWidth/2, window.innerHeight/2, false)
        }

        this.changeTitle(1,0,0,0)
      },
      handcam: function() {
        this.changeTitle(0,1,0,0)
        this.handsfree = new Handsfree({
          weboji: {
            // Whether the model is enabled or not
            enabled: true,
              // Custom video settings
            videoSettings: {
              // The video, canvas, or image element
              // Omit this to auto create a <VIDEO> with the webcam
              videoElement: null,

              // ID of the device to use
              // Omit this to use the system default
              deviceId: null,

              // Which camera to use on the device
              // Possible values: 'user' (front), 'environment' (back)
              facingMode: 'user',

              // Video dimensions
              idealWidth: 320,
              idealHeight: 240,
              minWidth: 240,
              maxWidth: 320,
              minHeight: 240,
              maxHeight: 240
            },
            // Thresholds needed before these are considered "activated"
            // - Ranges from 0 (not active) to 1 (fully active)
            morphs: {
              threshold: {
                smileRight: 0,
                smileLeft: 0,
                browLeftDown: 0,
                browRightDown: 0,
                browLeftUp: 0,
                browRightUp: 0,
                eyeLeftClosed: 0,
                eyeRightClosed: 0,
                mouthOpen: 0,
                mouthRound: 0,
                upperLip: 0
              }
            }
          }
        })
        //console.log(this.handsfree.model.weboji=null)
        // From inside a plugin
        this.handsfree.use('lookHandsfree', ({weboji}) => {
          if (!weboji?.rotation?.[0]) return
          // Calculate rotation
          this.rot = weboji.rotation

          //document.getElementById("xposcube").innerHTML = handPosition.x;
          //document.getElementById("yposcube").innerHTML = handPosition.y;
          //document.getElementById("zposcube").innerHTML = rot[2];
        })
        //handsfree.enablePlugins('browser');
        var constraints = { audio: false, video: { width: 1280, height: 720 } };

        navigator.mediaDevices.getUserMedia(constraints)
        .then( mediaStream => {
          console.log('camera go')
          this.changeTitle(0,0,1,0)
          this.handsfree.start()
          console.log(mediaStream)

        })
        .catch(function(err) {

          console.log('camera null')
          console.log(err)
          // обработка ошибки

        });
      },

///////////////////////////////////handsfree
      animate: function () {
        requestAnimationFrame(this.animate)
        this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        //console.log(this.mouseX, this.mouseY)
        if (this.contDiv[0] && this.scrollTop>window.innerHeight/2 && this.scrollTop<(this.contDiv[0].offsetTop-this.contDiv[0].clientHeight/2)){
          this.mesh.position.z += (-1.5-this.mesh.position.z)*0.03
        } else {this.mesh.position.z += (0 - this.mesh.position.z)*0.03}

        if (!this.rot[1]){
          this.mesh.position.x += (this.mouseX*0.01 - this.mesh.position.x) * 0.03
          this.mesh.position.y += (-this.mouseY*0.01 - this.mesh.position.y) * 0.03
          this.mesh.rotation.y += this.mouseX * 0.0001

          //this.mesh.rotation.x += this.mouseY * 0.0001
          //this.mesh.rotation.z = this.mouseX * 0.001

          //this.mesh.rotation.y += (4+ this.mouseX * 0.002 - this.mesh.rotation.y) * 0.03
          this.mesh.rotation.x += (4+ this.mouseY * 0.002 - this.mesh.rotation.x) * 0.03
          this.mesh.rotation.z += (4+ this.mouseX * 0.002 - this.mesh.rotation.z) * 0.03        
        }

        if(this.rot[1]){
          TweenMax.to(this, 1, { movex:this.rot[1], movey:-this.rot[0] })
          this.mesh.position.x = this.movex * 5;
          this.mesh.position.y = this.movey * 5;
          this.camera.position.y = -1;

          this.mesh.rotation.x += this.movey * 0.1
          this.mesh.rotation.y += this.movex * 0.1
          this.mesh.rotation.z += this.movex * 0.1
        } 
        this.renderer.render(this.scene, this.camera)
      },
      getMousePos(event){
        this.mouseX = ( event.clientX - window.innerWidth / 2 )
        this.mouseY = ( event.clientY - window.innerHeight / 2 )
      }
    },
    mounted () {
      this.init()
      this.animate()
      document.addEventListener( 'mousemove', this.getMousePos, false );
    }
  }
</script>
<style scoped>

  #container {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    pointer-events: none;
    width: 100%;
    height: 100%;
  }
  .container{
    transition: all 0.5s;
  }

  .textureface{
    position: fixed;
    display: none;
    background-image: url('../assets/textures/smile.jpg');
  }

  .maintitle{
    left: 0px;
    margin: var(--main-page-pad);
    display: flex;
    justify-content: space-between;
    height: 100vh;
    color: #fff;
    padding: 0;
  }
  .maintitle a{
    color:var(--color-accent);
    text-decoration: none;
    transition: all 1s;
  }
  a:hover{
    color: #F5610D;
  }
  .maintitle .text{
    opacity: 0;
    position: absolute;
    transition: all 1s;
  }
  .maintitle .one{
    margin-top: -9px;
  }
  .maintitle .two{
    margin-top: -1px;
  }
  .maintitle .text p{
    font-family: 'Goblin One';
    font-size: 10vh;
    font-style: normal;
    font-weight: 700;
    line-height: 13vh;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 5%;
    padding-left: var(--main-page-pad);
  }

  @-webkit-keyframes rotate {
    100% {-webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
      transform: rotate(360deg);}
  }
  @keyframes rotate {
    100% {-webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
      transform: rotate(360deg);}
  }
  .maintitle .scroll1container{
    display: flex;
    align-items: end;
    padding-bottom: 5%;
  }
  .maintitle .scroll1{
    background: url("../assets/textures/scroll1.svg") no-repeat center center;
    width: 80px;
    height: 80px;
    margin: 15px;
     -webkit-animation: rotate 6s linear infinite;
    animation: rotate 6s linear infinite;
  }

    @media only screen and (max-width: 600px){
      .maintitle{
        margin: var(--main-page-pad-mob);
      }
      .maintitle .text p{
        font-size: 5vh;
        line-height: 14vh;
      }

    }
</style>
