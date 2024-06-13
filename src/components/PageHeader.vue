<script>
export default {
	name: "PageHeader",
	props: ["menu"],
	data() {
		return {
			currentItem: null,
			cartDisplay: false,
			links: ["Home 10", "About", "Contact"]
		}
	},
	computed: {
		isHome() {
			return this.$route.name === "home"
		}
	},
	methods: {
		showList(index) {
			this.currentItem = index;
		},
		hideList() {
			this.currentItem = null;
		},
		showCart() {
			this.cartDisplay = true;
		},
		hideCart() {
			this.cartDisplay = false;
		},
		isFullWidth(item) {
			return item.name === 'Courses';
		},
		is70Width(item) {
			return item.name === 'Elements';
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
								<div v-if="item.subItems && currentItem === index" class="header-lists displaylist"
									:class="{ width100: isFullWidth(item), width70: is70Width(item) }">
									<ul :class="{ flexrow: isFullWidth(item) || is70Width(item) }">
										<li class="subitem" v-for="subItem in item.subItems" :key="subItem.name">
											<div class="router-container" v-if="subItem.name == 'Home 10'">
												<router-link class="r-link" :to="{ name: 'home' }">{{ subItem.name
												}}</router-link>
											</div>
											<div class="router-container" v-else-if="subItem.name == 'About'">
												<router-link class="r-link" :to="{ name: 'about' }">{{ subItem.name
												}}</router-link>
											</div>
											<div class="router-container" v-else-if="subItem.name == 'Contact'">
												<router-link class="r-link" :to="{ name: 'contact' }">{{ subItem.name
												}}</router-link>
											</div>
											<span v-else> {{ subItem.name }}</span>
											<div class="courses"
												v-if="subItem.name === 'BUSINESS' || subItem.name === 'LANGUAGE' || subItem.name === 'PROGRAMMING' || subItem.name === 'FEATURES' || subItem.name === 'COURSE SHORTCODES' || subItem.name === 'CLASSIC' || subItem.name === 'INFOGRAPHIC' || subItem.name === 'PRESENTATION'">
												<div
													v-if="subItem.name === 'FEATURES' || subItem.name === 'COURSE SHORTCODES' || subItem.name === 'CLASSIC' || subItem.name === 'INFOGRAPHIC' || subItem.name === 'PRESENTATION'">
													<div class="course-item" v-for="subName in subItem.subNames"
														:key="subName">
														<div class="subnames">{{ subName }}</div>
													</div>
												</div>
												<div class="course-item" v-else>
													<img class="img-courses" :src="subItem.img">
													<span class="text-courses">{{ subItem.text }}</span>
													<span class="price-courses">{{ subItem.price }}</span>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</li>
						</ul>
						<a class="font-link" href="#"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></a>
						<a href="#" @mouseover="showCart()" @mouseleave="hideCart()"
							class="cart-icon font-link"><font-awesome-icon :icon="['fas', 'bag-shopping']" />
							<div class="cart-number">0</div>
							<div v-if="cartDisplay" class="header-cart displaylists">
								<ul>
									<li class="subitem">
										No products in the cart.
									</li>
								</ul>
							</div>
						</a>
						<a class="font-link" href="#"><font-awesome-icon :icon="['fas', 'bars']" /></a>
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
.font-link,
.header-top a {
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
	z-index: 2;
	top: 0;
	width: 90%;
}

.header-bottom.displayhome li,
.header-bottom.displayhome .font-link {
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
.menu .font-link {
	margin: 30px 0 30px 40px;
}

.menu li:hover,
.header-top span:hover {
	color: $primary-color;
}

img {
	width: 100%;
}

.logo img {
	height: 32px;
	object-fit: cover;
}

.header-lists,
.header-cart {
	background-color: white;
	position: absolute;
	top: 100%;
	z-index: 3;
}

.header-lists {
	left: 0;
}

.header-cart {
	right: 0;
}

.header-lists.displaylist,
.header-cart.displaylist {
	display: block;
}

.header-lists ul,
.header-cart ul {
	border-top: 4px solid $primary-color;
	display: flex;
	flex-direction: column;
}

.header-lists ul.flexrow {
	flex-direction: row;
}

.header-lists.width100 ul.flexrow .subitem:first-child {
	min-height: 300px;
}

.header-lists ul .subitem,
.header-cart ul .subitem,
.r-link {
	display: block;
	color: rgb(150, 150, 150);
	font-weight: 300;
	padding: 12px;
	text-transform: none;
	min-width: 200px;
	text-decoration: none;
}

.r-link {
	margin: 0;
}

.router-container {
	height: 18px;
	display: flex;
	align-items: center;
}

.r-link:hover {
	color: $primary-color;
}

.subnames {
	padding: 12px;
	min-width: 200px;
}

.header-lists ul .subitem:hover,
.header-cart ul .subitem:hover {
	background-color: rgba(0, 0, 0, 0.1);
	color: $primary-color;
}

.cart-icon {
	position: relative;
}

.cart-number {
	width: 12px;
	height: 12px;
	padding: 5px;
	background-color: $primary-color;
	color: white;
	position: absolute;
	top: -3px;
	right: -7px;
	border-radius: 50%;
	font-size: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.width100 {
	width: 100vw;
	left: -50vw;
}

.width70 {
	width: 70vw;
	left: -50vw;
}

.courses {
	display: flex;
	flex-wrap: wrap;
	width: calc(25% - 25px);
	margin-top: 10px;
}

.course-item {
	margin: 5px 20px 0 5px;
}

.img-courses {
	width: 325px;
	margin-bottom: 20px;
}

.text-courses {
	font-weight: 700;
}

.price-courses {
	padding: 5px 15px;
	background-color: $primary-color;
	color: white;
	border-radius: 15px;
}

.header-lists.width100 ul .subitem:hover,
.header-lists.width70 ul .subitem:hover {
	background-color: white;
	color: rgb(150, 150, 150);
}

.header-lists.width100 ul .subnames:hover,
.header-lists.width70 ul .subnames:hover {
	background-color: rgba(0, 0, 0, 0.1);
}
</style>
