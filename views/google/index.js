document.addEventListener("DOMContentLoaded", () => {
  // 입력창과 추천 검색어 목록에 해당하는 요소를 가져와서 변수에 저장

  const updateAutocompleteResults = async keyword => {
    // API를 통해 추천 검색어를 받아서 리스트에 표시
  };

  searchField.addEventListener("keyup", e => {
    updateAutocompleteResults(e.target.value);
  });

  resultsContainer.addEventListener("click", e => {
    // 클릭한 추천 검색어를 검색창에 입력하고, 추천 검색어 목록 갱신
  });
});
