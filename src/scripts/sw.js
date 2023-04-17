function main() {
  const getListCafe = async () => {
    const { default: responseJson } = await import("./../DATA.json", {
      assert: { type: "json" },
    });
    renderAllListCafe(responseJson.restaurants);
  };

  const renderAllListCafe = (listCafe) => {
    const listCafeElement = document.querySelector("#list-cafe");

    listCafeElement.innerHTML = "";

    listCafe.forEach((cafe) => {
      listCafeElement.innerHTML += `
        <style>
            .list-cards {
                width: 100%;
                display: grid !important;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 20px;
            }
            
            .card {
                min-width: 200px;
                height: auto;
                background-color: var(--main-color);
                transition: transform .2s;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
            }

            .card .picture {
                position: relative;
            }
            
            .card .picture img {
                height: 200px;
                width: 100%;
                background-color: #eee;
                background-size: cover;
                background-repeat: no-repeat;
                position: relative;
            }
            
            .card .picture .city-templates {
                z-index: 1;
                position: absolute;
                font-size: 12px;
                font-weight: 400;
                border-radius: 0 3px 3px 0;
                top: 20px;
                background-color: var(--main-color);
                color: var(--secondary-color);
                padding: 10px;
                position: absolute;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
            }
            
            .card .description {
                padding: 20px;
                color: whitesmoke;
            }
            
            .card .description .title {
                font-weight: 700;
                color: var(--secondary-color);
            }
            
            .card .description .rating {
                margin: 5px 0;
                font-size: 14px;
                color: #eee;
            }
            
            .card .description .card-description {
                display: -webkit-box;
                font-size: 14px;
                font-weight: 500;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                text-overflow: ellipsis;
                overflow: hidden;
                color: whitesmoke;
            }
        </style>
        <a href="#" class="card">
            <div class="picture">
                <img tabindex="0" src="${cafe.pictureId}" alt="${cafe.name}">
                <p tabindex="0" class="city-templates">${cafe.city}</p>
            </div>
            <div class="description">
                <p tabindex="0" class="title">${cafe.name}</p>
                <p tabindex="0" class="rating">Rating: ${cafe.rating}</p>
                <p tabindex="0" class="card-description">${cafe.description}</p>
            </div>
        </a>
      `;
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    getListCafe();
  });
}

export default main;
