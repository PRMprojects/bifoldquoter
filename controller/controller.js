
//|   |   |   |   |   |   |   |   |   |   |   |   TAB SETUP
var tabsContainer = document.querySelector(".tab-pane");
var tabsList = tabsContainer.querySelector("ul");
var tabButtons = tabsList.querySelectorAll("a");
var tabPanels = tabsContainer.querySelectorAll(".interaction-pane > div");
var leafButtons = tabsContainer.querySelectorAll(".leaf-buttons > button");



//|   |   |   |   |   |   |   |   |   |   |   |   TAB INDEX & SWITCHING

tabButtons.forEach((button, index) => { // Use the index from the forEach loop
    if (index === 0) {
        // something goes here
    } else {
        if (tabPanels[index]) { // Check if the element exists before accessing it
            tabPanels[index].setAttribute("hidden", "");
        }
    }
});
function paneViewerClear (pane) {
    var paneViewer = document.getElementById(pane);
    paneViewer.classList.add("pane-viewer");
}
function paneViewerShow (pane) {
    var paneViewer = document.getElementById(pane);
    paneViewer.classList.remove("pane-viewer");
}
//tabPanels[0].setAttribute("hidden", true);
tabPanels[0].removeAttribute("hidden", true); //          ----TAB NUMBER INITIALISATION
tabsContainer.addEventListener("click", (e) => {
    console.log(e.target);
    const clickedTab = e.target.closest("a");
    if (!clickedTab) return;
    e.preventDefault();

    switchTab(clickedTab);
})

function getOpenTab () {
    const openTab = tabsContainer.querySelector("a[aria-selected='true']");
    return openTab;
}

let mainViewPaneEl = [];
//function storeMainViewPane() {
//    const mainViewPane = document.getElementById("main-view-pane");
//    mainViewPaneEl = Array.from(mainViewPane.children).map(child => child.cloneNode(true));
//}
//storeMainViewPane();

//function restoreMainViewPane() {`
//    const mainViewPane = document.getElementById("main-view-pane");`
//    mainViewPaneEl.forEach(el => mainViewPane.appendChild(el));`
//    mainViewPaneEl = [];`
//}

function testytest() {
    //const activePanelId = tabX.getAttribute('href');
    //const activePanel = tabsContainer.querySelector(activePanelId);
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    });
    //if (activePanel) {
    //    activePanel.removeAttribute("hidden");
    //}
}
var testtest = document.getElementById("testbutton2");
testtest.addEventListener("click", (e) => {
    testytest();
})
var previousTab = "";
function switchTab(tabX) {
    const activePanelId = tabX.getAttribute('href');
    const activePanel = tabsContainer.querySelector(activePanelId);

    function tabSwitcher() {
        tabPanels.forEach((panel) => {
            panel.setAttribute("hidden", true);
            });
            activePanel.removeAttribute("hidden");
    }

    if (activePanelId === "#summary") {
        console.log("summary found");
        paneViewerClear("main-view-pane");
        openSummary();
        previousTab = activePanelId;
    } else {
        if (previousTab === "#summary") {
            paneViewerClear("summary-page");
            paneViewerShow("main-view-pane");
            previousTab = activePanelId;
            
        }

    if (activePanel) {
        tabSwitcher();
        previousTab = activePanelId;
        }
    }
}


//|   |   |   |   |   |   |   |   |   |   |   |   STATE CONTROL
let elementstate = [];
function saveState() {
    elementstate = [];
    elementstate = document.querySelectorAll("#main-view-pane");
    console.log("elementstate: ", elementstate);
}
function removeMainViewPane() {
    const divToRemove = document.getElementById("main-view-pane");
    divToRemove.remove();
}
function restoreState() {
    elementstate.forEach(element => {
        document.querySelector("#main-tab-pane").appendChild(element.cloneNode(true));
    });
}
saveState();
function fieldsReset() {
    setWidth(setwidth);
    setHeight(setheight);
    //availableLeavesCalc();
    //showLeafButtons();
    
    draw("canvas-outview");
}

//|   |   |   |   |   |   |   |   |   |   |   |   BACK & CONTINUE BUTTONS
//sizestyleback.addEventListener("click", (e) => {
//    console.log(e.target);
//    tabPanels.forEach((panel) => {
//        panel.setAttribute("hidden", true);
//    })
//    const prevPanel = tabsContainer.querySelector("#service")
//    prevPanel.removeAttribute("hidden");
//})
colourback.addEventListener("click", (e) => {
    console.log(e.target);
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    })
    const prevPanel = tabsContainer.querySelector("#size-style")
    prevPanel.removeAttribute("hidden");
})
hardwareoptionsback.addEventListener("click", (e) => {
    console.log(e.target);
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    })
    const prevPanel = tabsContainer.querySelector("#colour")
    prevPanel.removeAttribute("hidden");
})
thresholdback.addEventListener("click", (e) => {
    console.log(e.target);
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    })
    const prevPanel = tabsContainer.querySelector("#hardware-options")
    prevPanel.removeAttribute("hidden");
})
glazingback.addEventListener("click", (e) => {
    console.log(e.target);
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    })
    const prevPanel = tabsContainer.querySelector("#threshold")
    prevPanel.removeAttribute("hidden");
})
frameoptionsback.addEventListener("click", (e) => {
    console.log(e.target);
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    })
    const prevPanel = tabsContainer.querySelector("#glazing")
    prevPanel.removeAttribute("hidden");
})

