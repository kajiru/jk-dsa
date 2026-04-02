class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.head = null;
    this.tail = null;
    this.store = new Map();
  }

  removeFirst() {
    if (!this.head) return;

    const oldHead = this.head;
    this.head = oldHead.next;

    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }

    oldHead.next = null;
    oldHead.prev = null;
    this.store.delete(oldHead.key);
    this.size--;
  }

  appendLast(node) {
    node.prev = this.tail;
    node.next = null;

    if (this.tail) {
      this.tail.next = node;
    } else {
      this.head = node;
    }

    this.tail = node;
  }

  removeNode(node) {
    const prev = node.prev;
    const next = node.next;

    if (prev) {
      prev.next = next;
    } else {
      this.head = next;
    }

    if (next) {
      next.prev = prev;
    } else {
      this.tail = prev;
    }

    node.prev = null;
    node.next = null;
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    const node = this.store.get(key);
    if (!node) return -1;

    if (node !== this.tail) {
      this.removeNode(node);
      this.appendLast(node);
    }

    return node.value;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    const existingNode = this.store.get(key);

    if (existingNode) {
      existingNode.value = value;

      if (existingNode !== this.tail) {
        this.removeNode(existingNode);
        this.appendLast(existingNode);
      }
      return;
    }

    const newNode = new ListNode(key, value);
    this.appendLast(newNode);
    this.store.set(key, newNode);
    this.size++;

    if (this.size > this.capacity) {
      this.removeFirst();
    }
  }

  toString() {
    let cur = this.head;
    const items = [];

    while (cur) {
      items.push(`(${cur.key}, ${cur.value})`);
      cur = cur.next;
    }

    return items.join(" -> ");
  }
}