<template>
  <div class="home">
	  <!-- <div>你好</div> -->
	 <span class="XK1">简约</span><br /><br />
	 <span class="XK1">舒适</span><br /><br />
	 <span class="XK2">是本站的风格</span>
	 <h1>Welcome to my homepage</h1>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/* .home:first-child{
		border-bottom: 1px solid greenyellow;
		padding: 5px 0;
	} */
	.XK1,.XK2{
		font-family: "华文行楷";
		font-size: 30px;
		transition: 1s;
		
	}
	.XK1:hover,.XK2:hover{
		font-size: 50px;
	}
	
	.home{
		margin-top: 45px;
	}
	
	.home h1{}
</style>