//servicecontinue.addEventListener("click", (e) => {
//    console.log(e.target);
//    tabPanels.forEach((panel) => {
//        panel.setAttribute("hidden", true);
//    })
//    const nextPanel = tabsContainer.querySelector("#size-style")
//    nextPanel.removeAttribute("hidden");
//})
sizestylecontinue.addEventListener("click", (e) => {
    console.log(e.target);
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    })
    const nextPanel = tabsContainer.querySelector("#colour")
    nextPanel.removeAttribute("hidden");
})
colourcontinue.addEventListener("click", (e) => {
    console.log(e.target);
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    })
    const nextPanel = tabsContainer.querySelector("#hardware-options")
    nextPanel.removeAttribute("hidden");
})
hardwareoptionscontinue.addEventListener("click", (e) => {
    console.log(e.target);
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    })
    const nextPanel = tabsContainer.querySelector("#threshold")
    nextPanel.removeAttribute("hidden");
})
thresholdcontinue.addEventListener("click", (e) => {
    console.log(e.target);
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    })
    const nextPanel = tabsContainer.querySelector("#glazing")
    nextPanel.removeAttribute("hidden");
})
glazingcontinue.addEventListener("click", (e) => {
    console.log(e.target);
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    })
    const nextPanel = tabsContainer.querySelector("#frame-options")
    nextPanel.removeAttribute("hidden");
})
//|   |   |   |   |   |   |   |   |   |   |   |   SIZE & STYLE FUNCTIONS
let widthinput = document.getElementById("widthinput");
var setwidth = 5000;
var setheight = 2100;

returnedwidth.textContent = setwidth;       //test expression
returnedheight.textContent = setheight;     //test expression



function setWidth(x) {
    setwidth = x;
    returnedwidth.textContent = setwidth;
};
function setHeight(x) {
    setheight = x;
    returnedheight.textContent = setheight;
};
var width = 5000;               //      ------- Initialised here
var height = 2100;
sizestyleinput.addEventListener("submit", (event) => {
    event.preventDefault();
    width = widthinput.value;
    height = heightinput.value;
    setWidth(width);
    setHeight(height);
    availableLeavesCalc();
    showLeafButtons();
    convertWidthToPixel(width);
    convertHeightToPixel(height);
    draw("canvas-outview");
    
});

function createStyleButton (text, id) {
    const button = document.createElement('button');
    button.textContent = text;
    button.id = id;
    button.type = "button";
    return button;
};

var astyles = [];
function availableLeavesCalc () {
    astyles = [];
    var lmin = 750;
    var lmax = 1200;
    var i = 0;
    for(let x = 2; x < 7; x++) {
        if(((setwidth/x) <= lmax) && ((setwidth/x) >= lmin)){
            astyles[i] = x;
            i++;
        };
    }
    leafnotest.textContent = astyles;
}
availableLeavesCalc();


var lbuttons = ["BF2", "BF3", "BF4", "BF5", "BF6"];
function showLeafButtons () {
    leafButtons.forEach((button) => {
        button.classList.add("fadedButton");
        button.classList.remove("leafButton");
    })
    for(let i = 0; i < astyles.length; i++ ){
        document.getElementById(lbuttons[Number(astyles[i]-2)]).classList.add("leafButton");
        document.getElementById(lbuttons[Number(astyles[i]-2)]).classList.remove("fadedButton");
    }
}


