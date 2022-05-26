<template>
	<div class="header">
		<div class="logo"><p>I</p></div>
		<div class="menu">
			<div><p>Contact</p></div>
			<div><p>Projects</p></div>
			<div><p>About</p></div>
		</div>
	</div>
</template>

<script></script>

<style>
	.header{
		width: 100px;
		position: fixed;
		display: flex;
		height: 100vh;
		flex-flow: column;
		justify-content: space-between;
		z-index: 1000;
	}
	.header .logo{
		margin-top: 20px;
	}

	.header .logo p{
		width: 100px;
		text-align: center;
		font-family: Montserrat;
		font-size: 50px;
		font-style: normal;
		font-weight: 700;
		letter-spacing: 0em;
		margin: 0px;
		color: #fff;
	}

	.menu{
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0px;
		margin-bottom: 40px;
		
		transform:rotate(-90deg);
		-ms-transform:rotate(-90deg); /* IE 9 */
		-moz-transform:rotate(-90deg); /* Firefox */
		-webkit-transform:rotate(-90deg); /* Safari and Chrome */
		-o-transform:rotate(-90deg); /* Opera */
	}
	.menu p{
		color: var(--color-accent);
		font-family: Montserrat;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 37px;
		letter-spacing: 0em;
		text-align: center;
		margin: 0px 0px 0px 30px;
	}

	@media only screen and (max-width: 600px){
		.header{
			width: 40px;
		}
		.header .logo{
			margin-top: 10px;
		}

		.header .logo p{
			width: 40px;
			text-align: center;
			font-family: Montserrat;
			font-size: 30px;
			font-style: normal;
			font-weight: 700;
			letter-spacing: 0em;
			margin: 0px;
			color: #fff;
		}
		.menu{
			margin-bottom: 0px;
		}
		.menu p{
			font-size: 12px;
		}
	}
</style>
