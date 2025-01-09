
//|   |   |   |   |   |   |   |   |   |   |   |   TAB SETUP
var tabsContainer = document.querySelector(".tab-pane");
var tabsList = tabsContainer.querySelector("ul");
var tabButtons = tabsList.querySelectorAll("a");
var tabButtonIds = Array.from(tabButtons).map(button => button.id);
var tabPanels = tabsContainer.querySelectorAll(".interaction-pane > div");
var leafButtons = tabsContainer.querySelectorAll(".leaf-buttons > button");




//|   |   |   |   |   |   |   |   |   |   |   |   TAB INDEX & SWITCHING
function tabInit() {
    tabButtonIds.forEach(tabId => {
        tabViewerShow(tabId);
    });
}
tabInit();
tabViewerShow("tab-1");




tabButtons.forEach((button, index) => { // Use the index from the forEach loop
    if (tabPanels[index]) { // Check if the element exists before accessing it
        tabPanels[index].setAttribute("hidden", "");
    }
});
tabPanels[0].removeAttribute("hidden", true);

function paneViewerClear (pane) {
    var paneViewer = document.getElementById(pane);
    paneViewer.classList.add("pane-viewer");
}
function paneViewerShow (pane) {
    var paneViewer = document.getElementById(pane);
    paneViewer.classList.remove("pane-viewer");
}
function tabViewerClear (tab) {
    var tabViewer = document.getElementById(tab);
    tabViewer.classList.add("tab-viewer");
}
function tabViewerShow (tab) {
    var tabViewer = document.getElementById(tab);
    tabViewer.classList.remove("tab-viewer");
}

tabsContainer.addEventListener("click", (e) => {
    console.log(e.target);
    const clickedTab = e.target.closest("a"); //weird bit of data validation?
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
    const matrixclass = document.getElementById("available-style-configs-viewer");
    const matrixinout = matrixclass.classList;

    function tabSwitcher() {
        tabPanels.forEach((panel) => {
            panel.setAttribute("hidden", true);
            });
            activePanel.removeAttribute("hidden");
    }

    if (activePanelId === "#summary") {
        console.log("summary found");
        paneViewerClear("main-view-pane");
        paneViewerClear("available-style-configs-viewer");
        openSummary();
        previousTab = activePanelId;
    } else {
        if (previousTab === "#summary") {
            paneViewerClear("summary-page");
            paneViewerShow("main-view-pane");
            previousTab = activePanelId;
            
        }
    if (matrixinout.contains("matrix-box")) {
        paneViewerClear("available-style-configs-viewer");
        paneViewerShow("main-view-pane");
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

//|   |   |   |   |   |   |   |   |   |   |   |   BACK & CONTINUE BUTTONS
styleback.addEventListener("click", (e) => {
    console.log(e.target);
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    })
    const prevPanel = tabsContainer.querySelector("#size")
    prevPanel.removeAttribute("hidden");
})
colourback.addEventListener("click", (e) => {
    console.log(e.target);
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    })
    const prevPanel = tabsContainer.querySelector("#style")
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
glazingback.addEventListener("click", (e) => {
    console.log(e.target);
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    })
    const prevPanel = tabsContainer.querySelector("#threshold")
    prevPanel.removeAttribute("hidden");
})
trickleventsback.addEventListener("click", (e) => {
    console.log(e.target);
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    })
    const prevPanel = tabsContainer.querySelector("#glazing")
    prevPanel.removeAttribute("hidden");
})
frameoptionsback.addEventListener("click", (e) => {
    console.log(e.target);
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    })
    const prevPanel = tabsContainer.querySelector("#trickle-vents")
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
sizecontinue.addEventListener("click", (e) => {
    console.log(e.target);
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    })
    const nextPanel = tabsContainer.querySelector("#style")
    nextPanel.removeAttribute("hidden");
    tabViewerShow("tab-2");
})
stylecontinue.addEventListener("click", (e) => {
    console.log(e.target);
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    })
    const nextPanel = tabsContainer.querySelector("#colour")
    nextPanel.removeAttribute("hidden");
    tabViewerShow("tab-2");
})
colourcontinue.addEventListener("click", (e) => {
    console.log(e.target);
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    })
    const nextPanel = tabsContainer.querySelector("#hardware-options")
    nextPanel.removeAttribute("hidden");
    tabViewerShow("tab-3");
})
hardwareoptionscontinue.addEventListener("click", (e) => {
    console.log(e.target);
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    })
    const nextPanel = tabsContainer.querySelector("#threshold")
    nextPanel.removeAttribute("hidden");
    tabViewerShow("tab-4");
})
thresholdcontinue.addEventListener("click", (e) => {
    console.log(e.target);
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    })
    const nextPanel = tabsContainer.querySelector("#glazing")
    nextPanel.removeAttribute("hidden");
    tabViewerShow("tab-5");
})
glazingcontinue.addEventListener("click", (e) => {
    console.log(e.target);
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    })
    const nextPanel = tabsContainer.querySelector("#trickle-vents")
    nextPanel.removeAttribute("hidden");
    tabViewerShow("tab-6");
    tabViewerShow("tab-7");
})
trickleventscontinue.addEventListener("click", (e) => {
    console.log(e.target);
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    })
    const nextPanel = tabsContainer.querySelector("#frame-options")
    nextPanel.removeAttribute("hidden");
    tabViewerShow("tab-7");
})