showLeafButtons();
var bfconfig = 505;
var bfstyle = 5; //initalised for test with 5
function logBfLeaves (x) {
    var bfl = Number(x);
    bfstyle = bfl;
    return bfl;
}
//logBfLeaves(bfstyle);
BF2.addEventListener("click", (event) => {
    bfstyle = 2;
    leafbuttontest.textContent = bfstyle;
    noleavesguidemax.textContent = bfstyle;
    maxwidthguidemax.textContent = bfstyle * 1200;
    noleavesguidemin.textContent = bfstyle;
    maxwidthguidemin.textContent = bfstyle * 750;
    logBfLeaves(bfstyle);
    getPricing();
})
BF3.addEventListener("click", (event) => {
    bfstyle = 3;
    leafbuttontest.textContent = bfstyle;
    noleavesguidemax.textContent = bfstyle;
    maxwidthguidemax.textContent = bfstyle * 1200;
    noleavesguidemin.textContent = bfstyle;
    maxwidthguidemin.textContent = bfstyle * 750;
    logBfLeaves(bfstyle);
    getPricing();
})
BF4.addEventListener("click", (event) => {
    bfstyle = 4;
    leafbuttontest.textContent = bfstyle;
    noleavesguidemax.textContent = bfstyle;
    maxwidthguidemax.textContent = bfstyle * 1200;
    noleavesguidemin.textContent = bfstyle;
    maxwidthguidemin.textContent = bfstyle * 750;
    logBfLeaves(bfstyle);
    getPricing();
})
BF5.addEventListener("click", (event) => {
    bfstyle = 5;
    leafbuttontest.textContent = bfstyle;
    noleavesguidemax.textContent = bfstyle;
    maxwidthguidemax.textContent = bfstyle * 1200;
    noleavesguidemin.textContent = bfstyle;
    maxwidthguidemin.textContent = bfstyle * 750;
    logBfLeaves(bfstyle);
    getPricing();
})
BF6.addEventListener("click", (event) => {
    bfstyle = 6;
    leafbuttontest.textContent = bfstyle;
    noleavesguidemax.textContent = bfstyle;
    maxwidthguidemax.textContent = bfstyle * 1200;
    noleavesguidemin.textContent = bfstyle;
    maxwidthguidemin.textContent = bfstyle * 750;
    logBfLeaves(bfstyle);
    getPricing();
})
function addStyleButtonsTwoLeaf () {
    const button1 = createStyleButton('220','style-220');
    const button2 = createStyleButton('211','style-211');
    const button3 = createStyleButton('202','style-202');
    divElement.appendChild(button1);
    divElement.appendChild(button2);
    divElement.appendChild(button3);
}
function addStyleButtonsThreeLeaf () {
    const button4 = createStyleButton('330','style-330');
    const button5 = createStyleButton('321','style-321');
    const button6 = createStyleButton('312','style-312');
    const button7 = createStyleButton('303','style-303');
    divElement.appendChild(button4);
    divElement.appendChild(button5);
    divElement.appendChild(button6);
    divElement.appendChild(button7);
};
function addStyleButtonsFourLeaf () {
    const button8 = createStyleButton('440','style-440');
    const button9 = createStyleButton('431','style-431');
    const button10 = createStyleButton('422','style-422');
    const button11 = createStyleButton('413','style-413');
    const button12 = createStyleButton('404','style-404');
    divElement.appendChild(button8);
    divElement.appendChild(button9);
    divElement.appendChild(button10);
    divElement.appendChild(button11);
    divElement.appendChild(button12);
};
function addStyleButtonsFiveLeaf () {
    const button13 = createStyleButton('550','style-550');
    const button14 = createStyleButton('541','style-541');
    const button15 = createStyleButton('532','style-532');
    const button16 = createStyleButton('523','style-523');
    const button17 = createStyleButton('514','style-514');
    const button18 = createStyleButton('505','style-505');
    divElement.appendChild(button13);
    divElement.appendChild(button14);
    divElement.appendChild(button15);
    divElement.appendChild(button16);
    divElement.appendChild(button17);
    divElement.appendChild(button18);
};
function addStyleButtonsSixLeaf () {
    const button19 = createStyleButton('660','style-660');
    const button20 = createStyleButton('651','style-651');
    const button21 = createStyleButton('642','style-642');
    const button22 = createStyleButton('633','style-633');
    const button23 = createStyleButton('624','style-624');
    const button24 = createStyleButton('615','style-615');
    const button25 = createStyleButton('606','style-606');
    divElement.appendChild(button19);
    divElement.appendChild(button20);
    divElement.appendChild(button21);
    divElement.appendChild(button22);
    divElement.appendChild(button23);
    divElement.appendChild(button24);
    divElement.appendChild(button25);
};
function addStyleButtons () {
    //for(i = 0; i < astyles.length; i++){
        switch (Number(bfstyle)) {
            case 2:
                addStyleButtonsTwoLeaf();
                break;
            case 3:
                addStyleButtonsThreeLeaf();
                break;
            case 4:
                addStyleButtonsFourLeaf();
                break;
            case 5:
                addStyleButtonsFiveLeaf();
                break;
            case 6:
                addStyleButtonsSixLeaf();
                break;

        }
    
};
var availableStyleButtons = document.getElementById("available-style-buttons");
availableStyleButtons.addEventListener("click", (event) => {
    //if (event && event.target && event.target.id) {
        bfconfig = event.target.id;
        bfconfig = bfconfig.replace('style-', '');
        console.log("bfconfig: ", bfconfig);
        
});
//    }
//);


//|   |   |   |   |   |   |   |   |   |   |   |   COLOUR OPTIONS
const regcoloptionsexternal = document.getElementById('reg-col-options-external');
const regcoloptionsinternal = document.getElementById('reg-col-options-internal');
var colexternal = "Grey";
var colinternal = "Grey";

