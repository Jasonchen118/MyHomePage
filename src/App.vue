<template>
	<div id="app">
		<div id="SearchBoxForBaiduAndBiying">
			<form action="https://www.baidu.com/s" method="get" target="_blank" id="SearchBoxForBaidu">
				<!-- <img :src="imgUrl" alt="" > -->
				<input type="text" autocomplete="off" name="wd" placeholder="输入你要搜索的内容" class="search-input"><br><br>
				<abbr title="使用百度搜索引擎"><input type="submit" class="search-button" value="百度一下" ></abbr>
			</form>
			<form action="https://cn.bing.com/search" target="_blank" method="get" id="SearchBoxForBiying">
				
				<input type="text" autocomplete="off" class="search-input" name="q" placeholder="输入你要搜索的内容"><br><br>
				<abbr title="使用必应搜索引擎"><input type="submit" class="search-button" value="Bing一下"></abbr>
			</form>
		</div>
		

		<div id="nav">
			<!-- <router-link to="/home"></router-link> -->
			<!-- <router-link to="/search">搜索类网页</router-link> -->
			<router-link to="/learn">学习类网页</router-link>
			<router-link to="/media">媒体类网页</router-link>
			<router-link to="/work">工作类网页</router-link>
		</div>
		
		<div id="content">
			
			<router-view></router-view>
		</div>
		

		<div @click="If_onclick_ChangeBetweenDeepAndLight" id="ChangeBetweenDeepAndLight_Button" style="">关灯/开灯</div>

	</div>
</template>

<script>
	// import BaiduLogo from 'assets/BaiduLogo.png'
	
	export default {
		name: 'app',
		components: {

		},
		data: {
			// imgUrl:'assets/BaiduLogo.png'
			flag1: false,
			// changeColor:'background-color:'
		},
		methods: {
			// If_onfocus() {
				
			// 	document.querySelector("#SearchBoxForBaidu #search-input").style.backgroundColor='saddlebrown'
			// 	document.querySelector("#SearchBoxForBiying #search-input").style.backgroundColor='saddlebrown'
			// }
			If_onclick_ChangeBetweenDeepAndLight() {
				this.flag1 = !this.flag1
				if(this.flag1==true){
					document.getElementById('nav').style.backgroundColor='black'
					document.getElementById('content').style.backgroundColor='black'
					// document.getElementsByTagName('input').style.backgroundColor='black'
					// document.getElementById('ChangeBetweenDeepAndLight_Button').style.backgroundColor='black'
					// document.getElementsByClassName('search-button').style.backgroundColor='black'
					document.querySelector('#SearchBoxForBaidu .search-input').style.backgroundColor='black'
					document.querySelector('#SearchBoxForBiying .search-input').style.backgroundColor='black'
					document.querySelector('#SearchBoxForBaidu .search-button').style.backgroundColor='black'
					document.querySelector('#SearchBoxForBiying .search-button').style.backgroundColor='black'
					document.querySelector('#ChangeBetweenDeepAndLight_Button').style.backgroundColor='black'
				}
				else{
					document.getElementById('nav').style.backgroundColor='white'
					document.getElementById('content').style.backgroundColor='white'
					// document.getElementsByTagName('input').style.backgroundColor='white'
					// document.getElementById('ChangeBetweenDeepAndLight_Button').style.backgroundColor='white'
					// document.getElementsByClassName('search-button').style.backgroundColor='white'
					document.querySelector('#SearchBoxForBaidu .search-input').style.backgroundColor='deepskyblue'
					document.querySelector('#SearchBoxForBiying .search-input').style.backgroundColor='deepskyblue'
					document.querySelector('#SearchBoxForBaidu .search-button').style.backgroundColor='snow'
					document.querySelector('#SearchBoxForBiying .search-button').style.backgroundColor='snow'
					document.querySelector('#ChangeBetweenDeepAndLight_Button').style.backgroundColor='snow'
				}
			}
		}
	}
</script>

