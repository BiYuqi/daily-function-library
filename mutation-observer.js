function MyMutationObserver () {
  const MutationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver

  const MutationConfig = {
    childList: true,
    attributes: true,
    subtree: true,
    attributeOldValue: true
  }

  const changedHandler = (element) => {
    console.log(element)
  }

  const observer = MutationObserver ? new MutationObserver(mutations => {
    //
    console.log(mutations)
    mutations.forEach(mutation => {
      // 处理 变化的 DOM
      changedHandler(mutation.target)
      // 处理 新增的 DOM
      if (mutation.addedNodes) {
        console.log('mutation.addedNodes', mutation.addedNodes)
        mutation.addedNodes.forEach(changedHandler)
      }
    })
  }) : null

  observer.observe(document.body, MutationConfig)
}
