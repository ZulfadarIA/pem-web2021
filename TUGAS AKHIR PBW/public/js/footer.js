const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
			<img src="img/logo-light2.png" class="logo" alt="">
			<div class="footer-ul-container">
				<ul class="category">
					<li class="category-title">pria</li>
					<li><a href="#" class="footer-link">kaos</a></li>
					<li><a href="#" class="footer-link">Sweatshirt</a></li>
					<li><a href="#" class="footer-link">kemeja</a></li>
					<li><a href="#" class="footer-link">jeans</a></li>
					<li><a href="#" class="footer-link">celana panjang</a></li>
					<li><a href="#" class="footer-link">sepatu</a></li>
					<li><a href="#" class="footer-link">kasual</a></li>
					<li><a href="#" class="footer-link">formal</a></li>
					<li><a href="#" class="footer-link">sports</a></li>
					<li><a href="#" class="footer-link">jam tangan</a></li>
				</ul>
				<ul class="category">
					<li class="category-title">wanita</li>
					<li><a href="#" class="footer-link">kaos</a></li>
					<li><a href="#" class="footer-link">Sweatshirt</a></li>
					<li><a href="#" class="footer-link">kemeja</a></li>
					<li><a href="#" class="footer-link">jeans</a></li>
					<li><a href="#" class="footer-link">celana panjang</a></li>
					<li><a href="#" class="footer-link">sepatu</a></li>
					<li><a href="#" class="footer-link">kasual</a></li>
					<li><a href="#" class="footer-link">formal</a></li>
					<li><a href="#" class="footer-link">sports</a></li>
					<li><a href="#" class="footer-link">jam tangan</a></li>
				</ul>
			</div>
		</div>
		<p class="footer-title">About</p>
		<p class="info">Website ini dibuat guna memenuhi tugas akhir dari mata kuliah pemrograman web</p>
		<p class="info">support emails - </p>
		<div class="footer-social-container">
			<div>
				<a href="#" class="social-link">terms & service</a>
				<a href="#" class="social-link">privacy page</a>
			</div>
			<div>
				<a href="#" class="social-link">instagram</a>
				<a href="#" class="social-link">faccebook</a>
				<a href="#" class="social-link">twitter</a>
			</div>
			<p class="footer-credit">2021/2022 - NarrativeClothes, Best apparels online store</p>
		</div>

    `;
}

createFooter()