<style>
	*{
		color: deepskyblue;
	}
	html,
	body {
		width: 100%;
		height: 100%;
	}

	/* *{
	margin: 0 auto;
} */
	#app {
		/* margin: 0;
	padding: 0; */
		font-size: 14px;
		font-family: 华文琥珀;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: royalblue;
		width: 100%;
		height: 100%;
		/* background-color: #ccc;*/
		/* background-image: url(assets/5eaa9a79d273d.jpg);*/
		/* background-image: url(./assets/ChMlWV66EESIKWIRAA4ypfpom0oAAPC_wMICtQADjK9557.jpg); */
		/* background-image: url(assets/ChMlWV66EESIKWIRAA4ypfpom0oAAPC_wMICtQADjK9557.jpg); */
		/* background-image: url(assets/两架飞机向上飞.jpg); */
		background-image: url(assets/ChMlWV66D_-IFbIuABBFy4eXCVIAAPC-wGWQuMAEEXj061.png);
		/* background-image: url(assets/远山.jpg); */
		background-size: cover;
		filter:  saturate(1.15) contrast(1.15);
		background-image: ;
		box-sizing: border-box;
		

	}

	#SearchBoxForBaiduAndBiying{
		display: flex;
		/* width: 80%; */
		/* margin: 0; */
		/* padding: 0; */
		justify-content: center;
		box-sizing: border-box;
	}
	
	#SearchBoxForBaiduAndBiying #SearchBoxForBaidu{
		margin-right: 15px;
	}
	
	#SearchBoxForBaiduAndBiying #SearchBoxForBiying{
		margin-left: 15px;
	}

	#SearchBoxForBaidu,#nav,#content,#SearchBoxForBiying {margin-top: 40px;}
	#SearchBoxForBaiduAndBiying input::-ms-input-placeholder{
		text-align: center;
		color: snow;
	}
	#SearchBoxForBaiduAndBiying input::-webkit-input-placeholder{
		text-align: center;
		color: snow;
	}
	#SearchBoxForBaidu .search-input,#SearchBoxForBiying .search-input{
		border: 1px solid white;
		border-radius: 24px;
		/* width: 8px; */
		width: 128px;
		height: 20px;
		text-align: center;
		transition: 0.8s;
		background-color: deepskyblue;
		opacity: 0.6;
		/* border-image: linear-gradient(#000,#ccc) 30 30; */
	}
	#SearchBoxForBaidu .search-button,#SearchBoxForBiying .search-button{
		/* border: 1.5px solid black; */
		border: 2px hotpink solid;
		border-radius: 24px;
		/* width: 8px; */
		width: 85px;
		height: 20px;
		text-align: center;
		height: 27px;
		transition: 1.5s;
		/* animation: changeColor 25s infinite; */
	}
	/* @keyframes changeColor{
		0%{border-color: pink;}
		20%{border-color: #7CFC00;}
		40%{border-color: aliceblue;}
		60%{border-color: coral;}
		80%{border-color: yello;}
		100%{border-color: brown;}
	} */
	#SearchBoxForBaidu .search-button:hover,#SearchBoxForBiying .search-button:hover{
		border: 5px solid gold;
		color: purple;
	}
	#SearchBoxForBaidu .search-input:focus,#SearchBoxForBiying .search-input:focus{
		background-color: sandybrown;
		width: 208px;
		border: 1.5px solid lawngreen;
		color: black;
		opacity: 1;
		/* border-image: linear-gradient(skyblue,lawngreen); */
	}
	#nav{
		border-radius: 20px;
		display: flex;
		justify-content: space-around;
		background-color: white;
		width: 70%;
		margin: 40px auto 0 auto;
		/* padding: 10px 0; */
		border: 1px deepskyblue solid;
		height: 30px;
		line-height: 30px;
	}
	#content,#nav{
		font-size: 18px;
		color:greenyellow;
		transition: 1s;
	}
	/* #nav:nth-child(2){
		/* padding: 0 40px; */
	/* 	padding: 0 30px;
	} */
	#nav>*{
		padding: 0 60px;
		transition: 1s;
	}
	#nav>*:hover{
		background-color: deepskyblue;
		color: snow;
	}
	#content{
		width: 90%;
		height: 52.5%;
		background-color: snow;
		margin: 40px auto 0 auto;
		opacity: 0.6;
		border-radius: 15px;
		/* filter: brightness(1.5); */
		box-shadow: #ccc 10px 10px 5px;
		border: 1px greenyellow solid;
		filter: brightness(1.1);
	}
	
	#ChangeBetweenDeepAndLight_Button{
		width: 100px;height: 50px;position: absolute;right: 0%;top: 0%;background-color: snow;line-height: 50px;
	}
	
	
	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) {
	    #nav{
			justify-content: center;
			padding: 0;
			/* position: relative; */
		}
		#nav a{
			padding: 0;
			width: 30%;
			font-size: 14px;
			/* position: absolute; */
		}
		#content{
			height: 61%;
		}
		#ChangeBetweenDeepAndLight_Button{
			width: 70px;
			height: 25px;
			line-height: 30px;
		}
		#SearchBoxForBaiduAndBiying input::-ms-input-placeholder{
			font-size: 13px;
		}
		#SearchBoxForBaiduAndBiying input::-webkit-input-placeholder{
			font-size: 13px;
		}
		#SearchBoxForBaidu .search-input,#SearchBoxForBiying .search-input{
			width: 125px;
		}
		#SearchBoxForBaidu .search-input:focus,#SearchBoxForBiying .search-input:focus{
			width: 190px;
		}
	}
</style>