//|   |   |   |   |   |   |   |   |   |   |   |   SIZE & STYLE FUNCTIONS
let widthinput = document.getElementById("widthinput");
var setwidth;
var setheight;
var leafwidth;
var runinitval = 0;
//setwidth = 3000;
//setheight = 2100;
const minwidth = 1500;
const minheight = 1050;

sizestyleinput.addEventListener("submit", (event) => {
    event.preventDefault();
    setwidth = widthinput.value;
    setheight = heightinput.value;
    runsizeinitzer();
    findleafwidth();

    if(runinitval === 1) {
        availableLeavesCalc();
        showLeafButtons();

        bfdrawer();
    }
});

function findleafwidth() {
    if ( bfstyle === 0) {
        return;
    };
    leafwidth = setwidth / bfstyle;
    leafwidth = Math.round(leafwidth * 100) / 100;
    leafwidthid.textContent = leafwidth;
}
function runsizeinitzer() {
    if (setwidth < minwidth || setheight < minheight) {
        alert("Please enter a width and height greater than 1500mm and 1050mm respectively");
        runinitval = 0;
        return;
    } else {
        runinitval = 1;
    }
}
function runleafinitzer() {
}

function bfdrawer() {
    convertWidthToPixel(setwidth);
    convertHeightToPixel(setheight);
    draw("canvas-outview");
}


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
    console.log("leavescalcrun: ", setwidth, astyles);
    //leafnotest.textContent = astyles;
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
var bfconfig = 0;
var bfstyle = 0;
function logBfLeaves (x) {
    var bfl = Number(x);
    bfstyle = bfl;
    return bfl;
}
BF2.addEventListener("click", (event) => {
    bfstyle = 2;
    //leafbuttontest.textContent = bfstyle;
    noleavesguidemax.textContent = bfstyle;
    maxwidthguidemax.textContent = bfstyle * 1200;
    noleavesguidemin.textContent = bfstyle;
    maxwidthguidemin.textContent = bfstyle * 750;
    logBfLeaves(bfstyle);
    BASEcoster();
    findleafwidth();
})
BF3.addEventListener("click", (event) => {
    bfstyle = 3;
    //leafbuttontest.textContent = bfstyle;
    noleavesguidemax.textContent = bfstyle;
    maxwidthguidemax.textContent = bfstyle * 1200;
    noleavesguidemin.textContent = bfstyle;
    maxwidthguidemin.textContent = bfstyle * 750;
    logBfLeaves(bfstyle);
    BASEcoster();
    findleafwidth();
})
BF4.addEventListener("click", (event) => {
    bfstyle = 4;
    //leafbuttontest.textContent = bfstyle;
    noleavesguidemax.textContent = bfstyle;
    maxwidthguidemax.textContent = bfstyle * 1200;
    noleavesguidemin.textContent = bfstyle;
    maxwidthguidemin.textContent = bfstyle * 750;
    logBfLeaves(bfstyle);
    BASEcoster();
    findleafwidth();
})
BF5.addEventListener("click", (event) => {
    bfstyle = 5;
    //leafbuttontest.textContent = bfstyle;
    noleavesguidemax.textContent = bfstyle;
    maxwidthguidemax.textContent = bfstyle * 1200;
    noleavesguidemin.textContent = bfstyle;
    maxwidthguidemin.textContent = bfstyle * 750;
    logBfLeaves(bfstyle);
    BASEcoster();
    findleafwidth();
})
BF6.addEventListener("click", (event) => {
    bfstyle = 6;
    //leafbuttontest.textContent = bfstyle;
    noleavesguidemax.textContent = bfstyle;
    maxwidthguidemax.textContent = bfstyle * 1200;
    noleavesguidemin.textContent = bfstyle;
    maxwidthguidemin.textContent = bfstyle * 750;
    logBfLeaves(bfstyle);
    BASEcoster();
    findleafwidth();
})
const divElement = document.getElementById('available-style-buttons');
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
    if (event.target.tagName !== 'BUTTON') return;

    if (event.target.matches('button')) {
        bfconfig = event.target.id;
        bfconfig = bfconfig.replace('style-', '');
        console.log("bfconfig: ", bfconfig);
        LEVERcoster();
        SBOLTcoster();
        DHANDLEcoster();
        GLASScoster();
    }
});
const availableStyleConfigsViewer = document.getElementById("available-style-configs-selector");
availableStyleConfigsViewer.addEventListener("click", (event) => {
    paneViewerClear("main-view-pane");
    const matrixclass = document.getElementById("available-style-configs-viewer");
    matrixclass.classList.add("matrix-box");
    console.log(event.target);
    if (event.target.tagName !== 'BUTTON') return;
    if (event.target.matches('button')) {
        const viewer = document.getElementById("available-style-configs-viewer");
        viewer.classList.toggle("pane-viewer");
        availableLeavesCalc();
        console.log("tried run availableLeavesCalc");
        console.log("astyles: ", astyles);
        rowticker = 1;
        clearArticles();
        for (let i = 0; i < astyles.length; i++) {
            buttonsticker = 0;
            stylerowfiller(astyles[i]);
            console.log("tried run stylerowfiller");
        }
        //stylerowfiller(astyles[1]);
    }
})
const configs2 = ["220/202", "211"];
const configs3 = ["303/330", "321/312"];
const configs4 = ["404/440", "422", "431/413"];
const configs5 = ["505/550", "541/514", "523/532"];
const configs6 = ["606/660", "651/615", "642/624", "633"];
const configsviewerinfo = [
    {leaf: 2, img: ["images/bfi2_1.png", "images/bfi2_2.png"], name: ["220/202", "211"], buttons: ["220", "202", "211"]},
    {leaf: 3, img: ["images/bfi3_1.png", "images/bfi3_2.png"], name: ["303/330", "321/312"], buttons: ["303", "330", "321", "312"]},
    {leaf: 4, img: ["images/bfi4_1.png", "images/bfi4_2.png", "images/bfi4_3.png"], name: ["404/440", "431/413", "422"], buttons: ["404", "440", "431", "413", "422"]},
    {leaf: 5, img: ["images/bfi5_1.png", "images/bfi5_2.png", "images/bfi5_3.png"], name: ["505/550", "541/514", "532/523"], buttons: ["505", "550", "541", "514", "532", "523"]},
    {leaf: 6, img: ["images/bfi6_1.png", "images/bfi6_2.png", "images/bfi6_3.png", "images/bfi6_4.png"], name: ["606/660", "651/615", "642/624", "633"], buttons: ["606", "660", "651", "615", "642", "624", "633"]}
];