regcoloptionsexternal.addEventListener("click", (event) => {
    colexternal = event.target.id;
    console.log("selectedColour: ", colexternal);
    colourSelected();
})
regcoloptionsinternal.addEventListener("click", (event) => {
    colinternal = event.target.id;
    console.log("selectedColour: ", colinternal);
    colourSelected();
})
function colourSelected() {
    if (colexternal) {
        colexternal = colexternal.replace('button-', '').replace('-external', '');
    }
    if (colinternal) {
        colinternal = colinternal.replace('button-', '').replace('-internal', '');
    }
}

//|   |   |   |   |   |   |   |   |   |   |   |   HARDWARE OPTIONS
var Leverval = "Black";
var Sboltval = "Black";
var Dhandleval = "Black";
var Hingeval = "Black";
const leverOptions = document.getElementById('lever-options');
leverOptions.addEventListener("click", (event) => {
    Leverval = event.target.id;
    Leverval = Leverval.replace('lh-', '');
    console.log("selectedLever: ", Leverval);
})
const sboltOptions = document.getElementById('sbolt-options');
sboltOptions.addEventListener("click", (event) => {
    Sboltval = event.target.id;
    Sboltval = Sboltval.replace('sb-', '');
    console.log("selectedSbolt: ", Sboltval);
})
const dhandleOptions = document.getElementById('dhandle-options');
dhandleOptions.addEventListener("click", (event) => {
    Dhandleval = event.target.id;
    Dhandleval = Dhandleval.replace('dh-', '');
    console.log("selectedDhandle: ", Dhandleval);
})
const hingeOptions = document.getElementById('hinge-options');
hingeOptions.addEventListener("click", (event) => {
    Hingeval = event.target.id;
    Hingeval = Hingeval.replace('hinge-', '');
    console.log("selectedHinge: ", Hingeval);
})

sboltOptions.addEventListener("click", (event) => {
    Sboltval = event.target.id;
    console.log("Sboltval: ", Sboltval);
    Sboltval = Sboltval.replace('sb-', '');
    console.log("selectedSbolt: ", Sboltval);
    switch (Sboltval) {
        case "Black":
            sbImg.src = "images/acdv225blacksbolthandle.jpg";
            break;
        case "White":
            sbImg.src = "images/acdv225whitesbolthandle.jpg";
            break;
        case "Chrome":
            sbImg.src = "images/acdv225chromesbolthandle.jpg";
            break;
        case "Colmatch":
            sbImg.src = "images/chocbuttons.jpg";
            break;
    }
})




// Get all S-bolt buttons
const sboltButtons = document.querySelectorAll('#sbblack, #sbwhite, #sbchrome, #sbcolmatch');

// Add click event listener to each button
//var sboltSelected = document.getElementById('sbolt-buttons');
sboltButtons.forEach(button => {
    button.addEventListener('click', function() {
        sboltButtons.forEach(btn => btn.classList.remove('s-bolt-selected'));
        
        this.classList.add('s-bolt-selected');
        
        const selectedSbolt = this.id.replace('sb', ''); // removes 'sb' prefix to get color
    });
});


//|   |   |   |   |   |   |   |   |   |   |   |   THRESHOLD OPTIONS
var THval = "Standard Frame";
THRESHOLDSELECT.addEventListener("change", (event) => {
    THval = THRESHOLDSELECT.value;
    const cillOptions = {
        integrated: ['None'],
        standard: ['None', 'Flush Drainage', '85mm Stub', '135mm', '150mm', '190mm']
    };
    
    const options = THval === "Integrated" ? cillOptions.integrated : cillOptions.standard;
    CILLSELECT.innerHTML = options.map(opt => 
        `<option value="${opt}"${opt === '150mm' ? ' selected' : ''}>${opt}</option>`
    ).join('');
    //AI gen need to understand this
})
//|   |   |   |   |   |   |   |   |   |   |   |   GLAZING OPTIONS
var Glassval = "Clear 1.4";
GLAZINGSELECT.addEventListener("change", (event) => {
    Glassval = GLAZINGSELECT.value;
    
})

//|   |   |   |   |   |   |   |   |   |   |   |   FRAME OPTIONS
var fOptTV = document.getElementById('TVSELECT');
var fOpt42 = document.getElementById('FE42SELECT');
var fOpt20 = document.getElementById('FE20SELECT');
var fOptCill = document.getElementById('CILLSELECT');

