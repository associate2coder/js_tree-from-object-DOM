function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var t,r=document.querySelector("#tree");t=!1,function r(n,a){var o=document.createElement("ul");t||(o.setAttribute("id","tree"),t=!0),Object.entries(a).forEach(function(t){var n=document.createElement("li"),a=function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r,n,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var o=[],i=!0,l=!1;try{for(a=a.call(e);!(i=(r=a.next()).done)&&(o.push(r.value),2!==o.length);i=!0);}catch(e){l=!0,n=e}finally{try{i||null==a.return||a.return()}finally{if(l)throw n}}return o}}(t,2)||function(t,r){if(t){if("string"==typeof t)return e(t,2);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,2)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),i=a[0],l=a[1],u=Object.entries(l);n.innerText=i,u&&u.length>0&&r(n,l),o.append(n)}),o.hasAttribute("id")?document.querySelector("body").append(o):n.append(o)}(r,{Drink:{Wine:{},Schnaps:{}},Fruit:{Red:{Cherry:{},Strawberry:{}},Yellow:{Banana:{},Pineapple:{}}}});
//# sourceMappingURL=index.541ebd9a.js.map