var stylerowticker = 0;
var rowticker = 1;
function clearArticles() {
    styleViewerArticles.forEach(article => {
        while (article.firstChild) {
            article.removeChild(article.firstChild);
        }
    });
}

var buttonsticker = 0;
const styleViewerArticles = document.querySelectorAll('.styleviewerarticles');
function stylerowfiller (leavesno) {
    function styleimagefiller(offset) {
        configsviewerinfo[leavesno-2].img.forEach((img, index) => {
            console.log("offset: ", offset);
            const article = styleViewerArticles[offset + index];
            
            const newbtn1 = document.createElement('button');
            newbtn1.textContent = configsviewerinfo[leavesno-2].buttons[index+buttonsticker];
            newbtn1.id = "style-" + configsviewerinfo[leavesno-2].buttons[index+buttonsticker] + "-asv";
            newbtn1.type = "button";
            article.appendChild(newbtn1);
            const newbtn2 = document.createElement('button');
            newbtn2.textContent = configsviewerinfo[leavesno-2].buttons[index+1+buttonsticker];
            newbtn2.id = "style-" + configsviewerinfo[leavesno-2].buttons[index+1+buttonsticker] + "-asv";
            newbtn2.type = "button";
            if(newbtn1.textContent.charAt(1) === newbtn1.textContent.charAt(2)) {
                
            } else {
                article.appendChild(newbtn2);
            }            
            
            
            const newimg = document.createElement('img');
            newimg.src = img;
            article.appendChild(newimg);      
            

            const xtest = configsviewerinfo[leavesno-2].buttons[index+buttonsticker];
            const fdig = xtest.charAt(0);
            const mplp = 590;
            const mprice = mplp * fdig;
            const newtext = document.createElement('p');
            newtext.textContent = formatGBP(mprice);
            article.appendChild(newtext);

            buttonsticker += 1;
        });
    }
    const rownums = (astyles.length);
    if (rowticker > rownums) {
        return;
    }
    switch (rowticker) { 
        case 1:
            const rowox1 = 0;
            styleimagefiller(rowox1);
            break;
        case 2:
            const rowox2 = 4;
            styleimagefiller(rowox2);
            break;
        case 3:
            const rowox3 = 8;
            styleimagefiller(rowox3);
            break;
    };
    rowticker += 1;
}
function matrixPricer() {
    const xtest = configsviewerinfo[leavsno-2].buttons[index+buttonsticker];
    const fdig = xtest.charAt(1);
    console.log("fdig bruhhhhhhhhhhhh: ", fdig);
}