var FE42val = "None";
var FE20val = "None";
var TVloc = "None";
TVHSSELECT.addEventListener("change", (event) => {
    TVloc = TVHSSELECT.value;
    const TVlocoptions = {
        head: ['Head', 'Head & Sides', 'Head & Left', 'Head & Right'],
        sash: ['None', 'Head', 'Sides', 'Head & Sides', 'Left', 'Right']
    };
    const options = TVloc === "Head" ? TVlocoptions.head : TVlocoptions.sash;
    FE42SELECT.innerHTML = options.map(opt => 
        `<option value="${opt}"${opt === 'None' ? ' selected' : ''}>${opt}</option>`
    ).join('');

    const TVloc20options = {
        head: ['None', 'Sides', 'Left', 'Right'],
        other: ['None', 'Head', 'Sides', 'Head & Sides', 'Left', 'Right']
    }
    const options20 = TVloc === "Head" ? TVloc20options.head : TVloc20options.other;
    FE20SELECT.innerHTML = options20.map(opt => 
        `<option value="${opt}"${opt === 'None' ? ' selected' : ''}>${opt}</option>`
    ).join('');

});

console.log("TVloc: ", TVloc);

//fOptTV.addEventListener('change', (event) => {
//    var selectedOption = fOptTV.options[fOptTV.selectedIndex].text;
//    document.getElementById('fOptTest').textContent = selectedOption;
//})
//fOpt42.addEventListener('change', (event) => {
//    var selectedOption = fOpt42.options[fOpt42.selectedIndex].text;
//    document.getElementById('fOptTest').textContent = selectedOption;
//})
//fOpt20.addEventListener('change', (event) => {
//    var selectedOption = fOpt20.options[fOpt20.selectedIndex].text;
//    document.getElementById('fOptTest').textContent = selectedOption;
//})
//fOptCill.addEventListener('change', (event) => {
//    var selectedOption = fOptCill.options[fOptCill.selectedIndex].text;
//    document.getElementById('fOptTest').textContent = selectedOption;
//})
//                                                                                     page is initialised here

const divElement = document.getElementById('available-style-buttons');





//|   |   |   |   |   |   |   |   |   |   |   |   PRICING
var TVs = 0;
//var TVYN;
//TVYES.addEventListener("click", (event) => {
//    TVYN = "yes";
//})
//TVNO.addEventListener("click", (event) => {
//    TVYN = "no";
//})
TVSELECT.addEventListener("change", (event) => {
    TVs = TVSELECT.value;
    document.getElementById("fOptTest").textContent = TVs;
    getPricing();
})


FE42SELECT.addEventListener("change", (event) => {
    FE42val = FE42SELECT.value;
    console.log("FE42val: ", FE42val);
    FE42coster();
    getPricing();
})
//write FE20
var FE42price = 0;
function FE42coster() {
    const FE42cost = 20;
    switch(FE42val) {
        case "None":
            FE42price = 0;
            break;
        case "Head":
            FE42price = setwidth/1000 * FE42cost ;
            break;
        case "Sides":
            FE42price = setheight/1000 * (FE42cost * 2);
            break;
        case "Head-Sides":
            FE42price = (setwidth/1000 * FE42cost) + (setheight/1000 * FE42cost * 2);
            break;
        case "Left":
            FE42price = setheight/1000 * FE42cost;
            break;
        case "Right":
            FE42price = setheight/1000 * FE42cost;
            break;
    }

}//potentially rewrite here to be more efficient


FE20SELECT.addEventListener("change", (event) => {
    FE20val = FE20SELECT.value;
    console.log("FE20val: ", FE20val);
    FE20coster();
    getPricing();
})
var FE20price = 0;
function FE20coster() {
    const FE20cost = 15;
    switch(FE20val) {
        case "None":
            FE20price = 0;
            break;
        case "Head":
            FE20price = setwidth/1000 * FE20cost ;
            break;
        case "Sides":
            FE20price = setheight/1000 * FE20cost * 2;
            break;
        case "Head-Sides":
            FE20price = (setwidth/1000 * FE20cost) + (setheight/1000 * FE20cost * 2);
            break;
        case "Left":
            FE20price = setheight/1000 * FE20cost;
            break;
        case "Right":
            FE20price = setheight/1000 * FE20cost;
            break;
    }   
}

var CILLprice = 0;
var CILLval = "150mm";
CILLSELECT.addEventListener("change", (event) => {
    CILLval = CILLSELECT.value;
    CILLcoster();
    getPricing();
})
var CILLprice = 0;
function CILLcoster() {
    const CILLcost = 10;
    switch(CILLval) {
        case "None":
            CILLprice = setwidth/1000 * (CILLcost * 1 * -1);
            break;
        case "85mm Stub":
            CILLprice = setwidth/1000 * (CILLcost * 1 * -0.5);
            break;
        case "135mm":
            CILLprice = setwidth/1000 * (CILLcost * 0);
            break;
        case "150mm":
            CILLprice = setwidth/1000 * (CILLcost * 0);
            break;
        case "190mm":
            CILLprice = setwidth/1000 * (CILLcost * 0.5);
            break;
    }
}
function getPricing() {
    console.log("getPricing");
    const plp = 590;
    const TVcost = 12;
    //const FE20price = FE20Cost;

    var totalpriceexvat = plp * bfstyle;
    
    totalpriceexvat += (TVs * TVcost);
    
            
    
    totalpriceexvat += FE42price + FE20price;
    totalpriceexvat += CILLprice;
    var formattedTotalPriceExVat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP'
    }).format(totalpriceexvat);
    var formattedTotalPriceIncVat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP'
    }).format(totalpriceexvat * 1.2);
    var formattedTotalPriceExVatValue = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP'
    }).format(totalpriceexvat * 0.2);

