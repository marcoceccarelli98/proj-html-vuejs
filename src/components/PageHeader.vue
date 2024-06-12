<script>
export default {
	name: "PageHeader",
	props: ["menu"],
	computed: {
		isHome() {
			return this.$route.name === "home"
		}
	}
};
</script>

<template>
	<header>
		<div class="container-90">
			<div class="header-top" :class="{ nodisplay: isHome }">
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
			</div>
		</div>
		<hr>
		<div class="container-90">
			<div class="header-bottom" :class="{ displayhome: isHome }">
				<div class="row">
					<div v-if="isHome" class="logo">
						<img src="/logo-light.png" alt="">
					</div>
					<div v-else class="logo">
						<img src="/logo-default.png" alt="">
					</div>
					<div class="menu">
						<ul>
							<li v-for="  element   in   menu  "> {{ element.name }}</li>
						</ul>
						<a href="#"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></a>
						<a href="#"><font-awesome-icon :icon="['fas', 'bag-shopping']" /></a>
						<a href="#"><font-awesome-icon :icon="['fas', 'bars']" /></a>
					</div>
				</div>
			</div>
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

<style scoped lang="scss">
@use "../styles/style.scss" as *;

.row {
	justify-content: space-between;
	align-items: center;
}

ul {
	display: flex;
	align-items: center;
}

li,
a {
	text-transform: uppercase;
	font-size: 14px;
	font-weight: 600;
	color: rgb(108, 108, 108);
}

.nodisplay {
	display: none;
}

.displayhome {
	position: absolute;
	background-color: transparent;
	z-index: 2;
	top: 0;
	width: 90%;
}

.header-bottom.displayhome li,
.header-bottom.displayhome a {
	color: white;
}

.header-top li,
span {
	margin: 15px 20px 15px 0;
}

.header-top a {
	padding: 15px 20px;
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

.menu {
	display: flex;
}

.menu li,
.menu a {
	margin: 30px 0 30px 40px;
}

.menu li:hover,
.header-top span:hover {
	color: $primary-color;
}

.logo img {
	width: 100%;
	height: 32px;
	object-fit: cover;
}
</style>