//|   |   |   |   |   |   |   |   |   |   |   |   COLOUR OPTIONS
const regcoloptionsexternal = document.getElementById('reg-col-options-external');
const regcoloptionsinternal = document.getElementById('reg-col-options-internal');
var colexternal = "Grey";
var colinternal = "Grey";

regcoloptionsexternal.addEventListener("click", (event) => {
    colexternal = event.target.id;
    console.log("selectedColour: ", colexternal);
    colourSelected();
    COLScoster();
})
regcoloptionsinternal.addEventListener("click", (event) => {
    colinternal = event.target.id;
    console.log("selectedColour: ", colinternal);
    colourSelected();
    COLScoster();
})
function colourSelected() {
    if (colexternal) {
        colexternal = colexternal.replace('button-', '').replace('-external', '');
    }
    if (colinternal) {
        colinternal = colinternal.replace('button-', '').replace('-internal', '');
    }
}
function COLScoster() {
    if (colexternal === "RAL" || colinternal === "RAL") {
        COLScoster();
    }
}










//|   |   |   |   |   |   |   |   |   |   |   |   HARDWARE OPTIONS
var Leverval = "Black";
var Sboltval = "Black";
var Dhandleval = "Black";
var Hingeval = "Black";
const leverOptions = document.getElementById('lever-options');
//leverOptions.addEventListener("click", (event) => {
//    Leverval = event.target.id;
//    Leverval = Leverval.replace('lh-', '');
//    console.log("selectedLever: ", Leverval);
//    LEVERcoster();
//})
//const sboltOptions = document.getElementById('sbolt-options');
//sboltOptions.addEventListener("click", (event) => {
//    Sboltval = event.target.id;
//    Sboltval = Sboltval.replace('sb-', '');
//    console.log("selectedSbolt: ", Sboltval);
//    SBOLTcoster();
//})
//const dhandleOptions = document.getElementById('dhandle-options');
//dhandleOptions.addEventListener("click", (event) => {
//    Dhandleval = event.target.id;
//    Dhandleval = Dhandleval.replace('dh-', '');
//    console.log("selectedDhandle: ", Dhandleval);
//    DHANDLEcoster();
//})
//const hingeOptions = document.getElementById('hinge-options');
//hingeOptions.addEventListener("click", (event) => {
//    Hingeval = event.target.id;
//    Hingeval = Hingeval.replace('hinge-', '');
//    console.log("selectedHinge: ", Hingeval);
//    HINGEcoster();
//})

//sboltOptions.addEventListener("click", (event) => {
//    Sboltval = event.target.id;
//    console.log("Sboltval: ", Sboltval);
//    Sboltval = Sboltval.replace('sb-', '');
//    console.log("selectedSbolt: ", Sboltval);
//    switch (Sboltval) {
//        case "Black":
//            sbImg.src = "images/acdv225blacksbolthandle.jpg";
//            break;
//        case "White":
//            sbImg.src = "images/acdv225whitesbolthandle.jpg";
//            break;
//        case "Chrome":
//            sbImg.src = "images/acdv225chromesbolthandle.jpg";
//            break;
//        case "Colmatch":
//            sbImg.src = "images/chocbuttons.jpg";
//            break;
//    }
//})
var levercount = 0;
function LEVERcounter() {
    if (bfconfig) {
        let [second, third] = [parseInt(bfconfig[1]), parseInt(bfconfig[2])];
        second += 2;
        third += 2;
        if (second % 2 === 0 && third % 2 === 0) {
            levercount = 0;
        } else if ((second % 2 !== 0 && third % 2 === 0) || (second % 2 === 0 && third % 2 !== 0)) {
            levercount = 1;
        } else if (second % 2 !== 0 && third % 2 !== 0) {
            levercount = 2;
        }
    }
}
var sboltcount = 0;
function SBOLTcounter() {
    if (bfconfig) {
        let [second, third] = [parseInt(bfconfig[1]), parseInt(bfconfig[2])];
        if (second > 0) {
            let secondEven = second - (second % 2);
            sboltcount += secondEven / 2;
        }
        if (third > 0) {
            let thirdEven = third - (third % 2);
            sboltcount += thirdEven / 2;
        }

    }
}
var dhandlecount = 0;
function DHANDLEcounter() {
    if (bfconfig) {
        let [second, third] = [parseInt(bfconfig[1]), parseInt(bfconfig[2])];
        if (second > 0) {
            let secondEven = second - (second % 2);
            dhandlecount += secondEven / 2;
        }
        if (third > 0) {
            let thirdEven = third - (third % 2);
            dhandlecount += thirdEven / 2;
        }

    }
}









