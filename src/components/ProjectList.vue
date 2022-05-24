<template>
	<div class="prjcts" >
		<div class="subtitle"><p>Projects</p></div>
		<div class="list">
			<div class="row allignmid outofborders">
				<div class="el mid scaleimage folio1">
					<video preload="auto" autoplay="true" loop="true" muted="muted">
						<source src="../assets/textures/prj/folio-1.mp4">
					</video>
				</div>
				<router-link to="/folo-smartcapital"><div class="el big scaleimage folio2">
					<video preload="auto" autoplay="true" loop="true" muted="muted">
						<source src="../assets/textures/prj/folio-2.mp4">
					</video>
				</div></router-link> 
			</div>
			<div class="row alligntop outofborders">
				<div class="el lit scaleimage folio3"></div>
				<div class="el lit eltopmargin scaleimage folio4">
					<video preload="auto" autoplay="true" loop="true" muted="muted">
						<source src="../assets/textures/prj/folio-6.mp4">
					</video>
				</div>
				<div class="el mid elbotmargin scaleimage folio5">
					<video preload="auto" autoplay="true" loop="true" muted="muted">
						<source src="../assets/textures/prj/folio-5.mp4">
					</video>					
				</div>
			</div>
			<div class="row allignmid inborders widthmid">
				<div class="el mid eltopmarginfar scaleimage folio6">
					<video preload="auto" autoplay="true" loop="true" muted="muted">
						<source src="../assets/textures/prj/folio-4.mp4">
					</video>
				</div>
				<div class="el lit elbotmargin scaleimage folio7"></div>
			</div>
			<div class="row allignbot outofborders">
				<div class="el big scaleimage folio8"></div>
				<div class="el mid scaleimage folio10">
					<video preload="auto" autoplay="true" loop="true" muted="muted">
						<source src="../assets/textures/prj/folio-10.mp4">
					</video>
				</div>
			</div>
			<div class="row allignbot outofborders">
				<router-link to="/folo-masterprof">
					<div class="el lit scaleimage folio9"></div>
				</router-link> 
				<div class="el mid eltopmargin scaleimage folio11"></div>
				<div class="el lit elbotmargin scaleimage folio12"></div>
			</div>
			<div class="row allignmid outofborders">
				<div class="el mid scaleimage folio13"></div>
				<div class="el big scaleimage folio14">
					<video preload="auto" autoplay="true" loop="true" muted="muted">
						<source src="../assets/textures/prj/folio-14.mp4">
					</video>
				</div>
			</div>
			<div class="row alligntop outofborders">
				<div class="el lit scaleimage folio15"></div>
				<div class="el lit eltopmargin scaleimage folio16"></div>
				<div class="el mid elbotmargin scaleimage folio17"></div>
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
		margin: 200px 0px 0px 0px;
	}
	.prjcts .subtitle{
		font-family: Montserrat;
		font-style: normal;
		font-weight: lighter;
		font-size: 18px;
		line-height: 22px;
		color: #FFFFFF;
		margin:  var(--main-page-pad);
	}
	.list{
		display: flex;
		flex-direction: column;
		overflow: hidden;
		align-items: center;
	}
	.row{
		display: flex;
		flex-direction: row;
	}
	.outofborders{
		justify-content: space-between;
		width: 106%;
	}
	.inborders{
		justify-content: space-around;
	}

	/*row width*/
	.widthmid{
		width: 80%;
	}
	/*allign items in row*/
	.aligntop{
		align-items: flex-start;

	}
	.allignmid{
		align-items: center;

	}
	.allignbot{
		align-items: flex-end;
	}
	.el{
		overflow: hidden;
		transition: all 1s;
		background-size: cover;
		clip-path: circle(50% at 50% 50%);
	}
	.el:hover{
	}
	/*size of el*/
	.mid{
		width: 45vw;
		height: 45vw;
		background-color: red;
	}
	.big{
		width: 58vw;
		height: 58vw;
		background-color: green;
	}
	.lit{
		width: 28vw;
		height: 28vw;
		background-color: blue;
	}
	
	/*vertical place el*/
	.eltopmargin{
		margin-top: -5%;
	}
	.elbotmargin{
		margin-top: 5%;
	}
	.eltopmarginfar{
		margin-top: -30%;
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

	
</style>
