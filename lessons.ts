/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lesson, ExerciseType } from './types';

export const POR_PARA_LESSON: Lesson = {
  id: 'por-para-lesson',
  title: 'Por vs Para (Պեդրոյի հետ)',
  description: 'Սովորիր տարբերել Por և Para նախդիրները:',
  progress: 0,
  exercises: [
    { id: 'pp1', type: ExerciseType.MULTIPLE_CHOICE, question: 'Este regalo es ___ ti (Այս նվերը քեզ համար է)', options: ['por', 'para'], answer: 'para', image: '🎁' },
    { id: 'pp2', type: ExerciseType.MULTIPLE_CHOICE, question: 'Gracias ___ la ayuda (Շնորհակալություն օգնության համար)', options: ['por', 'para'], answer: 'por', image: '🙏' },
    { id: 'pp3', type: ExerciseType.MULTIPLE_CHOICE, question: 'Camino ___ el parque (Քայլում եմ այգով)', options: ['por', 'para'], answer: 'por', image: '🌳🚶‍♂️' },
    { id: 'pp4', type: ExerciseType.MULTIPLE_CHOICE, question: 'Estudio ___ aprobar (Սովորում եմ հանձնելու համար)', options: ['por', 'para'], answer: 'para', image: '📚✅' },
    { id: 'pp5', type: ExerciseType.MULTIPLE_CHOICE, question: 'Salgo ___ Madrid mañana (Մեկնում եմ Մադրիդ վաղը)', options: ['por', 'para'], answer: 'para', image: '✈️🇪🇸' },
    { id: 'pp6', type: ExerciseType.MULTIPLE_CHOICE, question: 'Te doy 5 euros ___ el libro (Տալիս եմ 5 եվրո գրքի դիմաց)', options: ['por', 'para'], answer: 'por', image: '💶📖' },
    { id: 'pp7', type: ExerciseType.MULTIPLE_CHOICE, question: 'Trabajo ___ mi padre (Աշխատում եմ հորս համար)', options: ['por', 'para'], answer: 'para', image: '👔👨‍👦' },
    { id: 'pp8', type: ExerciseType.MULTIPLE_CHOICE, question: 'He estado aquí ___ tres días (Ես այստեղ եմ եղել 3 օր շարունակ)', options: ['por', 'para'], answer: 'por', image: '📅3️⃣' },
    { id: 'pp9', type: ExerciseType.MULTIPLE_CHOICE, question: 'Este tren va ___ Barcelona (Այս գնացքը գնում է Բարսելոնա)', options: ['por', 'para'], answer: 'para', image: '🚆🏙️' },
    { id: 'pp10', type: ExerciseType.MULTIPLE_CHOICE, question: 'Lo hice ___ amor (Սա արեցի սիրո համար/պատճառով)', options: ['por', 'para'], answer: 'por', image: '❤️' },
    { id: 'pp11', type: ExerciseType.MULTIPLE_CHOICE, question: 'La tarea es ___ el lunes (Տնայինն երկուշաբթի օրվա համար է)', options: ['por', 'para'], answer: 'para', image: '📅📑' },
    { id: 'pp12', type: ExerciseType.MULTIPLE_CHOICE, question: 'Hablamos ___ teléfono (Խոսում ենք հեռախոսով)', options: ['por', 'para'], answer: 'por', image: '📞' },
    { id: 'pp13', type: ExerciseType.MULTIPLE_CHOICE, question: 'Para mí, este es mejor (___ ինձ, սա ավելի լավն է)', options: ['por', 'para'], answer: 'para', image: '🤔🙋‍♂️' },
    { id: 'pp14', type: ExerciseType.MULTIPLE_CHOICE, question: 'Voto ___ Pedro (Քվեարկում եմ Պեդրոյի օգտին)', options: ['por', 'para'], answer: 'por', image: '🗳️🙋' },
    { id: 'pp15', type: ExerciseType.MULTIPLE_CHOICE, question: 'Tengo que comer ___ vivir (Պետք է ուտեմ ապրելու համար)', options: ['por', 'para'], answer: 'para', image: '🍱🌱' },
    { id: 'pp16', type: ExerciseType.MULTIPLE_CHOICE, question: 'Ella me llamó ___ la mañana (Նա ինձ զանգեց առավոտյան)', options: ['por', 'para'], answer: 'por', image: '🌅📞' },
    { id: 'pp17', type: ExerciseType.MULTIPLE_CHOICE, question: 'Esta canción es ___ ti (Այս երգը քեզ համար է)', options: ['por', 'para'], answer: 'para', image: '🎵❤️' },
    { id: 'pp18', type: ExerciseType.MULTIPLE_CHOICE, question: 'Lo compré ___ internet (Գնեցի ինտերնետով)', options: ['por', 'para'], answer: 'por', image: '💻🛒' },
    { id: 'pp19', type: ExerciseType.MULTIPLE_CHOICE, question: 'Entramos ___ la puerta (Մտանք դռնով)', options: ['por', 'para'], answer: 'por', image: '🚪🚶' },
    { id: 'pp20', type: ExerciseType.MULTIPLE_CHOICE, question: 'Es un vaso ___ agua (Սա ջրի համար բաժակ է)', options: ['por', 'para'], answer: 'para', image: '🥛💧' },
  ]
};