const sboltButtons = document.querySelectorAll('#sbblack, #sbwhite, #sbchrome, #sbcolmatch');

sboltButtons.forEach(button => {
    button.addEventListener('click', function() {
        sboltButtons.forEach(btn => btn.classList.remove('s-bolt-selected'));
        
        this.classList.add('s-bolt-selected');
        
        const selectedSbolt = this.id.replace('sb', ''); // removes 'sb' prefix to get color
    });
});







//|   |   |   |   |   |   |   |   |   |   |   |   THRESHOLD OPTIONS
const optinit = "150mm";
var THval = "Standard Frame";
var CILLval = "150mm";
var CILLvalmem;
var intticker = 0;
THRESHOLDSELECT.addEventListener("change", (event) => {
    if (THval === "Integrated") {
        CILLvalmem = CILLval;
        intticker += 1;
    }
    if (THval !== "Integrated" && intticker === 1) {
        intticker -= 1;
    }
    THval = THRESHOLDSELECT.value;
    const cillOptions = {
        integrated: ['None'],
        standard: ['None', '70mm (Flush)', '85mm Stub', '135mm', '150mm', '190mm']
    };
    
    
    const options = THval === "Integrated" ? cillOptions.integrated : cillOptions.standard;
    CILLSELECT.innerHTML = options.map(opt => 
        `<option value="${opt}"${opt === CILLvalmem ? ' selected' : ''}>${opt}</option>`
    ).join('');
    if (THval !== "Integrated" && intticker === 1) {
        CILLval = CILLvalmem;
    }
    
    THcoster();
    //AI gen need to understand this
})

CILLSELECT.addEventListener("change", (event) => {
    CILLval = CILLSELECT.value;
    CILLcoster();
})
//|   |   |   |   |   |   |   |   |   |   |   |   GLAZING OPTIONS
var Glassval = "Clear 1.4";
GLAZINGSELECT.addEventListener("change", (event) => {
    Glassval = GLAZINGSELECT.value;
    GLASScoster();
    
})

const glasswidthded = { //missing: 211,624,642,725,752
    '202': 142,
    '220': 142,
    '303': 110,
    '330': 110,
    '312': 156,
    '321': 156,
    '404': 164,
    '440': 164,
    '422': 210,
    '413': 128,
    '431': 128,
    '505': 133,
    '550': 133,
    '523': 178,
    '532': 178,
    '514': 178,
    '541': 178,
    '606': 186,
    '660': 186,
    '633': 150,
    '615': 150,
    '651': 150,
    '707': 154,
    '770': 154,
    '734': 200,
    '743': 200,
    '716': 200,
    '761': 200
};
const glassheightded = 206;
var glasswidth = 0;
var glassheight = 0;
var glassarea = 0;
function GLASSsizer () {
    glasswidth = (setwidth - glasswidthded[bfconfig]) /bfstyle;
    glassheight = (setheight - glassheightded);
    glassarea = glasswidth * glassheight / 1000000;
    console.log("glassarea: ", glassarea);
}
function GLASSclearer() {
    glasswidth = 0;
    glassheight = 0;
}

//|   |   |   |   |   |   |   |   |   |   |   |   FRAME OPTIONS
var fOptTV = document.getElementById('TVSELECT');
var fOpt42 = document.getElementById('FE42SELECT');
var fOpt20 = document.getElementById('FE20SELECT');
var fOptCill = document.getElementById('CILLSELECT');

var TVs = 0;
var TVloc = "None";
var FE42val = "None";
var FE20val = "None";