/////why is this having ot be get element?...LOL AI said cos using hyphens
    document.getElementById("price-panel-exvat").textContent = formattedTotalPriceExVat;
    document.getElementById("price-panel-exvat-value").textContent = formattedTotalPriceExVatValue;
    document.getElementById("price-panel-incvat").textContent = formattedTotalPriceIncVat;
}

getPricing();

//|   |   |   |   |   |   |   |   |   |   |   |   DRAWING
//of = 6.24; //52*conv
//maxh = 300; //2500*conv
var FrameInitW,pFrameW,xmove1,xmove2,xmove3,xmove4,pFrameWD,pGasketW,pGasketWD,pSashWT,pSashWD,pSGE,pSashWST,pSashWF,xmovec,pSashWFD,pGlassWD;
var pOFD = 4;
var pGD = 1.8;
var pSD = 7;
var pCD = 4;
var pCill = pCD/2;
var pHED = 5;
var pHE = pHED/2;
var pFELD = 3;
var pFEL = pFELD/2;
var pFERD = 3;
var pFER = pFERD/2;
var pFETD = pFELD + pFERD;
//var pFET = pFETD/2;
const panelpiccanvaswidth = 780; //585
const panelpiccanvasheight = 300; //225
const convw = (panelpiccanvaswidth)/6500;
const convh = (panelpiccanvasheight)/2500;
const conv = convw;
function convertWidthToPixel(x) {
    FrameInitW = Math.round(x*conv);
    pFrameW = FrameInitW - pFELD - pFERD; //for now...leaves flex for add ons
    xmove1 = pOFD/2 + pFELD;
    pFrameWD = pFrameW - pOFD;
    pGasketW = pFrameW - (pOFD * 2);
    xmove2 = pOFD + (pGD/2) + pFELD;
    pGasketWD = pGasketW - pGD;
    pSashWT = pGasketW - (pGD * 2);
    xmove3 = pOFD + pGD + (pSD/2) + pFELD;
    pSashWD = pSashWT - pSD;
    pSGE = (bfstyle - 1) * pGD;
    pSashWST = pSashWT - pSGE;
    pSashWF = pSashWST/bfstyle;
    xmovec = pSashWF + pGD;
    pSashWFD = pSashWF - pSD;
    pGlassWD = pSashWF - (pSD * 2);
    xmove4 = pOFD + pGD + pSD + pFELD;
}
var FrameInitH,pFrameH,ymove1,ymove2,ymove3,ymove4,pFrameHD,pGasketH,pGasketHD,pSashH,pSashHD,pGlassHD;
function convertHeightToPixel(x) {
    FrameInitH = Math.round(x*conv);
    pFrameH = FrameInitH - pCD - pHED;
    ymove1 = pOFD/2 + pHED;
    pFrameHD = pFrameH - pOFD;
    pGasketH = pFrameH - (pOFD * 2);
    ymove2 = pOFD + (pGD/2) + pHED;
    pGasketHD = pGasketH - pGD;
    pSashH = pGasketH - (pGD * 2);
    ymove3 = pOFD + pGD + (pSD/2) + pHED;
    pSashHD = pSashH - pSD;
    pGlassHD = pSashH - (pSD * 2);
    ymove4 = pOFD + pGD + pSD + pHED;

    //console.log("---------hinput: ", x);
    //console.log("conv: ", conv);
    //console.log("FrameInit: ", FrameInitH);
    //console.log("pFrameH: ", pFrameH);
    //console.log("pFrameHD: ", pFrameHD);
    //console.log("pHGasketH: ", pGasketH);
    //console.log("pHGasketHD: ", pGasketHD);
    //console.log("pSashH", pSashH);
    //console.log("pSashHD", pSashHD);
    //console.log("pGlassH: ", pGlassHD);
}
//let canvas;
function draw(theview) {
    const canvas = document.getElementById(theview);
    if (canvas.getContext) {
        const outview = canvas.getContext("2d");
        outview.clearRect(0, 0, canvas.width, canvas.height)
        canvas.width = panelpiccanvaswidth;
        canvas.height = panelpiccanvasheight;
        cw = panelpiccanvaswidth;;
        ch = panelpiccanvasheight;
        w = Math.round(width*conv);
        h = Math.round(height*conv);
        r = Math.round(2100*conv);
        outview.lineWidth = 0;
        //Black Borders below??
        //outview.strokeRect((cw/2)-(w/2),maxh-(h)-2,w,h);
        //outview.strokeRect((cw/2)-(w/2)+of,maxh-(h)+(of)-2,(w-(of*2)),(h-(of*2)));
        //outview.lineWidth = of;//rounding and theory doesn't work
        const xStart = (cw/2)-(w/2);
        const yStart = (ch)-FrameInitH;
        //              -----OUTER FRAME LINE
        outview.lineWidth = pOFD;
        outview.strokeStyle = '#383e42';
        //outview.strokeStyle = 'grey';
        outview.strokeRect(xStart+xmove1,yStart+ymove1,pFrameWD,pFrameHD);
        //              -----CILL LINE
        outview.lineWidth = pCD;
        outview.strokeStyle = '#383e42';
        //outview.strokeStyle = 'grey';
        outview.beginPath();
        outview.moveTo(xStart,yStart+pFrameH+pCill+pHED);
        outview.lineTo(xStart + FrameInitW ,yStart+pFrameH+pCill+pHED);
        outview.stroke();
        //              -----HEAD LINE
        outview.lineWidth = pHED;
        outview.strokeStyle = '#383e42';
        //outview.strokeStyle = 'blue';
        outview.beginPath();
        outview.moveTo(xStart,yStart+pHE);
        outview.lineTo(xStart + FrameInitW ,yStart+pHE);
        outview.stroke();
        //              -----LEFT FRAME EXT LINE
        outview.lineWidth = pFELD;
        outview.strokeStyle = '#383e42';
        //outview.strokeStyle = 'blue';
        outview.beginPath();
        outview.moveTo(xStart+pFEL,yStart+pHED);
        outview.lineTo(xStart+pFEL ,yStart+pHED+pFrameH);
        outview.stroke();
        //              -----RIGHT FRAME EXT LINE
        outview.lineWidth = pFELD;
        outview.strokeStyle = '#383e42';
        //outview.strokeStyle = 'blue';
        outview.beginPath();
        outview.moveTo(xStart+FrameInitW-pFEL,yStart+pHED);
        outview.lineTo(xStart+FrameInitW-pFEL,yStart+pHED+pFrameH);
        outview.stroke();
        //              -----GASKET LINE
        outview.lineWidth = pGD;
        outview.strokeStyle = 'black';
        outview.strokeRect(xStart+xmove2,yStart+ymove2,pGasketWD,pGasketHD);
        //              -----SASH LINE
        outview.lineWidth = pSD;
        outview.strokeStyle = '#383e42';
        //outview.strokeStyle = 'grey';
        for(let i = 0; i < bfstyle; i++){
            outview.strokeRect(xStart+xmove3+xmovec*i,yStart+ymove3,pSashWFD,pSashHD);
        }
        //-----SASH GASKETS
        for(let i = 1; i < bfstyle; i++){
            outview.lineWidth = pGD;
            outview.strokeStyle = 'black';
            outview.beginPath();
            outview.moveTo(xStart+xmove2+(pSashWF+pGD)*i,yStart+ymove2);
            outview.lineTo(xStart+xmove2+(pSashWF+pGD)*i,yStart+ymove2+pSashH+pGD);
            outview.stroke();
        }
        //              ------BFS ARROWS
        outview.lineWidth = pSD;
        outview.strokeStyle = '#383e42'
        
        //              ------GLASS PANES
        outview.fillStyle = '#ADD8E6'
        //outview.fillRect(xStart+xmove4,yStart+ymove4,pGlassWD,pGlassHD);
        for(let i = 0; i < bfstyle; i ++){
            outview.fillRect(xStart+xmove4+xmovec*i,yStart+ymove4,pGlassWD,pGlassHD);
        }
    }
}

