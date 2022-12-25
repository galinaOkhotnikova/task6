import { createStore } from "vuex";

const store = createStore( {
    state: {
        questions: [
            {
                type: 'radio',
                title: 'Какой тег задаёт ссылку?',
                answers: [
                    'a',
                    'div',
                    'span',
                    'img'
                ],
            },
            {
                type: 'checkbox',
                title: 'Какие из  этих тегов строчные?',
                answers: [
                    'a',
                    'div',
                    'span',
                    'img'
                ],
            },
            {
                type: 'radio',
                title: 'Какой тег задаёт изображение?',
                answers: [
                    'a',
                    'div',
                    'span',
                    'img'
                ],
            },
            {
                type: 'checkbox',
                title: 'Какие из  этих тегов блочные?',
                answers: [
                    'a',
                    'div',
                    'span',
                    'img'
                ],
            },
            {
                type: 'checkbox',
                title: 'Из чего состоит компонент Vue?',
                answers: [
                    'шаблон',
                    'скрипт',
                    'сервер',
                    'стили'
                ],
            },
            {
                type: 'radio',
                title: 'Какая директива имеет краткое обозначение "@"?',
                answers: [
                    'v-bind',
                    'v-on',
                    'v-model',
                    'v-show',
                    'v-if'
                ],
            }
        ]
    },
    getters: {
        questions(state) {
            return state.questions;
        }
    }
});

export default store;