TVSELECT.addEventListener("change", (event) => {
    var TVtemp = TVSELECT.value;
    if (TVtemp === "None") {
        TVs = 0;
    } else {
        TVs = TVSELECT.value;
    }
    const TVlocoptions = {
        None: ['None'],
        Req: ['None', 'Head', 'Sash']
    };
    const options = TVs === 0 ? TVlocoptions.None : TVlocoptions.Req;
    TVHSSELECT.innerHTML = options.map(opt => 
        `<option value="${opt}">${opt}</option>`
    ).join('');
    document.getElementById("TVHSSELECT").dispatchEvent(new Event('change'));


    TVcoster();
})
var head42options = ['None', 'Head', 'Sides', 'Head-Sides', 'Head-Left', 'Head-Right', 'Left', 'Right'];
var head20options = ['None', 'Head', 'Sides', 'Head-Sides', 'Head-Left', 'Head-Right', 'Left', 'Right'];

TVHSSELECT.addEventListener("change", (event) => {
    TVloc = TVHSSELECT.value;
    const TVloc42options = {
        head: ['Head', 'Head-Sides', 'Head-Left', 'Head-Right', 'Left', 'Right'],
        sash: ['None', 'Head', 'Sides', 'Head-Sides', 'Head-Left', 'Head-Right', 'Left', 'Right']
    };
    const options = TVloc === "Head" ? TVloc42options.head : TVloc42options.sash;
    FE42SELECT.innerHTML = options.map(opt => 
        `<option value="${opt}">${opt}</option>`
    ).join('');
    document.getElementById("FE42SELECT").dispatchEvent(new Event('change'));

    const TVloc20options = {
        head: ['None', 'Sides', 'Left', 'Right'],
        other: ['None', 'Head', 'Sides', 'Head-Sides', 'Head-Left', 'Head-Right', 'Left', 'Right']
    }
    const options20 = TVloc === "Head" ? TVloc20options.head : TVloc20options.other;
    FE20SELECT.innerHTML = options20.map(opt => 
        `<option value="${opt}">${opt}</option>`
    ).join('');
    document.getElementById("FE20SELECT").dispatchEvent(new Event('change'));
    FE42coster();
    FE20coster();
});

console.log("TVloc: ", TVloc);

FE42SELECT.addEventListener("change", (event) => {
    var FE42temp = FE42SELECT.value;
    if (FE42temp === "None") {
        FE42val = "None";
    } else {
        FE42val = FE42SELECT.value;
    }
    const filteredHead20 = head20options.filter(opt => opt !== FE42temp);//could use factory function for html generation
    FE20SELECT.innerHTML = filteredHead20.map(opt => 
        `<option value="${opt}">${opt}</option>`
    ).join('');
    document.getElementById("FE20SELECT").dispatchEvent(new Event('change'));
    head20options = filteredHead20;

    console.log("FE42val: ", FE42val);
    FE42coster();
})
FE20SELECT.addEventListener("change", (event) => {
    var FE20temp = FE20SELECT.value;
    if (FE20temp === "None") {
        FE20val = "None";
    } else {
        FE20val = FE20SELECT.value;
    }
    //const filteredHead42 = head42options.filter(opt => opt !== FE20temp);
    //FE42SELECT.innerHTML = filteredHead42.map(opt => 
    //    `<option value="${opt}">${opt}</option>`
    //).join('');
    //document.getElementById("FE42SELECT").dispatchEvent(new Event('change'));
    //head42options = filteredHead42;
    console.log("FE20val: ", FE20val);
    FE20coster();
})
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






//|   |   |   |   |   |   |   |   |   |   |   |   PRICING
var plp = 590;

var totalpriceexvat = 0;
var formattedTotalPriceExVat = "";
var formattedTotalPriceIncVat = "";
var formattedTotalPriceVatValue = "";

