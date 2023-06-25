const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar)
{
    bar.addEventListener('click',()=> {
        nav.classList.add('active');
    })
}

if(close)
{
    close.addEventListener('click',()=> {
        nav.classList.remove('active');
    })
}

/*
     {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

,
::before,
::after {
  box-sizing: border-box;
}

body {
  width: 100%;
  outline: #3C6255 3px solid;
  outline-offset: -7px;
  
}

h1 {
  font-size: 3.6rem;
  line-height: 64px;
  color: #3C6255;
}

h2 {
  font-size: 2rem;
  line-height: 54px;
  color: #3C6255;
}

h4 {
  font-size: 1.3rem;
  color: #3C6255;
}

h6 {
  font-weight: 700;
}

p {
  color: #3C6255;
  margin: 15px 0px 20px 0px;
}


.section-p1 {
  padding: 40px 80px;
}

.section-m1 {
  margin: 40px 0px;
}

#mobile
{
  display: none;
}


#header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.3rem 4.8rem;
    /* position: sticky;
    top: 0;
    left: 0;
    z-index: 999;
    
  }
  
  #bag {
    color: #3C6255;
  }
  
  #navbar {
    display: flex;
    align-items: center;
    justify-content: center;
  
  }
  
  #navbar li {
    list-style: none;
    padding: 0 1.3rem;
  }
  
  #navbar li a {
    text-decoration: none;
    color: #3C6255;
    font-size: 1rem;
    font-weight: 600;
    transition: 400ms ease;
    position: relative;
  }
  
  
  #navbar li a.active::after,
  #navbar li a::after {
    content: " ";
    width: 3%;
    height: 2px;
  }
  #close
  {
    display: none;
  }
  
  #navbar li a.active::after,
  #navbar li a:hover::after {
    content: " ";
    width: 90%;
    height: 2px;
    background-color: #97e735;
    position: absolute;
    left: 0;
    bottom: -4px;
    border-radius: 25px;
    transition: 400ms ease-in-out;
  }
  
  
  #hero {
    background-image: url("./assets/background/herobg.png");
    height: 90vh;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top 25% right 0;
    padding: 0 5rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px #88af58 solid;
  }
  
  #hero h1 {
    color: #88af58;
  }
  
  #hero h4 {
    padding-bottom: 0.9rem;
  }
  
  #hero button {
    border: 1px #d8d371 solid;
    padding: .7rem;
    font-size: 0.9735rem;
    font-weight: 700;
    background: transparent;
    color: #88af58;
    border-radius: 2px;
  
  }
  
  #hero button:hover {
    border-top: red 1px solid;
    border-bottom: green 1px solid;
    border-right: yellow 1px solid;
    border-left: blue 1px solid;
  }
  
  #feature {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  #feature div img {
    width: 60px;
    margin-bottom: .6rem;
  }
  
  #feature .fe-box {
    width: 120px;
    text-align: center;
    padding: 1.3rem 0.9rem;
    box-shadow: 20px 20px 34px rgba(0, 0, 0, 0.03);
    border: 1px solid #d8d371;
    border-radius: 10px;
    margin: .9rem;
  }
  
  #feature .fe-box:hover {
    box-shadow: 10px 10px 54px rgba(70, 62, 221, 0.3);
  }
  
  #feature .fe-box h6 {
    font-size: .8rem;
    padding: .6 .5 .2 .5;
    color: #3C6255;
  }
  
  

  #product1 {
    text-align: center;
  }
  
  #product1 .pro {
    width: 23%;
    min-width: 250px;
    padding: .7rem .6rem;
    border: 1px solid #d8d371;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
    margin: 1rem 0;
    position: relative;
  }
  
  #product1 .pro:hover {
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.16);
  }
  
  #product1 .pro img {
    width: 100%;
    border-radius: 20px;
    background-color: #919789;
  }
  
  #product1 .pro .des {
    text-align: start;
    padding: 0.82rem;
  }
  
  #product1 .pro .des span {
    color: #4c6f1d;
    font-size: 0.93rem;
    font-weight: 500;
    text-transform: capitalize;
  }
  
  #product1 .pro .des h5 {
    padding-top: 0.49rem;
    color: #000000;
    font-size: 0.92rem;
  }
  
  #product1 .pro .des i {
    font-size: 0.8rem;
    color: #eacc0a;
  }
  
  #product1 .pro .des h4 {
    padding-top: .4975rem;
    font-size: 0.9765rem;
    font-weight: 700;
  }
  
  #product1 .pro .cart {
    width: 1.875rem;
    height: 1.875rem;
    position: absolute;
    bottom: 1.40rem;
    right: 0.625rem;
    border: #3C6255 1px solid;
    padding: .3rem;
    border-radius: 25px;
    background-color: hwb(86 64% 3%);
  }
  
  #product1 .pro-container {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  
    flex-wrap: wrap;
  }
  
  #banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 95%;
    margin: 0 2%;
    height: 30vh;
    border: #3C6255 1px solid;
    outline: 1px solid #3C6255;
    outline-offset: 5px;
    
  }
  
  #banner h4 {
    font-weight: 200;
    font-size: 2rem;
    margin-bottom: 10px;
  }
  
  #banner h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }
  
  #banner h2 span {
    color: rgb(231, 8, 8);
  }
  
  button.btn-normal {
    padding: 12px;
    margin: 12px 0;
    border: #000000 2px solid;
    border-radius: 5px;
    color: #3C6255;
    font-weight: 700;
    transition: 400ms ease-in-out;
  }
  
  button.btn-normal:hover {
    background-color: #3C6255;
    color: white;
  }
  
  #sm-banner {
    display: flex;
    justify-content: space-around;
    align-items: center;
  
    flex-wrap: wrap;
    padding: 10px
  }
  
  #sm-banner .banner-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 30px;
    min-width: 580px;
    height: 50vh;
    margin: 10px 0;
  
    background-image: linear-gradient(rgba(207, 193, 193, 1), rgba(0, 0, 0, .5)), url(./assets/background/ban.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  
  }
  
  #sm-banner .banner-box button {
    border: #3C6255 1px solid;
    border-radius: 0;
  }
  
  footer {
    border: #3C6255 1px solid;
    outline: 2px solid white;
    outline-offset: -7px;
    width: 100%;
  
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #3C6255;
  }
  
  footer .col {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  footer .col img {
    margin: 30px 0;
  }
  
  footer h4 {
    color: white;
    font-size: 0.89rem;
    padding-bottom: 20px;
  }
  
  footer p {
  
    font-size: 0.8rem;
    color: white;
    margin: 0 0 8px 0;
  }
  
  footer a {
    font-size: 0.8rem;
    color: white;
    margin: 0 0 8px 0;
  }
  
  footer .follow i {
    color: white;
    padding: 2px;
  }
  
  footer .copyright {
    width: 100%;
    text-align: center;
  }
  
  @media (max-width:920px) {
    .section-p1
    {
      padding: 40px;
    }
    #navbar
    {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      position: fixed;
      top: 0;
      right: -300px;
      width:300px;
      height: 100vh;
      background-color: #3C6255;
      padding: 80px 0 0 10px;
      outline: 1px white solid;
      outline-offset: -7px;
      outline-style: dashed;
      z-index: 99;
      transition: 500ms ease-in-out;
    }
   
    #navbar.active
    {
      right: 0;
    }
    #navbar li
    {
      margin-bottom: 50px;
    }
    #navbar li a
    {
      color: white;
    }
    #mobile
    {
      display: flex;
      align-items: center;
      
      
    }
    #mobile i box-icon
    {
  
      size: 1.2rem;
    }
    #mobile i
    {
      cursor: pointer;
      padding:30px;
    }
    #close box-icon{
        size: 24px;
    }
    #close
    {
      display: initial;
      top: 30px;
      left:30px;
      position: absolute;
    }
    #lg-bag{
      display: none;
    }
    #hero {
      
      height: 70vh;
      padding: 0 80px;
      background-position: top 30% right 30%;
      
    }
    #feature
    {
      justify-content: center;
  
    }
    #feature .fe-box 
    {
      margin: 15px;
    }
    #product1 .pro-container
    {
      justify-content: center;
    }
    #product1 .pro
    {
      margin: 10px;
    }
    #banner
    {
      height: 30vh;
    }
    #sm-banner .banner-box {
  
      margin: 10px;
      min-width: 100%;
      height: 30vh;
      
    }
  }
  
  @media (max-width:560px)
  {
    .section-p1
    {
      padding: 20px;
    }
    #header
    {
      padding: 10px 30px;
    }
    h2
    {
      font-size: 1.4rem;
    }
    h1
    {
      font-size: 1.9rem;
    }
    #hero
    {
      padding: 0 30px;
      background-position: 75%;
    }
    #feature  .fe-box
    {
      margin: 0 0 15px 15px;
    }
    #product .pro
    {
      width: 100%;
    }
    #banner
    {
      width: 90%;
      margin: 0 5%;
      height: 30vh;
    }
  
    footer .copyright
    {
      text-align: start;
    }
  }
  
 
*/