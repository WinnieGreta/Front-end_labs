import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorChange1: false,
            colorChange2: false
        };
    }

    changeColor1 = () => {
        this.setState(prevState => ({
            colorChange1: !prevState.colorChange1
        }));
    };

    changeColor2 = () => {
        this.setState(prevState => ({
            colorChange2: !prevState.colorChange2
        }));
    };

    zoomIn() {
        const img = document.querySelector('img'); 
        if (img) { 
            const currentWidth = img.clientWidth;
            img.style.width = currentWidth * 1.25 + "px";
        } else {
            console.error('Не знайдено зображення для збільшення');
        }
    }

    zoomOut() {
        const img = document.querySelector('img'); 
        if (img) { 
            const currentWidth = img.clientWidth;
            img.style.width = currentWidth * 0.75 + "px";
        } else {
            console.error('Не знайдено зображення для збільшення');
        }
    }

    render() {
        const { colorChange1, colorChange2 } = this.state;
        return (
            <div>
                <div>
                    Дата та місце народження:
                    <ul>
                        <li>23 липня 1996 р., м. Тернопіль</li>
                    </ul>
                </div>

                <div>
                    Освіта:
                    <ul>
                        <li>Львівський фізико-математичний ліцей-інтернат при Львівському національному університеті імені Івана Франка - повна загальна середня освіта</li>
                        <li>Національний університет «Києво-Могилянська академія» - незакінчена вища освіта</li>
                        <li
                            id="first"
                            style={{
                                color: colorChange1 ? 'magenta' : 'green',
                                backgroundColor: colorChange1 ? 'purple' : 'lime'
                            }}
                            onClick={this.changeColor1}
                        >
                            Національний технічний університет України «Київський політехнічний інститут імені Ігоря Сікорського» - незакінчена вища освіта
                        </li>
                    </ul>
                </div>

                <div
                    className="second"
                    style={{
                        color: colorChange2 ? 'red' : 'navy',
                        backgroundColor: colorChange2 ? 'maroon' : 'gold'
                    }}
                    onClick={this.changeColor2}
                >
                    Хобі:
                    <ul>
                        <li>Відеоігри</li>
                        <li>Читання</li>
                        <li>Картини по номерах</li>
                    </ul>
                </div>

                <div>
                    Улюблені книги:
                    <ol>
                        <li>Террі Пратчет "Правда"</li>
                        <li>Тімоті Снайдер "Шлях до несвободи: росія, Європа, Америка"</li>
                        <li>Іван Багряний "Сад Гетсиманський"</li>
                    </ol>
                </div>

                <div>
                    <p>На жаль, коли я планувала поїздку Європою у 2017 році, мені і на думку не спадало, що Гданськ справить на мене таке сильне враження. 
            Мені вдалось провести там близько 12 годин, вночі, і це було казково. Я практично нічого не встигла побачити, окрім невеликого шматочка
             міста навколо мого хостелу, який обійшла вздовж і впоперек. Мені здавалось, що коли я доповзла до колеса огляду, воно вже було 
             закритим, але якимось чином серед фотографій знайшовся знімок з великої висоти. Я б хотіла повернутися в Гданськ знову, цільово,
             а не як у проміжний пункт і, цього разу, насолодитися цим містом у всій його красі.</p>
                </div>
                
                <div>
                    <button type="button" onClick={this.zoomIn}>Збільшити</button>
                    <button type="button" onClick={this.zoomOut}>Зменшити</button>
                </div>
            </div>
        );
    }
}

export default Content;