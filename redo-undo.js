/**
 * 命令式
 */
class CommondManager {
  constructor () {
    this.undoStack = []
    this.redoStack = []
  }
  execute (payload) {
    this.undoStack.push(payload)
    payload.do()
    this.redoStack = []
  }

  undo () {
    const record = this.undoStack.pop()
    record.undo()
    this.redoStack.push(record)
  }

  redo () {
    const record = this.redoStack.pop()
    record.do()
    this.undoStack.push(record)
  }
}

const ud = new CommondManager()
const list = [1, 2, 3]
const act = (num) => {
  return {
    do: () => {
      list.push(num)
    },
    undo: () => {
      const key = list.indexOf(num)
      if (key) {
        list.splice(key, 1)
      }
    }
  }
}
ud.execute(act(4))
ud.execute(act(5))
ud.execute(act(6))
ud.execute(act(7))
ud.undo()
ud.undo()
console.log(list)

class History {
  constructor () {
    this.snapshots = []
    this.cursor = -1
  }

  get canUndo () {
    return this.cursor > 0
  }

  get canRedo () {
    return this.snapshots.length > this.cursor + 1
  }

  get getCursor () {
    return this.cursor
  }

  record (snap) {
    while (this.cursor < this.snapshots.length - 1) {
      this.snapshots.pop()
    }
    this.snapshots.push(snap)
    this.cursor = this.snapshots.length - 1
  }

  undo () {
    if (this.canUndo) {
      this.cursor -= 1
      return this.snapshots[this.cursor]
    }
    return null
  }

  redo () {
    if (this.canRedo) {
      this.cursor += 1
      return this.snapshots[this.cursor]
    }
    return null
  }

  travel (cursor) {
    if (this.snapshots.length > cursor) {
      this.cursor = cursor
      return this.snapshots[this.cursor]
    }
    return null
  }

  status () {
    return this.snapshots
  }
}

const snap = new History()
const copy = (name, age) => {
  return {
    name,
    age
  }
}
snap.record(copy('毕宇旗', 26))
snap.record(copy('毕宇旗', 27))
snap.record(copy('毕宇旗', 28))
snap.record(copy('毕宇旗', 29))
snap.record(copy('毕宇旗', 30))
snap.record(copy('毕宇旗', 31))
snap.redo()
console.log(snap.getCursor)
console.log(snap.canRedo)
// snap.redo()
// console.log(snap.canRedo)
