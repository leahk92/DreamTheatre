const tabsContainer = document.querySelector("[role=tablist]");
const tabButtons = tabsContainer.querySelector("[role=tab]");
const tabPanels = document.querySelectorAll("[role=tabpanel]");


function switchTab(newTab) {
    const oldTab = tabsContainer.querySelector('[aria-selected="true"]');
    const activePanelID = newTab.getAttribute("aria-controls");
    const activePanel = tabsContainer.nextElementSibling.querySelector("#" + CSS.escape(activePanelID));
}

function clickTab(event) {
    const clickedTab = event.target.closest("button");
    const currentTab = tabsContainer.querySelector('[aria-selected="true"]');

    if(!clickedTab || clickedTab === currentTab) return;
    switchTab(clickedTab);
}
tabsContainer.addEventListener("click", clickTab);
// tabsContainer.addEventListener("click", (e) =>{
//     const clickedTab = e.target.closest("button");
//     const currentTab = tabsContainer.querySelector('[aria-selected="true"]');

//     if(!clickedTab || clickedTab === currentTab) return;
//     switchTab(clickedTab);
// });