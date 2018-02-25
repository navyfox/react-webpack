import React, { Component } from 'react';

import './style.scss';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            gender: '',
            email: '',
            password: '',
            termsofuse: false
        };
    }

    handleChange = (event) => {
        let target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <header className="form__header">
                    <h2 className="form__h2">Давайте начнем!</h2>
                </header>
                <label className="input-form__label">Имя
                    <input type="text"
                           onChange={this.handleChange}
                           className="input-form__input"
                           name="firstName"
                           placeholder="Имя"/>
                </label>
                <label className="input-form__label">Фамилия
                    <input type="text"
                           onChange={this.handleChange}
                           className="input-form__input"
                           name="lastName"
                           placeholder="Фамилия"/>
                </label>
                <div className="gender">
                    <label className="input-form__label">Ваш пол</label>
                    <label className="radio-button__label">
                        <input type="radio"
                               onChange={this.handleChange}
                               className="radio-button__radio"
                               name="gender"
                               value="female"/>Женский
                    </label>
                    <label className="radio-button__label">
                        <input type="radio"
                               onChange={this.handleChange}
                               className="radio-button__radio"
                               name="gender"
                               value="male"/>Мужской
                    </label>
                </div>
                <label className="input-form__label">Введите электронный адрес
                    <input type="text"
                           onChange={this.handleChange}
                           className="input-form__input"
                           name="email"
                           placeholder="email@gmail.com"/>
                </label>
                <label className="input-form__label">Придумайте пароль
                    <input type="password"
                           onChange={this.handleChange}
                           className="input-form__input"
                           name="password"/>
                </label>
                <input type="checkbox" name="termsofuse" onChange={this.handleChange} className="checkbox "/>
                <label className="termsofuse">Я принимаю условия Пользовательского соглашения и даю свое согласие
                    на обработку моих персональных данных на условиях, определенных Политикой конфиденциальности.
                </label>
                <button className="button button" type="submit">Зарегистрироваться</button>
            </form>
        );
    }
}

export default Form;