//window.addEventListener("load");
leafbuttonsid.addEventListener("click", (event) => {
    const snode = document.getElementById("available-style-buttons");
    while (snode.firstChild) {
        snode.removeChild(snode.lastChild);
    }
    addStyleButtons();
    convertWidthToPixel(width);
    convertHeightToPixel(height);
    draw("#canvas-outview");
});
convertWidthToPixel(width);
convertHeightToPixel(height);
draw("canvas-outview"); //                


//|   |   |   |   |   |   |   |   |   |   |   |   VARIABLE STORAGE AND ENCODE/DECODE
testbutton.addEventListener("click", (event) => {
    runSample();
})
function runSample () {
    let quoteSummaryCode = [];
    console.log("_____________value log_______________");
    console.log("setwidth: ", setwidth);      
    quoteSummaryCode.push(setheight);
    console.log("setheight: ", setheight);
    quoteSummaryCode.push(bfstyle);
    console.log("bfstyle: ", bfstyle);
    quoteSummaryCode.push(bfconfig);
    console.log("bfconfig: ", bfconfig);
    quoteSummaryCode.push(colexternal);
    console.log("colexternal: ", colexternal);
    quoteSummaryCode.push(colinternal);
    console.log("colinternal: ", colinternal);
    quoteSummaryCode.push(TVs);
    console.log("TVs: ", TVs);
    quoteSummaryCode.push(TVloc);
    console.log("TVloc: ", TVloc);
    quoteSummaryCode.push(FE42val);
    console.log("FE42val: ", FE42val);
    quoteSummaryCode.push(FE20val);
    console.log("FE20val: ", FE20val);
    quoteSummaryCode.push(THval);
    console.log("THval: ", THval);
    quoteSummaryCode.push(CILLval);
    console.log("CILLval: ", CILLval);
    quoteSummaryCode.push(Leverval);
    console.log("Leverval: ", Leverval);
    quoteSummaryCode.push(Sboltval);
    console.log("Sboltval: ", Sboltval);
    quoteSummaryCode.push(Dhandleval);
    console.log("Dhandleval: ", Dhandleval);
    quoteSummaryCode.push(Hingeval);
    console.log("Hingeval: ", Hingeval);
    quoteSummaryCode.push(Glassval);
    console.log("Glassval: ", Glassval);
}


