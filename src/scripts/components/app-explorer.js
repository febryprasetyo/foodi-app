import { restaurantData } from '../data/api';

class AppExplorer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }

  async render() {
    try {
      const restaurants = await restaurantData();
      const restoItem = document.createElement('div');
      restoItem.classList.add('content-item');

      restaurants.forEach((restaurant) => {
        const restoList = document.createElement('div');
        restoList.classList.add('row');
        restoList.innerHTML = `
         <div class="col" id="resto-item">
            <div class="card">
                <div class="card-img">
                    <div class="city-label">
                    <span class="city-label-text">
                            Kota ${restaurant.city}
                        </span>
                    </div>
                    <img class="img-resto" src="${restaurant.pictureId}" alt="${restaurant.name}">
                </div>
                <div class="card-body">
                  <div class="rating">
                       <i class="fas fa-star"></i> <span> ${restaurant.rating} </span>
                  </div>
                  <h3 class="card-title" id="resto-title">${restaurant.name} </h3>
                  <p class="card-text">${restaurant.description}</p>
                  </div>
            </div>
        </div>
          
        `;
        restoItem.appendChild(restoList);
      });

      const restoList = document.createElement('div');
      restoList.classList.add('contentRestaurant');
      restoList.appendChild(restoItem);
      this.appendChild(restoList);
    } catch (error) {
      console.error(error);
      const errorMessage = document.createElement('p');
      errorMessage.textContent =
        'Gagal Mengupload data, silahkan coba lagi bang messi';
      this.appendChild(errorMessage);
    }
  }
}

customElements.define('app-explorer', AppExplorer);
