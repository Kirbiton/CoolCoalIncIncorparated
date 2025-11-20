let textbox = document.querySelector('.textbox');
let chat = document.querySelector('.chat');
let btn = document.querySelector('.clickMe');

let quest = 
[
    'проц доб уг', 
    'как наход уг', 
    'поиск уг', 
    'проект', 
    'где добыв уг', 
    'доб откр способ', 
    'доб подзем способ', 
    'способ доб уг', 
    'как исп откр', 
    'как исп закр', 
    'что угл извлеч', 
    'как уг очищ', 
    'как транс'
];

let fullQuest = 
[
    'Что из себя представляет процесс добычи угля?',

    'Как находится уголь?', 
    'Какие методы используются для поиска угольных месторождений?', 
    'Что входит в проектирование шахты или разреза?', 
    'Где обычно добывают уголь?',

    'Какими основными способами добывают уголь?', 
    'Как ведется добыча открытым способом?', 
    'Как ведется добыча подземным способом?', 
    'Какая техника используется для добычи открытым способом?',
    'Какая техника используется для добычи подземным способом?',

    'Что происходит с углем после его извлечения из недр?',
    'Как уголь очищают и обогащают?', 
    'Как уголь транспортируют к потребителю?'
]
btn.addEventListener('click', SendText);

function SendText(){
    if(textbox.value != ""){
        chat.innerHTML += "<p class='personMessage'>" + textbox.value + "</p>";
        let answer = WhatAnswer();
        let textToAnswer = "";
        let next = 0;
        switch(answer)
        {
            case 0:
                textToAnswer = "Процесс добычи угля - это комплекс этапов, от поиска месторождения до отправки готовой продукции потребителю, включающий в себя геологоразведку, подготовку, добычу, переработку и транспортировку";
                next = 1;
                break;
            case 1:
                textToAnswer = "Уголь находится в месторождениях, которые выявляют с помощью поиска, разведки и оценки";
                next = 2;
                break; 
            case 2:
                textToAnswer = "Для поиска угольных месторождений применяют геологоразведочные работы, включающие дистанционные методы (аэрофотосъёмка) и полевые работы (бурение скважин для отбора проб-керна)";
                next = 3;
                break; 
            case 3:
                let text = textbox.value.toLowerCase();
                let words = text.split(' ');
                let correct = 0;
                for(let i = 0; i<words.length; i++)
                {
                    if(words[i].includes("шахт") || words[i].includes("разр")) correct++;
                }
                if(correct > 0)
                {
                    textToAnswer = "Создается технико-экономическое обоснование (ТЭО), выбирается способ добычи, рассчитываются объемы, проектируется инфраструктура и система вентиляции (для шахты)";
                } else
                {
                    chat.innerHTML += "<p class='botMessage'>Не совсем понял что вы хотели спросить, возможно вы имели ввиду 'Что входит в проектирование шахты или разреза'?</p>";
                    textToAnswer = "Создается технико-экономическое обоснование (ТЭО), выбирается способ добычи, рассчитываются объемы, проектируется инфраструктура и система вентиляции (для шахты)";
                }
                next = 4;
                break;
            case 4:
                textToAnswer = "Основные районы добычи угля расположены в Сибири (75%), только 14% добывается в европейской части России";
                next = 5;
                break; 
            case 5:
                textToAnswer = "Открытый способ применяется, если уголь залегает неглубоко. Сначала снимают слои пустой породы (вскрышу), а затем мощными экскаваторами добывают уголь";
                next = 7;
                break; 
            case 6:
                textToAnswer = "Подземный способ используется для глубокозалегающих пластов. Строятся шахты — сложные подземные сооружения с системой тоннелей (выработок), по которым люди и техника добираются до угольного пласта";
                next = 9;
                break;
            case 7:
                textToAnswer = "Существует два принципиально разных способа, выбор между которыми зависит от глубины залегания пластов: открытый и подземный";
                next = 6;
                break;
            case 8:
                textToAnswer = "Для вскрыши и добычи используются одноковшовые и роторные экскаваторы, шагающие экскаваторы, бульдозеры, а для транспортировки — огромные самосвалы (БелАЗы) и конвейеры";
                next = 8;
                break;
            case 9:
                textToAnswer = "Используются проходческие комбайны для создания выработок, очистные комбайны для выемки угля в лаве, механизированные крепи для поддержки кровли, а также конвейеры и вагонетки для транспортировки";
                next = 10;
                break;
            case 10:
                textToAnswer = "Добытый уголь (сырец) почти всегда проходит дальнейшую обработку, чтобы стать товарным продуктом";
                next = 11;
                break;
            case 11:
                textToAnswer = "На обогатительных фабриках уголь дробят, сортируют по размеру и отделяют от пустой породы и примесей с помощью гравитационных, флотационных или других методов. Это повышает его теплотворную способность";
                next = 12;
                break;
            case 12:
                textToAnswer = "Основные виды транспорта — железнодорожный (угольные маршруты), морской (навалом на сухогрузах) и реже автомобильный. Для электростанций, расположенных рядом с разрезом, используют конвейерные ленты";
                next = 0;
                break;
            case 99:
                textToAnswer = "Извините, но не понимаю о чём вы((( Пожалуйста, перезадате вопрос";
                next = Math.floor(Math.random() * 13);
                break;
        }
    
        chat.innerHTML += "<p class='botMessage'>" + textToAnswer + "</p>";
        textbox.value = "";

        document.querySelector('.choose').innerHTML += "<p class='chooseMe'> "+ fullQuest[next] +"</p>"
        document.querySelector('.choose').innerHTML += "<p class='chooseMe1'> "+ fullQuest[Math.floor(Math.random() * 13)] +"</p>"
        
        document.querySelector('.chooseMe').addEventListener('click',function(){
            textbox.value = document.querySelector('.chooseMe').textContent;
            document.querySelector('.choose').innerHTML = '';
            SendText();
        })
        document.querySelector('.chooseMe1').addEventListener('click',function(){
            textbox.value = document.querySelector('.chooseMe1').textContent;
            document.querySelector('.choose').innerHTML = '';
            SendText();
        })

        chat.scrollTo({
            top: chat.scrollHeight,
            behavior: 'smooth'
        });
    }
    
    
    
}

