const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="cari merek, produk">
                    <button class="search-btn">cari</button>
                </div>
                <a href="#"><img src="img/user.png"></a>
                <a href="#"><img src="img/cart.png"></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">wanita</a></li>
            <li class="link-item"><a href="#" class="link">pria</a></li>
            <li class="link-item"><a href="#" class="link">anak-anak</a></li>
            <li class="link-item"><a href="#" class="link">aksesoris</a></li>
        </ul>	
    `;
}

createNav();