const TVcost = 12;
const FE42cost = 20;
const CILLNonecost = -15;
const CILL70cost = -10;
const CILL85cost = -8;
const CILL135cost = -5;
const CILL150cost = 0;
const CILL190cost = 10;
const FE20cost = 15;
const plRALul = 120; //RAL uplift price
const THlow20cost = 15;
const THlow30cost = 15;
const THstandardcost = 0;
const THintegratedcost = 20;
const LEVERcost = 0;
const LEVERralul = 10;
const SBOLTcost = 0;
const SBOLTralul = 10;
const DHANDLEcost = 0;
const DHANDLEralul = 10;
const HINGEcost = 0;
const HINGEralul = 10;
const GLASScostunglazed = -44;
const GLASScostclear1p4 = 0;
const GLASScostclear1p5 = -5;
const GLASScosttriple = 55;
const GLASScostobscure = 20;


 
var sprice = 0;
var BASEprice = 0;
var COLSprice = 0; //only costs for RAL uplift
var FE42price = 0;
var FE20price = 0;
var CILLprice = 0;
var THprice = 0;
var TVPrice = 0;
var LEVERprice = 0;
var SBOLTprice = 0;
var DHANDLEprice = 0;
var HINGEprice = 0;
var GLASSprice = 0;
BASEcoster();
//function matrixPricer() {
//    BASEcoster();
//}
function BASEcoster() {
    BASEprice = plp * bfstyle;
    getPricing();
}
function COLScoster() {
    COLSprice = plRALul * bfstyle;
    getPricing();
}
function TVcoster() {
    TVPrice = TVs * TVcost;
    getPricing();
}
function FE42coster() {
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
        case "Head-Left":
            FE42price = (setwidth/1000 * FE42cost) + (setheight/1000 * FE42cost);
            break;
        case "Head-Right":
            FE42price = (setwidth/1000 * FE42cost) + (setheight/1000 * FE42cost);
            break;
        case "Left":
            FE42price = setheight/1000 * FE42cost;
            break;
        case "Right":
            FE42price = setheight/1000 * FE42cost;
            break;
    }
    getPricing();

}
function FE20coster() {    
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
        case "Head-Left":
            FE20price = (setwidth/1000 * FE20cost) + (setheight/1000 * FE20cost);
            break;
        case "Head-Right":
            FE20price = (setwidth/1000 * FE20cost) + (setheight/1000 * FE20cost);
            break;
        case "Left":
            FE20price = setheight/1000 * FE20cost;
            break;
        case "Right":
            FE20price = setheight/1000 * FE20cost;
            break;
    }
    getPricing();
}
function CILLcoster() {
    console.log("cillcoster running & CILLval: ", CILLval);
    switch(CILLval) {
        case "None":
            CILLprice = setwidth/1000 * CILLNonecost;
            break;
        case "70mm (Flush)":
            CILLprice = setwidth/1000 * CILL70cost;
            break;
        case "85mm Stub":
            CILLprice = setwidth/1000 * CILL85cost;
            break;
        case "135mm":
            CILLprice = setwidth/1000 * CILL135cost;
            break;
        case "150mm":
            CILLprice = setwidth/1000 * CILL150cost;
            break;
        case "190mm":
            CILLprice = setwidth/1000 * CILL190cost;
            break;
    }
    getPricing();
}
function THcoster() {
    console.log("THcoster starting");
    switch(THval) {
        case "Low20":
            THprice = setwidth/1000 * THlow20cost;
            break;
        case "Low30":
            THprice = setwidth/1000 * THlow30cost;
            break;
        case "Standard":
            THprice = setwidth/1000 * THstandardcost;
            break;
        case "Integrated":
            THprice = setwidth/1000 * THintegratedcost;
            break;
    }
    getPricing();
}
function LEVERcoster() {
    console.log("LEVERcoster starting");
    LEVERcounter();
    console.log("levercount: ", levercount);
    LEVERprice = levercount * (LEVERcost + (Leverval === "Colmatch" ? LEVERralul : 0));
    getPricing();
    console.log("LEVERprice: ", LEVERprice);
    levercount = 0;
}
function SBOLTcoster() {
    console.log("SBOLTcoster starting");
    SBOLTcounter(); //validate here if sbolt already has a value...shouldnt really have to run counter again if config isn't changed
    console.log("sboltcount: ", sboltcount);
    SBOLTprice = sboltcount * (SBOLTcost + (Sboltval === "Colmatch" ? SBOLTralul : 0));
    getPricing();
    console.log("SBOLTprice: ", SBOLTprice);
    sboltcount = 0;
}
function DHANDLEcoster() {
    console.log("DHANDLEcoster starting");
    DHANDLEcounter();
    console.log("dhandlecount: ", dhandlecount);
    DHANDLEprice = dhandlecount * (DHANDLEcost + (Dhandleval === "Colmatch" ? DHANDLEralul : 0));
    getPricing();
    console.log("DHANDLEprice: ", DHANDLEprice);
    dhandlecount = 0;
}
function HINGEcoster() {
}
    // hinge counter too intricate for now and not
function GLASScoster() {
    console.log("GLASScoster starting");
    console.log("GLASSval: ", Glassval);
    GLASSsizer();
    switch(Glassval) {
        case "Unglazed":
            GLASSprice = glassarea * GLASScostunglazed;
            break;
        case "Clear 1.4":
            GLASSprice = glassarea * GLASScostclear1p4;
            break;
        case "Clear 1.5":
            GLASSprice = glassarea * GLASScostclear1p5;
            break;
        case "Triple":
            GLASSprice = glassarea * GLASScosttriple;
            break;
        case "Obscure":
            GLASSprice = glassarea * GLASScostobscure;
            break;
    }
    console.log("GLASSprice: ", GLASSprice);
    getPricing();
}



