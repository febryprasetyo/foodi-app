class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="jumbotron">
      <picture>
        <img src="./images/heros/hero-image_2.jpg"
          alt="Gambar macam-macam makanan yang diterapkan di komponen hero">
      </picture>
      <div class="inner">
          <h1 class="title">FOOD!</h1>
          <p class="subtitle">
              Pencarian Restaurant terbaik
          </p>
      </div>
    </div>
    `;
  }
}

customElements.define('app-hero', AppHero);
