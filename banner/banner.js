
/*
*   Lets rumble! ...err wait until external resources are loaded before using them.
*   Looking at you Enabler...
*/
window.onload = function() {
  // check if enabler is initializes
  if (Enabler.isInitialized()) {
    enablerInitHandler();
  } else {
    // if not, listen to the event "INIT"
    Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
  }
}


/*
*  When the Enabler is ready, it calls this method
* Leeeeets ruuumbleeee! Eh or wait. not yet. Check to see if
* if everything is loaded. But get data from the enabler first.
*/
function enablerInitHandler() {

  // load data
  // Dynamic Content variables and sample values
  /*
  * You may access the variables in the following manner
  * AFTER the Studio Enabler is initialized.
  * var h1 = dynamicContent.Profile[0].h1;
  * Note: be sure to use "dynamicContent", not "devDynamicContent"
  * Note: be sure to use ExitOverride to create your exit URL dynamically; follow the instructions on our Help center: https://support.google.com/richmedia/answer/2664807
  */
  Enabler.setProfileId(10017218);
  var devDynamicContent = getDynamicContent();
  Enabler.setDevDynamicContent(devDynamicContent);

  // check if page is loaded
  if (Enabler.isPageLoaded()) {
    loadAd();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, loadAd);
  }
}


/*
* Lest rumble? Nope, Wait until the banner is visible.
* At least make the banner ready. Populate text, get proper image, etc.
* All done by javascript.
*/
function loadAd() {

  // Set dynamic content
  //document.querySelector('[data-banner="h1"]').innerHTML = dynamicContent.swifty_test_oct2017_banner[0].h1;

  // check to see if the banner is visible
  if (Enabler.isVisible()) {
    startAd();
  } else {
    // add visible listenener
    Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, startAd);
  }

  addHandlers();

}

/*
*  Lets stuff the handlers in here for a while
*   required at least one exit handler
*/
function addHandlers(){
    // adding exit handler
    document.getElementById('bg-exit').addEventListener('click', bgExitHandler, false);
}

function bgExitHandler(e) {
  Enabler.exit('Background exit');
}

function getDynamicContent(){
    var devDynamicContent = {}
    devDynamicContent.swifty_test_oct2017_banner= [{}];
    devDynamicContent.swifty_test_oct2017_banner[0]._id = 0;
    devDynamicContent.swifty_test_oct2017_banner[0].unique_id = "peu_oct_01";
    devDynamicContent.swifty_test_oct2017_banner[0].reporting_label = "peu_oct_repost_01";
    devDynamicContent.swifty_test_oct2017_banner[0].lineitem_id = ["1"];
    devDynamicContent.swifty_test_oct2017_banner[0].active = true;
    devDynamicContent.swifty_test_oct2017_banner[0].theme = "gray";
    devDynamicContent.swifty_test_oct2017_banner[0].layout = "leftbar";
    devDynamicContent.swifty_test_oct2017_banner[0].h1 = "nye swifty";
    devDynamicContent.swifty_test_oct2017_banner[0].h2 = "3008 suv";
    devDynamicContent.swifty_test_oct2017_banner[0].h3 = "\u00E5rets bil i europa";
    devDynamicContent.swifty_test_oct2017_banner[0].features = "adaptive cruise control | focal premium hifi-system | swifty i-cockpit";
    devDynamicContent.swifty_test_oct2017_banner[0].price = "299.900 ,-";
    devDynamicContent.swifty_test_oct2017_banner[0].cta_text = "utforsk nye 3008";
    devDynamicContent.swifty_test_oct2017_banner[0].image_text = "motion & emotion";
    devDynamicContent.swifty_test_oct2017_banner[0].bg_img = "car1";
    devDynamicContent.swifty_test_oct2017_banner[0].is_default = true;
    devDynamicContent.swifty_test_oct2017_images= [{}];
    devDynamicContent.swifty_test_oct2017_images[0]._id = 0;
    devDynamicContent.swifty_test_oct2017_images[0]['980x300'] = {};
    devDynamicContent.swifty_test_oct2017_images[0]['980x300'].Type = "file";
    devDynamicContent.swifty_test_oct2017_images[0]['980x300'].Url = "https://s0.2mdn.net/ads/richmedia/studio/41480526/41480526_20171026031412107_980x300_car1.jpg";
    devDynamicContent.swifty_test_oct2017_images[0]['580x500'] = {};
    devDynamicContent.swifty_test_oct2017_images[0]['580x500'].Type = "file";
    devDynamicContent.swifty_test_oct2017_images[0]['580x500'].Url = "https://s0.2mdn.net/ads/richmedia/studio/41480526/41480526_20171026031358028_580x500_car1.jpg";
    devDynamicContent.swifty_test_oct2017_images[0]['580x400'] = {};
    devDynamicContent.swifty_test_oct2017_images[0]['580x400'].Type = "file";
    devDynamicContent.swifty_test_oct2017_images[0]['580x400'].Url = "https://s0.2mdn.net/ads/richmedia/studio/41480526/41480526_20171026031345462_580x400_car1.jpg";
    devDynamicContent.swifty_test_oct2017_images[0]['320x250'] = {};
    devDynamicContent.swifty_test_oct2017_images[0]['320x250'].Type = "file";
    devDynamicContent.swifty_test_oct2017_images[0]['320x250'].Url = "https://s0.2mdn.net/ads/richmedia/studio/41480526/41480526_20171026031331961_320x250_car1.jpg";
    devDynamicContent.swifty_test_oct2017_themes= [{}];
    devDynamicContent.swifty_test_oct2017_themes[0]._id = 0;
    devDynamicContent.swifty_test_oct2017_themes[0].text_color = "white";
    devDynamicContent.swifty_test_oct2017_themes[0].bar_bg_color = "#35302d";
    devDynamicContent.swifty_test_oct2017_themes[0].cta_bg_color = "#bababa";
    devDynamicContent.swifty_test_oct2017_themes[0].cta_text_color = "white";
    devDynamicContent.swifty_test_oct2017_themes[0].cta_bottom_border_color = "#dadada";
    return devDynamicContent;
}

/*
* LEEETS RUUUUUMBLE!!!!
* Start animations. Start all the shiny glorious happenings. The banner is visble and alive!
*/
function startAd() {
  console.log('welcome to banner');
}

/*
* Calculate the size of the banner.
*/
function getResolution(width){
  var resolution = {
    300: "300x280",
    320: "320x250",
    580: "580x500",
    980: "980x300"
  }
  var res = resolution['320'];

  if(width > 0 ){
    for(var size in resolution){
      if(width >= size) res = resolution[size];
    }
  }
  return res;
}