//|   |   |   |   |   |   |   |   |   |   |   |   PRODUCE NEW TABLE FOR QUOTE SUM
function openSummary () {
    var summaryTable = document.getElementById("tableContainer");
    if (summaryTable) {
        while (summaryTable.children[0].firstChild) {
            summaryTable.children[0].removeChild(summaryTable.children[0].firstChild);
        }
    }

    quoteSummaryElements();
    draw("summary-pic");
    paneViewerShow("summary-page");
}
function quoteSummaryElements () {
    var summaryTable = document.getElementById("tableContainer");
    summaryTable.children[0].id = "main-table-view";
    // Create the table element
    const table = document.getElementById("main-table-view");
    table.style.borderCollapse = "collapse"; // Optional styling for table

    // Define headers
    const headers = ["Attribute", "Description", "Price"];

    // Define rows with subheadings
    const rows = [
      // Subheading: Size & Style
      { attribute: "Size & Style", isSubheading: true },
      { attribute: "Size", description: setwidth + "mm" + " x " + setheight + "mm", price: "" },
      { attribute: "Style", description: bfconfig + " - " + bfstyle + " leaves", price: "" },

      { attribute: "Colour", isSubheading: true },
      { attribute: "Colour External", description: colexternal, price: "" },
      { attribute: "Colour Internal", description: colinternal, price: "" },

      { attribute: "Trickle Vents", isSubheading: true },
      { attribute: "No Of Vents", description: TVs, price: "" },
      { attribute: "Vent Location", description: TVloc, price: "" },

      { attribute: "Frame Add-Ons", isSubheading: true },
      { attribute: "42mm Add-Ons", description: FE42val, price: "" },
      { attribute: "20mm Add-Ons", description: FE20val, price: "" },      

      { attribute: "Threshold & Cill", isSubheading: true },
      { attribute: "Cill Depth", description: CILLval, price: "" },      
      { attribute: "Threshold", description: THval, price: "" },      

      { attribute: "Hardware", isSubheading: true },
      { attribute: "Lever Handle", description: Leverval, price: "" },      
      { attribute: "S-Bolt", description: Sboltval, price: "" },      
      { attribute: "D-Handle", description: Dhandleval, price: "" },      
      { attribute: "Hinges", description: Hingeval, price: "" },      

      { attribute: "Glazing", isSubheading: true },
      { attribute: "Glass Option", description: Glassval, price: "" },      
    ];

    // Create the header row
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    headers.forEach(headerText => {
      const th = document.createElement("th");
      th.textContent = headerText;
      th.style.border = "1px solid black"; // Optional border styling
      th.style.padding = "8px"; // Optional padding
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create the table body with rows
    const tbody = document.createElement("tbody");

    rows.forEach(row => {
      const tr = document.createElement("tr");

      // Create the Attribute cell
      const tdAttribute = document.createElement("td");
      tdAttribute.textContent = row.attribute;
      tdAttribute.style.border = "1px solid black";
      tdAttribute.style.padding = "8px";

      // Make subheadings bold and span across all columns
      if (row.isSubheading) {
        tdAttribute.colSpan = 3;
        tdAttribute.style.fontWeight = "bold";
        tdAttribute.style.textAlign = "left";
        tr.appendChild(tdAttribute);
      } else {
        // Normal row with three columns
        const tdDescription = document.createElement("td");
        const tdPrice = document.createElement("td");

        tdDescription.textContent = row.description;
        tdPrice.textContent = row.price;

        // Optional cell styling
        tdDescription.style.border = "1px solid black";
        tdDescription.style.padding = "8px";
        tdPrice.style.border = "1px solid black";
        tdPrice.style.padding = "8px";

        // Append cells to the row
        tr.appendChild(tdAttribute);
        tr.appendChild(tdDescription);
        tr.appendChild(tdPrice);
      }

      tbody.appendChild(tr);
    });

    table.appendChild(tbody);
}

