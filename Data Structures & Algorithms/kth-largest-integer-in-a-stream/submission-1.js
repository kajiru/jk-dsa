class MinHeap {
    constructor() {
        this.heap = [];
    }

    _parent(i) { return Math.floor((i - 1) / 2); }
    _left(i) { return 2 * i + 1; }
    _right(i) { return 2 * i + 2; }

    insert(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    _heapifyUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            let p = this._parent(i);
            if (this.heap[p] > this.heap[i]) {
                [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
                i = p;
            } else break;
        }
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return root;
    }

    _heapifyDown() {
        let i = 0;
        while (this._left(i) < this.heap.length) {
            let smallest = i;
            const l = this._left(i), r = this._right(i);
            if (this.heap[l] < this.heap[smallest]) smallest = l;
            if (r < this.heap.length && this.heap[r] < this.heap[smallest]) smallest = r;

            if (smallest !== i) {
                [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
                i = smallest;
            } else break;
        }
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.heap = new MinHeap();
        this.k = k;

        for (const num of nums) {
            this.heap.insert(num);
            if(this.heap.size() > this.k) {
                this.heap.extractMin();   
            }
        }
    }


    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.insert(val);
        if(this.heap.size() > this.k) {
            this.heap.extractMin();
        }
        return this.heap.peek();
    }
}
