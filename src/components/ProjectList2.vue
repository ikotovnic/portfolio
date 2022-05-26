<template>
	<div class="prjcts" >
		<div class="subtitle"><p>Projects</p></div>
		<div class="list">

			<router-link style="text-decoration: none; color: inherit;" to="/folo-smartcapital" >
			<div class="prj one mylink">
				<div class="name">
					<p class="title fadeel">Smart Capital</p>
					<p class="subtitle fadeel">For the Republic of Botswana</p>
				</div>
				<div class="el folio1 scaleimage">
					<video preload="auto" autoplay="true" loop="true" muted="muted">
						<source src="../assets/textures/prj/folio-2.mp4">
					</video>
				</div>				
			</div>
			</router-link>

			<div class="prj two mylink">
				<div class="name">
					<p class="title fadeel">Visa portal</p>
					<p class="subtitle fadeel">For the Republic of Botswana</p>
				</div>
				<div class="el folio1 scaleimage">
					<video preload="auto" autoplay="true" loop="true" muted="muted">
						<source src="../assets/textures/prj/folio-1.mp4">
					</video>
				</div>				
			</div>

			<div class="prj three mylink">
				<div class="name">
					<p class="title fadeel">Nobius</p>
					<p class="subtitle fadeel">For the Republic of Botswana</p>
				</div>
				<div class="el folio1 scaleimage">
					<video preload="auto" autoplay="true" loop="true" muted="muted">
						<source src="../assets/textures/prj/folio-4.mp4">
					</video>
				</div>				
			</div>

			<div class="prj four mylink">
				<div class="name">
					<p class="title fadeel">Bio Vitrum</p>
					<p class="subtitle fadeel">For the Republic of Botswana</p>
				</div>
				<div class="el folio1 scaleimage">
					<video preload="auto" autoplay="true" loop="true" muted="muted">
						<source src="../assets/textures/prj/folio-5.mp4">
					</video>
				</div>				
			</div>

			<div class="prj five mylink">
				<div class="name">
					<p class="title fadeel">Lem Caps</p>
					<p class="subtitle fadeel">For the Republic of Botswana</p>
				</div>
				<div class="el folio3 scaleimage">
				</div>				
			</div>

			<div class="prj one mylink">
				<div class="name">
					<p class="title fadeel">Ruby</p>
					<p class="subtitle fadeel">For the Republic of Botswana</p>
				</div>
				<div class="el folio6 scaleimage">
					<video preload="auto" autoplay="true" loop="true" muted="muted">
						<source src="../assets/textures/prj/folio-6.mp4">
					</video>
				</div>				
			</div>

			<div class="prj two mylink">
				<div class="name">
					<p class="title fadeel">Bronka Group</p>
					<p class="subtitle fadeel">For the Republic of Botswana</p>
				</div>
				<div class="el folio9 scaleimage">
				</div>				
			</div>

			<div class="prj three mylink">
				<div class="name">
					<p class="title fadeel">Atlantis Hotel</p>
					<p class="subtitle fadeel">For the Republic of Botswana</p>
				</div>
				<div class="el folio11 scaleimage">
				</div>				
			</div>

			<div class="prj four mylink">
				<div class="name">
					<p class="title fadeel">Pantes</p>
					<p class="subtitle fadeel">For the Republic of Botswana</p>
				</div>
				<div class="el folio16 scaleimage">
				</div>				
			</div>

			<div class="prj five mylink">
				<div class="name">
					<p class="title fadeel">Atmospherica</p>
					<p class="subtitle fadeel">For the Republic of Botswana</p>
				</div>
				<div class="el folio15 scaleimage">
				</div>				
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
	.prjcts{
		position: relative;
		display: flex;
		flex-direction: column;
		margin:  var(--main-page-pad);
	}
	.prjcts .subtitle{
		font-family: Montserrat;
		font-style: normal;
		font-weight: lighter;
		font-size: 18px;
		line-height: 22px;
		color: #FFFFFF;
	}
	.list{
		display: flex;
		flex-direction: column;
		overflow: hidden;
		align-items: center;
	}
	.prj {
		display: flex;
		width: 100%;
	}
	.name{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
/* porojects */
	.one{
		text-align: right;
		flex-direction: row;		
		justify-content: space-between;
	}
	.one .name{
		width: 45%;
	}
	.one .el{
		width: 40vw;
		height: 40vw;
	}
	.two{
		text-align: left;
		flex-direction: row-reverse;
		justify-content: end;
		margin-top: -10%;
	}
	.two .name{
		margin-top: 10%;
	}
	.two .el{
		width: 24vw;
		height: 24vw;
	}
	.three{
		text-align: right;
		flex-direction: row;		
		justify-content: space-between;
		margin-top: -4%;
	}
	.three .name{
		width: 45%;
	}
	.three .el{
		width: 40vw;
		height: 40vw;
	}
	.four{
		text-align: left;
		flex-direction: row-reverse;
		justify-content: space-between;
		margin-top: -10%;
	}
	.four .name{
		width: 30%;
	}
	.four .el{
		width: 50vw;
		height: 50vw;
	}
	.five{
		text-align: left;
		flex-direction: row;
		justify-content: space-between;
		margin-top: -10%;
	}
	.five .name{
		margin-top: 10%;
	}
	.five .el{
		width: 24vw;
		height: 24vw;
	}

	.title{
		font-family: Goblin One;
		font-style: normal;
		font-weight: normal;
		font-size: 5vw;
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
		margin: 3%;
	}
	.el:hover{
	}


	/*prject list*/


	.folio1{
		background:url(../assets/textures/prj/folio-1.jpg) 50% 50% no-repeat;
		background-size: 100% 100%;
	}
	.folio2{
		background:url(../assets/textures/prj/folio-2.jpg) 50% 50% no-repeat;
		background-size: 100% 100%;
	}
	.folio3{
		background:url(../assets/textures/prj/folio-3.jpg) 50% 50% no-repeat;
		background-size: 100% 100%;
	}
	.folio4{
		background:url(../assets/textures/prj/folio-4.jpg) 50% 50% no-repeat;
		background-size: 100% 100%;
	}
	.folio5{
		background:url(../assets/textures/prj/folio-5.jpg) 50% 50% no-repeat;
		background-size: 100% 100%;
	}
	.folio6{
		background:url(../assets/textures/prj/folio-6.jpg) 50% 50% no-repeat;
		background-size: 100% 100%;
	}
	.folio7{
		background:url(../assets/textures/prj/folio-7.jpg) 50% 50% no-repeat;
		background-size: 100% 100%;
	}
	.folio8{
		background:url(../assets/textures/prj/folio-8.jpg) 50% 50% no-repeat;
		background-size: 100% 100%;
	}
	.folio9{
		background:url(../assets/textures/prj/folio-9.jpg) 50% 50% no-repeat;
		background-size: 100% 100%;
	}
	.folio10{
		background:url(../assets/textures/prj/folio-10.jpg) 50% 50% no-repeat;
		background-size: 100% 100%;
	}
	.folio11{
		background:url(../assets/textures/prj/folio-11.jpg) 50% 50% no-repeat;
		background-size: 100% 100%;
	}
	.folio12{
		background:url(../assets/textures/prj/folio-12.jpg) 50% 50% no-repeat;
		background-size: 100% 100%;
	}
	.folio13{
		background:url(../assets/textures/prj/folio-13.jpg) 50% 50% no-repeat;
		background-size: 100% 100%;
	}
	.folio14{
		background:url(../assets/textures/prj/folio-14.jpg) 50% 50% no-repeat;
		background-size: 100% 100%;
	}
	.folio15{
		background:url(../assets/textures/prj/folio-15.jpg) 50% 50% no-repeat;
		background-size: 100% 100%;
	}
	.folio16{
		background:url(../assets/textures/prj/folio-16.jpg) 50% 50% no-repeat;
		background-size: 100% 100%;
	}
	.folio17{
		background:url(../assets/textures/prj/folio-17.jpg) 50% 50% no-repeat;
		background-size: 100% 100%;
	}

	@media only screen and (max-width: 600px){
		.prjcts{
			margin: var(--main-page-pad-mob);
		}
		.prjcts .subtitle{
			font-size: 13px;
			line-height: 16px;
		}
		.one, .two, .three, .four, .five{
			margin-top: 0px;
		}
	}

	
</style>