function WhatAnswer(){
    let text = textbox.value.toLowerCase();
    let words = text.split(' ');

    for( let i = 0; i < quest.length; i++)
    {
        let correct = 0;
        let questWord = quest[i].split(' ');

        for( let j = 0; j < questWord.length; j++)
        {
            for( let k = 0; k < words.length; k++)
            {
                let b = words[k].includes(questWord[j]);
                if (b) correct++;
                if (correct == questWord.length) return (i);
            }
        }
    }
    return (99);
}





jQuery(document).ready(function($){
    $('.masterclassItem').hover(function(){
        anime({
            targets: this,
            translateY: -20,
            duration: 1000,
        });
    },function(){
        anime({
            targets: this,
            translateY: 0,
            duration: 1000,
        });
    });

    $(".formBtn").click(function(){
        $(".formInput").val(''),
        anime({
            targets: '.formConfirm',
            translateY: [0,120],
            duration: 2000,
            complete: function() {
                anime({
                targets: '.formConfirm',
                translateY: [120,0],
                duration: 2000,
                delay: 500,
            })
            }
        });
    });

    $(".textbox").keyup(function(event) {
        if (event.keyCode === 13) {
            $(".clickMe").click();
        }
    });

    $(".chooseMe").click(function(){
        $(".formInput").val('Как ведется добыча открытым способом?'),
        $(".clickMe").click();
        
    });

    
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => { 
    anchor.addEventListener('click', function (e) { 
        e.preventDefault(); 
        document.querySelector(this.getAttribute('href')).scrollIntoView({ 
            behavior: 'smooth' 
        }); 
    }); 
});

