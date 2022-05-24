<template>
 <div class="content">
    <div class="cover ">
        <div class="coverimg">
            <video preload="auto" autoplay="true" loop="true" muted="muted">
                <source src="../assets/textures/prj/folio-2.mp4">
            </video>
        </div>
        <div class="covertitle">
            <div class="left">
                <div class="tags"><p>ui/ux</p><p>3d</p><p>motion</p></div>
                <div class="text">smart<br>capital</div>
            </div>
            <div class="center">
                <div class="date"><p>11</p><p>/</p><p>05</p><p>/</p><p>22</p></div>
                <div class="scroll1"></div>
            </div>
            <div class="right">
                <div class="visit">visit site</div>
                <div class="description">
                    Implementation of ERP, CRM, CRM, HR and BI systems, automation of marketing and sales departments
                </div>
            </div>
        </div>
    </div>

    <div class="textblock fadeel">
        <div class="left">
            <p class="subtitle">About</p>
            <p class="text">
                Implementation of ERP, CRM, CRM, HR and BI systems, automation of marketing and sales departments, financial planning and budgeting systems, as well as provide mobile and web application development services
            </p>
        </div>
    </div>

    <div class="blockimgcenter fadeel">
        <img loading="lazy" src="../assets/textures/prj/smartcapital/layout1.jpg">
    </div>

    <div class="imgfullsrc fadeel">
        <img loading="lazy" src="../assets/textures/prj/smartcapital/2.jpg">
    </div>

    <div class="videofullsrc fadeel">
        <video preload="auto" loop="true" muted="muted" autoplay="true" id="element">
            <source src="../assets/textures/prj/smartcapital/2.mp4">
        </video>
    </div>

    <router-link style="text-decoration: none; color: inherit;" to="/folo-smartcapital" >
        <div class="nextprj">
            <div class="name">
                <p class="subtitle fadeel">Next project</p>
                <p class="title fadeel">Visa portal</p>                
            </div>
            <div class="el folio1 fadeel">
                <video preload="auto" autoplay="true" loop="true" muted="muted">
                    <source src="../assets/textures/prj/folio-1.mp4">
                </video>
            </div>
        </div>
    </router-link>


 </div>
</template>

<script>
    let fadeel = document.getElementsByClassName('fadeel')
    let hi = window.innerHeight
    function fadeelfunc(){
        for (let i=0; i<fadeel.length; i++){
            let pos = fadeel[i].getBoundingClientRect()

            if ( ( pos.top>(hi*0.2)||pos.bottom>(hi*0.2) ) && ( pos.top<(hi*0.8) || pos.bottom<(hi*0.8) ) ) {
                fadeel[i].style.opacity = '1'
            } else{fadeel[i].style.opacity = '0'}
        }
    }
    window.addEventListener ("scroll", fadeelfunc)
</script>

<style scoped>
    video{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    body{
        background-color: #181432;
    }
    img{
        width: 100%;
    }
    .cover{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        height: 80vh;
    }
    .content{
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: #181432;
    }
    .coverimg{
        margin-left: 10vw;
        margin-right: 10vw;
        height: 80vh;
        background: url(../assets/textures/folio-1-sc.jpg) 50% 50% no-repeat;
        background-size: cover;
        position: absolute;
    }
    .covertitle{
        display: flex;
        flex-direction: row;
        position: relative;
        justify-content: space-between;
        margin-left: 5vw;
        margin-right: 5vw;
        color: #fff;
        font-family: montserrat;
        margin-bottom: -50px;
        height: 50%;
    }

    .covertitle .left{
        width: 30%;
        font-weight: 800;
        justify-content: space-between;
        display: flex;
        flex-direction: column;
    }
    .covertitle .left .text{
        font-size: 110px;
        line-height: 85%;
        text-transform: uppercase;
        font-weight: 800;
    }
    .covertitle .left .tags{
        display: flex;
        flex-direction: row;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
    }
    .subtitle{
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #fff;
        font-family: montserrat;
    }
    .vertical{
        transform:rotate(90deg);
        -ms-transform:rotate(90deg); /* IE 9 */
        -moz-transform:rotate(90deg); /* Firefox */
        -webkit-transform:rotate(90deg); /* Safari and Chrome */
        -o-transform:rotate(90deg); /* Opera */
        margin-left: -100%;
        margin-top: 200%;
    }

    .covertitle .left .tags p{
        margin-right: 30px;
    }
    .covertitle .center{
        justify-content: space-between;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .covertitle .center .date{
        display: flex;
        flex-direction: row;
    }
    .covertitle .center .date p{
        margin-right: 15px;
    }
    .covertitle .center .scroll1{
        background: url("../assets/textures/scroll1.svg") no-repeat center center;
        width: 80px;
        height: 80px;
        margin: 15px;
         -webkit-animation: rotate 6s linear infinite;
        animation: rotate 6s linear infinite;
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
    .covertitle .right{
        justify-content: space-between;
        display: flex;
        flex-direction: column;
        width: 10%;
    }

    /*textblock*/
    .textblock{
        display: flex;
        flex-direction: row;
        margin-top: 200px;
        justify-content: space-between;
        margin-left: 5vw;
    }
    .textblock .left{
        width: 30%;
    }
    .text{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 2vw;
        line-height: 180%;
        color: #FFFFFF;
    }
    .textblock .right{
        width: 70%;
        background-size: contain;
    }

/*blockimgcenter*/
    .blockimgcenter{
        display: flex;
        flex-direction: row;
        margin-left: 5vw;
        margin-right: 5vw;
        margin-top: 100px;
        justify-content: space-between;
    }
    .blockimgcenter .right{
        width: 60%;
        background-size: contain;
    }
    .blockimgcenter .left{
        width: 30%;
    }
/* image fullscreen */
    .imgfullsrc{
        margin: 100px 0px 100px 0px;
        width: 100%;
        height: auto;
    }

/* NextPrj */
    .nextprj{
        height: 100vh;
        width: 100%;
        background-image: url(../assets/textures/prj/next-prj-2.svg);
        background-repeat: repeat-x;
        background-position: center;
        display: flex;
        width: 100%;
        overflow: hidden;
        justify-content: space-between;
        align-items: center;

        animation: mymove 10s infinite;
    }

    @keyframes mymove {
    0 {
        background-position: 0% center;
    }
    100% {
        background-position: -500% center; /* анимируем свойство background-position */
    }
}

    .title{
        font-family: Goblin One;
        font-style: normal;
        font-weight: normal;
        font-size: 8vw;
        line-height: 5vw;
        color: #fff;
        position: relative;
        margin: 0;
    }

    .el{
        overflow: hidden;
        transition: all 1s;
        background-size: cover;
        clip-path: circle(50% at 50% 50%);
        width: 40vw;
        height: 40vw;
        margin-right: -20%;
    }

    .name{
        width: 75%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 5vw;
    }
    .nextprj .subtitle{
        font-family: Montserrat;
        font-style: normal;
        font-weight: lighter;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
        margin-bottom: 40px;
    }

</style>
