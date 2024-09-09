// 탭 - 오버뷰
const overviewTabs = document.querySelectorAll(".overview-tabs");
const pdTab = document.getElementById("production");
const calTab = document.getElementById("calendar");

// 탭 - 월
const monthTabs = document.querySelector(".month-tabs");
const monthTab = document.querySelectorAll(".month-tabs [role='tab']");

// 패널
const panelContainer = document.querySelector(".tabContents");
const panelBoxes = document.querySelectorAll(".panelBox");
const pdPanel = document.querySelectorAll(".pdContent");
const calPanel = document.querySelectorAll(".calContent");

const ACTIVE_CLASSNAME = "active";

// 초기설정
function initSet(){
    const firstTab = monthTab[7]; // 8월 탭을 첫 번째로 설정
    const firstPanel = document.getElementById(firstTab.getAttribute("aria-controls")); // 해당 탭에 연결된 패널 선택

    // 모든 패널을 숨김 처리 (pd패널 제외)
    panelBoxes.forEach(panel => (panel.hidden = true));

    pdPanel.forEach(panel => (panel.hidden = true)); //빼기
    calPanel.forEach(panel => (panel.hidden = true));
    // 첫 번째 탭 활성화 및 해당 패널 보이기
    firstTab.setAttribute("aria-selected", "true");
    firstPanel.hidden = false;

    // 활성화 탭 색상 표시
    firstTab.classList.add(ACTIVE_CLASSNAME);

    // 프로덕션 버튼(pdTab) 커서포인터 없애기 
    pdTab.disabled = true;
}
// 초기설정 호출
initSet();

// 탭 전환 함수
function switchTab(newTab, isCalMode = false) {
    const activeTab = monthTabs.querySelector('[aria-selected="true"]'); //기존 활성화탭 지정
    const activePanelID = activeTab.getAttribute("aria-controls");
    const activePanel = document.getElementById(activePanelID);

    // 기존 활성화된 탭과 패널 비활성화
    activeTab.setAttribute("aria-selected", "false"); //기존 활성화탭을 비활성화
    activePanel.hidden = true; //기존 활성화패널 숨기기

    // 새로 선택된 탭과 해당 패널 활성화
    newTab.setAttribute("aria-selected", "true");
    const newPanelID = newTab.getAttribute("aria-controls"); 
    const newPanel = document.getElementById(newPanelID);
    newPanel.hidden = false;
    
    // 탭 색상 변경
    newTab.classList.add(ACTIVE_CLASSNAME);
    activeTab.classList.remove(ACTIVE_CLASSNAME);

    // 캘린더 모드인지 확인
    if (isCalMode) {
        pdPanel.forEach(panel => (panel.hidden = true)); // 모든 pdPanel 숨기기
        calPanel.forEach(panel => (panel.hidden = true)); // 모든 calPanel 숨기기

        // 해당 월에 맞는 calPanel만 보이게
        calPanel[newTab.getAttribute("id").split("-")[1] - 1].hidden = false;

    } else {
        pdPanel.forEach(panel => (panel.hidden = false)); // 모든 pdPanel 보이기
        calPanel.forEach(panel => (panel.hidden = true)); // 모든 calPanel 숨기기
    }
}

// 월 탭 : 버튼 클릭 이벤트
monthTab.forEach(tab => {
    tab.addEventListener("click", (e) => {
        const clickedTab = e.target.closest("button");
        if (clickedTab && clickedTab !== monthTabs.querySelector('[aria-selected="true"]')) {
            // 현재 캘린더 모드인지 확인
            const isCalMode = calTab.getAttribute("aria-selected") === "true";
            switchTab(clickedTab, isCalMode);
        }
    });
});

// 오버뷰 탭: 프로덕션/캘린더 전환 이벤트
pdTab.addEventListener("click", () => {
    pdTab.setAttribute("aria-selected", "true");
    calTab.setAttribute("aria-selected", "false");
    pdPanel.forEach(panel => (panel.hidden = false)); // 모든 pdPanel 보이기
    calPanel.forEach(panel => (panel.hidden = true)); // 모든 calPanel 숨기기

    calTab.disabled = false;
    pdTab.disabled = true;
});

calTab.addEventListener("click", () => {
    calTab.setAttribute("aria-selected", "true");
    pdTab.setAttribute("aria-selected", "false");
    pdPanel.forEach(panel => (panel.hidden = true)); // 모든 pdPanel 숨기기
    // 현재 선택된 월에 해당하는 calPanel만 보이게
    const activeMonthTab = monthTabs.querySelector('[aria-selected="true"]');
    const activeMonthIndex = activeMonthTab.getAttribute("id").split("-")[1] - 1;
    calPanel[activeMonthIndex].hidden = false; // 해당 월의 calPanel만 보이기
    pdPanel[activeMonthIndex].hidden = true; // 해당 월의 calPanel만 보이기
   
    pdTab.disabled = false;
    calTab.disabled = true;

});
