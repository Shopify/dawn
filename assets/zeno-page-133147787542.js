
          function znReady(fn) {
            if (document.readyState != 'loading'){
              fn();
            } else {
              document.addEventListener('DOMContentLoaded', fn);
            }
          }

          window.znStorage={_storage:new WeakMap,put:function(e,t,n){this._storage.has(e)||this._storage.set(e,new Map),this._storage.get(e).set(t,n)},get:function(e,t){return this._storage.get(e).get(t)},has:function(e,t){return this._storage.has(e)&&this._storage.get(e).has(t)},remove:function(e,t){var n=this._storage.get(e).delete(t);return 0===!this._storage.get(e).size&&this._storage.delete(e),n}};
          
          
          Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(Element.prototype.matches.call(t,e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null});
          window.znRespondToVisibility=function(e,t){var n={root:null,threshold:.01},a=new IntersectionObserver((function(e,n){var a=e.map((function(e){return e.isIntersecting})),o=a.includes(!0);t(o)}),n);a.observe(e)};
        ; znReady((function(){document.getElementById("znid-540090816767"),document.querySelector(".zn-container.editing"),document.getElementById("znid-232098411009"),document.querySelector(".zn-container.editing"),document.body.style.removeProperty("background-color"),document.querySelectorAll(".page-top, #module-content").forEach((function(e){e.style.removeProperty("background-color")})),document.querySelector(".zn-container.editing"),function(){document.querySelector(".zn-container.editing");var e=document.body;n();function n(){var n=e.querySelector(".zn-announcement-bar");n&&n.parentNode.removeChild(n)}}()}));