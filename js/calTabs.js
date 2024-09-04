const tabsContainer = document.querySelector(".month-tabs");
const tabButtons = tabsContainer.querySelectorAll("[role='tab']");
const tabPanels = document.querySelectorAll("[role='tabpanel']");
// 초기 설정 - 첫 번째 탭과 패널을 활성화
function initTabs() {


    // GPT
    tabPanels.forEach(panel => (panel.hidden = true)); // 모든 패널 숨김
    const firstTab = tabButtons[7]; // 첫 번째 탭
    const firstPanel = document.getElementById(firstTab.getAttribute("aria-controls"));
    
    firstTab.setAttribute("aria-selected", "true");
    firstPanel.hidden = false;
}

// 탭을 클릭했을 때 실행되는 함수
function switchTab(newTab) {
    // 현재 활성화된 탭과 패널 찾기
    const activeTab = tabsContainer.querySelector('[aria-selected="true"]');
    const activePanelID = activeTab.getAttribute("aria-controls");
    const activePanel = document.getElementById(activePanelID);

    // 기존 활성화된 탭과 패널 비활성화
    activeTab.setAttribute("aria-selected", "false");
    activePanel.hidden = true;

    // 새로 선택된 탭과 해당 패널 활성화
    newTab.setAttribute("aria-selected", "true");
    const newPanelID = newTab.getAttribute("aria-controls");
    const newPanel = document.getElementById(newPanelID);
    newPanel.hidden = false;
}

// 탭 버튼에 클릭 이벤트 추가
tabButtons.forEach(tab => {
    tab.addEventListener("click", (e) => {
        const clickedTab = e.target.closest("button");

        // 클릭된 탭이 현재 활성화된 탭이 아니면 탭을 전환
        if (clickedTab && clickedTab !== tabsContainer.querySelector('[aria-selected="true"]')) {
            switchTab(clickedTab);
        }
    });
});
