<template>
  <div class="about">
		<h1>Learning Vuex with Vue Js 3</h1>
		<p>
			A simple application split into 4 components, so I could break each part down and learn how to use vuex. 
		</p>
		<ul>
			<li>Counter to display the current base number</li>
			<li>Buttons to increase or decrease by a random number</li>
			<li>Colour input to change the colour</li>
			<li>Counter squared to carry out the sum</li>
		</ul>
  </div>
</template>

<script>
export default {
  name: 'About',
  components: {
  }
}
</script>

<style scoped>
  div {
    margin-top: 4rem;
  }
	h1 {
		margin-bottom: 2rem;
	}
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	li {
		margin-bottom: .25rem;
	}
  
</style>