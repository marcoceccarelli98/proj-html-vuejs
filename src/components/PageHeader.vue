<script>
export default {
	name: "PageHeader",
};
</script>

<template>
	<header>
		<div class="header-top">
			<div class="row">
				<div class="col-left">
					<ul>
						<li>welcome</li>
						<li>CALL +44 300 303 0266</li>
						<li>follow us</li>
						<li>
							<span><font-awesome-icon :icon="['fab', 'twitter']" /></span>
							<span><font-awesome-icon :icon="['fab', 'instagram']" /></span>
							<span><font-awesome-icon :icon="['fab', 'facebook-f']" /></span>
						</li>
					</ul>
				</div>
				<div class="col-right">
					<a class="login" href="#">login</a>
					<a class="register" href="register">register</a>
				</div>
			</div>
			<hr>
		</div>
		<nav>
			<ul>
				<li>
					<router-link :to="{ name: 'home' }">Home</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'about' }">Chi siamo</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'contact' }">Contatti</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style scoped>
.row {
	justify-content: space-between;
	align-items: center;
}

ul {
	display: flex;
}

li,
a {
	text-transform: uppercase;
	font-size: 13px;
	font-weight: 600;
	color: rgb(108, 108, 108);
}

li,
span {
	margin: 15px 10px;
}

a {
	padding: 15px 30px;
}

.login {
	border-left: 1px solid lightgray;
}

.register,
.login {
	border-right: 1px solid lightgrey
}

hr {
	border: none;
	height: 0.5px;
	background-color: lightgray;
}
</style>
