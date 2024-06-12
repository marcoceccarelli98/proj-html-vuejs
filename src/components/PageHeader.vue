<script>
export default {
	name: "PageHeader",
	props: ["menu"],
	data() {
		return {
			currentItem: null
		}
	},
	computed: {
		isHome() {
			return this.$route.name === "home"
		}
	},
	methods: {
		showList(index) {
			this.currentItem = index
		},
		hideList() {
			this.currentItem = null
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
							<li class="item" v-for="(item, index) in menu" @mouseover="showList(index)"
								@mouseleave="hideList()">
								{{ item.name }}
								<div v-if="item.subItems && currentItem === index" class="header-lists displaylist">
									<ul>
										<li class="subitem" v-for="subItem in item.subItems" :key="subItem.name">
											<span v-if="subItem.name == 'Home 10'">
												<router-link :to="{ name: 'home' }">{{ subItem.name }}</router-link>
											</span>
											<span v-else-if="subItem.name == 'About'">
												<router-link :to="{ name: 'about' }">{{ subItem.name }}</router-link>
											</span>
											<span v-else-if="subItem.name == 'Contact'">
												<router-link :to="{ name: 'contact' }">{{ subItem.name }}</router-link>
											</span>
											<span v-else> {{ subItem.name }}</span>
										</li>
									</ul>
								</div>
							</li>
						</ul>
						<a href="#"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></a>
						<a href="#"><font-awesome-icon :icon="['fas', 'bag-shopping']" /></a>
						<a href="#"><font-awesome-icon :icon="['fas', 'bars']" /></a>
					</div>
				</div>
			</div>
		</div>
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
	border-right: 1px solid lightgrey;
}

hr {
	border: none;
	height: 0.5px;
	background-color: lightgray;
}

.menu {
	display: flex;
}

.menu li {
	position: relative;
}

.item,
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

.header-lists {
	display: none;
	background-color: white;
	position: absolute;
	top: 100%;
	left: 0;
	z-index: 3;
}

.header-lists.displaylist {
	display: block;
}

.header-lists ul {
	border-top: 4px solid $primary-color;
	display: flex;
	flex-direction: column;
}

.header-lists ul .subitem {
	display: block;
	color: rgb(150, 150, 150);
	font-weight: 300;
	padding: 15px;
	text-transform: none;
	min-width: 200px;
	text-decoration: none;
}

.header-lists ul .subitem:hover {
	background-color: rgba(0, 0, 0, 0.1);
	color: $primary-color;
}
</style>
