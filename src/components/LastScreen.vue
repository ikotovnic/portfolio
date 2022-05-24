<template>
	<div class="contact ">
		<div class="container">
			<a href="#"><div class="scroll2 customhover"></div></a>
		</div >
			<div class="title fadeel">
				<div class="keep"><p>make</p></div>
				<div class="smile"><p>good</p></div>
			</div>
		<div class="text">
			<div><p>Contact me</p></div>
			<div><p>Telegram</p></div>
			<div><p>Whatsapp</p></div>
			<div><p>Instagram</p></div>
		</div>
	</div>
</template>


<script>
	
</script>


<style scoped>
	.contact{
	margin: var(--main-page-pad);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 90vh;
	}

	.contact .title{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	}

	.contact .title p{
	font-family: 'Goblin One';
	font-style: normal;
	font-weight: bold;
	font-size: 10vw;
	color: #fff;
	margin: 0;
	}

	.contact .title .smile{
	position: relative;
	z-index: 100;
	}

	.contact .container{
	display: flex;
	justify-content: center;
	z-index: 100;
	position: relative;
	}
	.contact .container .scroll2{
	background: url("../assets/textures/scroll2.svg") no-repeat center center;
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

	.contact .text{
	width: 100%;
	display: flex;
	justify-content: center;
	}

	.contact .text p{
	font-family: Montserrat;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 169.5%;
	/* or 27px */
	text-align: center;
	color: #FFFFFF;
	margin: 20px;
	}
</style>
