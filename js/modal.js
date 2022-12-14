(() => {
   const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
     closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
     refs.modal.classList.toggle("is-hidden");
  }
 })();

// {
// 	"liveSassCompile.settings.formats": [
// 		{
// 			"format": "expanded",
// 			"extensionName": ".css",
// 			"savePath": "/css"
// 		},
// 		{
// 			"format": "compressed",
// 			"extensionName": ".min.css",
// 			"savePath": "/css"
// 		}
// 	],
// 	"liveSassCompile.settings.excludeList": ["**/node_modules/**", ".vscode/**"],
// 	"liveSassCompile.settings.generateMap": true,
// 	"liveSassCompile.settings.autoprefix": ["> 1%", "last 2 versions"]
// }