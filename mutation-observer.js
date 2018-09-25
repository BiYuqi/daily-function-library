function MutationObserver () {
  const MutationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver

  const MutationConfig = {
    childList: true,
    attributes: true,
    subtree: true
  }

  const changedHandler = (element) => {
    console.log(element)
  }

  const observer = MutationObserver ? new MutationObserver(mutations => {
    //
    mutations.forEach(item => {
      // 处理 变化的 DOM
      changedHandler(mutation.target)
      // 处理 新增的 DOM
      if (mutation.addedNodes) {
        mutation.addedNodes.forEach(changedHandler)
      }
    })
  }) : null

  return observer ? function () {
    observer.observe(document.body, MutationConfig)
  } : function () {
    console.log('not support')
  }
}
