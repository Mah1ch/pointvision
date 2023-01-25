let header = document.getElementById("header")
let headerEl = '<div class="secondry-header">'+
'<div class="container">' +
    '<div class="row">' +
        '<div class="col-xs-12 col-sm-4" style="text-align: center;">' +
            '<a href="index.html" class="logo"><img src="assets/images/logotip.png" alt="Логотип" width="200" /></a>' +
            '<span class="num">+998 91 407 00 65</span>' +
        '</div>' +
        '<div class="col-xs-12 col-sm-8 menu-wrapper">' + 
            '<div class="button-wrapper">' + 
                '<button class="nav-button"></button>' + 
            '</div>' +
            '<nav class="navigation" style="margin-left: 15px;">' + 
                '<ul class="menu">' + 
                    '<li>' + 
                        '<a href="index.html">Главная</a>' + 
                    '</li>' + 
                    '<li>' + 
                        '<a href="jbi.html">Производство ЖБИ</a>'+
                    '</li>'+
                    '<li>'+
                        '<a href="terminal.html">Грузовой терминал</a>'+
                    '</li>'+
                    '<li>'+
                        '<a href="gostinica.html">Гостиница</a>'+
                    '</li>'+
                    '<li>'+
                        '<div class="btn-group dropdown"> '+
                            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">'+
                                '<img src="assets/images/flags/ru.png" width="25px"></span> <span class="caret"></span>'+
                            '</button>'+
                            '<ul class="dropdown-menu" role="menu" style="padding: 0px 0px 0px 0px; min-width: 60px;background-color: #f3f3f3;" width="25px">'+
                                '<li style="margin-left: 0px;"><button type="button" class="btn"><img src="assets/images/flags/uzb.png" width="25px"></button></li>'+
                                '<li style="margin-left: 0px;"><button type="button" class="btn"><img src="assets/images/flags/gb.png" width="25px"></button></li>'+
                            '</ul>'+
                        '</div>'+
                    '</li>'+
                '</ul>'+
            '</nav>'+
        '</div>'+
    '</div>'+
'</div>'+
'</div>'

header.innerHTML = headerEl
let footer = document.getElementById("footer")
let footerEl = '<div class="primary-footer">'+
'<div class="container">' +
    '<div class="row ">' +
        '<div class="col-xs-12 col-sm-4 footerInfo" style="padding-top: 50px;">' +
            '<h3 style="font-size: 25px; color: white">О нас<i></i></h3>' +
            '<h4 style="color: whitesmoke; font-size: 18px;">ПИИ ООО "POINT VISION" — это многопрофильная компания которая была основана в 2013 году. Компания ведёт свою деятельность в таких сферах как: Грузовой терминал; Производство железно бетонных изделий; Гостиничный бизнес; На данный момент в компании насчитывается 135 сотрудников, которые являются профессионалами своего дела.</h4>' +
        '</div>'+

        '<div class="col-xs-12 col-sm-4 text" style="padding-top: 50px;">' +
            '<h3 style="font-size: 25px; color: white">Контакты<i></i></h3>' +
            '<button type="button" class="btn btn-lg" style="background-color: #2d2c32;"><span class="glyphicon glyphicon-earphone Icon"></span></button>' +
            '<strong style="font-weight: normal; color: white; font-size: 18px">+998 91 407 00 65</strong><br>' +
            '<button type="button" class="btn btn-lg" style="background-color: #2d2c32"><span class="glyphicon glyphicon-home Icon"></span></button>' +
            '<strong style="font-weight: normal; color: white; font-size: 18px">Бухарская область, Каракульский</strong>' +
            '<p>район, улица Бухара, дом 9</p>' +
            '<button type="button" class="btn btn-lg" style="background-color: #2d2c32"><span class="glyphicon glyphicon-time Icon"></span></button>' +
            '<strong style="font-weight: normal; color: white; font-size: 18px">Пон - Суб 9:00 - 18:00</strong>' +
            '<p>БЕЗ ВЫХОДНЫХ</p>' +
        '</div>' +
        '<div class="col-xs-12 col-sm-4" style="padding-top: 50px;">' +
            '<h3 style="font-size: 25px; color: white">Карта <i></i></h3>' +
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5008.5934878195785!2d63.87586962161635!3d39.53074072011135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDMxJzUyLjMiTiA2M8KwNTInMzcuOSJF!5e1!3m2!1sru!2s!4v1598357789110!5m2!1sru!2s" width="100%" height="250" allowfullscreen=""></iframe>' +
        '</div>' +
    '</div>' +
    '<div style="text-align: center;">' +
    '<div class="row ">' +
        '<div class="col-xs-12 copyright">' +
            '<h5 style="color: #676b7a;">Copyright &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved | This site is made by <a href="https://github.com/Mah1ch" target="_blank" id="linkk">MaxMood</a></h5>' +
        '</div>' +
    '</div>' +
    '</div>' +
'</div>' +
'</div>'
footer.innerHTML = footerEl

