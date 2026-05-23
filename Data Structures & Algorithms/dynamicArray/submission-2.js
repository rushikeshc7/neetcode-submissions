class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        if (capacity <= 0)
            throw new Error("Capacity should be greater than 0");
        this.data = new Array(capacity);
        this.size = 0;
        this.capacity = capacity
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.data[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.data[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.size === this.capacity) {
            this.resize();
        }
        this.data[this.size] = n;
        this.size++;
    }

    /**
     * @returns {number}
     */
    popback() {
        if (this.size === 0) {
            throw new Error("Array is empty")
        }
        this.size--;
        const value = this.data[this.size];
        this.data[this.size] = null;
        return value;
    }

    /**
     * @returns {void}
     */
    resize() {
        const newCapacity = this.capacity * 2;
        const newData = new Array(newCapacity);
        for (let i = 0; i < this.size; i++) {
            newData[i] = this.data[i]
        }
        this.data = newData;
        this.capacity = newCapacity;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
