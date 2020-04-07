/* паттерн проектирования модуль */
/* В основном он широко использовался только в ES5 */
const firstModule = (function(){
	var Name = "Petya"; 
	// нельзя дотянуться до этих полей видимости
	var Surname = "Ivanov";

	function Declare_Person(){
		return `Имя пользователя: ${Name}, \n Фамилия пользователя: ${Surname}`
	} 

	// declare person можно вызвать только внутри

	return {
		declare_all: function(){
			console.log(Declare_Person())
		}

	}

})();

firstModule.declare_all()



