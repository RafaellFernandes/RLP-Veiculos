<main id="main">  
  <!-- Banner Starts Here -->
   <div class="banner header-text">
    <div class="owl-banner owl-carousel">
      <div class="banner-item-01">
        <div class="text-content">
          <h4>Encontre seu carro hoje!</h4>
          <h2>Só na RLP Veículos</h2>
        </div>
      </div>
      <div class="banner-item-02">
        <div class="text-content">
          {{-- <h4>Fugiat Aspernatur</h4>
          <h2>Laboriosam reprehenderit ducimus</h2> --}}
        </div>
      </div>
      <div class="banner-item-03">
        <div class="text-content">
          {{-- <h4>Saepe Omnis</h4>
          <h2>Quaerat suscipit unde minus dicta</h2> --}}
        </div>
      </div>
    </div>
  </div>
  <!-- Banner Ends Here -->

  <div class="latest-products">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-heading">
            <h2>Veículos em Destaque</h2>
            <a href="/novo">Novos<i class="fa fa-angle-right"></i></a><br>
            <a href="/seminovo">Seminovos<i class="fa fa-angle-right"></i></a>
          </div>
        </div>
        @foreach ($searchResult as $resultado)
        <div class="col-md-4">
          <div class="product-item">
            <a href="/productDetails/{{ $resultado['id'] }}"><img src='{{ $resultado['foto'] }}' class='card-img-top' width='40' height='auto' alt='{{ $resultado['veiculo'] }}'>
              <div class="down-content">
                  <a href="/productDetails"><h4>{{ $resultado['veiculo'] }}</h4></a>
                  <h6>R$  {{ $resultado['preco'] }}</h6>
                  <p>Marca: {{ $resultado['marca'] }}</p>
                  <p>Opcionais: {{ $resultado['opcionais'] }}</p>
              </div>
            </div>
          </div>
          @endforeach

        {{-- <div class="col-md-4">
          <div class="product-item">
            <a href="product-details.html"><img src="{{ asset('assets/images/product-2-370x270.jpg') }}" alt=""></a>
            <div class="down-content">
              <a href="product-details.html"><h4>Lorem ipsum dolor sit amet.</h4></a>
              <h6><small><del>$99.00</del></small>  $79.00</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non beatae soluta, placeat vitae cum maxime culpa itaque minima.</p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="product-item">
            <a href="product-details.html"><img src="{{ asset('assets/images/product-3-370x270.jpg') }}" alt=""></a>
            <div class="down-content">
              <a href="product-details.html"><h4>Lorem ipsum dolor sit amet.</h4></a>
              <h6><small><del>$1999.00</del></small>   $1779.00</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt nisi quia aspernatur, harum facere delectus saepe enim?</p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="product-item">
            <a href="product-details.html"><img src="{{ asset('assets/images/product-4-370x270.jpg') }}" alt=""></a>
            <div class="down-content">
              <a href="product-details.html"><h4>Lorem ipsum dolor sit amet.</h4></a>
              <h6><small><del>$999.00 </del></small> $779.00</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.</p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="product-item">
            <a href="product-details.html"><img src="{{ asset('assets/images/product-5-370x270.jpg') }}" alt=""></a>
            <div class="down-content">
              <a href="product-details.html"><h4>Lorem ipsum dolor sit amet.</h4></a>
              <h6><small><del>$999.00 </del></small> $779.00</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.</p>
            </div>
          </div>
        </div> --}}

        {{-- <div class="col-md-4">
          <div class="product-item">
            <a href="product-details.html"><img src="{{ asset('assets/images/product-6-370x270.jpg') }}" alt=""></a>
            <div class="down-content">
              <a href="product-details.html"><h4>Lorem ipsum dolor sit amet.</h4></a>
              <h6><small><del>$999.00 </del></small> $779.00</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta voluptas quia dolor fuga odit.</p>
            </div>
          </div>
        </div> --}}
      </div>
    </div>
  </div>

  <div class="best-features">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-heading">
            <h2>Sobre nós</h2>
          </div>
        </div>
        <div class="col-md-6">
          <div class="left-content">
            <p>RLP Veículos, é um Ecommerce de Automóveis Fictício feito para o <a href="#">Hackathon</a> da Faculdade UniAlfa de Umuarama. </p>
            <p>Devs:</p>
            <ul class="featured-list">
              <li><a href="https://github.com/RafaellFernandes">Rafael Fernandes</a></li>
              <li><a href="https://github.com/leofer28">Leonardo Fernandes</a></li>
              <li><a href="https://github.com/paulohenr95">Paulo Henrique Lopes</a></li>
            </ul>
            <a href="/aboutus" class="filled-button">Ler Mais</a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="right-image">
            <img src="{{ asset('assets/images/code2.webp')}}" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="services" style="background-image: url({{ asset('assets/images/carroBackgroud.jpg') }});" >
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-heading">
            <h2>Últimos posts do blog</h2>

            <a href="/blog">Ler Mais <i class="fa fa-angle-right"></i></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="service-item">
            <a href="#" class="services-item-image"><img src="{{ asset('assets/images/GM-tracker_2021.jpg')}}" class="img-fluid" alt=""></a>

            <div class="down-content">
              <h4><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit hic</a></h4>

              <p style="margin: 0;"> John Doe &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020 10:30 &nbsp;&nbsp;|&nbsp;&nbsp; 114</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="service-item">
            <a href="#" class="services-item-image"><img src="{{ asset('assets/images/mobi.jpg')}}" class="img-fluid" alt=""></a>

            <div class="down-content">
              <h4><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit</a></h4>

              <p style="margin: 0;"> John Doe &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020 10:30 &nbsp;&nbsp;|&nbsp;&nbsp; 114</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="service-item">
            <a href="#" class="services-item-image"><img src="{{ asset('assets/images/toro.jpg')}}" class="img-fluid" alt=""></a>

            <div class="down-content">
              <h4><a href="#">Aperiam modi voluptatum fuga officiis cumque</a></h4>

              <p style="margin: 0;"> John Doe &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020 10:30 &nbsp;&nbsp;|&nbsp;&nbsp; 114</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="happy-clients">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-heading">
            <h2>Nossos Clientes</h2>

            <a href="/testimonials">Ler Mais <i class="fa fa-angle-right"></i></a>
          </div>
        </div>
        <div class="col-md-12">
          <div class="owl-clients owl-carousel text-center">
            <div class="service-item">
              <div class="icon">
                <i class="fa fa-user"></i>
              </div>
              <div class="down-content">
                <h4>John Doe</h4>
                <p class="n-m"><em>"Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat."</em></p>
              </div>
            </div>
            
            <div class="service-item">
              <div class="icon">
                <i class="fa fa-user"></i>
              </div>
              <div class="down-content">
                <h4>Jane Smith</h4>
                <p class="n-m"><em>"Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat."</em></p>
              </div>
            </div>
            
            <div class="service-item">
              <div class="icon">
                <i class="fa fa-user"></i>
              </div>
              <div class="down-content">
                <h4>Antony Davis</h4>
                <p class="n-m"><em>"Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat."</em></p>
              </div>
            </div>
            
            <div class="service-item">
              <div class="icon">
                <i class="fa fa-user"></i>
              </div>
              <div class="down-content">
                <h4>John Doe</h4>
                <p class="n-m"><em>"Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat."</em></p>
              </div>
            </div>
            
            <div class="service-item">
              <div class="icon">
                <i class="fa fa-user"></i>
              </div>
              <div class="down-content">
                <h4>Jane Smith</h4>
                <p class="n-m"><em>"Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat."</em></p>
              </div>
            </div>
            
            <div class="service-item">
              <div class="icon">
                <i class="fa fa-user"></i>
              </div>
              <div class="down-content">
                <h4>Antony Davis</h4>
                <p class="n-m"><em>"Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat."</em></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="call-to-action">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="inner-content">
            <div class="row">
              <div class="col-md-8">
                <h4>Deseja Entrar em Contato Conosco?</h4>
                <p> Tem alguma reclamação, opinião, dicas ou apenas quer falar algo? Entre em Contato! </p>
              </div>
              <div class="col-lg-4 col-md-6 text-right">
                <a href="/contact" class="filled-button">Contate-Nos</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>