function getPricing() { //adds all prices together and formats that price
    console.log("getPricing running");
    totalpriceexvat = 0;   
    totalpriceexvat += ( BASEprice + COLSprice + FE42price + FE20price + CILLprice + THprice + TVPrice
        + LEVERprice + SBOLTprice + DHANDLEprice + HINGEprice + GLASSprice
    );

    console.log("totalpriceexvat: ", totalpriceexvat);

    console.log("___+___PRICES___+___")
    console.log("bfconfig:", bfconfig);
    console.log("Base price: ", BASEprice);
    console.log("COLSprice: ", COLSprice);
    console.log("FE42price: ", FE42price);
    console.log("FE20price: ", FE20price);
    console.log("CILLprice: ", CILLprice);
    console.log("THprice: ", THprice);
    console.log("TVPrice: ", TVPrice);
    console.log("LEVERprice: ", LEVERprice);
    console.log("SBOLTprice: ", SBOLTprice);
    console.log("DHANDLEprice: ", DHANDLEprice);
    console.log("HINGEprice: ", HINGEprice);
    console.log("GLASSprice: ", GLASSprice);
    console.log("totalpriceexvat: ", totalpriceexvat);

    formattedTotalPriceExVat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP'
    }).format(totalpriceexvat);
    formattedTotalPriceIncVat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP'
    }).format(totalpriceexvat * 1.2);
    formattedTotalPriceVatValue = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP'
    }).format(totalpriceexvat * 0.2);
    getPricing.formattedTotalPriceExVat = formattedTotalPriceExVat;
    getPricing.formattedTotalPriceIncVat = formattedTotalPriceIncVat;
    getPricing.formattedTotalPriceVatValue = formattedTotalPriceVatValue;

/////why is this having ot be get element?...LOL AI said cos using hyphens
    document.getElementById("price-panel-exvat").textContent = formattedTotalPriceExVat;
    document.getElementById("price-panel-exvat-value").textContent = formattedTotalPriceVatValue;
    document.getElementById("price-panel-incvat").textContent = formattedTotalPriceIncVat;
}
function formatGBP(number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency', 
        currency: 'GBP'
    }).format(number);
}

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
        w = Math.round(setwidth*conv);
        h = Math.round(setheight*conv);
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
    convertWidthToPixel(setwidth);
    convertHeightToPixel(setheight);
    draw("canvas-outview");
});
convertWidthToPixel(setwidth);
convertHeightToPixel(setheight);


//|   |   |   |   |   |   |   |   |   |   |   |   VARIABLE STORAGE AND ENCODE/DECODE
testbutton.addEventListener("click", (event) => {
    runConsoleLog();
})


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
      { attribute: "Style", description: bfconfig + " - " + bfstyle + " leaves", price: formatGBP(BASEprice) },

      { attribute: "Colour", isSubheading: true },
      { attribute: "Colour External", description: colexternal, price: "" },
      { attribute: "Colour Internal", description: colinternal, price: formatGBP(COLSprice) },

      { attribute: "Trickle Vents", isSubheading: true },
      { attribute: "No Of Vents", description: TVs, price: formatGBP(THprice) },
      { attribute: "Vent Location", description: TVloc, price: "" },

      { attribute: "Frame Add-Ons", isSubheading: true },
      { attribute: "42mm Add-Ons", description: FE42val, price: formatGBP(FE42price) },
      { attribute: "20mm Add-Ons", description: FE20val, price: formatGBP(FE20price) },      

      { attribute: "Threshold & Cill", isSubheading: true },
      { attribute: "Cill Depth", description: CILLval, price: formatGBP(CILLprice) },      
      { attribute: "Threshold", description: THval, price: formatGBP(THprice) },      

      { attribute: "Hardware", isSubheading: true },
      { attribute: "Lever Handle", description: Leverval, price: formatGBP(LEVERprice) },      
      { attribute: "S-Bolt", description: Sboltval, price: formatGBP(SBOLTprice) },      
      { attribute: "D-Handle", description: Dhandleval, price: formatGBP(DHANDLEprice) },      
      { attribute: "Hinges", description: Hingeval, price: formatGBP(HINGEprice) },      

      { attribute: "Glazing", isSubheading: true },
      { attribute: "Glass Option", description: Glassval, price: formatGBP(GLASSprice) },

      { attribute: "Total Price", isSubheading: true },
      { attribute: "", description: "Ex. VAT", price: formattedTotalPriceExVat },
      { attribute: "", description: "VAT Value", price: formattedTotalPriceVatValue },
      { attribute: "", description: "Inc. VAT", price: formattedTotalPriceIncVat },
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




function runConsoleLog () {
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

function runSample () {
    ;
}
