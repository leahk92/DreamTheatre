// 캘린더 탭 & 패널(tab-panels-2)

const tabsContainer = document.querySelector(".month-tabs");
const tabButtons = tabsContainer.querySelectorAll("[role='tab']");
const tabPanels = document.querySelectorAll("[role='tabpanel']");

// const tabNext = document.getElementById("tab-next");
// const tabPrev = document.getElementById("tab-prev");
const tabNext = tabsContainer.querySelector("#tab-next");
const tabPrev = tabsContainer.querySelector("#tab-prev");

const ACTIVE_CLASSNAME = "active";

// 초기 설정 - 첫 번째 탭과 패널을 활성화
function initTabs() {
    // 첫 번째 탭
    const firstTab = tabButtons[7]; 
    //첫 번째 탭에 해당하는 패널
    const firstPanel = document.getElementById(firstTab.getAttribute("aria-controls")); 

    tabPanels.forEach(panel => (panel.hidden = true)); // 모든 패널 숨김
    
    firstTab.setAttribute("aria-selected", "true");
    firstPanel.hidden = false;
    firstTab.classList.add(ACTIVE_CLASSNAME);

}
initTabs();

// 月 탭을 클릭했을 때 실행되는 함수
    // 현재 활성화된 탭과 패널 찾기
function switchTab(newTab) {
    const activeTab = tabsContainer.querySelector('[aria-selected="true"]');
    const activePanelID = activeTab.getAttribute("aria-controls");
    const activePanel = document.getElementById(activePanelID);

    // 기존 활성화된 탭과 패널 비활성화
    activeTab.setAttribute("aria-selected", "false");
    activePanel.hidden = true;

    // 새로 선택된 탭과 해당 패널 활성화
    newTab.setAttribute("aria-selected", "true");
    const newPanelID = newTab.getAttribute("aria-controls"); 
    const newPanel = document.getElementById(newPanelID); //선택한 탭에 해당하는 패널
    newPanel.hidden = false;

    // newTab과 기존 탭 색상 변경
    newTab.classList.add(ACTIVE_CLASSNAME);
    activeTab.classList.remove(ACTIVE_CLASSNAME);
}
// 月 탭 버튼에 클릭 이벤트 추가
tabButtons.forEach(tab => {
    tab.addEventListener("click", (e) => {
        const clickedTab = e.target.closest("button");

        // 클릭된 탭이 현재 활성화된 탭이 아니면 탭을 전환
        if (clickedTab && clickedTab !== tabsContainer.querySelector('[aria-selected="true"]')) {
            switchTab(clickedTab);
        }
    });
});

// // 화살표 버튼을 클릭했을 때 실행되는 함수
let currentIndex = 0;

function switchArrTab(newIndex){
    // 현재 활성화된 탭과 패널 비활성화
    tabButtons[currentIndex].setAttribute("aria-selected", "false");
    tabPanels[currentIndex].hidden = true;

    // 새로운 탭과 패널 활성화
    currentIndex = newIndex;
    tabButtons[currentIndex].setAttribute("aria-selected", "true");
    tabPanels[currentIndex].hidden = false;

    // newTab과 기존 탭 색상 변경
    currentIndex.classList.add(ACTIVE_CLASSNAME);
    activeTab.classList.remove(ACTIVE_CLASSNAME);

}

function nextTab(){
    let newIndex = (currentIndex + 1) % tabButtons.length; // 다음 인덱스
    switchArrTab(newIndex);
}
function prevTab(){
    let newIndex = (currentIndex - 1 + tabButtons.length) % tabButtons.length; // 이전 인덱스
    switchArrTab(newIndex);
}

// 화살표 버튼에 클릭 이벤트 추가
tabNext.addEventListener("click", nextTab);
tabPrev.addEventListener("click", prevTab);
