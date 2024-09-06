// 프로덕션/캘린더 탭 내비 (overviewNavi)

const productionPanel = document.querySelector("#wrap-tabContents-01");
const calendarPanel = document.querySelector("#wrap-tabContents-02");

const ovTabsContainer = document.querySelector(".overview-tabs");
const ovTabButtons = ovTabsContainer.querySelectorAll("[role='tab']");

const ACTIVE_CLASSNAME = "active";

// 초기 설정 - 첫 번째 탭과 패널을 활성화
function initOvTabs() {
    const ovFirstTab = ovTabButtons[0]; 
    const ovFirstPanel = document.getElementById(ovFirstTab.getAttribute("aria-controls"));

    ovFirstTab.setAttribute("aria-selected", "true");
    ovFirstPanel.hidden = false;
}
initOvTabs();

// 탭을 클릭했을 때 실행되는 함수
function ovSwitchTab(newTab){
    const ovActiveTab = ovTabsContainer.querySelector('[aria-selected="true"]');
    const ovActivePanelID = ovActiveTab.getAttribute("aria-controls");
    const ovActivePanel = document.getElementById(ovActivePanelID);

    // 기존 활성화된 탭과 패널 비활성화
    ovActiveTab.setAttribute("aria-selected", "false");
    ovActivePanel.hidden = true;

    // 새로 선택된 탭과 해당 패널 활성화
    newTab.setAttribute("aria-selected", "true");
    const ovNewPanelID = newTab.getAttribute("aria-controls"); 
    const ovNewPanel = document.getElementById(ovNewPanelID);
    ovNewPanel.hidden = false;
}

// 탭 버튼에 클릭 이벤트 추가
ovTabButtons.forEach(tab => {
    tab.addEventListener("click", (e) => {
        const clickedTab = e.target.closest("button");
        if (clickedTab && clickedTab !== ovTabsContainer.querySelector('[aria-selected="true"]')) {
            ovSwitchTab(clickedTab);
        }
    });
});