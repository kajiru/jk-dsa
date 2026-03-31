
class MaxHeap {
    constructor(comparator = (a, b) => b - a) {
        this.heap = [];
        this.comparator = comparator; // negative = a is larger, positive = b is larger
    }

    heapify(arr) {
        this.heap = [...arr];
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return max;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    heapifyUp(index) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (parentIndex >= 0 && this.comparator(this.heap[parentIndex], this.heap[index]) > 0) {
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            this.heapifyUp(parentIndex);
        }
    }

    heapifyDown(index) {
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;
        let largest = index;

        if (leftChild < this.heap.length && this.comparator(this.heap[leftChild], this.heap[largest]) < 0) {
            largest = leftChild;
        }
        if (rightChild < this.heap.length && this.comparator(this.heap[rightChild], this.heap[largest]) < 0) {
            largest = rightChild;
        }

        if (largest !== index) {
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            this.heapifyDown(largest);
        }
    }
}

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const dist = ([x,y]) => x*x + y*y;

        const comparator = (a, b) => {
            return dist(b) - dist(a);
        }

        const maxHeap = new MaxHeap(comparator);

        for(let i = 0; i < k; i++){
            maxHeap.push(points[i]);
        }

        for(let i = k; i < points.length; i++){
            const cur = points[i];

            if(dist(cur) < dist(maxHeap.peek())){
                maxHeap.pop();
                maxHeap.push(cur);
            }
        }

        const res = [];
        while(maxHeap.peek()){
            res.push(maxHeap.pop());
        }
        return res;

    }
}
