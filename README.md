# BAlert.js utility

BAlert (read as "Be Alert") is a highly configurable JavaScript utility object for displaying alerts and simple dialogue boxes.

# Table of Contents
- [BAlert Key Features](#balert-key-features)
- [Examples](#examples)
- [Quick Start](#quick-start)
- [BAlert DOM Structure](#balert-dom-structure)
- [Configuration Object](#configuration-object)
- [Configuration Object Attributes](#configuration-object-attributes)
- [BAlert Methods](#balert-methods)
- [Best Practices](#best-practices-and-usage-notes)
- [Internal Strucutures](#internal-structures)
- [Compatibility](#compatibility)
- [Global Namespace](#global-namespace)
- [Acknowledgement](#acknowledgement)
- [Contact](#contact)

# BAlert Key Features 
Some key BAlert features are:

- It can do full **animation** during alert's display and exit.
- It can support images for title and button icons as well as **images** and **videos** as alert's content.
- It has infinite diversity of look and feel since it is fully styled through **CSS style sheets** as well as inline styling. 
- It can be used by all PC and mobile **browsers** and by mobile apps (e.g., through **webview**).
- It can be used as easily as with a **single JS line** of code or handle more complex interactive needs.
- It supports **internal events** (e.g., animation start/end, exit start/end) with callbacks.
- It supports **external events** (e.g., click, window resize, orientation change) with  callbacks.
- It detects "**tap outside** or **tap inside** alert box" events and supports them by callback functions.
- It can handle **multiple simultaneous alerts** by stacking and/or staggering alerts.
- It is **asynchronous**, i.e., the execution does not stop when the alert is displayed.
- It is **highly configurable** through a configuration object.
- It **does not use window pop-ups** and therefore is pop-up safe.
- It has a small footprint (minified gzipped version is less than 5KB).
- It has full **debug** support built in.


# Examples
This [**site**](http://vinoquiz.ddns.net/BAlert/index.php)
has a multitude of `BAlert` usage examples with source code.  The examples cover simple alerts, callbacks, animation, alert nesting/interactive dialogues,
alert stacking/staggering, and using images and videos as `BAlert` content.  You would see some small examples in this document as well.

It is easier to see how `BAlert.js` works by running
live examples and looking at their **source code** before reading the documentation.  An example is worth a thousand words.
The site also provides the source code for each example.  Alerts are fully configurable,
they are styled using CSS style sheets or inline styling, and therefore can have
an infinite diversity of look and feel:

  
![](http://vinoquiz.ddns.net/BAlert/images/ex_santorini.jpg)
![](http://vinoquiz.ddns.net/BAlert/images/ex_code.jpg)
![](http://vinoquiz.ddns.net/BAlert/images/alert4.jpg)
![](http://vinoquiz.ddns.net/BAlert/images/alert1.jpg)
![](http://vinoquiz.ddns.net/BAlert/images/alert5.jpg)
![](http://vinoquiz.ddns.net/BAlert/images/alert6.jpg)
![](http://vinoquiz.ddns.net/BAlert/images/alert7.jpg)
![](http://vinoquiz.ddns.net/BAlert/images/ex_hannibal.jpg)
![](http://vinoquiz.ddns.net/BAlert/images/alert2.jpg)
![](http://vinoquiz.ddns.net/BAlert/images/alert11.jpg)
![](http://vinoquiz.ddns.net/BAlert/images/alert8.jpg)
![](http://vinoquiz.ddns.net/BAlert/images/alert10.jpg)
![](http://vinoquiz.ddns.net/BAlert/images/alert12.jpg)

# Installation
Use any method you are comfortable with to get the BAlert-mini.js and/or BAlert-debug.js sources.  For example, you can clone the `git` repository:

```sh
# clone the repository
mkdir -p /path/to/js/files
cd /path/to/js/files
git clone git://github.com/bnadji/BAlert
```
All you need at the end is the `BAlert-debug.js` or the `BAlert-mini.js` file.  They are both minified, but the `-debug` file has debugging routines
intact so you can run it at different debug levels. The `-mini` file is a pure minified version with debugging statements stripped,
which makes it a few KBytes smaller and suitable for production.

Include the file in the HTML header
as shown below and you are ready to go.
# Quick start
You start using `BAlert` by first including the source file inside the HTML `<head>...</head>` section:

##### Example: including BAlert in the HTML header
```html
<!-- For development and testing: -->
<script src='/path/to/js/files/BAlert/BAlert-debug.js' type='text/javascript' charset='UTF-8'></script>
<!-- Or, for production: -->
<script src='/path/to/js/files/BAlert/BAlert-mini.js' type='text/javascript' charset='UTF-8'></script>
<!-- Or, for production, really small gzipped footprint: -->
<script src='/path/to/js/files/BAlert/BAlert-mini.js.gz' type='text/javascript' charset='UTF-8'></script>
```

You can create alerts by creating a new instance of BAlert:
##### Example: a simple alert
```javascript
// our first alert
new BAlert("Hello World Wide Web!").display();
```

>Note: Note that `BAlert` is an _object_.  You always need to use the `new` operator to create new
instances of it for any new alert.

This will pop up an alert using the built-in default configuration to control its behavior and style (among other things).
The `display()` method will build the structure, animate and display the alert on the screen as we will see later.
The alert will stay up until you click the **Exit** button (the "X" in the upper corner).
The alert will also exit by clicking somewhere outside the alert box.
The *"tap outside of the alert box to exit"* is the default behavior and can be changed through the configuration object as we will see.

>Note: There is no restriction on the content.  This means that the alert content could be an HTML `<img>` or even a video 
 `<iframe>`.    

If you want the alert to **auto exit** (after say, 3 seconds -- 3000 ms), you can give it a time out value (of 3000) as the second argument:

##### Example: a simple auto-exiting alert
```javascript
// alert with auto exit
new BAlert("Hello World", 3000).display();
```
This looks similar to the **Toast** alerts on **Android** devices with no title or buttons, appearing for a few seconds and disappearing after that.
If the time out value is set to zero **0**, it means that the alert will not auto exit.


>Note: By default,
(which can be changed), no exit button is placed on alerts that auto exit in 3 seconds or less.

If you want to add a title (say, "Warning") to the alert, you can use the third argument to `BAlert`:

##### Example: adding title
```javascript
// alert with auto exit and title
new BAlert("WiFi is disconnected", 3000, "Warning").display();
```
Now let us put some **buttons** on the alert. Let's put two buttons, one saying **Abort** and the other saying **Retry**.
Buttons are the fourth argument to `BAlert`:

##### Example: adding buttons
```javascript
// adding buttons
new BAlert("Disk access error", 0, "Warning", [
    { text: "Abort" },
    { text: "Retry" }
]).display();
```
Buttons are always passed as an array of button objects `[{}, {}, ...]` as seen above.  This is true even if there is only one button.
The buttons in the above example don't do anything except that, by default, any button that is pressed will force the alert to exit.  But in order
for the buttons to perform some meaningful function, we need to assign **callback functions** to `onClick` attribute
to handle browser's `onclick` event:

##### Example: adding buttons with callbacks
```javascript
// adding buttons with callback
new BAlert("Disk write error", 0, "Warning", [
    { text: "Abort", onClick: function() { /*do aborting*/} },
    { text: "Retry", onClick: function() { /*do retrying*/} }
]).display();
```
Now when the **Abort** or **Retry** button is pressed, it calls the corresponding callback function.
In both cases the alert exits (by default) after the button is pressed.

If it is necessary to keep the alert up and not exit after a button is pressed, we can set the button's `keepAlert` attribute to **_true_**:

##### Example: keeping alert alive after a button is pressed
```javascript
// adding buttons with callback
new BAlert("Disk write error", 0, "Warning", [
    { text: "Abort", keepAlert: true, onClick: function() { /*do aborting*/} },
    { text: "Retry", keepAlert: true, onClick: function() { /*do retrying*/} }
]).display();
```
There are many more options available as we will see in **`conf.mainButtons` Attribute** section.

The fifth and last argument is the **Configuration Object**:  

##### Example: adding the Configuration Object
```javascript
// adding the main configuration object
new BAlert(
    "Disk write error",
    0,
    "Warning",
    [
        { text: "Abort", onClick: function() { /*do aborting*/} },
        { text: "Retry", onClick: function() { /*do retrying*/} }
    ],
    myConfig
).display();
```
In the above example, `myConfig` is the configuration object that we have provided to configure the alert.
In fact, all the first 4 arguments can also be part of the **Configuration Object**.
We will discuss the structure of the **Configuration Object** later in detail, but the following example (that is equivalent to the previous example)
shows how the alert can just use
a single configuration object to define its content and behavior:

##### Example: using a single Configuration Object as argument
```javascript
// using a single configuration object
var conf = {
  content: {raw: "Disk write error"},
  timeout: 0,
  title: {raw: "Warning"},
  mainButtons: [
      { text: "Abort", onClick: function() { /*do aborting*/} },
      { text: "Retry", onClick: function() { /*do retrying*/} }
  ]
};

new BAlert().setConf(conf).display();
```
The `setConf()` method is used to assign values to configuration object attributes and it will be discussed later.  One can 
use the `setConf()` method to implement the same example as above, but with one attribute at a time:

##### Example: using setConf() to set Configuration Object
```javascript
// using setConf() to set configuration object
var ba = new BAlert();
ba.setConf({content: {raw: "Disk write error"}});
ba.setConf({timeout: 0});
ba.setConf({title: {raw: "Warning"}});
ba.setConf({mainButtons: [
    { text: "Abort", onClick: function() { /*do aborting*/} },
    { text: "Retry", onClick: function() { /*do retrying*/} }
]});
ba.display();
```

To summarize, the overall list of `BAlert`'s optional arguments is:

##### Example: BAlert arguments
```javascript
// BAlert optional arguments
new BAlert(content, timeout, title, buttons, conf);
```
- `content`: a string or an object
- `timeout`: a number
- `title`: a string or an object
- `buttons`: an array of button objects (even if there is only one button)
- `conf`: an object with alert configuring attributes.  It may contain all the first four arguments as well.

There is a lot more to `BAlert` as we will see through the following sections.
In the **"Configuration Object"** section we'll see the attributes of the configuration object **conf** in detail.
In the next section, we will see the internal `DOM` structure of `BAlert`.


# BAlert DOM Structure
Before we talk about the configuration and methods of `BAlert`, we need to understand the structure of `BAlert`.
`BAlert` keeps an internal structure (called **`DOM`**) whose attributes are
references to the corresponding browser DOM elements of the alert.  The picture below shows the internal element names and
the corresponding browser DOM elements that they are referencing:

##### BAlert's DOM structure:
![](http://vinoquiz.ddns.net/BAlert/images/balert_dom4.jpg).

##### Alert Element Names:
- **containerDiv**: an invisible `<div>` containing the whole alert
    - **alertBoxDiv**: a `<div>` that contains the entire visible part of the alert
        - **titleDiv**: a `<div>` containing the title of the alert
            - **titleIcon**: an `<img>` containing the icon image for the title
            - **titleText**: a `<span>` containing the title's text
            - **exitButton**: the exit `<button>`
                - **exitButtonIcon**: an `<img>` containing the exit button's "X" icon
                - **exitButtonText**: a `<span>` contain the exit button's "X" text
        - **contentDiv**: a `<div>` containing the alert message content's `<span>`
            - **contentIcon**: an `<img>` containing the icon image for the content
            - **contentText**: a `<span>` containing the alert's message text
        - **mainButtonsDiv**: a `<div>` containing the alert's buttons
            - **mainButtons0**: the left-most main `<button>`
                - **mainButtonsIcon0**: an `<img>` for the first (left-most) button's label
                - **mainButtonsText0**: a `<span>` for the first (left-most) button's text
            - **mainButtons1**: the next main `<button>`
                - **mainButtonsIcon1**: an `<img>` for the next button's label
                - **mainButtonsText1**: a `<span>` for the next button's text
            - *similar structure for other buttons*

In addition, **mainButtons** is an array of main button elements.  In other words, **mainButtons** = [**mainButtons0**, **mainButtons1**, ...].
We will refer to these names (e.g. **alertBoxDiv**, **titleText**, etc.) as **alert element names** in this document.

>Note: Alert element names are different than browser DOM element `id`s, although their usage has similarities
as seen in the example below.


The primary use of the alert element names is to get access to the browser DOM element that they represent, using the
`getElement()` method.
In the following example, the alert element name **contentDiv** is used along with the `getElement()` method
to get access to the corresponding DOM element to set its content background to _blue_:

##### Example: Using alert element name to access the DOM element:
```javascript
var alrt = new BAlert("Hello World").display();
alrt.getElement("contentDiv").style.backgroundColor = "blue";
```
Another more convoluted way of doing the same would be to get the browser DOM element `id` first, and then use pure JavaScript
methods to manipulate it:

##### Example: Getting the alert's browser DOM id:
```javascript
var alrt = new BAlert("Hello World").display();
var id = alrt.getElement("contentDiv").id;
document.getElementById(id).style.backgroundColor = "blue";
```
All alert elements have a corresponding CSS class for styling.  The default name of this class is the element name preceded
with a **"bajs\_"**. For example, the default name of the class used for styling **contentText** is **bajs_contentText**.

##### Tabular Summary of Alert Element Names:
|**Alert Element Name**|**Default CSS Class Name**|**DOM Elem. Type**|**Description**|
|----------------------|----------------------|:---------------:|------------|
|**containerDiv**|bajs_containerDiv|`<div>`|invisible `<div>` containing the whole alert|
|**alertBoxDiv**|bajs_alertBoxDiv|`<div>`|the entire visible area of the alert|
|**titleDiv**|bajs_titleDiv|`<div>`|the title area of the alert|
|**titleIcon**|bajs_titleIcon|`<img>`|contains the icon image for the title|
|**titleText**|bajs_titleText|`<span>`|contains the title's text|
|**exitButton**|bajs_exitButton|`<button>`|exit button|
|**exitButtonIcon**|bajs_exitButtonIcon|`<img>`|contains the exit button label icon|
|**exitButtonText**|bajs_exitButtonText|`<span>`|contains the exit button's "X" label text|
|**contentDiv**|bajs_contentDiv|`<div>`|the alert message area|
|**contentIcon**|bajs_contentIcon|`<img>`|contains the icon image for the content|
|**contentText**|bajs_contentText|`<span>`|contains the alert's message text|
|**mainButtonsDiv**|bajs_mainButtonsDiv|`<div>`|the alert's main buttons area|
|**mainButtons**|N/A|array of `<button>`|array of [**mainButtons0**, **mainButtons1**,...]|
|**mainButtons0**|bajs_mainButtons|`<button>`|first (left-most) main button|
|**mainButtonsIcon0**|bajs_mainButtonsIcon|`<img>`|contains first (left-most) button's label icon|
|**mainButtonsText0**|bajs_mainButtonsText|`<span>`|contains first (left-most) button's label text|
|**mainButtons1**|bajs_mainButtons|`<button>`|next main button|
|**mainButtonsIcon1**|bajs_mainButtonsIcon|`<img>`|contains next button's label icon|
|**mainButtonsText1**|bajs_mainButtonsText|`<span>`|contains next button's label text|
|*...etc., for more buttons*| ... | ... | ... |

>Note: See the **BAlert `getStructure()` Method** for details on visualizing the internal structure of the alert.




# Configuration Object
`BAlert` keeps an internal structure, called **conf** whose attributes control the *content*, *behavior*, *style*
and *look and feel* of the alert.
This configuration object can be entered all in one piece,
or more commonly, as small changes to the default configuration as we saw in the **"Quick Start"** section.
We'll see the latter when we talk about `setConf()` method.

Here is a (nearly) complete **conf** configuration object.  We say _nearly_ because there are internal attributes that are not of interest to
users of this utility and therefore are not shown here. Default value for each attribute is also shown.
As was seen in **Quick start** examples earlier,
you only need to supply the options when you want to override the defaults:

##### BAlert's Configuration Object
```javascript
var conf = {

  //////////////
  // Structure
  //////////////
  
  position: {
    X: "center",        // X position after alert is displayed -- see below for values
    Y: "15%",           // Y position after alert is displayed -- see below for values
    staggerX: "~5px",   // horizontal distance of alerts from each other when stacking alerts
    staggerY: "5px"     // vertical distance of alerts from each other when stacking alerts
  },
  content:  {
    icon: "",           // alert's content icon image file name
    text: "",           // alert's content text
    raw: "",            // alert's content raw html -- if given, text and icon are ignored
  },
  title: {
    icon: "",           // alert's title icon image file name
    text: "",           // alert's title text
    raw: "",            // alert's title raw html -- if given, text and icon are ignored
  },
  mainButtons: [          // an array of objects, each of which is an alert button
    {
      icon: "",           // button label icon image file name
      text: "",           // button label text
      raw: "",            // button raw -- if given, text and icon are ignored
      onClick: null,      // button callback function
      keepAlert: false,   // should alert stay up when the button is pressed?
      inlineStyle: "",    // a string containing inline CSS styles for this button
      selfRemove: false,  // should button remove itself when it is pressed?
      selfDim: false,     // should button dim itself when it is pressed?
      selfHide: false,    // should button hide itself when it is pressed?
      selfDisable: false  // should button disable itself when it is pressed?
    }
    // more buttons       // additional buttons -- mainButtons is an array of button objects
  ],
  
  exitButton: {             // the top corner "X" button used to exit alert
    icon: "",               // icon image file name for exit button label. If present, text is ignored
    text: "&times;",        // text string (character) used for "X" label on the exit button
    raw: "",                // raw html used as "X" for exit.  If present, text and icon are ignored
    onClick: null,          // button callback function
    keepAlert: false,       // should alert stay up when the button is pressed?
    inlineStyle: "",        // a string containing inline CSS styles for this button
    visible: function(){}   // should exit button be visible? -- default is an internal boolean function
                            // other self* attributes (shown above) are also supported but not useful
  },
  
  //////////////
  // Animation
  /////////////
  
  alertStart: {             // controls alert's start animation
    duration: 500,          // alert start animation duration (ms) - 0 means no animation
    dir: "top",             // direction from which the alert appears -- see below for values
    scale: 0,               // starting size factor of the alert before animation
    rotate: 0,              // number of rotations of the alert during display animation
    delay: 0,               // induced delay (in ms) before the start of display action
    func: "ease-in"         // CSS transition-timing-function name
  },
  
  alertExit: {              // controls alert's exit animation
    duration: 350,          // alert exit animation duration (ms) - 0 means no animation
    dir: "none",            // direction to which the alert exits -- see below for values
    scale: 0,               // ending size factor of the alert after animation
    rotate: 0,              // number of rotations of the alert during exit animation
    func: "ease-out"        // CSS transition-timing-function name
  }, 

  //////////////
  // Callbacks
  //////////////
  
  callbacks: {                  // callback functions handling internal and external events
    onDisplayBegin: null,       // function called before alert starts to display
    onDisplayEnd: null,         // function called after alert has displayed
    onExitBegin: null,          // function called before alert starts to exit 
    onExitEnd: null,            // function called after alert has finished exiting
    onResize: function(){},     // function called when window resizes -- see below for default value
    onTapOutside: function(){}, // function called when user clicks outside of alert box -- see below
    onTapInside: null           // function called when user clicks inside of alert box
  },

  ///////////////////
  // classes & Styles
  ///////////////////
  
  classPrefix: "bajs_", // prefix for CSS class names, e.g., bajs_containerDiv for containerDiv
  defaultClasses: {
    apply: true,        // (boolean) Should built-in CSS style sheet be applied?
    values: {}          // built-in CSS styling class strings -- removed for brevity
  },

  inlineStyles: {       // inline style strings for various alert element parts 
    containerDiv: "",
    alertBoxDiv: "",
    titleDiv: "",
    titleIcon: "",
    titleText: "",
    contentDiv: "",
    contentText: "",
    exitButton: "",
    exitButtonIcon: "",
    exitButtonText: "",
    mainButtonsDiv: "",
    mainButtons: "",
    mainButtonsIcon: "",
    mainButtonsText: ""       
  },        

  /////////
  // Misc
  /////////
  
  iconsPath: "",          // path (relative or absolute) for title, content, and button icon image files
  startingZIndex: 1000,   // value set higher than largest z-index the app may use
  timeout: 0,             // alert's time to live in (ms) -- 0 means stay up until exited by user
  DEBUG: 0                // debug level, from 0-15 -- see setDebug() method for details.
};
```
Below is the detailed explanation of each configuration object attribute:


# Configuration Object Attributes
The details of each attribute of the above configuration object `conf` follows:


### `conf.position` Attribute
---
This object defines the final position of the alert on the screen.  The attributes are:
- `X`: the horizontal distance of the left edge of the alert from the left edge of the window.  Valid values are:

    - <*num*>: (e.g., **_15_**) a number, interpreted in pixels (`px`) which is the default unit
    - "<*num*>": (e.g. **_"15"_**) a string containing a number (in pixels) 
    - "<*num*>*px*": (e.g. **_"15px"_**) a string starting with a number in the `px` unit -- same as above 
    - "<*num*>*rem*": (e.g., **_"5.2rem"_**) a string starting with a number in the `rem` unit
    - "<*num*>*%*": (e.g., **_"10%"_**) a string containing a number that represents the percentage of window width
    - **_"center"_** or **_"c"_**: horizontally centers the alert
    
   >Note: Negative numbers have a special interpretation.  While a positive number, e.g. **_10_**, **_"10px"_**, or **_"10%"_** is measured from the
left edge of the window, a negative number, e.g., **_-10_**, **_"-10px"_** or **_"-10%"_** is the distance of the the right edge of the alert box
measured from the right side of the window.
    
- `Y`: the vertical distance measured from the top of the alert box to the top of the window.
The valid values have the same interpretation as above,
except replace horizontal with vertical,  width with height and left and right with top and down respectively.

- `staggerX`: in cases where multiple consecutive alerts are displayed that have the same `X` and `Y` position,
this attribute defines the horizontal offset
used on the second and subsequent alerts to stack the alerts.  Valid values are:
    - <*num*>: (e.g., **_5_**) a number (interpreted in pixels- `px`, which is the default unit) 
    - "<*num*>": (e.g., **_"5"_**) a string containing a number (in pixels)
    - "<*num*>*px*": (e.g., **_"5px"_**) a string starting with a number in the `px` unit -- same as above
    - "<*num*>*rem*": (e.g., **_"0.5rem"_**) a string starting with a number in the `rem` unit
    - "<*num*>_%_": (e.g., **_"5%"_**) a string containing a number that represents the percentage of window width
    - Any of the above strings starting with a tilde "**~**" (e.g., **_"~5px"_**): the string represents the offset that alternates between
    positive and negative for each new alert.

   >Note: Unlike in `X` and `Y`, negative numbers in `staggerX` and `staggerY` *do not* have a special interpretation here.
While a positive number, e.g. **_10_**, **_"10px"_**, or **_"10%"_** 
is the positive offset to the right of the left edge of the previous alert, a negative number, e.g., **_-10_**, **_"-10px"_** or **_"-10%"_**
is the offset to the left of the left edge of the previous alert.
    
- `staggerY`: the vertical offset used on the second and subsequent alerts when multiple alerts are stacked.
The valid values have the same interpretation as if `staggerX`,
except replace horizontal with vertical,  width with height and left and right with top and down respectively.

>Note: Units other than `px` and `rem` or other invalid strings are silently ignored and the value is assumed to be in default `px` units.
A blank string **_""_** is interpreted as **_"0px"_**.

In the following example, (upper left corner of) the alert is placed at **_50px_** from the left edge of the window, and **_4.2rem_**
from the top of the window:

##### Example: Positioning alerts to a fixed spot 
```javascript
// alert placed in a fixed position
new BAlert("Hello World!", 0, null, null, {
    position: {X:"50px", Y:"4.2rem"} 
}).display();
```
In the following example, the alert is placed at **_10px_** off from the bottom right corner of the window:

##### Example: Positioning alerts to a fixed spot 
```javascript
// alert placed close to bottom right corner
new BAlert("Hello World!", 0, null, null, {
    position: {X:"-10px", Y:"-10px"} 
}).display();
```

The following example completely aligns the center of the alert box with the center of the window:

##### Example: Centering an alert 
```javascript
// centered alert
new BAlert("Hello World!", 0, null, null, {
    position: {X:"c", Y:"c"} 
}).display();
```
The following example creates three alerts that are centered horizontally.  The first one has a vertical distance of **_20%_**
(of the height of the window) from the top of the screen.
The second and third alerts offset themselves from the previous alert by **_5px_** horizontally and **_0.4rem_** vertically:

##### Example: Stacking alerts 
```javascript
// multiple alerts stacked with fixed offset from each other
for (var i=1; i<=3; i++)
    new BAlert("Hello World; Alert #"+i, 0, null, null, {
        position: {X:"c", Y:"20%", staggerX:"5px", staggerY:"0.4rem"} 
    }).display();
```

In the following example, we create 5 alerts. The first alert is centered horizontally and positioned **_4rem_** from the top edge of the window.
The subsequent alerts offset themselves from the previous one by **_5px_** vertically, but have a horizontal offset
that alternates between **_10px_** and **_-10px_** (note the use of tilde **"~"** in `staggerX`):

##### Example: Stacking and staggering multiple alerts 
```javascript
// multiple alerts stacked and staggered to left and right
for (var i=1; i<=5; i++)
    new BAlert("Hello World; Alert #"+i, 0, null, null, {
        position: {X:"c", Y:"4rem", staggerX:"~10px", staggerY:"5px"} 
    }).display();
```


### `conf.size` Attribute 
---
There is no such thing as `conf.size`. You may have noticed the absence of the `size` attribute in the configuration object.  This is intentional.
Browsers along with the style sheets are in the best position to find the optimal size for the alerts.  So we
do not explicitly define them.  You can, however, define alert *height* and *width* through CSS style classes or inline styling, or use style
sheet class attributes such as *max-width* and *max-height* to control the size.


### `conf.content` Attribute
---
The `content` attribute is an object containing the main content of the alert box message.  It has the following attributes:
- `icon`: It contains the the name of the icon image file for the content.  This image is placed in the DOM **contentDiv** `<div>`
and is styled with the CSS class that has the default name **bajs\_contentIcon**.

- `text`: It contains the text of the message. It may contain HTML instructions.
This text is placed in the DOM **contentDiv** `<div>` inside a `<span>` with the name **contentText**
and is styled with the CSS class name **bajs\_contentText**.

- `raw`: It contains a preformatted HTML string as the message content of the alert.  If present, `text` and `icon` attributes are ignored, 
 the **contentIcon** `<img>` and **contentText** `<span>` elements are not created and the value of this attribute is placed in **contentDiv**'s
`innerHTML` as is.
Note that since this is preformatted HTML, no CSS classes are used to style it.

>Note: In the **"Quick Start"** section, we saw that message content can be passed to `BAlert` as a string argument.
If content is given as a string argument to `BAlert`, it is interpreted as the `conf.content.raw` value.

So in the following example, the two statements are equivalent:

##### Example: Passing content as a string, or an object with HTML attribute 
```javascript
// passing a string argument to BAlert
new BAlert("Hello World").display();
// is the same as passing an object with raw attribute:
new BAlert({ raw:"Hello World" }).display();
```
In the above example, the content ("Hello World") is passed as a string or a content `raw` attribute and therefore is
assumed to be a preformatted HTML string and is not styled using its corresponding class in CSS style sheet.
But in the following, the content is passed using the `text` attribute and so it is styled using the corresponding CSS style sheet class:

##### Example: Passing content as an object argument with text attribute 
```javascript
// text is styled
new BAlert({ text:"Hello World" }).display();
```
The fact that we can pass any preformatted string as content to `BAlert` means that we can have alerts with any content.
In the following example, an image (of _Santorini, Greece_) is shown to the
users as the alert's content and the users are asked whether they likes it or not:

##### Example: Using an image as content 
```javascript
// image as alert content
var myImage = "<img src='/path/to/my/images/santorini.jpg' style='width:50px; height:50px;'>";
new BAlert(myImage, 0, "Do you like Santorini?", [
    {text:"Yes", icon:"icon_yes", onClick: function() {/*user said yes*/}},
    {text:"No",  icon:"icon_no",  onClick: function() {/*user said no*/}} 
]).display();
```
Or we can use a video `iframe` as content:
```javascript
// An alert with video content
var video = '<iframe style="width:70vw; height:25vw" src="https://www.youtube.com/embed/SEQZiElLp-E" ' +
    'frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>';
var conf = {
    defaultClasses: {apply: false},
    content: {raw: video},
    title: {text: "Chianti Sales on the Rise"},
    alertStart: {dir: "top", scale: 1, rotate: 0, duration: 500, func: "ease-in"},
    alertExit:  {dir: "none", scale: 0, rotate: 1, duration:  500, func: "ease-out"},
    exitButton: {visible: false},
    mainButtons: [
        {text:"Exit", icon:"icon_exit", onClick: function() {console.log("Exit was pushed"); }}
    ],
  iconsPath: "./images/"       
};

new BAlert().setConf(conf).display();
```
  
  
### `conf.title` Attribute
---
The `title` attribute is an object that contains the main content of the alert box title.  It has the following attributes:
- `icon`: It contains the the name of the icon image file for the title.  This image is placed in the DOM **titleDiv** `<div>`
and is styled with the CSS class that has the default name **bajs\_titleIcon**.

- `text`: It contains the text of the title.  It may contain HTML instructions.
This text is placed in the DOM **titleDiv** `<div>` inside a `<span>` with the name **titleText**
and is styled with the CSS class that has the name default name **bajs\_titleText**.

- `raw`: It contains a preformatted HTML string as the title of the alert.
If present, `text` and `icon` attributes are ignored, the **titleText** `<span>` and **titleIcon** `<img>` elements are not created, and
the value of this attribute is placed in **titleDiv**'s `innerHTML` as is. Note that since this is preformatted HTML,
no CSS classes are used to style it. 

>Note: In the **"Quick Start"** section, we saw that title can be passed to `BAlert` as a string argument.
If title is given as a string argument to `BAlert`, it is interpreted as the preformatted `raw` attribute.

So in the following example, the two statements are equivalent:

##### Example: Passing title as string, or an object with HTML attribute 
```javascript
// passing the title ("My title") as a string argument or an object to BAlert
new BAlert("Hello World", 0, "My title").display();
// is the same as passing an object with raw attribute:
new BAlert({raw: "Hello World"}, 0, {raw:"My title"}).display();
```
But in the following, the title text is passed using the `text` attribute and so it is styled using the corresponding CSS style sheet class:

##### Example: Passing title as an object with text attribute
```javascript
// title text is styled
new BAlert("Hello World", 0, {text:"My title"}).display();
```
>Note: Using `text` attribute to pass title's text to alerts is the preferred method, since it allows applying the corresponding CSS styles.
This is important because titles are often emphasized, i.e., they are often in **bold** or *italic* by style sheet class definitions.
So when the title is passed as an object with the `text` attribute, it is styled accordingly.
But if it is passed as a string or an object with `raw`
attribute, it is not styled because it is assumed to be a preformatted HTML string.


### `conf.mainButtons` Attribute
---
This attribute is actually an array of button objects.  It is an array even if there is only one button.
Each button object has the following attributes:  
- `text`: a text string that appears on the button as label.
- `icon`: the name of the icon image file that appears on the button as label along with the `text`.
- `raw`: a preformatted HTML string to use as button label.  If present, `text` and `icon` are ignored.  Note that
this is considered a preformatted HTML string and therefore it is not styled with CSS styles.
- `index`: is the index number of the button.  Button indices start from 0 (left-most button).
- `onClick`: a function that is called when the button is pressed or **_null_** if no callback.
The callback function always receives two arguments; first is a reference to the alert object, and the second is a reference to
the button object that was pressed.  See the examples below.
- `keepAlert`: a boolean (default: **_false_**); if set to **_true_**, it keeps the alert up (i.e., alert does not exit) when the button is pressed.
- `inlineStyle`: a string (default: **_null_**); if set to a string, the value outlines local inline changes to global CSS styles for the button.
For example, if `inlineStyle` is set to `"color: yellow; background-color: red"`, the button label will be displayed as yellow text on red background,
replacing any other `.css` background or text color specifications. However, other buttons
will have the style attributes that where globally defined through `.css` style sheets or built-in default styles.

While the following functions can all be implemented using the `onClick()` callback function,
they are added as boolean attributes for usage convenience:
- `selfRemove`: a boolean (default: **_false_**); if set to **_true_**, the button removes itself when pressed.
The button is completely removed from browser's DOM and
other buttons are rearranged to fill the emptied real estate.
- `selfDim`: a boolean (default: **_false_**); if set to **_true_**, the button dims itself when pressed.
The button remains functional.
- `selfHide`: a boolean (default: **_false_**); if set to **_true_**, the button hides itself when pressed.
The button is still in browser DOM but it is hidden from view and cannot be pressed.  Other buttons are not rearranged.
- `selfDisable`: a boolean (default: **_false_**); if set to **_true_**, the button disables itself when pressed so it can no longer perform any
function if pressed again.

The  examples below shows how one can create alerts with one time use buttons.  The first one prompts the user to **archive** and/or **submit**
the results of some operation.
When user presses either of **Submit** or **Archive** buttons, the button dims and disables itself so it cannot be used again:

##### Example: Self-disabling/dimming one-time use button 
```javascript
// self disabling buttons
new BAlert({text: "Please press Archive to save and/or press Submit to send the results"},
    0,
    {text: "Operation Successful"}, 
    [{
        text:"Archive",
        onClick: function() {/*do archiving*/},
        keepAlert: true,
        selfDim: true,
        selfDisable: true
    },{
        text:"Submit",
        onClick: function() {/*do submitting*/},
        keepAlert: true,
        selfDim: true,
        selfDisable: true
    }]
).display();
```
The next example performs the same function, but uses the `selfRemove` attribute to remove the button completely after the first press.
Notice how the other button rearranges itself:

##### Example: Self-removing one-time use button 
```javascript
//self removing buttons
new BAlert({text: "Please press Archive to save and/or press Submit to send the results"},
    0,
    {text: "Operation Successful"}, 
    [{
        text:"Archive",
        onClick: function() {/*do archiving*/},
        keepAlert: true,
        selfRemove: true
    },{
        text:"Submit",
        onClick: function() {/*do submitting*/},
        keepAlert: true,
        selfRemove: true
    }]
).display();
```

In the next example, the same callback function is called by all buttons. The callback function itself
uses the button's `text` attribute to find out which button was pressed.  Note that there are always two arguments
passed to the button callbacks, a reference to the alert object and a reference to the button that was pressed:

##### Example: Shared callback, identifying the pushed button 
```javascript
// Figuring which button was pushed by the button's text attribute

new BAlert({text: "Please press Archive to save or press Submit to send the results"},
    0,
    {text: "Operation Successful"}, 
    [{
        text:"Archive",
        onClick: function(alrt, btn) {buttonPushed(alrt, btn);}
    },{
        text:"Submit",
        onClick: function(alrt, btn) {buttonPushed(alrt, btn);}
    }]
).display();

function buttonPushed(alrt, btn) {
    // use button's text attribute to find out which button was pushed
    switch (btn.text) {
        case('Archive'):
            // do archiving
            break;
        case ('Submit'):
            // do submitting
            break;
    }
}
```
We could have also used the button's `index` attribute (0 for left most button "Archive", 1 for next button "Submit", etc.)
to determine which button was pressed.

In the following example, we demonstrate the use of alert object reference inside the `onClick` callback
function to change alert properties.  The callback function changes the color of the alert box
randomly when the **Change** button is pressed.
The `getElement()` method will be explained later in
the **"BAlert Methods"** section, but not unlike JavaScript's `getElementById()`,
it basically returns a reference to the alert box' `<div>` in browser's DOM:

##### Example: Change alert properties inside callbacks 
```javascript
// return a random hex color string of the form #AAA
function getRandomColor() {
    function randHex() {return Math.floor(Math.random() * 16).toString(16);}
    return "#" + randHex() + randHex() + randHex();
}

// using callbacks to change alert properties
new BAlert({text: "Click to change alert's color"}, 0, null, 
    [{
        text:"Change",
        keepAlert: true,
        onClick: function(alrt) {
            alrt.getElement().style.backgroundColor = getRandomColor();
        }
    }]
).display();
```
In the next example, we use button callbacks and nested alerts to get confirmation (_"Are you sure?"_) before deleting
the result of an operation.  If confirmation is positive, delete is done and both alerts exit.
If confirmation is negative, we return to the original alert.  In all cases, a short (1.5 second) message is displayed to
show what is being done.  Note the use of `inlineStyle` attribute to turn the *Delete* button text to red:

##### Example: Nested alerts through callbacks 
```javascript
//Button callback pops another alert to get confirmation
var ba = new BAlert({text: "Choose Archive, Submit, or choose Delete to remove the results"},
    0, {text:"Operation Successful"}, 
    [{
        text:"Archive",
        onClick: function() {
            /*do archiving*/
            new BAlert("Archiving...", 1500).display();
        }
    },{
        text:"Submit",
        onClick: function() {
            /*do submitting*/
            new BAlert("Submitting...", 1500).display();
        }
    },{
        text:"Delete",
        onClick: function(alrt) {doConfirm(alrt);},
        inlineStyle: "color: red",
        keepAlert: true
    }]
).display();
        
function doConfirm(alrt) {
    new BAlert({text: "Are you sure?"}, 0, {text:"Warning!"}, 
        [{
            text:"Yes",
            onClick: function() {
                /*do deleting*/
                new BAlert("Deleting...", 1500).display();
                alrt.exit();
            }
        },{
            text:"No"
        }]
    ).display();
} 
```


### `conf.exitButton` Attribute
---
The exit button object is what normally appears as an "X" on the top corner of the alerts, and when pressed, it
forces the alerts to exit.  As a button, it support all the attributes we mentioned before under of **"`conf.mainButtons` Attribute"** section,
but the following attributes are the ones that are most useful:  
- `text`: a text string, resembling an "X" that appears on the exit button as label, e.g.  `"x"`, `"&times;"` or `"&#x2716;"`.
- `icon`: the name of the icon image file that appears on the exit button as label.
If present, `text` is ignored.  
- `raw`: a raw html string, hopefully resembling an "X", that appears on the exit button as label.  If present, `text` and `icon` are ignored.
Note that this is considered a preformatted HTML string and therefore it is not styled with CSS styles.

   >Note: If none of `text`, `icon` or `raw` are present a default text (`"x"`) character is used.
   
- `onClick`: a function that is called when the button is pressed or **_null_** if no callback.
- `keepAlert`: a boolean (default: **_false_**); if set to **_true_**, it keeps the alert up (i.e., alert does not exit) when the button is pressed.
This is only useful if you want to manage the alert's exit through your own callback function.
   >Note: You can override the default (exit) action of this button by setting `keepAlert` to **_true_**
and then managing the exit through your own `onClick` callback function which would optionally call the `exit()` method at the end to exit.

- `inlineStyle`: a string (default: **_null_**); if set to a string, the value outlines local inline changes to global CSS styles for the button.
For example,
if `inlineStyle` is set to `"float: left; color: red"`, the exit button "X" is turned red and is moved to the upper left corner of the alert box
instead of the usual upper right.
- `visible`: a boolean or a function returning a boolean. If `visible` is a function, a reference to the alert object is passed to it as the argument.
If `visible` evaluates to (or is)  **_true_**, it means that the exit button will be built and displayed.
If **_false_**, no exit button will be constructed or displayed.

  The default value of the `visible` attribute is an internal function that is set to return
**_true_** if timeout is non-zero and less than or equal to 3 seconds.
The logic behind this internal function is that if the alert is auto exiting in 3 seconds or less, there
is no need for an exit button.


### `conf.alertStart` Attribute
---
This object defines the **animation** behavior of the alert when it **starts**.  It has several attributes:
- `duration`: a number indicating the length of time (in ms) that it takes for the alert to appear.  A **_0_** indicates no animation.
- `dir`: a string (or an array) indicating the direction from which the alert enters the visible screen.  The accepted values are:

    - **"none"** means alert will start in place.
    - **"left"** means directly from the left
    - **"right"** means directly from the right
    - **"top"** means directly from the top
    - **"bottom"** means directly from the bottom
    - **"center"** means from the center of the window
    - **"top left"** or **"left top"** means from top-left corner
    - **"top right"** or **"right top"** means from top-right corner
    - **"bottom left"** or **"left bottom"** means from bottom-left corner
    - **"bottom right"** or **"right bottom"** means from top-right corner
    - **"center left"** or **"left center"** means from center-left side
    - **"center right"** or **"right center"** means from center-right side
    - **"center top"** or **"top center"** means from center-top side
    - **"center bottom"** or **"bottom center"** means from center-bottom side
    - **"center center"** is the same as **"center"** and it means from the center of the window
    
    >Note: There is only one space allowed in multi-word `dir` strings.  Also any invalid `dir` value will default to **"none"**.
    
    - **[X,Y]** is an array of X and Y coordinates from which the center of the alert box starts its display animation.
    X and Y take on the same values as defined under `position.X` and `position.Y` in **"`conf.position` Attribute"** section.
    Using **[X,Y]** along with `scale: 0` (explained below), and `getCenterPosition()` method can help create the effect that one
    alert is emerging from within another alert or another DOM element (see animation [examples](http://vinoquiz.ddns.net/BAlert/index.php)).
    

- `delay`: an integer (default: **0**); an artificially induced delay (in ms) before the display action begins.
- `scale`: a number that indicates the scale factor for the alert size before it starts.  A **0** means that the alert starts from a zero size,
(or a single pixel) to its full size when the animation ends.  A **0.5** scale means the alert starts from half of its final size and grows to its final size
by the time the animation ends.  Values outside of **0** and **1** are possible but not common.  A negative value flips the alert.  A value larger than **1** 
will start the alert from a large size and converges to the final size when the animation ends.
- `rotate`: a number indicating the number of 360 degree rotations (spins) that the alert makes before it reaches its final position.
A positive number rotates clockwise, a negative number rotates counter-clockwise.

    >Note: To be readable, alert's starting position for animation is chosen such that the alert always ends up
    in the natural upright position at the end of animation,
    even if `rotate` is not a whole number.  For example, a value of **0.5** for `rotate` means that the alert will
    start from an upside down position and finishes in the normal upright position after a 180 degree turn.

- `func`: a string indicating the transition timing function.  This mathematical function outlines how fast the alert animation behavior
changes. It can take on values such as:

    - **"linear"**
    - **"ease-in"**
    - **"ease-out"**
    - **"ease-in-out"**
    - **"cubic-bezier(n1, n2, n3, n4)"**, e.g., **"cubic-bezier(.39, .5, .87, .51)"**
    - ...etc. Any value that is accepted by the **CSS transition-timing-function** standard is also accepted here.

The following example, uses an `alertStart` configuration that will fly in the alert from upper left corner of the screen,
expanding its size from a dot to full size and rotating it 1.5 times in one second, using the timing function **ease-in-out**:

##### Example: Alert start animation
```javascript
// start animation
new BAlert("Hello World!", 0, null, null, {
    alertStart: {duration:1000, dir:"top left", scale:0, rotate:1.5, func:"ease-in-out"} 
}).display();
```

See more examples in the next section.


### `conf.alertExit` Attribute
---
This object defines the **animation** behavior of the alert when it **exits**.  The attribute have similar interpretation to that of `alertStart` above,
but as applied to the exit behavior of the alert.  For example, the `scale` attribute defines the final size factor of the alert at the end of
its exit animation, the `dir` attribute defines the exit direction of the alert,
and the `delay` attribute defines the induced delay before the exit action begins.

In the following example, we add an `alertExit` object definition to the previous example. When the exit button is pressed, the `alertExit` object
causes the alert to exit by making a half rotation and falling to the
center bottom of the screen and disappearing in 0.5 second, giving the impression that it is unhinging and falling into the abyss!

##### Example: Animating alerts; exiting into abyss! 
```javascript
new BAlert("Goodbye Cruel World", 0, null, null, {
    alertStart: {duration:500, dir:"top", scale:0, rotate:0, func:"ease-in-out"}, 
    alertExit:  {duration: 2000, dir:"bottom center", scale:0, rotate:0.5, func:"ease-in-out"} 
}).display();
```
In the following example, a cubic Bezier function is used for managing alert's motion timing.
Alert animation starts slow, speeds at the end and comes to an immediate halt, giving the impression of snapping into place:

##### Example: Animating alerts; using cubic-bezier for snapping alert to position 
```javascript
new BAlert("You have received an urgent email", 0, "Email from Steve", null, {
    position:  {X: "center", Y: "20%"},
    alertStart: {dir: "right", scale: 1, duration: 1000, func: "cubic-bezier(.91,.39,.92,.61)"},
    alertExit:  {dir: "right", scale: 1, duration:  500, func: "ease-out"}           
}).display();
```

More examples:

##### Example: Animating alerts; similar effect to Windows 10 notifications 
```javascript
new BAlert("You have received an urgent email", 0, "Email from Steve", null, {
    position:  {X: "-10px", Y: "-10px"},
    alertStart: {dir: "right", scale: 1, duration: 1000, func: "ease-in"},
    alertExit:  {dir: "right", scale: 1, duration:  500, func: "ease-out"}           
}).display();
```

##### Example: Animating alerts; helicoptering in and out 
```javascript
new BAlert("Hello World!", 0, null, null, {
    position: {X:"center", Y:"20%"},
    alertStart: {duration:1000, dir:"top left", scale:0, rotate:3, func:"ease-in-out"}, 
    alertExit:  {duration: 500, dir:"top right", scale:0, rotate:3, func:"ease-in-out"} 
}).display();
```

##### Example: Animating alerts; emerge and vanish in-place 
```javascript
new BAlert("Hello World", 0, null, null, {
    alertStart: {duration:1000, dir:"none", scale:0, rotate:0, func:"ease-in-out"}, 
    alertExit:  {duration: 500, dir:"none", scale:0, rotate:0, func:"ease-in-out"} 
}).display();
```

##### Example: Animating alerts; headline news 
```javascript
new BAlert("Allies Land in France", 0, "Headline News", null, {
    position: {X:"center", Y:"center"},
    alertStart: {duration: 2000, scale:0, rotate: 6, dir:"center"}, 
    alertExit:  {duration: 0} 
}).display();
```

##### Example: Animating alerts; inflate on exit 
```javascript
new BAlert("Allies Land in France", 0, "Headline News", null, {
    position: {X:"center", Y:"center"},
    alertStart: {duration:1000, dir:"none", scale:0, rotate:3, func:"ease-in-out"}, 
    alertExit:  {duration: 500, dir:"none", scale:4, rotate:0, func:"ease-in-out"} 
}).display();
```


### `conf.callbacks` Attribute
---
`BAlert` supports multiple callbacks for the following internal and external events.  All callback functions
receive a reference to the alert object as their argument:
- `onDisplayBegin`: this function is called just before alert starts to display (or begin the display animation).  Default is **_null_**.
- `onDisplayEnd`: this function is called after alert has displayed (or ended the display animation).  Default is **_null_**.
- `onExitBegin`: this function is called just before alert starts to exit (or begin the exit animation).  Default is **_null_**.
- `onExitEnd`: this function is called after alert has finished exiting (or ended the exit animation).  Default is **_null_**.

   >Note: if no start animation is requested, then `onDisplayBegin` and `onDisplayEnd` are nearly simultaneous.
Also, if there is no exit animation, then `onExitBegin` and `onExitEnd` are nearly simultaneous.

- `onResize`: this function is called on a window **resize** or **orientationchange** (on mobile devices) event.
Default is an internal function that calls the `move()` method and repositions the alert
according to the `conf.position` values.  So, for example, if the alert was set to be at the center of the screen,
(e.g., `position: {X:"center", Y:"center"}`), 
it is repositioned to remain at the
center of the screen when the window is resized.  To disable this behavior, set this attribute to **_null_**.
- `onTapOutside`: this function is called when user clicks or taps outside of the alert box.  Default is an internal function
that will force the alert to exit (as if user has pressed the exit button).
Tapping outside the alert to exit is a common behavior in most apps, especially mobile apps.
To disable the exit behavior, set this attribute to **_null_**.
- `onTapInside`: this function is called when user clicks or taps inside the alert box.  Default is **_null_**.

   >Note: If there are multiple alerts present on the screen and a tap happens outside all of them,
the last displayed alert will exit (Last-displayed-first-out).  Also, while an alert exit animation is in progress, a tap
outside will have no effect on remaining alerts until the exiting alert has completed its exit.

See the **Best Practices and Usage Notes** section for a description of various event timings.

This example demonstrates the use of callbacks. Alert color will change to show that
the corresponding call back was called:
- **DisplayBegin:** alert turns _blue_ from the default color at the start of animation,
- **onDisplayEnd:** at the end of its start animation, the alert turns _orange_ and ends up in the middle of the screen,
- **onResize:** if window is resized or its orientation is changed (mobile devices), it turns _green_ and stays in the middle of the screen,
- **onTapOutside:** when the alert detects a tap outside the alert, it turns _red_ and exits.

The `getElement()`, `exit()` and `move()` methods will be explained in **"BAlert Methods"** section:

##### Example: Using various callback functions to handle events
```javascript
function setColor(alrt, color) {
    alrt.getElement().style.backgroundColor = color;
}
// use of tapOutside and other events
new BAlert({text: "Hello world"}, 0, null, null,  {
  alertStart: {dir: "top", scale: 0, duration: 1000, func: "ease-in"},
  alertExit:  {dir: "bottom", scale: 0, duration:  1000, func: "ease-out"},     
  callbacks:
    {
      onDisplayBegin: function(alrt) { setColor(alrt, "blue");},
      onDisplayEnd: function(alrt) { setColor(alrt, "orange");},
      onResize: function(alrt) { setColor(alrt, "green"); alrt.move();},
      onTapOutside: function(alrt) { setColor(alrt, "red"); alrt.exit();}
    }
  }
).display();
```

### `conf.classPrefix` Attribute
---
Alert styles are normally defined by a set of classes in a `.css` style sheet file. 
To minimize the possibility of name collision, the default name of the classes in `.css` style sheet that is used to style these elements
is the same as the name of the element, prefixed by **"bajs\_"**.  For example,
the name of the default `.css` class for **contentText** is **bajs\_contentText**.  The only exceptions are the main buttons and their corresponding
child elements.
The index (0, 1, etc.) is dropped from a button (and its children) class names, since all buttons have the same class.  So, for example,
the default name of the `.css` class for styling icon images on all buttons is **bajs\_mainButtonsIcon**.

##### Example: an element's default class name
```CSS
/* in the .css file */
.bajs_mainButtonsIcon {
  vertical-align:middle;
  width:1.5rem;
  height:1.5rem;
}
```

One can change the default classPrefix:

##### Example: Changing an element's class name
```javascript
new BAlert("Hello World", 0, null, null, {
    classPrefix: "steve_"
}).display();
```
which requires one to use the new prefix in the css style sheet:
```CSS
/* in the .css file */
.steve_mainButtonsIcon {
  vertical-align:middle;
  width:1.5rem;
  height:1.5rem;
}
```

To see the alert DOM structure details to which these CSS styles apply,
see the **"BAlert DOM Structure"** section above.


### `conf.defaultClasses` Attribute
---
In the absence of a `.css` style sheet file, `conf.defaultClasses` internal CSS style class values are used to build a browser DOM `<style>`
for the alert.
This object has two attributes:
- `apply`: this boolean defines whether internal default classes should be used to build the class definitions for the alert or not.
  >Note: `apply` must be set to **_false_** when you want to use a `.css` style sheet. If set to **_true_**, 
`.css` classes are ignored, even if they are present. 

- `values`: an object with the same attribute names shown in the table in **"Alert DOM Structure"** section,
and with CSS styling strings (e.g., `"color: red; margin: auto"`) as values. We discourage changing the value of this attribute.  Any style changes
should be done through `.css` style sheets.

See **BAlert `setDefaultClasses()` Method** for more details.

The default value for `apply` is **_true_** which means the internal `defaultClasses` will be applied to alerts by default. This is initially useful 
when you do not have a `.css` style sheet to style the alerts, and you are just trying to test or debug the functionality of the alerts.
So by setting this attribute to **_true_**, `BAlert` applies some minimal internal style classes to the alert.
But once you get into production mode, this value must be set to **_false_** and `.css` style sheet file be used instead.

See also the **"Alert DOM Structure"** section and **"BAlert `noDefaultClasses()` Method"** section for more details.


### `conf.inlineStyles` Attribute
---
The `conf.inlineStyles` is an object with the same attribute names shown in the table in **"Alert DOM Structure"** section,
and with local CSS styling strings (e.g., `"color: red; margin: auto"`) as values. These styles work the same way inline CSS styling works in HTML.
For individual buttons, there is a
`inlineStyle` attribute (note: no `"s"` at the end) that has the same function.

In the following example, inline styling is used to write the content of the alert with *white* letters  on a *green* background.
Also, buttons are made to have no round edges with *Post* button in *green* text color and *Exit* button in *red* text color.
Note the use of `inlineStyles` (plural) for the **contentDiv** and `inlineStyle` (singular) for individual buttons:

##### Example: using local styling
```javascript
var localConf = {
  content: {text: "Information Saved Successfully."},
  title: {text: "Saved"},
  mainButtons:
    [{
      text: "Post",
      inlineStyle: "color: green; border-radius: 0;",
      onClick: function() { console.log("Post was pushed"); } 
    },{
      text: "Exit", 
      inlineStyle: "color: red; border-radius: 0;",
      onClick: function() { console.log("Exit was pushed"); } 
    }],
  inlineStyles: {contentDiv:  "background-color: green; color: white"},
};

new BAlert().setConf(localConf).display();
```

>Note: With the combination of `.css` style sheets (or internal default classes), along with the `inlineStyles` and `inlineStyle`
inline style changes, one has full flexibility on how the alert should look.  See [**examples**](http://vinoquiz.ddns.net/BAlert/index.php) for
some possibilities.

### `conf.iconsPath` Attribute
---
This attribute is a string defining the path to icon image files. This is where `BAlert` looks for the icon files whose names were passed
using the `icon` attribute of the alert's buttons, content and title.

##### Example: setting the path to icon image files
```javascript
var alrt = new BAlert("Disk Error", 0, {text: "Warning", icon: "icon_warning.png"});
alrt.setConf("iconsPath", "/path/to/my/image/icon/files/");
alrt.setConf({mainButtons: [
    { text: "Abort", icon: "icon_abort.png", onClick: function() { /*do aborting*/} },
    { text: "Retry", icon: "icon_retry.png", onClick: function() { /*do retrying*/} }
]});
alrt.display();
```

In the above example, `icon_warning.png`, `icon_abort.png` and `icon_retry.png` files
are looked for in the path shown by `iconPath` (which may be a relative or absolute path name). The path does not need to end with a **"/"**.
`iconPath` is usually only set once in the main configuration object.


### `conf.startingZIndex` Attribute
---
This is a number that is set higher than the largest `z-index` the app may use.

Alerts need to appear on top of existing screens in the window and therefore have to have a `z-index`
that is larger than the largest possible `z-index`
in your app.  So you need to set this attribute to a large number that your app `z-index` would not exceed.
First alert is generated by setting its `z-index` to `conf.startingZindex + 1` and 
subsequent alerts will also increment this value by one.  When all alerts are exited, the counter resets.  Default is **1000**.
It is unlikely that you have to change this value.


### `conf.timeout` Attribute
---
This is an integer indicating the alert's time to live in milliseconds.
If set to a positive value the alert will automatically exit after the given number of milliseconds. 
Default is **0** which indicates that the alert will not auto exit.


### `conf.DEBUG` Attribute
---
This is an integer indicating the `BAlert` debug level for producing debug messages on JavaScript console.
Default is **0** which means no debugging messages are produced.
See the **"BAlert `setDebug()` Method"** section for more detail.

>Note: The minified version  `BAlert-mini.js` has the debugging statements stripped and therefore does not
produce any debugging information regardless of the value of this attribute.



# BAlert Methods

Before we talk about the methods, its good to know how alerts are created and used. Alerts are created in two steps:
1. Collect, merge and reconcile all options to create the alert's **Configuration Object** that
we saw in **"Configuration Object"** section.
1. Use the **Configuration Object** to build and display (and animate) the alert.

There are methods that are only applicable when the **Configuration Object** is being defined.
There are also methods that are only applicable after the alert is built or displayed.
We'll try to make that distinction for each method, when it is not clear.

>Note: The key method for setting the configuration object is `setConf()` and the key method for building,
displaying and animating the alerts (after it has been configured) is `display()`.
Chances are that in most applications, these are the only two methods that one ever needs. 

#### BAlert methods are cascadable
For the most part, BAlert methods are cascadable, meaning that they can be placed one after the other on the same line
using the dot notation.  That is because methods that have no explicit return value will return a reference to the alert itself:

##### Example: Cascading methods
```javascript
new BAlert("Hello World").setConf("timeout", 1000).noDefaultClasses().display();
```
They can also be used individually:

##### Example: Using methods separately
```javascript
var ba = new BAlert("Hello World");
ba.setConf("timeout", 1000);
ba.noDefaultClasses();
ba.display();
```
Choice of which technique to use is a matter of style; it is normally a compromise between readability and code size.


### `BAlert.setConf()` Method
---
The `setConf()` method is the work horse
method for defining alert configuration options.  It can take
one or two argument:
- `setConf(confObj)` with one argument: the full configuration object attribute and its value are passed to `setConf` as one argument:

##### Example: Using setConf() method with one argument
```javascript
var ba = new BAlert();
ba.setConf( {alertExit: {dir: "left", scale: 1, duration:  500, func: "ease-out"} } );      
```
In fact, the entire configuration object `conf` that we saw in **"Configuration Object"** section can be be dropped in,
in one shot, using this method.

##### Example: Using setConf() method with one argument
```javascript
var conf = {
    position:  {X: "15px", Y: "-20%"},
    alertStart: {dir: "left", scale: 1, duration: 1000, func: "ease-in"},
    alertExit:  {dir: "left", scale: 1, duration:  500, func: "ease-out"}           
};
new BAlert().setConf(conf).display();     
```

- `setConf(attrName, attrValue)` with two arguments: the configuration is passed with *attrName* and *attrValue*.  *attrName* is the name of
the **Configuration Object** attribute, and *attrValue* is the value being assigned to it (which could be an object itself):

##### Example: Using setConf() method with two arguments
```javascript
var ba = new BAlert();
ba.setConf("alertExit" ,  {dir: "left", scale: 1, duration:  500, func: "ease-out"} );      
```
Note that in this method, the attribute name is enclosed in quotes.
Also note that the *attrValue* itself may be an object as in the above example.

>Note: The `setConf()` method is **recursive**, so it can handle nested objects as deep as necessary.
It also always **merges** the object attributes instead of overwriting them.
Only attributes of the same name overwrite each other.

So the following two are equivalent:

##### Example: setConf() method merging options
```javascript
var ba = new BAlert();

ba.setConf( {alertExit: {dir: "left", scale: 1, duration:  500, func: "ease-out"} } );
// is equivalent to
ba.setConf( {alertExit: {dir: "right", scale: 1} } );
ba.setConf( {alertExit: {duration:  500, func: "ease-out", dir: "left"} } );

```


### `BAlert.getConf()` Method
---
With no arguments, `getConf()` returns the value of the entire **Configuration Object** that we saw in **"Configuration Object"** section.
If an argument is
given, it is taken as the name of a **Configuration Object** attribute and `getConf(attr)` will return the value
of the given attribute:

##### Example: Getting the alert's Configuration Object
```javascript
var ba = new BAlert();
// getting entire configuration object
var conf2 = ba.getConf();
// getting a single configuration object attribute's value
var als = ba.getConf("alertStart");
```

### `BAlert.getDefaultClasses()` Method
---
This method has no argument and returns a string in the same format as the `.css` style sheet. 
The string contains the built-in CSS `defaultClasses` that are used to style the alerts in the absence of a formal `.css` style sheet.
The output contains all the built-in CSS classes with the names that were mentioned in the table under **"Alert DOM Structure"** section. You
can use the style classes returned by this method as a starting point for creating your formal `BAlert.css` style sheet.
In the following example, the alert's built-in `defaultClasses` are displayed on the JavaScript console:

##### Example: Generating the initial .css style sheet
```javascript
console.log(new BAlert().getDefaultClasses());
```
The JavaScript console output will look similar to (but not necessarily exactly the same as) the following.
The attribute values that are shown below are one of many possible examples:

##### Example: A sample BAlert.css style sheet
```CSS
/*Begin BAlert minimal CSS classes*/
.bajs_containerDiv {
}

.bajs_alertBoxDiv {
  border-radius:0.5rem;
  width:fit-content;
  max-width:80%;
  font:1rem arial;
  border:1px solid;
  background-color:#eee;
}

.bajs_titleDiv {
  margin:0.25rem;
  text-align:center;
}

.bajs_titleIcon {
  vertical-align:middle;
  width:2rem;
  height:2rem;
  margin-top:2px;
}

.bajs_titleText {
  vertical-align:middle;
  margin-left:2px;
  font-size:1.2rem;
  font-weight:bold;
}

.bajs_contentDiv {
  clear:both;
  padding:0.25rem;
  margin:0.75rem;
}

.bajs_contentText {
  font-size:1rem;
}

.bajs_exitButton {
  float:right;
  border:0;
  padding:0;
  line-height:0.8rem;
  background:transparent;
}

.bajs_exitButtonIcon {
  width:1rem;
  height:1rem;
}

.bajs_exitButtonText {
  font-size:1.2rem;
  line-height:0.7rem;
}

.bajs_mainButtonsDiv {
  clear:both;
  text-align:center;
  margin:0.5rem;
}

.bajs_mainButtons {
  border-radius:0.5rem;
  padding:2px;
}

.bajs_mainButtonsIcon {
  vertical-align:middle;
  width:1.5rem;
  height:1.5rem;
}

.bajs_mainButtonsText {
  vertical-align:middle;
  margin:0 2px;
}
/*End BAlert minimal CSS classes*/

```
As mentioned before, it is not advisable to use built-in `defaultClasses`
for production code.  They are mainly used for a quick start, testing and debugging the code.  For production, one should use
formal `.css` style sheets. The above CSS class definitions could be a starting point for generating the production `.css` style sheet.
After defining the production `.css` style sheet, the application of
internal styles to the alerts should be turned off by setting `conf.defaultClasses.apply` to **false** or use the `noDefaultClasses()` method.
See **BAlert `noDefaultClasses()` Method** for more details.


### `BAlert.setDefaultClasses()` Method
---
For the reasons mentioned above, it is best that this method is not used at all.  The correct way to set styles is to use the `.css` style sheets.
This method is added here for completeness.

`setDefaultClasses()` has one or two arguments.  With one argument, the value is considered to be the entire `defaultClasses.values` object.
With two arguments, e.g., `setDefaultClasses(name, val)`, it sets the style value for the given element **name** to the given string **val**.
The element **name** are the same as were seen in   **"BAlert DOM Structure"** section.

##### Example: Overwriting internal defaultClasses
```javascript
var ba = new BAlert("Hello World");
ba.setDefaultClasses("titleDiv",  "margin:0.25rem; text-align:center").display();
```


### `BAlert.noDefaultClasses()` Method
---
This method turns off the application of internal `defaultClasses` to the alert.
It is assumed that there is a formal `.css` style sheet that
contains the necessary style classes instead.

>Note: One either has to use the internal `defaultClasses`, or have a `.css` style sheet for `BAlert`.
Otherwise the displayed alert does not look anything like an alert.

##### Example: Turning internal defaultClasses off
```javascript
var ba = new BAlert("Hello World");
// use the noDefaultClasses method
ba.noDefaultClasses().display();
// or equivalently, set the apply attribute to false
ba.setConf("defaultClasses", {apply: false});
ba.display();
```


### `BAlert.display()` Method
---
In much the same way that `setConf()` method was the work horse for alert configuration, `display()` is the work horse for building, displaying,
and animating the alerts after the alert has been configured. The method also sets the appropriate event handlers.
We have seen the use of this method throughout the examples in this document.
If an optional argument `delay` is provided to the method (`display(delay)`), the display function is delayed for `delay` milliseconds.

This method also calls `onDisplayBegin` and `onDisplayEnd` callbacks as mentioned under **"`conf.callbacks` Attribute"** section.
See the **Best Practices and Usage Notes** section for a description of various event timings.

### `BAlert.build()` Method
---
The `build()` method takes no arguments.  It uses the **Configuration Object** and builds the alert DOM structure based on its definitions.
The `display()` method calls the `build()` method if the alert is not already built, so there is no reason to use this method if you are
calling the `display()` method.  The only possible use of `build()` is in cases where you want to manipulate the browser's DOM structure
after the alert has been build, but before it is displayed.

In this example, alert box color is set to **red** after it is built but before it is displayed:

##### Example: Application of the build() method
```javascript
// set alert DOM object properties before alert is displayed
var ba = new BAlert("Internet Connection Lost", 3000).build();
ba.getElement().style.backgroundColor = "red";
ba.display();
```


### `BAlert.exit()` Method
---
The `exit(delay)` method is the opposite of the `display()` method.  It forces the alert to gracefully exit,
using animation if defined.  It also removes and cleans up event handlers.  
The internal and browser `DOM` structure and its artifacts are completely removed.
So after `exit()`, there will be no trace of the alert in the browser DOM, internal JavaScript `DOM` structure,
or in window event handlers.

If the optional `delay` argument (integer) is provided,
it delays the exit process by `delay` milliseconds.

This method also calls `onExitBegin` and `onExitEnd` callbacks as mentioned under **"`conf.callbacks` Attribute"** section.

See the **Best Practices and Usage Notes** section for a description of various event timings.

### `BAlert.move()` Method
---
This method moves the alert box to a new location.  The method takes on zero, one, or two arguments: `move()`, `move([X,Y])`, or 
`move(X,Y)`.

The arguments, `X` and `Y`, have the same definitions that we saw for `conf.position.X` and `conf.position.Y` in **"`conf.position` Attribute"** section.
If no arguments
are provided, the `move()` method uses the existing `conf.position.X` and `conf.position.Y` in alerts **Configuration Object**.
The new position is calculated based on the
existing `conf.position.X` and `conf.position.Y` or the given `X` and `Y`, and the alert is moved to the new position.

This method is internally used (by default) when a window **resize** or **orientationchange** event happens.
This will ensure the alert is always positioned correctly even after the given window events.  See `conf.callbacks.onResize` in section
**`conf.callbacks` Attribute** for more details.


### `BAlert.getElement()` Method
---
The `getElement(elmName)` method takes an alert element name (defined under **"BAlert DOM Structure"** section) as argument,
and returns a reference to the corresponding
browser's DOM element.  This is useful for being able to manipulate alert element's browser DOM properties after it has been built.
For example `getElement("contentText")` returns a reference to the browser's `<span>` element that contains the alert's text.

The `getElement()` with no arguments references the whole alert box and is equivalent to `getElement("alertBoxDiv")`.

In the following example, the `getElement()` method is used to change the color of the text on the **Delete** button to **red** and
move the exit button (the "X" on the upper corner of the alert) from the default right corner to the left corner:

##### Example: Using getElement() to retrieve and manipulate alert's DOM elements
```javascript
//Using getElement() to manipulate DOM elements
var ba = new BAlert({text: "Choose Archive, Submit, or Delete to remove the results"},
    0, {text:"Operation Successful"}, 
    [{
        text:"Archive",
        onClick: function() {/*do archiving*/}
    },{
        text:"Submit",
        onClick: function() {/*do submitting*/}
    },{
        text:"Delete",
        onClick: function() {/* do deleting */},
    }]
).build();
ba.getElement("exitButton").style.float = "left";
ba.getElement("mainButtonsText2").style.color = 'red';
ba.display();
```
The better way to do the above is to use the alert's `inlineStyles` and the button's `inlineStyle` attributes.  See **`conf.inlineStyles` Attribute**
section for more details.

### `BAlert.disable()` Method
---
The `disable(elm)` takes a reference to an element as argument and disables that element.  This is mostly used for
disabling buttons and rendering them non-functional, although it can be applied to any element.  This is the method that is internally used to
support the main buttons' `selfDisable` attribute mentioned in **"`conf.mainButtons` Attribute"** section.

In this example, the **Submit** button is disabled after the button is pushed:

##### Example: using disable() method
```javascript
//Using disable() to disable DOM elements
var ba = new BAlert({text: "Choose Archive or Submit"},
    0, {text:"Operation Successful"}, 
    [{
        text:"Archive",
        onClick: function() {/*do archiving*/}
    },{
        text:"Submit",
        onClick: function(alrt, btn) {/*do submitting;*/ alrt.disable(btn);}
    }]
).display();
```

One could have done this by simply setting the attribute `selfDisable` to **_true_** for the **Submit** button.


### `BAlert.enable()` Method
---
The method `enable(elm)` is the opposite of the `disable(elm)` method.  It enables the element `elm`.


### `BAlert.hide()` Method
---
The method `hide(elm)` is used to hide the alert's element `elm`.  The element still exists in browser DOM and
occupies the space it was occupying when it was visible, but it is hidden from view.
This is the method that is internally used to
support the main buttons' `selfHide` attribute mentioned in **"`conf.mainButtons` Attribute"** section.


### `BAlert.unhide()` Method
---
The method `unhide(elm)` is the opposite of the `hide(elm)` method.  It unhides the element `elm` to make it visible.


### `BAlert.dim()` Method
---
The method `dim(elm)` is used to change the brightness of the alert's element `elm`.  The element's opacity is set to **0.5**. You can change
the default opacity (**0.5**) for this method by passing the opacity as the second argument as in `dim(elm, op)`.
This is the method that is internally used to
support the main buttons' `selfDim` attribute mentioned in **"`conf.mainButtons` Attribute"** section.  Also, the buttons' `selfHide` attribute uses
`dim(btn, 0)` internally to hide the button.


### `BAlert.undim()` Method
---
The method `undim(elm)` is the opposite of the `dim(elm)` method.  It sets opacity of the element to **1**.  It is equivalent
to `dim(elm, 1)`.


### `BAlert.remove()` Method
---
The method `remove(elm)` removes the alert's element `elm` from browser's DOM as well as the internal `DOM` structure.
This is a brute force removal and does not perform any house cleaning (if needed).
This is the method that is internally used to
support the main buttons' `selfRemove` attribute mentioned in **"`conf.mainButtons` Attribute"** section.

>Note: Do not use this method to exit an alert.  Use the `exit()` method instead which does the house cleaning before exiting.


### `BAlert.getSize()` Method
---
The `getSize(elm)` is a general purpose method. It returns an array of two numbers **[width, height]** that represent the
width and height of the browser element `elm` in pixels. If `elm` is omitted, alert box element is assumed.


### `BAlert.getPosition()` Method
---
The `getPosition()`  returns an array of two numbers **[left, top]** that represent the
distance (in pixels) of the upper left corner of the alert box from the left edge and top edge of the window respectively.


### `BAlert.getCenterPosition()` Method
---
The `getCenterPosition()`  returns an array of two numbers **[x, y]** that represent the
distance (in pixels) of the center of the alert box from the left edge and top edge of the window respectively.


### `BAlert.getStructure()` Method
---
The `getStructure(elm)` is a general purpose method.  It traverses the browser's internal DOM structure starting from `elm`,
and returns a string outlining the structure and attributes
of the `elm` as seen by the browser.  If no argument is given,
the entire alert box element is assumed and the full structure of the alert is returned.
This method is used internally to support `setDebug(4)` method mentioned below under **"BAlert `setDebug()` Method"** section.
>Note: For consistency and readability, a closing tag is always displayed, even for elements that do not
require one (e.g., `<img src=...></img>`).


### `BAlert.version()` Method
---
Returns a number which is `BAlert`'s code version number.


### `BAlert.alertNum()` Method
---
This method returns the alert's sequence number.  If multiple alerts are present on the screen at the same time,
they are numbered sequentially starting at **1**.  The number resets when all alerts have exited.


### `BAlert.setDebug()` Method
---
The `setDebug(n)` method sets the debug level to **n** (**n** is from **0** to **15**).  Based on the value of **n**, appropriate debug messages are displayed
on the JavaScript console.  An attempt is made to make debug messages helpful to developers, even if they may not have any knowledge of
`BAlert`'s internals:
- **n=0** means no debug messages.
- **n=1** displays the trace of activities inside BAlert as the alert is built, displayed and animated.
- **n=2** dumps the alert's main **Configuration Object**.
- **n=4** dumps alert's traversed browser DOM structure.
- **n=8** dumps the alert's internal `defaultClasses` in form of `.css` class definitions 
under **"BAlert `getDefaultClasses()` Method"** section.

The above bit-positioned option numbers can be combined by adding their values, e.g., `setDebug(5)` outputs both the alert's activity traces and its
 browser DOM structure.
`setDebug(15)` dumps everything.

##### Example: Changing code debug level
```javascript
// the following dumps all possible debug messages
new BAlert("Hello World").setDebug(15).display();
```

>Note: The minified version, `BAlert-mini.js` has debugging statements stripped.
So this method has no effect unless used with `BAlert-debug.js` version.


### `BAlert.reset()` Method
---
This method sets the internal configuration object  to its default value
and it also resets internal `DOM` structure to **_null_**.  All changes made to the configuration object through `BAlert`
arguments or `setConf()` are reset to original default values.  This method is useful when you are using the same instance of
`BAlert` for multiple alerts, and you want to reset it between uses.

>Note: `reset()` method does not remove the alert from the display or touch the alert's browser DOM structures (if it is already built).
It just resets the alert's internal configuration object to default values and it
resets internal `DOM` structure to `null` to get it ready for next use.
To remove the alert from browser's DOM, one can use the `exit()` method.


### `BAlert.merge()` Method
---
The `merge(obj1, obj2)` method is a general purpose method. 
The method _merges_ obj2 into obj1 and returns a reference to the
merged result. The method is recursive and handles nested objects as deep as necessary.
if obj2 is not an object (i.e., it is an `integer`, `string`, or `boolean`), or if it is something implemented
internally in JavaScript as an object but not quite one, like an `array` or a `function`, it is copied over and not merged into obj1.

This method can also be used to clone an object by setting `obj1` to `{}`.
So for example, `merge({}, obj2)` returns a reference to a clone of `obj2`.

>Note: The method always *merges* the object attributes instead of overwriting them. Only attributes of the same name overwrite each other.



### `BAlert.setCrossBrowserStyle()` Method
---
The `setCrossBrowserStyle(elm, prop, value)` method is a convenience method for setting  browsers DOM element `elm`'s
style property `prop` to
the value `value`, regardless of the browser type.  This method will append the prefix **`-o-`**, **`-ms-`**, **`-moz-`**, and **`-webkit-`**
in addition to a blank prefix to the property name
before setting its value, ensuring the property value is set correctly regardless of the browser type.

This method should only be used in cases where the property
has a different prefix for different browser types. 

In the example below, the color (not the brightness) of the button label (which could be text or icon or both)
is changed to gray scale when the button is pushed:

##### Example: using setCrossBrowserStyle() method
```javascript
// Note: using btn.style.filter = "grayscale(1)" may only work for some browsers
var ba = new BAlert({text: "Choose Archive or Submit"},
    0, {text:"Operation Successful"}, 
    [{
        text:"Archive",
        onClick: function(alrt, btn) {
            /*do archiving;*/ alrt.setCrossBrowserStyle(btn, "filter", "grayscale(1)");
        }
    },{
        text:"Submit",
        onClick: function(alrt, btn) {
            /*do submitting;*/ alrt.setCrossBrowserStyle(btn, "filter", "grayscale(1)");
        }
    }]
).display();
```



# Best Practices and Usage Notes
### Use Minified BAlert
---
For production, use the smaller, compressed and minified version of `BAlert` that has the debugging
code stripped:

##### Example: using minified version of BAlert-mini.js
```html
<!-- minified BAlert for production -->
<script src='/path/to/js/files/BAlert/BAlert-mini.js' type='text/javascript' charset='UTF-8'></script>
<!-- really small minified and compressed BAlert for production -->
<script src='/path/to/js/files/BAlert/BAlert-mini.js.gz' type='text/javascript' charset='UTF-8'></script>
```
### Sequence of BAlert's Internal Activities
---
In order to make the best use of alert callbacks, delays and timeouts, we need to know the sequence of activities in `BAlert`
from the beginning (`new BAlert(...)`) to the end (`exit()`):

  1. `BAlert` arguments and **Configuration Object** values are normalized and consolidated into the internal `conf` object.
  1. Start of alert display is delayed by `conf.alertStart.delay` milliseconds (if given).
  1. `BAlert.build()` is called to build the browser DOM (and internal `DOM`) structures based on the `conf` object values.
  1. `conf.callbacks.onDisplayBegin` callback function is called (if any).
  1. `conf.alertStart` animation instructions are executed to animate the alert to existance.
  1. Alert's self-destruct timer is set for `conf.timeout` milliseconds if `conf.timeout > 0`.
  1. Various alert window event handlers (`resize`, `click`, `touchstart`) are added.
  1. `conf.callbacks.onDisplayEnd` callback function is called (if any).

At this point, alert is displayed.  It will then wait until the self-destruct timer expires or the user
initiates the exit (e.g., by pressing the exit button).  Then the following events take place:

  1. Start of alert exit is delayed by `conf.alertExit.delay`  milliseconds (if given).
  1. `conf.callbacks.onExitBegin` callback function is called (if any).
  1. `conf.alertExit` animation instructions are executed to animate the alert exit process.
  1. `conf.callbacks.onExitEnd` callback function is called (if any).
  1. The attached alert window event handlers (`resize`, `click`, `touchstart`) are removed.
  1. Alert's internal `DOM` structure, related DOM `<style>` structure (if any), and the browser DOM structure are removed.

There will be no artifacts left from the alert in browser's DOM or internal JavaScript structures after the final exit step.

### Using CSS Classes, Built-in Default Classes, and Local Inline Styles
---
In general, we have seen styling in three different contexts:
  1. Styling using a `.css` style sheet
  2. Built-in default classes (`conf.defaultClasses`) that can be used in the absence of `.css` style sheet
  3. Individual element local styling using the `inlineStyle` or `inlineStyles[elm]` attribute of the element
  
1 & 2 should not exist together.  In fact using 2 will turn off 1. Also 3 overwrites them both for the styled attribute with the same name.
So it is good practice to turn the built-in styling off, use a `.css` style sheets, and then use occasional `inlineStyle` inline styling.
See **"`conf.inlineStyles` Attribute"**, **"Alert DOM Structure"** and **"BAlert `getDefaultClasses()` Method"** sections
for more detail.

  
All of the above styling is done before the alert is built/displayed and the browser DOM element exists.  After the alert is built or displayed, the only way
to change its style is by getting a reference to it's browser DOM element using `getElement()` method, and change it's style using the usual JavaScript methods.
In the following example, the color of the content area of the alert is changed to *blue* after it has been built and displayed:
```javascript
// changing element attribute after it has been built
var ba = new BAlert("Hello World").display();
ba.getElement("contentDiv").style.backgroundColor = "blue";
```

### Difference between `raw` and `text` Attribute
---
As we have seen, **content**, **title**, **exitButton** and **mainButtons** can  have either a `raw` or a `text` attribute.
Both attributes can have HTML strings as values.
The main difference is that the `text` attribute values are placed inside a `<span>` and styled using the corresponding CSS styles,
whereas `raw` attribute values are placed directly in the parent container using the `.innerHTML` attribute and 
are not styled.

It is best practice to use the `text` attribute when entering simple text, e.g., `text: "File not found"`, or
`text: "File will be <em>deleted</em>.  Are you sure?"`.  This will take advantage of any CSS styling that exists for that element.
On the other hand, using `raw` attribute is recommended for when you are entering a preformatted HTML string that does not need
further styling, e.g., an image, `raw: "<img src='myimage.jpg' style='width: 20rem'>"` or an `iframe` or any other HTML string that has its own styling
that should not be overwritten with default or inline styles.


### Keep the Same Alert Look and Feel
---
It is often recommended to keep the same look & feel for the entire app.  To do so with alerts,
it is useful to **create one main configuration object** that contains options that do not change
from alert to alert, and then use the method `setConf()` to make local additions or changes to the configuration (like adding buttons).

##### Example
To demonstrate this, the following example implements a *"Do you like this app?"* dialogue sequence.

It is common for mobile apps to ask their users
(at some opportune time) whether they like the app or not.  If the users respond positively, ask them to rate the app on
the app store front.  If they respond negatively, ask them to provide (private) feedback on why they do not like the app.  This way,
if the users do not like the app, they are not sent to the store front and the app would not get bad ratings at the store.

In the example below, the `slideFromLeftConf` is a general configuration object that slides the alerts in and out from the bottom left side of the screen
and is used by all three dialogues, so they have the same look and feel.  The local additions (i.e., the buttons) are
 made using the `setConf()` method:
 
##### Example: "Do you like this app?"
```javascript
function getRatingFromUser() {

    // general configuration for alerts sliding in and out from lower left
    var slideFromLeftConf = {
        position:  {X: "15px", Y: "-20%"},
        alertStart: {dir: "left", scale: 1, duration: 1000, func: "ease-in"},
        alertExit:  {dir: "left", scale: 1, duration:  500, func: "ease-out"}           
    };
    
    // ask user if they like the app
    function doYouLikeThisApp() {
        var ba = new BAlert({text:"Do you like this app?"},
            0, null, null, slideFromLeftConf );
        ba.setConf('mainButtons', [
            {text:"Yes", onClick: function(){doRateUs();} },
            {text:"No",  onClick: function(){doTellUsWhy();} }    
        ]).display();
    }
    
    // ask user to tell us why they don't like the app
    function doTellUsWhy() {
        var ba = new BAlert({text:"Sorry to hear that. Please tell us why."},
            0, null, null, slideFromLeftConf);
        ba.setConf('mainButtons', [
            {text:"Tell Us", onClick: function(){/*get feedback*/} }
        ]).display();
    }
    
    // ask user to rate the app at the store
    function doRateUs() {
        var ba = new BAlert({text:"Please give us a rating at the store."},
            0, null, null, slideFromLeftConf);
        ba.setConf('mainButtons', [
            {text:"Rate Us", onClick: function(){/*send user to store*/} } 
        ]).display();
    }
    
    doYouLikeThisApp();   
} 
```

# Internal Structures
Currently, but not necessarily in the future, `BAlert` exposes two key internal structures that were mentioned before; **`conf`** which
is the entire configuration object we saw in **"Configuration Object"** section, and **`DOM`**, which is the internal alert DOM structure
object defined in **"BAlert DOM Structure"** section.  Direct use of these structures is
discouraged.  It is best (and more future proof) to use the set of methods outlined above to get and set the attributes of these structures.


# Compatibility
`BAlert` is tested successfully on all modern browsers: Chrome, FireFox, Safari, and MS Edge. It is also tested on MS IE back to version 10
(or version 9 if you don't care about animations).
`BAlert` also runs on mobile android and ios browsers and `WebView` based mobile apps.

`BAlert` supports the `"use strict"` directive defined in JavaScripts 1.8.5 (ECMAScript version 5).


# Global Namespace
`BAlert` exposes a single variable name, `BAlert`, to the JavaScript global namespace.  All other names are internal and have closures.


# Acknowledgement
`BAlert` is minified using the [_uglifyJS_](https://github.com/mishoo/UglifyJS) utility from *github*.
We also use the _uglifyJS_ pre-processing and dead-code-removal capability to
strip debug statements from minified version of the code.

`BAlert` heavily uses [_jslint_](https://github.com/douglascrockford/JSLint).

`BAlert` uses `String.trim()` and `Array.isArray()` *polyfill* prototypes from [_Mozilla.org_](https://developer.mozilla.org)
for compatibility with older browsers.

`BAlert` [examples](http://vinoquiz.ddns.net/BAlert/index.php)
use [_highlight.js_](https://github.com/isagalaev/highlight.js)
from *github* for code highlighting.

# Contact
You can reach me through <balertjs@gmail.com>.  Comments and feedbacks are welcomed.