export const VERBS_LESSON: Lesson = {
  id: 'verbs-lesson',
  title: 'Բայերի խոնարհում (Պեդրոյի հետ)',
  description: 'Trabajar, Funcionar, Hablar, Decir',
  progress: 0,
  exercises: [
    { id: 'v1', type: ExerciseType.MULTIPLE_CHOICE, question: 'Yo ___ mucho (Trabajar - Ես շատ եմ աշխատում)', options: ['trabaja', 'trabajo', 'trabajas'], answer: 'trabajo', image: '👷‍♂️💻' },
    { id: 'v2', type: ExerciseType.MULTIPLE_CHOICE, question: 'Tú ___ español (Hablar - Դու խոսում ես իսպաներեն)', options: ['hablas', 'habla', 'hablo'], answer: 'hablas', image: '🗣️🇪🇸' },
    { id: 'v3', type: ExerciseType.MULTIPLE_CHOICE, question: 'La radio no ___ (Funcionar - Ռադիոն չի աշխատում)', options: ['funcionas', 'funciono', 'funciona'], answer: 'funciona', image: '📻❌' },
    { id: 'v4', type: ExerciseType.MULTIPLE_CHOICE, question: 'Yo ___ la verdad (Decir - Ես ասում եմ ճշմարտությունը)', options: ['digo', 'dices', 'decimos'], answer: 'digo', image: '🙋‍♂️📖' },
    { id: 'v5', type: ExerciseType.MULTIPLE_CHOICE, question: 'Ellos ___ en la oficina (Trabajar - Նրանք աշխատում են գրասենյակում)', options: ['trabajamos', 'trabajan', 'trabaja'], answer: 'trabajan', image: '🏢👨‍💼' },
    { id: 'v6', type: ExerciseType.MULTIPLE_CHOICE, question: 'Nosotros ___ con Pedro (Hablar - Մենք խոսում ենք Պեդրոյի հետ)', options: ['hablamos', 'hablan', 'habláis'], answer: 'hablamos', image: '👨‍👦🗣️' },
    { id: 'v7', type: ExerciseType.MULTIPLE_CHOICE, question: '¿Qué ___ tú? (Decir - Ի՞նչ ես ասում դու)', options: ['digo', 'dices', 'dice'], answer: 'dices', image: '❓🗨️' },
    { id: 'v8', type: ExerciseType.MULTIPLE_CHOICE, question: 'El reloj ___ bien (Funcionar - Ժամացույցը լավ է աշխատում)', options: ['funciona', 'funcionan', 'funcionamos'], answer: 'funciona', image: '⌚✅' },
    { id: 'v9', type: ExerciseType.MULTIPLE_CHOICE, question: 'Ustedes ___ mucho (Hablar - Դուք շատ եք խոսում)', options: ['hablamos', 'hablas', 'hablan'], answer: 'hablan', image: '🗣️👥' },
    { id: 'v10', type: ExerciseType.MULTIPLE_CHOICE, question: 'Él ___ que sí (Decir - Նա ասում է այո)', options: ['dice', 'digo', 'decimos'], answer: 'dice', image: '👨‍💼👍' },
  ]
};
