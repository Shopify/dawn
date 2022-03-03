import { createApp } from 'vue'
import * as VueRouter from 'vue-router';
import FormWizard from "../components/FormWizard/FormWizard.vue"
import TabContent from "../components/FormWizard/TabContent.vue"
import ValidationHelper from "../components/FormWizard/ValidationHelper.vue"
import Quiz from "../components/Quiz.vue"


export { FormWizard, TabContent, ValidationHelper, Quiz, VueRouter };

/**
 * imports
 */

import '../css/app.css'

/**
 * vuex
 * auto-import all modules and prepare shared store
 */
const modules = {}

/**
 * create vue instance function
 */
const createVueApp = () => {
    const app = createApp({})

    /**
     * vue components
     * auto-import all vue components
     */
    const vueComponents = require.context('../components/', true, /\.(vue|js)$/)
    vueComponents.keys().forEach(key => {
        const component = vueComponents(key).default

        // if a component has a name defined use the name, else use the path as the component name
        const name = component.name
            ? component.name
            : key.replace(/\.(\/|vue|js)/g, '').replace(/(\/|-|_|\s)\w/g, (match) => match.slice(1).toUpperCase())
        console.log(name)
        app.component(name, component)
    })

    /**
     * vue mixins
     * auto-register all mixins with a 'global' keyword in their filename
     */
    const mixins = require.context('../mixins/', true, /.*global.*\.js$/)

    mixins.keys().forEach(key => {
        app.mixin(mixins(key).default)
    })

    /**
     * vue directives
     * auto-register all directives with a 'global' keyword in their filename
     */
    const directives = require.context('../directives/', true, /.*global.*\.js$/)

    directives.keys().forEach(key => {
        const directive = directives(key).default
        app.directive(directive.name, directive.directive)
    })

    /**
     * vue plugins
     * extend with additional features
     */
    const routes = [

    ]

    // 3. Create the router instance and pass the `routes` option
    // You can pass in additional options here, but let's
    // keep it simple for now.
    const router = VueRouter.createRouter({
        // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
        history: VueRouter.createWebHashHistory(),
        routes, // short for `routes: routes`
    })
    return app
}

/**
 * create and mount vue instance(s)
 */
const appElement = document.querySelector('#vueapp')
if (appElement) {
    createVueApp().mount(appElement)
    console.log('here')
} else {
    console.log('not here')
    const vueElements = document.querySelectorAll('[vue]')
    if (vueElements) vueElements.forEach(el => createVueApp().mount(el))
}

export const FilterType = {
    IncludeOnlyIf: "IncludeOnlyIf",
};

export const FilterOperator = {
    "==": function (a, b, isArray, f_value) {
        return !isArray ? a === b : a.indexOf(f_value) > -1;
    },
    "!=": function (a, b, isArray, f_value) {
        return !isArray ? a === b : a.indexOf(f_value) === -1;
    },
};


/**
 * fixes for Shopify sections
 * 1. properly render vue components on user insert in the theme editor
 * 2. reload the current page to rerender async inserted sections with vue components
 *
 * add the 'vue' keyword to the section's wrapper classes if the section uses any vue functionality e.g.:
 * {% schema %}
 * {
 *   "class": "vue-section"
 * }
 * {% endschema %}
 */
if (Shopify.designMode) {
    document.addEventListener('shopify:section:load', (event) => {
        if (event.target.classList.value.includes('vue')) {
            createVueApp().mount(event.target)
        }
    })
} else if (!Shopify.designMode && process.env.NODE_ENV === 'development') {
    new MutationObserver((mutationsList) => {
        mutationsList.forEach(record => {
            const vue = Array.from(record.addedNodes).find(node => node.classList && node.classList.value.includes('vue'))
            if (vue) window.location.reload()
        })
    }).observe(document.body, {
        childList: true,
        subtree: true
    })
}