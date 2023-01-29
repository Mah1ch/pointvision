const ruPageIndexText = {
    header: '<div class="secondry-header">'+
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
                                    '<li style="margin-left: 0px;" onclick="uzb()"><button type="button" class="btn"><img src="assets/images/flags/uzb.png" width="25px"></button></li>'+
                                    '<li style="margin-left: 0px;" onclick="eng()"><button type="button" class="btn"><img src="assets/images/flags/gb.png" width="25px"></button></li>'+
                                '</ul>'+
                            '</div>'+
                        '</li>'+
                    '</ul>'+
                '</nav>'+
            '</div>'+
        '</div>'+
    '</div>'+
    '</div>',
    aboutUs: 
};
const uzbPageIndexText = {
    header: '<div class="secondry-header">'+
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
                            '<a href="index.html">Bosh safiha</a>' + 
                        '</li>' + 
                        '<li>' + 
                            '<a href="jbi.html">JBI</a>'+
                        '</li>'+
                        '<li>'+
                            '<a href="terminal.html">Terminal</a>'+
                        '</li>'+
                        '<li>'+
                            '<a href="gostinica.html">Mexmonxona</a>'+
                        '</li>'+
                        '<li>'+
                            '<div class="btn-group dropdown"> '+
                                '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">'+
                                    '<img src="assets/images/flags/uzb.png" width="25px"></span> <span class="caret"></span>'+
                                '</button>'+
                                '<ul class="dropdown-menu" role="menu" style="padding: 0px 0px 0px 0px; min-width: 60px;background-color: #f3f3f3;" width="25px">'+
                                    '<li style="margin-left: 0px;" onclick="ru()"><button type="button" class="btn"><img src="assets/images/flags/ru.png" width="25px"></button></li>'+
                                    '<li style="margin-left: 0px;" onclick="eng()"><button type="button" class="btn"><img src="assets/images/flags/gb.png" width="25px"></button></li>'+
                                '</ul>'+
                            '</div>'+
                        '</li>'+
                    '</ul>'+
                '</nav>'+
            '</div>'+
        '</div>'+
    '</div>'+
    '</div>',
    aboutUs: '<div class="info-container">' +
            '<div class="container">' +
                '<div class="row">' +
                    '<div class="col-xs-12 col-sm-6 ">' +
                        '<div class="about-detail">' +
                            '<h3>ПИИ ООО "POINT VISION"<i></i></h3>' +
                            '<h4 style="font-weight: normal; color: black;  text-indent: 50px">ПИИ МЧЖ "POINT VISION" 2013 йилда ташкил етилган кўп тармоқли компания ҳисобланади. Компания юк терминали, темир-бетон буюмлар ишлаб чиқариш, меҳмонхона бизнеси каби соҳаларда ишлайди.</h4>' +
                            '<h4 style="font-weight: normal; color: black;  text-indent: 50px">' +
                                'Айни пайтда компанияда ўз соҳасининг профессионаллари бўлган 135 нафар ходим ишлайди. Корхоналаримиз Бухоро вилоятининг Қоракўл туманида жойлашган. Умумий майдони 45 гектар. Ривожланиш тарихи давомида ишончлилик ва профессионаллик компания номи билан узвий боғлиқ бўлган.' +
                            '</h4>' +
                            '</div>' +
                    '</div>' +
                    '<div class="col-xs-12 col-sm-6 ">' +
                        '<div class="about-img ">' +
                            '<img src="assets/images/glav.png" alt="Главная" class="coll" />'+
                        '</div>' +
                    '</div>' +
                '</div>' +
             '</div>' +
            '</div>',
    services: '<div class="container">' +
                '<div class="container about-detail">' +
                    '<h3 style="font-family: Times New Roman">БИЗНИНГ ХИЗМАТЛАР <i></i></h3>' +
                    '<span class="designation"><i></i></span>' +
                    '<div class="row about-detail">' +
                        '<div class="col-sm-4 ">' +
                            '<img src="assets/images/terminal/pogruzka.jpg" alt="Терминал" width="1080" height="720" class="aboutImg"/>' +
                            '<h3 style="font-family: Times New Roman; margin-top: 15px;">Юк терминали <i></i></h3>' +
                            '<p style="font-weight: normal; font-size: 20px; color: #000000;">' +
                                'ПИИ POINT VISION МЧЖ компаниясидаги юк терминали сизга юкларни юклаш ва тушириш, юкларни божхона расмийлаштируви ва барча турдаги юкларни божхона ва ўз омборлари ва очиқ ва ёпиқ турдаги омборларда сақлаш хизматларини, шунингдек контейнер платформасини тақдим етади.' +
                            '</p>' +
                            '<button class="cssbuttons-io-button"> <a href="terminal.html" style="color: black;">БАТАФСИЛ</a>' +
                                '<div class="icon">' +
                                '<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>' +
                                '</div>' +
                            '</button>' +
                        '</div>' +
                        '<div class="col-sm-4 ">' +
                            '<img src="assets/images/jbi.jpg" alt="ЖБИ" width="1080" height="720" class="aboutImg"/>' +
                            '<h3 style="font-family: Times New Roman; margin-top: 15px;">ТБИ чиқариш <i></i></h3>' +
                            '<p style="font-size: 20px; color: #000000;">' +
                                'Темир-бетон буюмлар қурилишда темир-бетон конструкцияларни қуриш учун заводда темир-бетондан тайёрланган йиғма бетон конструкциялардан фойдаланилади.' +
                            '</p>' +
                            '<button class="cssbuttons-io-button"> <a href="terminal.html" style="color: black;">БАТАФСИЛ</a>' +
                                '<div class="icon">' +
                                    '<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>' +
                                '</div>' +
                            '</button>' +
                        '</div>' +
                        '<div class="col-sm-4 ">' +
                            '<img src="assets/images/mehmonxona.jpg" alt="Гостиница" width="1080" height="720" class="aboutImg"/>' +
                            '<h3 style="font-family: Times New Roman; margin-top: 15px;">Меҳмонхона <i></i></h3>' +
                            '<p style="font-size: 20px; font-family: Times New Roman; color: #000000;">' +
                                'Пойкент меҳмонхонаси 2014 йилда Point Vision МЧЖ кўмагида очилган ва асосан минтақага иш учун юборилган мутахассисларни жойлаштириш учун мўлжалланган. Бироқ, меҳмонхонанинг ешиклари унда қолишни истаган ҳар бир kishi учун очиқ.' +
                            '</p>' +
                            '<button class="cssbuttons-io-button"> <a href="terminal.html" style="color: black;">БАТАФСИЛ</a>' +
                                '<div class="icon">' +
                                    '<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>' +
                                '</div>' +
                            '</button>' +
                        '</div>' +
                    '</div>' +
                 '</div>' +
                '</div>',
    partners: '<div class="container">' +
                '<div class="about-detail">' +
                    '<h3>БИЗНИНГ ҲАМКОРЛАРИМИЗ<i></i></h3>' +
                '</div>' +
                '<div class="row" style="text-align: center;">' +
                    '<div class="col-md-3">' +
                        '<img src="assets/images/kontragents/eriell.png" alt="Клиенты" width="208" height="98" style="padding-top: 15px;">' +
                    '</div>' +
                    '<div class="col-md-3">' +
                        '<img src="assets/images/kontragents/enter.png" alt="Клиенты" width="208" height="98" style="padding-top: 15px;">' +
                    '</div>' +
                    '<div class="col-md-3">' +
                        '<img src="assets/images/kontragents/lukoyl.png" alt="Клиенты" width="208" height="98" style="padding-top: 15px;">' +
                    '</div>	' +
                    '<div class="col-md-3">' +
                        '<img src="assets/images/kontragents/uniglobe.png" alt="Клиенты" width="208" height="98" style="padding-top: 15px;">' +
                    '</div>	' +
                '</div>' +
                '<div class="row" style="padding-bottom: 25px; text-align: center;">' +
                    '<div class="col-md-3">' +
                        '<img src="assets/images/kontragents/temir_yullar.png" alt="Клиенты" width="208" height="98" style="padding-top: 15px;">' +
                    '</div>' +
                    '<div class="col-md-3">' +
                        '<img src="assets/images/kontragents/sunir.png" alt="Клиенты" width="208" height="98" style="padding-top: 15px;">' +
                    '</div>' +
                    '<div class="col-md-3">' +
                        '<img src="assets/images/kontragents/hotelios.png" alt="Клиенты" width="208" height="98" style="padding-top: 15px;">' +
                    '</div>	' +
                    '<div class="col-md-3">' +
                        '<img src="assets/images/kontragents/beeline.png" alt="Клиенты" width="208" height="98" style="padding-top: 15px;">' +
                    '</div>' +
                '</div>' +
               '</div>',
    footer: '<div class="primary-footer">'+
    '<div class="container">' +
        '<div class="row ">' +
            '<div class="col-xs-12 col-sm-4 footerInfo" style="padding-top: 50px;">' +
                '<h3 style="font-size: 25px; color: white">Биз ҳақимизда<i></i></h3>' +
                '<h4 style="color: whitesmoke; font-size: 18px;">ПИИ МЧЖ "POINT VISION" 2013 йилда ташкил етилган кўп тармоқли компания ҳисобланади. Компания қуйидаги соҳаларда ишлайди: юк терминали; темир-бетон буюмлар ишлаб чиқариш; меҳмонхона бизнеси; ҳозирги вақтда компанияда ўз соҳасининг профессионаллари бўлган 135 нафар ходим ишлайди.</h4>' +
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
    '</div>',
};
const engPageIndexText = {
    header: '<div class="secondry-header">'+
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
                            '<a href="index.html">Main Page</a>' + 
                        '</li>' + 
                        '<li>' + 
                            '<a href="jbi.html">Production of RCP</a>'+
                        '</li>'+
                        '<li>'+
                            '<a href="terminal.html">Cargo terminal</a>'+
                        '</li>'+
                        '<li>'+
                            '<a href="gostinica.html">Hotel</a>'+
                        '</li>'+
                        '<li>'+
                            '<div class="btn-group dropdown"> '+
                                '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">'+
                                    '<img src="assets/images/flags/gb.png" width="25px"></span> <span class="caret"></span>'+
                                '</button>'+
                                '<ul class="dropdown-menu" role="menu" style="padding: 0px 0px 0px 0px; min-width: 60px;background-color: #f3f3f3;" width="25px">'+
                                    '<li style="margin-left: 0px;" onclick="ru()"><button type="button" class="btn"><img src="assets/images/flags/ru.png" width="25px"></button></li>'+
                                    '<li style="margin-left: 0px;" onclick="uzb()"><button type="button" class="btn"><img src="assets/images/flags/uzb.png" width="25px"></button></li>'+
                                '</ul>'+
                            '</div>'+
                        '</li>'+
                    '</ul>'+
                '</nav>'+
            '</div>'+
        '</div>'+
    '</div>'+
    '</div>',
    aboutUs: '<div class="info-container">' +
            '<div class="container">' +
                '<div class="row">' +
                    '<div class="col-xs-12 col-sm-6 ">' +
                        '<div class="about-detail">' +
                            '<h3>ПИИ ООО "POINT VISION"<i></i></h3>' +
                            '<h4 style="font-weight: normal; color: black;  text-indent: 50px">ПИИ ООО "POINT VISION" это многопрофильная компания которая была основана в 2013 году. Компания ведёт свою деятельность в таких сферах как: Грузовой терминал; Производство железно бетонных изделий; Гостиничный бизнес;</h4>' +
                            '<h4 style="font-weight: normal; color: black;  text-indent: 50px">' +
                                'На данный момент в компании насчитывается 135 сотрудников, которые являются профессионалами своего дела. Наши предприятия находяться в Каракульском районе Бухарской области. Общая площадь составляет 45 гектаров. На протяжении всей истории развития с именем предприятия неразрывно связаны надежность и профессионализм.' +
                            '</h4>' +
                            '</div>' +
                    '</div>' +
                    '<div class="col-xs-12 col-sm-6 ">' +
                        '<div class="about-img ">' +
                            '<img src="assets/images/glav.png" alt="Главная" class="coll" />'+
                        '</div>' +
                    '</div>' +
                '</div>' +
             '</div>' +
            '</div>',
    services: '<div class="container">' +
                '<div class="container about-detail">' +
                    '<h3 style="font-family: Times New Roman">НАШИ СЕРВИСЫ <i></i></h3>' +
                    '<span class="designation"><i></i></span>' +
                    '<div class="row about-detail">' +
                        '<div class="col-sm-4 ">' +
                            '<img src="assets/images/terminal/pogruzka.jpg" alt="Терминал" width="1080" height="720" class="aboutImg"/>' +
                            '<h3 style="font-family: Times New Roman; margin-top: 15px;">Грузовой терминал <i></i></h3>' +
                            '<p style="font-weight: normal; font-size: 20px; color: #000000;">' +
                                'Грузовой терминал при компании ПИИ ООО "POINT VISION" представляет вам услуги погрузочно-разгрузочные работы, таможенная очистка грузов и хранение всех видов грузов в таможенных и собственных складах и склады открытого и закрытого типа, а также контейнерная площадка.' +
                            '</p>' +
                            '<button class="cssbuttons-io-button"> <a href="terminal.html" style="color: black;">ПОДРОБНЕЕ</a>' +
                                '<div class="icon">' +
                                '<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>' +
                                '</div>' +
                            '</button>' +
                        '</div>' +
                        '<div class="col-sm-4 ">' +
                            '<img src="assets/images/jbi.jpg" alt="ЖБИ" width="1080" height="720" class="aboutImg"/>' +
                            '<h3 style="font-family: Times New Roman; margin-top: 15px;">Производствo ЖБИ <i></i></h3>' +
                            '<p style="font-size: 20px; color: #000000;">' +
                                'Железобетонные изделия используются в строительстве для возведения железобетонных конструкций с использованием предварительно изготовленных на заводе ЖБИ конструкций из Железобетона.' +
                            '</p>' +
                            '<button class="cssbuttons-io-button"> <a href="terminal.html" style="color: black;">ПОДРОБНЕЕ</a>' +
                                '<div class="icon">' +
                                    '<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>' +
                                '</div>' +
                            '</button>' +
                        '</div>' +
                        '<div class="col-sm-4 ">' +
                            '<img src="assets/images/mehmonxona.jpg" alt="Гостиница" width="1080" height="720" class="aboutImg"/>' +
                            '<h3 style="font-family: Times New Roman; margin-top: 15px;">Гостиница <i></i></h3>' +
                            '<p style="font-size: 20px; font-family: Times New Roman; color: #000000;">' +
                                'Гостиница «Poykent» открылось в 2014 году при ПИИ ООО «Point Vision» и предназначена в основном для проживания специалистов, прикомандированных в регион по работе. Однако, двери гостиницы открыты, для всех желающих в ней остановиться.' +
                            '</p>' +
                            '<button class="cssbuttons-io-button"> <a href="terminal.html" style="color: black;">ПОДРОБНЕЕ</a>' +
                                '<div class="icon">' +
                                    '<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>' +
                                '</div>' +
                            '</button>' +
                        '</div>' +
                    '</div>' +
                 '</div>' +
                '</div>',
    partners: '<div class="container">' +
                '<div class="about-detail">' +
                    '<h3>НАШИ ПАРТНЁРЫ<i></i></h3>' +
                '</div>' +
                '<div class="row" style="text-align: center;">' +
                    '<div class="col-md-3">' +
                        '<img src="assets/images/kontragents/eriell.png" alt="Клиенты" width="208" height="98" style="padding-top: 15px;">' +
                    '</div>' +
                    '<div class="col-md-3">' +
                        '<img src="assets/images/kontragents/enter.png" alt="Клиенты" width="208" height="98" style="padding-top: 15px;">' +
                    '</div>' +
                    '<div class="col-md-3">' +
                        '<img src="assets/images/kontragents/lukoyl.png" alt="Клиенты" width="208" height="98" style="padding-top: 15px;">' +
                    '</div>	' +
                    '<div class="col-md-3">' +
                        '<img src="assets/images/kontragents/uniglobe.png" alt="Клиенты" width="208" height="98" style="padding-top: 15px;">' +
                    '</div>	' +
                '</div>' +
                '<div class="row" style="padding-bottom: 25px; text-align: center;">' +
                    '<div class="col-md-3">' +
                        '<img src="assets/images/kontragents/temir_yullar.png" alt="Клиенты" width="208" height="98" style="padding-top: 15px;">' +
                    '</div>' +
                    '<div class="col-md-3">' +
                        '<img src="assets/images/kontragents/sunir.png" alt="Клиенты" width="208" height="98" style="padding-top: 15px;">' +
                    '</div>' +
                    '<div class="col-md-3">' +
                        '<img src="assets/images/kontragents/hotelios.png" alt="Клиенты" width="208" height="98" style="padding-top: 15px;">' +
                    '</div>	' +
                    '<div class="col-md-3">' +
                        '<img src="assets/images/kontragents/beeline.png" alt="Клиенты" width="208" height="98" style="padding-top: 15px;">' +
                    '</div>' +
                '</div>' +
               '</div>',
    footer: '<div class="primary-footer">'+
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
    '</div>',
};
let indexPageEl = {
    header: document.getElementById("header"),
    aboutUs: document.getElementById("aboutUs"),
    services: document.getElementById("ourServices"),
    partners: document.getElementById("paartners"),
    footer: document.getElementById("footer"),
}

let lang = "ru"

indexPageEl.aboutUs.innerHTML = ruPageIndexText.aboutUs
indexPageEl.services.innerHTML = ruPageIndexText.services
indexPageEl.partners.innerHTML = ruPageIndexText.partners
indexPageEl.footer.innerHTML = ruPageIndexText.footer
function uzb(){
    lang = "uzb"
    indexPageEl.header.innerHTML = uzbPageIndexText.header
    indexPageEl.aboutUs.innerHTML = uzbPageIndexText.aboutUs
    indexPageEl.services.innerHTML = uzbPageIndexText.services
    indexPageEl.partners.innerHTML = uzbPageIndexText.partners
    indexPageEl.footer.innerHTML = uzbPageIndexText.footer
}
function eng(){
    lang = "eng"
    indexPageEl.header.innerHTML = engPageIndexText.header
    indexPageEl.aboutUs.innerHTML = engPageIndexText.aboutUs
    indexPageEl.services.innerHTML = engPageIndexText.services
    indexPageEl.partners.innerHTML = engPageIndexText.partners
    indexPageEl.footer.innerHTML = engPageIndexText.footer
}
function ru(){
    lang = "ru"
    indexPageEl.header.innerHTML = ruPageIndexText.header
}