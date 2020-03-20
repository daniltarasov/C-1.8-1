function jQuery (selector, context = document){
	this.elements = Array.from(context.querySelectorAll(selector));
	return this
}

jQuery.prototype.each = function (fn){
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
}


jQuery.prototype.html = function(arg) {
  this.each(element => element.innerHTML = arg)
  return this;
}


const $ = (e) => new jQuery(e);
$('.wrapper').html("<h1> Новый заголовок </h1>")





