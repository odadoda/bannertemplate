console.log('Welcome to previewer v2');

var toolform = document.getElementById('toolsform');
var iframes = document.getElementsByTagName('iframe');


class Previewer{


  constructor(iframes){
    this.bannerFrames = iframes;
    this.initInputFields();
  };

  initInputFields(){
    console.log('init inputs');
    console.log(this.bannerFrames[0]);
    var inputs = this.bannerFrames[0].contentWindow.document.querySelectorAll('[data-banner-type="text"]');
    console.log(inputs);
  };

};

var previewer = new Previewer(iframes);


if( toolform.addEventListener ){
    var inputs = toolform.querySelectorAll('[type="text"]');
    for(var i = 0; i < inputs.length; i++ ){
      inputs[i].addEventListener("keyup", setText, false);  //Modern browsers
    }
}else if( ele.attachEvent ){
    toolform.attachEvent('keyup', setText);            //Old IE
}

var colorschemeSelect = toolform.querySelector('[name="colorscheme"]');
colorschemeSelect.addEventListener('change', setBodyClass, false);

var layoutSelect = toolform.querySelector('[name="box-position"]');
layoutSelect.addEventListener('change', setBodyClass, false);

var featuresTextArea = toolform.querySelector('[name="features"]');
featuresTextArea.addEventListener('keyup', parseText, false);


/*
*
*/
function parseText(event){

  var features = event.target.value.split('|');

  var items = [];
  for(var i = 0; i < features.length; i++ ){
    items.push( "<li>" + features[i] + "</li>" );
  }


  for(var k = 0; k < iframes.length; k++){
    var list = iframes[k].contentWindow.document.querySelector('[data-banner="' + event.target.name + '"]');
    list.innerHTML = "";
    for(var n = 0; n < items.length; n++){
      console.log( items[n] )
      list.innerHTML += items[n];
    }
    //console.log(list);
  }
}


/*
*
*/
function setBodyClass(event){
  var select = event.target;
  for (var i = 0; i < iframes.length; i++) {
    var bodyElement = iframes[i].contentWindow.document.getElementsByTagName('body')[0];
    for(var k = 0; k < select.options.length; k++){
      bodyElement.classList.remove(select.name + '-' + select.options[k].value);
    }
    bodyElement.className += ' ' + select.name + '-' + select.value;
  }
}


/*
* Put text from input into corresponding text element
*/
function setText(event){
  console.log('text input')
  var input = event.target;
  if(input.value.length){
    for (var i = 0; i < iframes.length; i++) {
      var textInputs = iframes[i].contentWindow.document.querySelector('[data-banner="'+input.name+'"]');
      textInputs.innerHTML = input.value;
    }
  }
}
