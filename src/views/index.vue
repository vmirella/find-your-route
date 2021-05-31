<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="appbar">
          <button class="btn btn-sm btn-outline-dark rounded-pill me-4">
            <i class="fas fa-arrow-left"></i>
          </button>
          <input class="appbar__input" type="text">
          <button class="btn btn-sm btn-warning rounded-pill ms-4">
            Ir!
          </button>
        </div>
        <div class="container__content" style="background-color: gray;">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <div class="py-3 accordion__close">
                <div class="accordion__icon-close"></div>
              </div>
              <a class="accordion-header" id="headingOne">

                <div class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

                  <div class="accordion__header">
                    <div class="mr-2">
                      <h5 class="accordion__title">Instituto Salesiano Valdivia</h5>
                      <p class="m-0 accordion__description">Pedro de Valdivia 480 Valdivia, Los Ríos <span class="accordion__label">+3</span></p>
                      <a href="" class="accordion__link">Ver perfil del colegio</a>
                    </div>
                    <div class="accordion__image">
                      <img src="https://source.unsplash.com/random/90X90" alt="">
                      <div class="accordion__like"><i class="fas fa-heart"></i></div>
                    </div>
                  </div>
                </div>
              </a>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="row">
                    <div class="col-6 col-sm-3">
                      <div class="accordion__item-card">
                        <div class="accordion__item-card__image">
                          <img src="../assets/img/gardens.png" alt="">
                        </div>
                        <div class="row accordion__item-card__levels">
                          <div class="col-3 accordion__item-card__level" v-for="(level, index) in levels" v-bind:key="index">{{level}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6 col-sm-3">
                      <div class="accordion__item-card">
                        <div class="accordion__item-card__image">
                          <img src="../assets/img/houses.png" alt="">
                        </div>
                        <div class="row accordion__item-card__levels">
                          <div class="col-3 accordion__item-card__level" v-for="(level, index) in levels" v-bind:key="index">{{level}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6 col-sm-3">
                      <div class="accordion__item-card">
                        <div class="accordion__item-card__image">
                          <img src="../assets/img/woods.png" alt="">
                        </div>
                        <div class="row accordion__item-card__levels">
                          <div class="col-3 accordion__item-card__level" v-for="(level, index) in levels" v-bind:key="index">{{level}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6 col-sm-3">
                      <div class="accordion__item-card">
                        <div class="accordion__item-card__image">
                          <img src="../assets/img/gardens.png" alt="">
                        </div>
                        <div class="row accordion__item-card__levels">
                          <div class="col-3 accordion__item-card__level" v-for="(level, index) in levels" v-bind:key="index">{{level}}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row mt-2 accordion__labels">
                    <div class="col-12 col-sm-6"><div class="bg-light accordion__label">Particular  Subvencionado</div></div>
                    <div class="col-12 col-sm-6"><div class="bg-light w-100 h-100 p-2 text-center">Pre Kinder a IV°</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      levels: [1, 2, 3, 4]
    }
  }
}
</script>