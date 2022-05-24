<template>
 <div class="content">
    <div class="cover">
        <div class="coverimg">
            <video preload="auto" autoplay="true" loop="true" muted="muted">
                <source src="../assets/textures/prj/folio-10.mp4">
            </video>
        </div>
        <div class="covertitle">
            <div class="left">
                <div class="tags"><p>ui/ux</p><p>cgi</p><p>motion</p></div>
                <div class="text">masterprof</div>
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
    <div class="second">
        <div class="left">
            <p>About</p>
            <p>
                Implementation of ERP, CRM, CRM, HR and BI systems, automation of marketing and sales departments, financial planning and budgeting systems, as well as provide mobile and web application development services
            </p>
        </div>
        <div class="right">
            
        </div>
    </div>
 </div>
</template>

<script> 
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
        width: 80vw;
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
        width: 90vw;
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

    /*second*/
    .second{
        display: flex;
        flex-direction: row;
        margin-top: 275px;
        padding-left: 5vw;
    }
    .second .left{
        width: 30%;
    }
    .second .left p{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 2vw;
        line-height: 180%;
        color: #FFFFFF;
    }
    .second .right{
        width: 75%;
        background: url(../assets/textures/prj/smartcapital/1.jpg) 50% 50% no-repeat;
        background-size: contain;
    }
</style>
