class MaxHeap {
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
            if (this.heap[p] < this.heap[i]) {
                [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
                i = p;
            } else break;
        }
    }

    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return root;
    }

    _heapifyDown() {
        let i = 0;
        const n = this.heap.length;

        while (this._left(i) < n) {
            let largest = i;
            let left = this._left(i), right = this._right(i);

            if (this.heap[left] > this.heap[largest]) largest = left;
            if (right < n && this.heap[right] > this.heap[largest]) largest = right;

            if (largest !== i) {
                [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
                i = largest;
            } else break;
        }
    }

    peek() {
        return this.heap[0] ?? null;
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.size() === 0;
    }
}

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        this.heap = new MaxHeap();
        // add all stones to max heap
        for(const stone of stones) {
            this.heap.insert(stone);
        }
        console.log(this.heap);

        // while there is more than one stone, simulate
        while(this.heap.size() > 1) {
            const max = this.heap.peek();
            this.heap.extractMax();
            const secondMax = this.heap.peek();
            this.heap.extractMax();

            if(secondMax < max) {
                this.heap.insert(max - secondMax);
            }
        }

        // return last stone / none 
        return this.heap.peek() || 0;
    }
}
